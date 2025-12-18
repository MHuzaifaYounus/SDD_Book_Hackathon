# Research: AI-Powered Teaching Assistant

**Decision**: Use the user-specified tech stack.
- **Backend**: Python FastAPI (Async)
- **AI Provider**: OpenAI Python SDK with Gemini via OpenAI-compatible endpoint
- **Vector DB**: Qdrant Cloud
- **History DB**: Neon Serverless Postgres

**Rationale**: The user has provided a clear and complete technical specification. The chosen technologies are well-suited for building a RAG-based chatbot.

**Alternatives considered**: None, as the user provided a specific stack.

## Best Practices and Integration Patterns

### FastAPI
- Use Pydantic for data validation and serialization.
- Use asynchronous `async/await` for all I/O bound operations (API calls, database queries).
- Use dependency injection for managing database connections and other resources.

### Qdrant
- Create a collection with the correct vector size (768 for `text-embedding-004`).
- Use batching for a large number of documents to be indexed.
- Use filtering and payload indexing for efficient metadata-based searches.

### OpenAI SDK with Gemini
- Use the `openai` Python library.
- Set the `base_url` to `https://generativelanguage.googleapis.com/v1beta/openai/`.
- Manage API keys securely using environment variables.
- Implement error handling for API-related exceptions.

### Neon Serverless Postgres
- Use a connection pool to manage database connections efficiently.
- Use an ORM like SQLAlchemy or a library like `psycopg2` for database interactions.
- Define a clear schema for storing chat history.