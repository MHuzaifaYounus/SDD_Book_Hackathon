# Tasks: Physical AI & Humanoid Robotics Handbook

**Feature**: 001-physical-ai-handbook

This document outlines the tasks required to implement the Docusaurus-based handbook.

## Phase 1: Cleanup Docusaurus Boilerplate

- [x] T001 Remove the default Docusaurus blog from `handbook/blog/`
- [x] T002 Remove the default Docusaurus tutorial from `handbook/docs/`
- [x] T003 Update `handbook/docusaurus.config.ts` to remove the blog and tutorial links from the navbar.
- [x] T004 Update `handbook/sidebars.ts` to remove the tutorial sidebar.
- [x] T005 Clean up the default `handbook/src/pages/index.tsx` to be a more suitable landing page for the handbook.

## Phase 2: Content Authoring

### Part 1: The Lab & Foundations
- [x] T006 [US1] Write detailed content for `handbook/docs/01-foundations/01-digital-twin-workstation.mdx`, covering hardware analysis, GPU/VRAM requirements, and detailed setup instructions.
- [x] T007 [US2] Write detailed content for `handbook/docs/01-foundations/02-physical-ai-edge-kit.mdx`, covering the setup of the Jetson Orin, RealSense camera, and ReSpeaker Mic.

### Part 2: The Nervous System (ROS 2)
- [x] T008 [US3] Write detailed content for `handbook/docs/02-nervous-system-ros2/01-ros-fundamentals.md`, covering middleware, nodes, topics, Python agents, and URDF for humanoid robot modeling.

### Part 3: The Digital Twin (Simulation)
- [x] T009 [US3] Write detailed content for `handbook/docs/03-digital-twin-simulation/01-gazebo-and-unity.md`, covering physics simulation with Gazebo and high-fidelity rendering with Unity.

### Part 4: The AI-Robot Brain (NVIDIA Isaac)
- [x] T010 [US3] Write detailed content for `handbook/docs/04-ai-robot-brain-isaac/01-isaac-sim.md`, covering photorealistic simulation, synthetic data generation, Isaac ROS for VSLAM, and Nav2 for path planning.

### Part 5: Vision-Language-Action (VLA)
- [x] T011 [US3] Write detailed content for `handbook/docs/05-vision-language-action-vla/01-vla-integration.md`, covering Whisper integration and the use of LLMs for cognitive planning.

### Part 6: Capstone: The Autonomous Humanoid
- [x] T012 [US3] Write detailed content for `handbook/docs/06-capstone-project/01-autonomous-humanoid.md`, providing a comprehensive guide to the capstone project.

## Phase 3: Polish & Cross-Cutting Concerns

- [x] T013 [P] Review all created markdown files to ensure `alt` text is present for all images.
- [x] T014 [P] Review all created markdown files to ensure all code blocks have language tags.
- [x] T015 Run `npm run build` in the `handbook/` directory and ensure it completes with exit code 0.
- [x] T016 Manually verify that there are no broken links in the generated site.

## Dependencies

- **Phase 1** must be completed before **Phase 2**.
- **Phase 2** must be completed before **Phase 3**.

## Implementation Strategy

The MVP for this project is the completion of **Phase 2 (Content Authoring)** for User Story 1, which will provide the foundational documentation for setting up the development environment.