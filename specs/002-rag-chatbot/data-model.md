# Data Model: AI-Powered Teaching Assistant

This document outlines the data models for the key entities involved in the chatbot feature.

## Chat Session
Represents a single conversation between a user and the chatbot.
- **`session_id`**: `string` (Primary Key) - Unique identifier for the session.

## Query
Represents a single question asked by the user.
- **`query_id`**: `string` (Primary Key) - Unique identifier for the query.
- **`session_id`**: `string` (Foreign Key to Chat Session) - The session this query belongs to.
- **`query_text`**: `string` - The text of the user's question.
- **`timestamp`**: `datetime` - The time the query was made.

## Response
Represents the answer provided by the system.
- **`response_id`**: `string` (Primary Key) - Unique identifier for the response.
- **`query_id`**: `string` (Foreign Key to Query) - The query this response answers.
- **`response_text`**: `string` - The text of the system's answer.
- **`timestamp`**: `datetime` - The time the response was generated.

## Knowledge Base Document
Represents a chunk of text from the handbook that is used to answer questions. This will be stored in Qdrant.
- **`document_id`**: `string` (Primary Key) - Unique identifier for the document chunk.
- **`content`**: `string` - The text content of the document chunk.
- **`source`**: `string` - The source file of the document.
- **`vector`**: `array[float]` - The 768-dimension embedding of the content.