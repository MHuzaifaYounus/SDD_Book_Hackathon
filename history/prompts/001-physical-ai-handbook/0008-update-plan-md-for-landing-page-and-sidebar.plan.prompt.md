---
id: 0008
title: Update plan.md for Landing Page and Sidebar
stage: plan
date: 2025-12-16
surface: agent
model: gemini
feature: 001-physical-ai-handbook
branch: 001-physical-ai-handbook
user: MHuzaifaYounus
command: "/sp.plan Update `plan.md` to structure the Landing Page and Sidebar"
labels: ["plan", "docusaurus", "frontend", "ui-design"]
links:
  spec: "specs/001-physical-ai-handbook/spec.md"
  ticket: null
  adr: null
  pr: null
files:
  - "specs/001-physical-ai-handbook/plan.md"
tests:
  - "N/A"
---

## Prompt

/sp.plan Update `plan.md` to structure the Landing Page (`src/pages/index.js`) and Sidebar Navigation with the following requirements:

1.  **Sidebar Naming Strategy:** 
    - Format: **"Chapter [N]: [Title]"** (e.g., `sidebar_label: 'Chapter 1: Foundations'`) to ensure high readability in the handbook navigation.

2.  **Landing Page Sections (Mirroring Panaversity):**
    - **Hero Section:** Split layout (Text/Image) with "ROS 2 Native" badges and dual CTA buttons.
    - **Comparison Cards:** Contrast "Standard Robotics" vs. "Physical AI" (Sim-to-Real).
    - **Feature Grid:** 6-item grid defining the stack (ROS 2, Gazebo, Isaac, Kinematics, Whisper, VLA).
    - **Vertical Timeline:** "Student Journey" steps: Simulation → Edge → Proxy → Humanoid.
    - **Paradigm Shift:** Compare "Hardware-First" (Risk) vs. "Sim-First" (Safety).
    - **Final CTA:** "Ready to Build the Body?" linking to Chapter 1.

## Response snapshot

The agent successfully executed the planning workflow. It first encountered and resolved an error by switching to the correct git feature branch. It then ran the `setup-plan.sh` script, read the plan template, and updated it with a detailed structure for the Docusaurus landing page and a clear sidebar naming strategy, as requested by the user. The final plan was written to `specs/001-physical-ai-handbook/plan.md`.

## Outcome

- ✅ Impact: A detailed implementation plan for the handbook's front-end was created. This provides a clear blueprint for the subsequent implementation phase (`/sp.tasks` and `/sp.green`).
- 🧪 Tests: No tests were run as this was a planning task.
- 📁 Files: `specs/001-physical-ai-handbook/plan.md` was created and populated.
- 🔁 Next prompts: The next logical step is to run `/sp.tasks` to break down this plan into actionable implementation tasks.
- 🧠 Reflection: The workflow of using a shell script to set up the environment and then modifying the output is effective. The initial failure due to the wrong branch highlights the importance of preconditions for scripts. The agent recovered gracefully.

## Evaluation notes (flywheel)

- Failure modes observed: The `setup-plan.sh` script initially failed because the agent was not on a feature branch.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A