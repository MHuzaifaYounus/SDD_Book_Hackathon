# Implementation Plan: AI-Powered Teaching Assistant

**Branch**: `002-rag-chatbot` | **Date**: 2025-12-18 | **Spec**: specs/002-rag-chatbot/spec.md
**Input**: Feature specification from `/specs/002-rag-chatbot/spec.md`

## Summary

The primary requirement is to embed a "Context-Aware Teaching Assistant" that answers questions based *strictly* on the book content. This will be achieved through a Retrieval-Augmented Generation (RAG) pipeline utilizing Google's Gemini API for chat and embeddings, Qdrant Cloud for vector storage, and Neon Serverless Postgres for chat history. The feature will include a contextual "Highlight-to-Chat" UX in the Docusaurus frontend.

## Technical Context

**Language/Version**: Python 3.11 (Backend), TypeScript (Frontend)
**Primary Dependencies**: FastAPI, Uvicorn, OpenAI SDK (for Gemini), Qdrant Client, Psycopg2 (Backend); React, Docusaurus (Frontend)
**Storage**: Qdrant Cloud (Vector DB - Collection: `robotics_book`), Neon Serverless Postgres (History DB - Schema: `session_id`, `query`, `response`)
**Testing**: pytest (Backend), Jest/React Testing Library (Frontend - inferred standard Docusaurus/React testing practices)
**Target Platform**: Linux server (Backend), Web browser (Frontend)
**Project Type**: Web application (Frontend + Backend)
**Performance Goals**:
- SC-002: Relevant answer within 5 seconds for 95% of queries.
- SC-003: Knowledge base update within 10 minutes for a handbook with 100 pages.
**Constraints**:
- Vector Dimension: 768 (Standard for Google embeddings).
- `OPENAI_API_KEY` must be a valid Google API key for Gemini.
- Chatbot answers strictly based on book content.
**Scale/Scope**: Focus on individual reader interaction and administrator knowledge base management.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Spec-First Integrity**: Complies. This plan is based on `spec.md`.
- **Book-as-Product**: The feature enhances the Docusaurus handbook product.
- **Immutable Architecture**: Complies with Docusaurus 3.x for the frontend. The backend (Python FastAPI) is a new component but is a necessary extension for the RAG functionality and does not conflict with existing frontend architecture. (Potential ADR for backend stack decision).
- **Validation-Driven Development**: All deliverables will pass automated build and testing processes.

## Project Structure

### Documentation (this feature)

```text
specs/002-rag-chatbot/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
backend/
├── src/
│   ├── history_db.py    # Neon Postgres client and logging
│   ├── ingest.py        # Knowledge base ingestion script
│   ├── main.py          # FastAPI application, /chat and /ingest endpoints
│   ├── rag.py           # RAG logic (Qdrant search, Gemini prompting)
│   └── vector_db.py     # Qdrant client
└── tests/               # Backend unit and integration tests

handbook/
├── src/
│   ├── components/
│   │   └── ChatWidget.tsx
│   │   └── TextHighlighter.tsx # NEW: Handles text highlighting and "Ask AI" button
│   ├── theme/
│   │   └── Layout/
│   │       └── index.tsx # Modified to wrap content with highlighter and manage chat state
│   └── pages/
└── tests/               # Frontend component and E2E tests (Docusaurus-native)
```

**Structure Decision**: Utilizes a split `backend/` and `handbook/` (frontend) structure to clearly separate concerns while integrating the chat widget directly into the Docusaurus theme.

## Phases

### Phase 1: Setup

- [X] T001 Create backend directory structure `backend/src`, `backend/tests`
- [X] T002 [P] Create `backend/requirements.txt` with specified dependencies
- [X] T003 [P] Create `backend/.env.example` with placeholders for API keys and database URLs

### Phase 2: Foundational

- [X] T004 Implement Qdrant client in `backend/src/vector_db.py`
- [X] T005 Implement Neon Postgres client in `backend/src/history_db.py`

### Phase 3: User Story 1 - Content-Aware Q&A

- [X] T006 [US1] Implement `/chat` endpoint in `backend/src/main.py`
- [X] T007 [US1] Implement RAG logic in `backend/src/rag.py` using OpenAI SDK
- [X] T008 [US1] Implement logging to Neon DB in `backend/src/history_db.py`

### Phase 4: User Story 2 - Contextual Inquiry

- [ ] T009 [US2] Implement "Text Selection" listener in `handbook/src/theme/Layout/index.js`
- [X] T010 [US2] Update `/chat` endpoint to handle context in `backend/src/main.py`

### Phase 4B: Contextual UX Implementation (NEW)

This phase focuses on the frontend integration for the "Highlight-to-Chat" feature, building upon the `ChatWidget` and existing `Layout` modifications.

-   **Interaction Flow:**
    1.  User highlights text in `main` article tag.
    2.  Floating "Ask AI" button appears above selection (vanishes on click away).
    3.  Clicking "Ask AI" opens `ChatWidget` (if closed), inserts selected text into input, and focuses input.

-   **Component Architecture:**
    -   `TextHighlighter.tsx`: Handles `mouseup` event, `window.getSelection()`, calculates button position.
    -   `Layout` (swizzled): Manages shared `[pendingMessage, setPendingMessage]` state.
    -   `ChatWidget`: Receives `pendingMessage`, listens for changes to update input.

-   **Styling & Theme:**
    -   "Ask AI" button matches Docusaurus theme via CSS variables (`--ifm-color-primary`, `--ifm-color-white`).
    -   Ensures dark mode compatibility.
    -   Subtle `fade-in` animation on button appearance.

### Phase 5: User Story 3 - Knowledge Base Update

- [X] T011 [US3] Implement ingestion script in `backend/src/ingest.py` with custom Markdown chunking
- [X] T012 [US1] **Critical**: Configure `CORSMiddleware` in `main.py` to allow `http://localhost:3000`

### Phase 6: Polish & Cross-Cutting Concerns

- [X] T013 [P] Add error handling to all endpoints in `backend/src/main.py`
- [ ] T014 [P] Add logging to all modules
- [X] T015 Create `handbook/src/components/ChatWidget.tsx`
- [X] T016 "Swizzle" Docusaurus `Layout` to inject the widget globally in `handbook/src/theme/Layout/index.js`

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|---|---|---|
| New Backend (Python FastAPI) | Required for RAG functionality, efficient vector DB interaction, and LLM orchestration. | Extending Docusaurus to handle server-side RAG logic (Python-based libraries) would be overly complex and inefficient, violating separation of concerns. |