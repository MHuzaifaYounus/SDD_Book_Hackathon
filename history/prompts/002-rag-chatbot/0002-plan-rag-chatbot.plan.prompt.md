---
id: 0002
title: Plan RAG Chatbot
stage: plan
date: 2025-12-17
surface: agent
model: gemini-2.5-flash
feature: 002-rag-chatbot
branch: 002-rag-chatbot
user: huzaifa
command: /sp.plan
labels: []
links:
  spec: specs/002-rag-chatbot/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/002-rag-chatbot/plan.md
  - specs/002-rag-chatbot/research.md
  - specs/002-rag-chatbot/data-model.md
  - specs/002-rag-chatbot/contracts/openapi.yaml
  - specs/002-rag-chatbot/quickstart.md
tests:
  - none
---

## Prompt

/sp.plan Based on the updated Spec (Section 7), create the **Implementation Plan** for the RAG Chatbot.

**Phases:**
1.  **Backend Scaffolding:** 
    - Create `backend/` directory with `requirements.txt` (`fastapi`, `uvicorn`, `google-generativeai`, `qdrant-client`, `psycopg2`).
    - Define `.env` structure for Gemini/Qdrant/Neon keys.
2.  **Ingestion Engine (`backend/ingest.py`):**
    - Logic to walk `../docs`, parse Markdown, and chunk text (RecursiveCharacterSplitter).
    - **Critical:** Configure Qdrant collection with **768 dimensions** (matching `text-embedding-004`).
3.  **API Server (`backend/main.py`):**
    - Implement `/chat` endpoint using `gemini-2.5-flash`.
    - Logic: Embed Query -> Search Qdrant -> Prompt LLM -> Log to Neon DB -> Return.
4.  **Frontend Integration:**
    - Create `src/components/ChatWidget.tsx` (Floating UI).
    - "Swizzle" Docusaurus `Layout` to inject the widget globally.
    - Implement "Text Selection" listener to pass highlighted context to the API.

**Validation:**
- Backend must start via `uvicorn`.
- Ingestion script must successfully populate Qdrant Cloud.
- Frontend must proxy requests from `localhost:3000` to `localhost:8000`.

## Response snapshot

I have created the implementation plan for the RAG Chatbot.
- **Branch**: `002-rag-chatbot`
- **Plan File**: `specs/002-rag-chatbot/plan.md`
- **Research**: `specs/002-rag-chatbot/research.md`
- **Data Model**: `specs/002-rag-chatbot/data-model.md`
- **API Contract**: `specs/002-rag-chatbot/contracts/openapi.yaml`
- **Quickstart**: `specs/002-rag-chatbot/quickstart.md`

The plan is ready for the next phase. You can now run `/sp.tasks` to create the tasks for this feature.

## Outcome

- ✅ Impact: Created a new implementation plan for the RAG chatbot.
- 🧪 Tests: No tests were run.
- 📁 Files: 
  - `specs/002-rag-chatbot/plan.md`
  - `specs/002-rag-chatbot/research.md`
  - `specs/002-rag-chatbot/data-model.md`
  - `specs/002-rag-chatbot/contracts/openapi.yaml`
  - `specs/002-rag-chatbot/quickstart.md`
- 🔁 Next prompts: `/sp.tasks`
- 🧠 Reflection: The process of creating a plan from a detailed user prompt was successful. The key was to break down the user's request into the different planning artifacts.
