---
description: "Task list for implementing the Physical AI Handbook"
---

# Tasks: Physical AI Handbook

**Input**: Design documents from `specs/001-physical-ai-handbook/`
**Prerequisites**: plan.md, spec.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US0, US1, US2)

## Path Conventions

- All paths are relative to the `handbook/` directory.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Ensure the Docusaurus project is correctly configured.

- [x] T001 Verify Docusaurus installation and dependencies in `handbook/package.json`.
- [x] T002 [P] Configure `docusaurus.config.ts` with the project title "Physical AI & Humanoid Robotics" and theme settings as per the overall project identity.
- [x] T003 [P] Create initial directory structure for content, e.g., `docs/01-foundations`, `docs/02-nervous-system-ros2`, to match the content architecture in `spec.md`.

---

## Phase 2: Foundational (US0) - Landing Page & Navigation 🎯 MVP

**Goal**: Implement the primary landing page and sidebar navigation as detailed in the `plan.md`.

**Independent Test**: The landing page at `/` renders all six custom components correctly. The main sidebar navigation is visible and uses the "Chapter [N]: [Title]" format.

### Implementation for Landing Page (US0)

- [x] T004 [P] [US0] Create `src/components/HeroSection.js` to implement the split-layout hero with headline, badges, and CTAs (matches `plan.md` section 2.1).
- [x] T005 [P] [US0] Create `src/components/ComparisonCards.js` to implement the "Standard Robotics vs. Physical AI" cards (matches `plan.md` section 2.2).
- [x] T006 [P] [US0] Create `src/components/FeatureGrid.js` to implement the 6-item grid for the technology stack (matches `plan.md` section 2.3).
- [x] T007 [P] [US0] Create `src/components/VerticalTimeline.js` to implement the "Student Journey" timeline (matches `plan.md` section 2.4).
- [x] T008 [P] [US0] Create `src/components/ParadigmShift.js` to implement the "Hardware-First vs. Sim-First" visual comparison (matches `plan.md` section 2.5).
- [x] T009 [P] [US0] Create `src/components/FinalCTA.js` to implement the "Ready to Build the Body?" final call to action (matches `plan.md` section 2.6).
- [x] T010 [US0] Integrate all new components (T004-T009) into the main landing page at `src/pages/index.tsx` to build the complete page structure.
- [x] T011 [US0] Update `sidebars.ts` to implement the "Chapter [N]: [Title]" naming strategy for all main categories (matches `plan.md` section 1).

**Checkpoint**: The handbook has a functional and visually appealing landing page and clear navigation, fully matching the design in `plan.md`. It is now ready for content.

---

## Phase 3: Theming and Style Refinement

**Goal**: Adjust the color theme of the landing page sections to improve visibility of card text and enhance aesthetic appeal for both dark and light modes.

**Independent Test**: Visual inspection of the landing page in both light and dark modes confirms improved contrast and aesthetic consistency.

### Implementation for Theming (US0-A)

- [x] T012 [P] [US0-A] Introduce or modify CSS variables for card backgrounds and text colors in `handbook/src/css/custom.css` (matches `plan.md` section 2.1 - Custom CSS Variables).
- [x] T013 [P] [US0-A] Modify `handbook/src/components/ComparisonCards.module.css` for enhanced contrast and themed colors (matches `plan.md` section 2.1 - Component-Specific Adjustments).
- [x] T014 [P] [US0-A] Modify `handbook/src/components/FeatureGrid.module.css` for enhanced contrast and themed colors (matches `plan.md` section 2.1 - Component-Specific Adjustments).
- [x] T015 [P] [US0-A] Modify `handbook/src/components/ParadigmShift.module.css` for enhanced contrast and themed colors (matches `plan.md` section 2.1 - Component-Specific Adjustments).
- [x] T016 [US0-A] Ensure dark mode support by defining `--ifm-color-emphasis-100` and `--ifm-color-emphasis-200` in `handbook/src/css/custom.css` (matches `plan.md` section 2.1 - Dark Mode Support).
- [x] T017 [US0-A] Review and adjust global typography, spacing, and component alignment in `handbook/src/css/custom.css` for overall consistency (matches `plan.md` section 2.2 - General Styling Improvements).

---

## Phase 4: User Story 1 (Content) - Digital Twin Workstation

