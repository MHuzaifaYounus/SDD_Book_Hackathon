# Tasks: AI-Powered Teaching Assistant

**Feature**: `002-rag-chatbot`
**Spec**: `specs/002-rag-chatbot/spec.md`
**Plan**: `specs/002-rag-chatbot/plan.md`

## Phase 1: Setup

- [X] T001 Create backend directory structure `backend/src`, `backend/tests`
- [X] T002 [P] Create `backend/requirements.txt` with specified dependencies
- [X] T003 [P] Create `backend/.env.example` with placeholders for API keys and database URLs

## Phase 2: Foundational

- [X] T004 Implement Qdrant client in `backend/src/vector_db.py`
- [X] T005 Implement Neon Postgres client in `backend/src/history_db.py`

## Phase 3: User Story 1 - Content-Aware Q&A

- [X] T006 [US1] Implement `/chat` endpoint in `backend/src/main.py`
- [X] T007 [US1] Implement RAG logic in `backend/src/rag.py` using OpenAI SDK
- [X] T008 [US1] Implement logging to Neon DB in `backend/src/history_db.py`

## Phase 4: User Story 2 - Contextual Inquiry

- [X] T009 [US2] Implement "Text Selection" listener in `handbook/src/theme/Layout/index.js`
- [X] T010 [US2] Update `/chat` endpoint to handle context in `backend/src/main.py`

## Phase 5: User Story 3 - Knowledge Base Update

- [X] T011 [US3] Implement ingestion script in `backend/src/ingest.py` with custom Markdown chunking
- [X] T012 [US1] **Critical**: Configure `CORSMiddleware` in `main.py` to allow `http://localhost:3000`

## Phase 6: Polish & Cross-Cutting Concerns

- [X] T013 [P] Add error handling to all endpoints in `backend/src/main.py`
- [X] T014 [P] Add logging to all modules
- [X] T015 Create `handbook/src/components/ChatWidget.tsx`
- [X] T016 "Swizzle" Docusaurus `Layout` to inject the widget globally in `handbook/src/theme/Layout/index.js`

## Dependencies

- **User Story 1** is the highest priority and should be completed first.
- **User Story 2** depends on User Story 1.
- **User Story 3** is independent of User Stories 1 and 2.

## Parallel Execution

- Within each user story, tasks marked with `[P]` can be executed in parallel.
- User Story 3 can be implemented in parallel with User Story 1.

## Implementation Strategy

The implementation will follow a phased approach, starting with the MVP (User Story 1). Each user story represents a testable increment of functionality.

## Phase 4B: Contextual UX Implementation

- [X] T017 [US2] Create `handbook/src/components/TextHighlighter.tsx`
- [X] T018 [US2] Modify `handbook/src/theme/Layout/index.tsx` to wrap content with `TextHighlighter` and manage shared state (`pendingMessage`)
- [X] T019 [US2] Update `handbook/src/components/ChatWidget.tsx` to listen for `pendingMessage` changes and update input field
- [X] T020 [US2] Implement "Ask AI" button styling and fade-in animation (using Docusaurus CSS variables)
