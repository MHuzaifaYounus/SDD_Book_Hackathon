import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

def get_db_connection():
    conn = psycopg2.connect(os.getenv("NEON_DATABASE_URL"))
    return conn

def init_db():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS chat_history (
            id SERIAL PRIMARY KEY,
            session_id TEXT NOT NULL,
            query TEXT NOT NULL,
            response TEXT NOT NULL,
            timestamp TIMESTAMPTZ DEFAULT NOW()
        );
    """)
    conn.commit()
    cur.close()
    conn.close()
    print("Chat history table initialized.")

def add_chat_history(session_id, query, response):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO chat_history (session_id, query, response) VALUES (%s, %s, %s)",
        (session_id, query, response),
    )
    conn.commit()
    cur.close()
    conn.close()

if __name__ == '__main__':
    init_db()
