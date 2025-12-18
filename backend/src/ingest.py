import os
import glob
from typing import List
from dotenv import load_dotenv, find_dotenv
from openai import OpenAI
from qdrant_client import QdrantClient
from qdrant_client.models import PointStruct, VectorParams, Distance

# 1. Force load the .env file before anything else
# find_dotenv() searches up the directory tree to find the .env file
load_dotenv(find_dotenv())

# 2. Debugging: Check if key exists
api_key = os.getenv("GEMINI_API_KEY")
qdrant_url = os.getenv("QDRANT_URL")

if not api_key:
    # This print statement will show up in your terminal to help you debug
    print("❌ CRITICAL ERROR: GEMINI_API_KEY not found.")
    print(f"Current Working Directory: {os.getcwd()}")
    print("Did you rename .env.example to .env in the backend folder?")
    # We provide a dummy key just so the import doesn't crash the server immediately
    # The actual functionality will fail later if called, but the server will start.
    api_key = "MISSING_KEY"

if not qdrant_url:
    print("⚠️ WARNING: QDRANT_URL not found.")

# 3. Setup OpenAI Client
client = OpenAI(
    api_key=api_key,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

# 4. Setup Qdrant
qdrant = QdrantClient(
    url=qdrant_url,
    api_key=os.getenv("QDRANT_API_KEY")
)

COLLECTION_NAME = "robotics_book"

def chunk_text(text: str, chunk_size: int = 1000, overlap: int = 100) -> List[str]:
    """Splits text into chunks of roughly `chunk_size` characters."""
    chunks = []
    start = 0
    while start < len(text):
        end = start + chunk_size
        chunks.append(text[start:end])
        start = end - overlap
    return chunks

def ingest_docs():
    print("🚀 Starting Ingestion...")
    
    # Check key again before running logic
    if api_key == "MISSING_KEY":
        print("❌ Cannot ingest: GEMINI_API_KEY is missing.")
        return

    # Ensure Collection Exists
    try:
        if not qdrant.collection_exists(COLLECTION_NAME):
            qdrant.create_collection(
                collection_name=COLLECTION_NAME,
                vectors_config=VectorParams(size=768, distance=Distance.COSINE)
            )
    except Exception as e:
        print(f"⚠️ Qdrant Connection Error: {e}")
        return

    # Read Files
    base_path = os.path.join(os.path.dirname(__file__), "../../handbook/docs")
    files = glob.glob(os.path.join(base_path, "**/*.md"), recursive=True) + \
            glob.glob(os.path.join(base_path, "**/*.mdx"), recursive=True)
    
    if not files:
        print(f"⚠️ No files found at: {docs_path}")
        # Try a different path if running from root
        files = glob.glob("docs/**/*.md", recursive=True)

    points = []
    idx = 0

    for file_path in files:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
            
        chunks = chunk_text(content)
        print(f"📄 Processing {os.path.basename(file_path)}: {len(chunks)} chunks")

        for chunk in chunks:
            try:
                response = client.embeddings.create(
                    input=chunk,
                    model="text-embedding-004"
                )
                embedding = response.data[0].embedding

                points.append(PointStruct(
                    id=idx,
                    vector=embedding,
                    payload={"text": chunk, "source": file_path}
                ))
                idx += 1
            except Exception as e:
                print(f"❌ Error embedding chunk: {e}")

    # Upload to Qdrant
    if points:
        qdrant.upsert(collection_name=COLLECTION_NAME, points=points)
        print(f"✅ Successfully uploaded {len(points)} chunks to Qdrant!")
    else:
        print("⚠️ No chunks found to upload.")

if __name__ == "__main__":
    ingest_docs()