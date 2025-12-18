from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
# We will rename this import to be clearer
from .rag import generate_answer
from .ingest import ingest_docs
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    session_id: str
    query: str
    context: str | None = None

@app.post("/chat")
async def chat(request: ChatRequest):
    # DEBUG: Check the CORRECT key name
    is_key_present = bool(os.getenv('GEMINI_API_KEY'))
    print(f"DEBUG: GEMINI_API_KEY loaded? {is_key_present}")
    
    if not is_key_present:
        raise HTTPException(status_code=500, detail="API Key not found in environment variables.")

    try:
        # We call a simple function, not a 'chain'
        response = generate_answer(query=request.query, context=request.context)
        return {"response": response}
    except Exception as e:
        # Print the actual error to the terminal so you can see it
        print(f"ERROR TRACEBACK: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/ingest")
async def ingest():
    try:
        ingest_docs()
        return {"message": "Ingestion process started."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))