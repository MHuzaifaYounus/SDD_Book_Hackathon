# AI/Spec-Driven Book Creation Constitution

## Core Principles

### I. Spec-First Integrity
No code or content is written without a defined Specification (`spec.md`) and Technical Plan (`plan.md`). "Vibe-coding" (jumping straight to code/writing without a plan) is strictly prohibited. The Spec defines the "What" (Content), and the Plan defines the "How" (Implementation).

### II. Book-as-Product
We are building a cohesive technical book, not a loose collection of documentation files. Navigation must be linear, logical, and educational. The structure must follow a strict hierarchy: Modules (Parts) → Chapters → Sections.

### III. Immutable Architecture
The technology stack is fixed and non-negotiable. We do not refactor the core stack, only the content and specific components.
*   **Framework:** Docusaurus 3.x (Classic Preset)
*   **Deployment:** GitHub Pages (via GitHub Actions)
*   **Styling:** Infima + Custom CSS (No switching to Tailwind unless planned)

### IV. Validation-Driven Development
If the build fails, the task is incomplete. "It works on my machine" is not a valid success criterion. All deliverables must pass the automated build and link-check process before being considered "Done."

## Operational Standards & Constraints

### Key Standards (Testable & Mandatory)
1.  **Frontmatter Strictness:** Every `.md` or `.mdx` file MUST contain `id`, `title`, `description`, and `sidebar_position` to ensure the sidebar auto-generates correctly and deterministically.
2.  **Asset Management:** All static assets (images, diagrams) must reside in `static/img/` and use absolute referencing (e.g., `/img/filename.png`). Relative paths for images are prohibited.
3.  **Code Hygiene:** All code blocks in the book must define a language tag (e.g., ```python) for syntax highlighting.
4.  **Link Integrity:** Zero broken relative links. All internal links must be relative (`./other-file.md`), ensuring the book is portable.
5.  **Accessibility:** All images must have descriptive `alt` text.

### Technical Constraints
*   **Language:** MDX (Markdown + React components).
*   **Package Manager:** `npm` (Lockfile must remain consistent).
*   **Directory Structure:**
    *   `docs/` root = Book Parts/Modules
    *   Subfolders = Chapters
    *   Files = Sections

## Quality Gates & Success Criteria

### Build Validation
*   `npm run build` must complete with **exit code 0**.
*   Docusaurus broken link checker must report **0 errors**.

### UX Validation
*   Navigation sidebar must render in the correct `sidebar_position` order (1, 2, 3...).
*   All code examples in the book must be syntactically valid and copy-pasteable.

## Governance

This Constitution supersedes all other project practices. 
*   **Amendments:** Require documentation updates in `constitution.md`, peer approval, and a migration plan if the architecture changes.
*   **Compliance:** All PRs and reviews must verify compliance with the Core Principles.
*   **Complexity:** Any deviation from the standard Docusaurus pattern must be justified in `spec.md`.

**Version**: 1.0.0 | **Ratified**: 2025-12-18 | **Last Amended**: 2025-12-18