**Goal**: Create the content for Part 1, guiding users on setting up their Digital Twin Workstation.

**Independent Test**: A user can follow the written guide in `docs/01-foundations/` to successfully set up their workstation and run a basic simulation.

### Implementation for User Story 1 (Content)

- [x] T018 [US1] Write the content for `docs/01-foundations/01-digital-twin-workstation.mdx`, detailing hardware requirements (GPU, CPU, RAM) and software installation for ROS 2, Gazebo, and Isaac Sim.
- [x] T019 [P] [US1] Add relevant images and diagrams for workstation setup to `static/img/` and embed them in the document.

---

## Phase 5: User Story 2 (Content) - Physical AI Edge Kit

**Goal**: Create the content for Part 1, guiding users on configuring their Physical AI Edge Kit.

**Independent Test**: A user can follow the written guide in `docs/01-foundations/` to successfully set up their edge hardware.

### Implementation for User Story 2 (Content)

- [x] T020 [US2] Write the content for `docs/01-foundations/02-physical-ai-edge-kit.mdx`, covering the setup of the Jetson Orin, RealSense camera, and ReSpeaker microphone.
- [x] T021 [P] [US2] Add images of the edge kit components to `static/img/` and embed them in the document.

---

## Phase 6: User Story 3 (Content) - VLA Humanoid & Other Chapters

**Goal**: Create the content for the remaining parts of the handbook, culminating in the VLA humanoid project.

**Independent Test**: A user can follow the content in each chapter to learn the concepts and complete the final capstone project.

### Implementation for User Story 3 (Content)

- [x] T022 [US3] Write content for `docs/02-nervous-system-ros2/01-ros-fundamentals.md`.
- [x] T023 [US3] Write content for `docs/03-digital-twin-simulation/01-gazebo-and-unity.md`.
- [x] T024 [US3] Write content for `docs/04-ai-robot-brain-isaac/01-isaac-sim.md`.
- [x] T025 [US3] Write content for `docs/05-vision-language-action-vla/01-vla-integration.md`.
- [x] T026 [US3] Write content for `docs/06-capstone-project/01-autonomous-humanoid.md`.

---

## Phase 7: Content Refinement

**Goal**: Remove placeholder images from the documentation pages to clean up content.

**Independent Test**: Review of `.mdx` files confirms no image references starting with `/img/placeholder-` are present.

### Implementation for Content Refinement (CR)

- [x] T027 [CR] Remove placeholder image references from `handbook/docs/01-foundations/01-digital-twin-workstation.mdx`.
- [x] T028 [CR] Remove placeholder image references from `handbook/docs/01-foundations/02-physical-ai-edge-kit.mdx`.
- [x] T029 [CR] Remove all placeholder image files from `handbook/static/img/`.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and quality checks.

- [x] T030 Run `npm run build` in the `handbook/` directory to ensure the Docusaurus site compiles without errors.
- [x] T031 Run the broken link checker to validate all internal and external links.
- [x] T032 Review all pages to ensure images have `alt` text and code blocks are correctly formatted.
- [x] T033 Manually verify that the sidebar navigation renders correctly and matches the structure in `sidebars.ts`.

---

## Dependencies & Execution Order

- **Setup (Phase 1)**: Must be done first.
- **Foundational (US0, Phase 2)**: Depends on Setup. This is the MVP.
- **Theming (US0-A, Phase 3)**: Depends on Foundational Phase. This improves the MVP.
- **User Stories (Content, Phases 4-6)**: Depend on Foundational phase. The content for US1, US2, and US3 can be written in parallel.
- **Content Refinement (CR, Phase 7)**: Can be done after content generation.
- **Polish (Phase 8)**: Depends on all content and content refinement being complete.

## Implementation Strategy

1.  **MVP First**: Complete Phase 1 and Phase 2 to deliver a functional landing page and site structure. This is the minimum viable product.
2.  **Theme Refinement**: Complete Phase 3 to enhance the visual appeal and readability of the MVP.
3.  **Incremental Content**: Add content for User Stories 1, 2, and 3. This can be done incrementally and in any order after the MVP and theming are complete.
4.  **Content Refinement**: Remove placeholder images once content is complete.
5.  **Final Polish**: Once all content is in place, run the final polish and validation phase.
