---
id: 0009
title: Update Plan for Contextual Ask Feature
stage: plan
date: 2025-12-18
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
  - specs/002-rag-chatbot/tasks.md
tests:
  - none
---

## Prompt

/sp.plan I need to implement the **"Contextual Ask" (Highlight-to-Chat)** feature in the Frontend.

Please update the Plan to include a specific **"Phase 4B: Contextual UX Implementation"** with these requirements:

## 1. The Interaction Flow
1.  **User Action:** User highlights text inside any documentation page (`main` article tag).
2.  **System Response:** A small, floating "Ask AI" button appears immediately above the selection.
    -   *Constraint:* The button must vanish if the user clicks away (onMouseDown).
3.  **Trigger:** When the user clicks "Ask AI":
    -   The Chat Widget opens automatically (if closed).
    -   The **Selected Text** is inserted into the Chat Input field.
    -   The Input field is focused, waiting for the user to type their specific question (or just hit Enter).

## 2. Component Architecture
-   **`TextHighlighter.tsx`:** Create this component to handle the `mouseup` event logic.
    -   Use `window.getSelection()` to retrieve text and coordinates.
    -   Calculate position to render the "Ask AI" button absolutely (relative to the viewport or document).
-   **State Management:**
    -   Update `Layout` (swizzled) to manage a shared state: `const [pendingMessage, setPendingMessage] = useState("")`.
    -   Pass `setPendingMessage` to `TextHighlighter`.
    -   Pass `pendingMessage` to `ChatWidget`.

## 3. Styling & Theme
-   **Color Matching:** The "Ask AI" button must use Docusaurus CSS variables to match the user's chosen theme automatically:
    -   Background: `var(--ifm-color-primary)`
    -   Text: `var(--ifm-color-white)`
    -   Hover: `var(--ifm-color-primary-darker)`
-   **Dark Mode:** Ensure the button looks good in both Light and Dark modes (the variables above handle this, but verify contrast).
-   **Animation:** Add a subtle `fade-in` animation when the button appears.

## 4. Execution Tasks
-   Modify `src/theme/Layout/index.js` to wrap the content with the highlighter context.
-   Update `ChatWidget.tsx` to generic `useEffect` that listens for changes in `pendingMessage` and updates the input value.

## Response snapshot

The plan and tasks for the "Contextual Ask" feature have been successfully updated.

-   `plan.md` now includes a new "Phase 4B: Contextual UX Implementation" detailing the interaction flow, component architecture, and styling.
-   `tasks.md` has been updated with new tasks T017-T020 for implementing this feature.

## Outcome

- ✅ Impact: The plan and task list for the `002-rag-chatbot` feature have been successfully updated to include the new "Contextual Ask" functionality.
- 🧪 Tests: No automated tests were executed for this planning step.
- 📁 Files: 
    - `specs/002-rag-chatbot/plan.md` (updated with new phase and details)
    - `specs/002-rag-chatbot/tasks.md` (updated with new tasks T017-T020)
- 🔁 Next prompts: `Proceed with implementing the new tasks (T017-T020) or analyze the updated plan.`
- 🧠 Reflection: Successfully parsed the detailed user request for a new feature, integrated it into the existing plan structure, and generated granular tasks. This demonstrates effective planning and task breakdown capabilities.
