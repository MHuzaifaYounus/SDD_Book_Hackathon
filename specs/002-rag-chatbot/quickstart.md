# Quickstart: AI-Powered Teaching Assistant

This guide provides instructions on how to set up and run the backend service for the AI-Powered Teaching Assistant.

## Prerequisites
- Python 3.11
- An active internet connection

## Setup
1.  **Create a `backend` directory:**
    ```bash
    mkdir backend
    cd backend
    ```

2.  **Create a virtual environment:**
    ```bash
    python3 -m venv .venv
    source .venv/bin/activate
    ```

3.  **Create a `.env` file with the following content:**
    ```
    OPENAI_API_KEY=your_gemini_api_key
    QDRANT_API_KEY=your_qdrant_api_key
    QDRANT_URL=your_qdrant_url
    NEON_DATABASE_URL=your_neon_database_url
    ```

4.  **Create a `requirements.txt` file with the following content:**
    ```
    fastapi
    uvicorn
    openai
    qdrant-client
    python-dotenv
    psycopg2-binary
    ```

5.  **Install the dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

## Running the service
1.  **Run the ingestion script:**
    ```bash
    python src/ingest.py
    ```

2.  **Run the FastAPI server:**
    ```bash
    uvicorn src.main:app --reload
    ```

The service will be available at `http://localhost:8000`.