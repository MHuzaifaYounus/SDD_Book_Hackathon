import os
from dotenv import load_dotenv
from openai import OpenAI
from qdrant_client import QdrantClient

load_dotenv()

# --- CONFIGURATION ---
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")
COLLECTION_NAME = "robotics_book"

# Validate keys exist to prevent silent failures
if not GEMINI_API_KEY:
    raise ValueError("CRITICAL: GEMINI_API_KEY is missing from .env")

# --- CLIENT SETUP ---
# Initialize clients once (globally) to save time on every request
client = OpenAI(
    api_key=GEMINI_API_KEY,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

qdrant = QdrantClient(
    url=QDRANT_URL,
    api_key=QDRANT_API_KEY
)

def generate_answer(query: str, context: str = "") -> str:
    """
    Retrieves context from Qdrant and asks Gemini to answer.
    """
    print(f"⚡ Processing Query: {query}")
    
    retrieved_text = ""

    # 1. If user highlighted text, prioritize it
    if context:
        print("🔍 Found user-highlighted context.")
        retrieved_text = f"USER HIGHLIGHTED SECTION:\n{context}\n\n"
    
    # 2. Search Qdrant (RAG)
    try:
        # Embed the query
        emb_response = client.embeddings.create(
            input=query,
            model="text-embedding-004"
        )
        query_vector = emb_response.data[0].embedding

    
        # Search Database (Fallback Method)
        search_results = qdrant.query_points(
            collection_name=COLLECTION_NAME,
            query=query_vector,
            limit=5
        ).points  # Note: query_points returns a wrapper, we need .points
        
        # Combine results
        # CRITICAL FIX: Use .get("text") because your ingest script used "text", not "page_content"
        found_docs = [res.payload.get("text", "") for res in search_results]
        retrieved_text += "BOOK CONTEXT:\n" + "\n---\n".join(found_docs)
        
    except Exception as e:
        print(f"⚠️ Warning: Qdrant retrieval failed: {e}")
        # We continue even if search fails, letting the AI answer with general knowledge (optional)
        retrieved_text += "\n(Database search failed, answering based on highlighted context only.)"

    # 3. Construct the Prompt
  # 3. Construct the Prompt
    system_instruction = (
        "You are an expert AI Teaching Assistant for a Robotics Handbook. "
        "Your goal is to help students understand the book content. "
        
        "Follow these rules strictly:\n"
        "1. **Greetings & Politeness:** If the user says 'hi', 'hello', 'thanks', or 'goodbye', "
        "reply politely and briefly (e.g., 'You're welcome! Let me know if you have questions about the book.').\n"
        
        "2. **Technical Questions:** For all other questions, answer strictly based on the provided Context below.\n"
        
        "3. **Unknown Info:** If the answer to a technical question is NOT in the context, "
        "say 'I cannot find that specific information in the handbook.'"
    )

    user_message = f"Context:\n{retrieved_text}\n\nQuestion: {query}"

    # 4. Generate Answer
    print("🤖 Sending to Gemini...")
    completion = client.chat.completions.create(
        model="gemini-2.5-flash", 
        messages=[
            {"role": "system", "content": system_instruction},
            {"role": "user", "content": user_message}
        ],
        temperature=0.3
    )
    
    response_text = completion.choices[0].message.content
    return response_text