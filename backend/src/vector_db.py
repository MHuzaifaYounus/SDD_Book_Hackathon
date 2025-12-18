import qdrant_client
import os
from dotenv import load_dotenv

load_dotenv()

def get_qdrant_client():
    return qdrant_client.QdrantClient(
        url=os.getenv("QDRANT_URL"),
        api_key=os.getenv("QDRANT_API_KEY"),
    )

def init_collection():
    client = get_qdrant_client()
    try:
        client.recreate_collection(
            collection_name="robotics_book",
            vectors_config=qdrant_client.http.models.VectorParams(size=768, distance=qdrant_client.http.models.Distance.COSINE),
        )
        print("Collection 'robotics_book' created successfully.")
    except Exception as e:
        if "already exists" in str(e):
            print("Collection 'robotics_book' already exists.")
        else:
            raise e

if __name__ == '__main__':
    init_collection()
