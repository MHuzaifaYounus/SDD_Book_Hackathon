---
id: 0004
title: Update Plan to Remove LangChain
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

/sp.plan Update the technical plan to REMOVE all LangChain dependencies. 

Technical Implementation Changes:
- Use the **OpenAI Python SDK** (`openai`) to interact with Gemini via the OpenAI-compatible endpoint (`base_url="https://generativelanguage.googleapis.com/v1beta/openai/"`).
- Model: Use `gemini-2.5-flash` for chat and `text-embedding-004` for embeddings.
- RAG Logic: Replace LangChain's document loaders/splitters with a custom Python function for Markdown chunking (to keep the backend lightweight).
- Update `backend/requirements.txt` to include only: `fastapi`, `uvicorn`, `openai`, `qdrant-client`, `python-dotenv`, `psycopg2-binary`.

Update all Phase 2 and Phase 3 tasks to reflect this SDK switch.

## Response snapshot

I have updated the implementation plan for the RAG Chatbot.
- **Branch**: `002-rag-chatbot`
- **Plan File**: `specs/002-rag-chatbot/plan.md`
- **Research**: `specs/002-rag-chatbot/research.md`
- **Data Model**: `specs/002-rag-chatbot/data-model.md`
- **API Contract**: `specs/002-rag-chatbot/contracts/openapi.yaml`
- **Quickstart**: `specs/002-rag-chatbot/quickstart.md`

The plan is ready for the next phase. You can now run `/sp.tasks` to create the tasks for this feature.

## Outcome

- ✅ Impact: Updated the implementation plan for the RAG chatbot to remove LangChain dependencies.
- 🧪 Tests: No tests were run.
- 📁 Files: 
  - `specs/002-rag-chatbot/plan.md`
  - `specs/002-rag-chatbot/research.md`
  - `specs/002-rag-chatbot/data-model.md`
  - `specs/002-rag-chatbot/contracts/openapi.yaml`
  - `specs/002-rag-chatbot/quickstart.md`
- 🔁 Next prompts: `/sp.tasks`
- 🧠 Reflection: The process of updating the plan was successful. The key was to identify all the files that needed to be updated and to make the changes consistently.
