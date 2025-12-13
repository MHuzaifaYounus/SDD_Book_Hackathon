---
id: 0001
title: Update Constitution with Book Creation Principles
stage: constitution
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: user
command: /sp.constitution
labels: ["constitution", "initial-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/memory/constitution.md
tests:

---

## Prompt

```text
Project: AI/Spec-Driven Book Creation (Docusaurus)

Core Principles:
- **Spec-First Integrity:** No code or content is written without a defined Specification (`spec.md`) and Technical Plan (`plan.md`). "Vibe-coding" is strictly prohibited.
- **Book-as-Product:** We are building a cohesive technical book, not a loose collection of documentation files. Navigation must be linear and logical (Chapters/Sections).
- **Immutable Architecture:** The technology stack (Docusaurus, React, GitHub Pages) is fixed. We do not refactor the core stack, only the content and specific components.
- **Validation-Driven:** If the build fails, the task is incomplete. "It works on my machine" is not a valid success criterion.

Key Standards (Testable & Mandatory):
- **Frontmatter Strictness:** Every `.md` or `.mdx` file MUST contain `id`, `title`, `description`, and `sidebar_position` to ensure the sidebar auto-generates correctly.
- **Asset Management:** All static assets (images, diagrams) must reside in `static/img/` and use absolute referencing (`/img/filename.png`). No relative paths for images.
- **Code Hygiene:** All code blocks in the book must define a language tag (e.g., ```python) for syntax highlighting.
- **Link Integrity:** Zero broken relative links. All internal links must be relative (`./other-file.md`), not absolute URLs.
- **Accessibility:** All images must have descriptive `alt` text.

Constraints:
- **Framework:** Docusaurus 3.x (Classic Preset)
- **Deployment:** GitHub Pages (via GitHub Actions)
- **Language:** MDX (Markdown + React components)
- **Package Manager:** npm (consistent lockfile usage)
- **Structure:**
  - `docs/` root = Book Parts/Modules
  - Subfolders = Chapters
  - Files = Sections

Success Criteria:
- `npm run build` completes with exit code 0.
- Docusaurus broken link checker reports 0 errors.
- Navigation sidebar renders in the correct `sidebar_position` order.
- All code examples in the book are syntactically valid.
```

## Response snapshot

```text
New version: 1.0.0 (MAJOR: Initial population of the constitution.)

Files flagged for manual follow-up (templates requiring updates):
- .specify/templates/plan-template.md
- .specify/templates/spec-template.md
- .specify/templates/tasks-template.md
- .specify/templates/commands/sp.constitution.md

Suggested commit message:
docs: amend constitution to v1.0.0 (initial population)
```

## Outcome

- ✅ Impact: Constitution initialized and updated with core principles and standards.
- 🧪 Tests: N/A (no tests run for this task)
- 📁 Files: .specify/memory/constitution.md updated.
- 🔁 Next prompts: User to review and commit changes.
- 🧠 Reflection: Successfully updated the constitution based on user input, ensuring all placeholders are filled and a clear summary is provided. Noted pending updates for other templates.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): N/A.
- Prompt variant (if applicable): N/A.
- Next experiment (smallest change to try): Ensure propagation to other templates is handled in a subsequent step.
