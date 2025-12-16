# Implementation Plan: Physical AI Handbook

**Branch**: `001-physical-ai-handbook` | **Date**: 2025-12-16
**Input**: Feature specification from `specs/001-physical-ai-handbook/spec.md`

## Summary

This plan outlines the front-end structure for the Physical AI Handbook, focusing on the Docusaurus landing page and sidebar navigation strategy, and now includes a thematic overhaul to address color visibility and aesthetic appeal across dark and light modes. This update also incorporates content refinement to remove placeholder images from documentation pages.

## Phase 1: Design and Content Structure

This phase focuses on the visual and navigational architecture of the handbook.

### 1. Sidebar Naming Strategy

To ensure high readability and a clear sense of progression, all chapters in the sidebar will follow a standardized naming convention.

- **Format**: `Chapter [N]: [Title]`
- **Implementation**: This will be configured in `sidebars.ts` for each document.
- **Example**:
  ```javascript
  {
    type: 'doc',
    id: '01-foundations/01-digital-twin-workstation',
    label: 'Chapter 1: Foundations' // Corrected for top-level, or applied to category
  },
  ```
  *Correction: Labels for categories would be applied, and individual doc labels follow if they are the sole entry.* For a structured sidebar, categories will be named this way.

### 2. Landing Page Sections (`src/pages/index.js`)

The landing page will be the main entry point and must be visually compelling and informative. It will be composed of several sections, mirroring the structure of modern, effective educational platforms like Panaversity.

#### 2.1. Hero Section
- **Layout**: Split-screen with text on the left and a compelling visual on the right.
- **Text Content**:
    - Headline: "Physical AI: From Simulation to Reality"
    - Sub-headline: "An open-source handbook for building and training embodied agents with a sim-first approach."
- **Badges**: Prominently display "ROS 2 Native" and "Digital Twin Ready" badges.
- **CTA Buttons**:
    1.  **Primary**: "Start Building" (links to Chapter 1)
    2.  **Secondary**: "View on GitHub" (links to the repository)

#### 2.2. Comparison Cards
- **Layout**: Two side-by-side cards.
- **Card 1: Standard Robotics**
    - **Title**: "The Old Way: Hardware-First"
    - **Content**: Emphasize slow iteration, high costs, and the risk of hardware damage.
- **Card 2: Physical AI**
    - **Title**: "The New Way: Sim-to-Real"
    - **Content**: Highlight rapid prototyping, zero-cost simulation, and the safety of a digital-first workflow.

#### 2.3. Feature Grid
- **Layout**: A 3x2 grid of feature cards.
- **Items**: Each item represents a core technology of the stack.
    1.  **ROS 2**: The nervous system.
    2.  **Gazebo**: The physics simulator.
    3.  **Isaac Sim**: The digital twin environment.
    4.  **Kinematics & Control**: The motion layer.
    5.  **Whisper/LLM**: The language interface.
    6.  **VLA/Vision**: The perception system.

#### 2.4. Vertical Timeline: The Student Journey
- **Layout**: A vertical timeline with 4 key milestones.
- **Steps**:
    1.  **Simulation**: Master the basics in a digital twin environment.
    2.  **Edge Deployment**: Transfer skills to a physical edge kit.
    3.  **Proxy Robot**: Control a full-sized proxy robot.
    4.  **Humanoid Integration**: Apply knowledge to a bipedal humanoid.

#### 2.5. Paradigm Shift Section
- **Layout**: A contrasting visual section.
- **Concept**: Visually compare "Hardware-First" (showing risk/danger icons) vs. "Sim-First" (showing safety/success icons).

#### 2.6. Final CTA
- **Layout**: Full-width section.
- **Content**: "Ready to Build the Body?"
- **Button**: "Start Chapter 1: Foundations"

## Phase 2: Theming and Style Refinement

This phase addresses the aesthetic and readability concerns regarding the landing page's color theme.

### 2.1. Color Theme Adjustment for Cards and Text

**Problem**: Text on some card sections (e.g., Comparison Cards, Feature Grid, Paradigm Shift) has poor visibility against the background, particularly due to white backgrounds potentially clashing with default text colors in light mode, or insufficient contrast in dark mode.

**Goal**: Enhance readability and visual appeal by adjusting color themes for card backgrounds, text, and potentially borders for both light and dark modes.

**Proposed Solution**:

*   **Custom CSS Variables**: Introduce or modify CSS variables in `handbook/src/css/custom.css` to define more appropriate `background-color` and `color` for card elements.
*   **Component-Specific Adjustments**: Modify the `.module.css` files for affected components (`ComparisonCards.module.css`, `FeatureGrid.module.css`, `ParadigmShift.module.css`) to utilize these new variables or directly apply enhanced contrast.
*   **Dark Mode Support**: Explicitly define `--ifm-color-emphasis-100` and `--ifm-color-emphasis-200` for backgrounds and text colors in dark mode within `handbook/src/css/custom.css` to ensure good contrast.
*   **Card Backgrounds**: Aim for subtle, contrasting background colors for cards that provide visual separation without clashing.
*   **Text Color**: Ensure text color provides sufficient contrast (WCAG AA or AAA) against its background in both light and dark themes.

### 2.2. General Styling Improvements

*   Review overall typography, spacing, and component alignment for a polished "Panaversity-like" aesthetic.
*   Ensure consistency across all landing page sections.

## Phase 3: Content Refinement

This phase focuses on refining the content within the documentation pages.

### 3.1. Remove Placeholder Images from Docs

**Problem**: Placeholder images (e.g., `placeholder-nvidia-smi.png`) are currently used in the documentation (`01-digital-twin-workstation.mdx`, `02-physical-ai-edge-kit.mdx`). These need to be removed as they are not final content.

**Goal**: Clean up the documentation by removing all references to placeholder images, indicating that actual images are yet to be provided.

**Proposed Solution**:

*   Identify all `.mdx` files in `handbook/docs/` that contain image references starting with `/img/placeholder-`.
*   Remove these image references from the respective `.mdx` files.

## Project Structure

### Documentation & Source (`handbook/`)
```text
handbook/
├── docs/
│   ├── 01-foundations/
│   ...
├── src/
│   ├── pages/
│   │   └── index.tsx      # Landing page implementation
│   └── components/
│       ├── HeroSection.js
│       ├── ComparisonCards.js
│       ├── FeatureGrid.js
│       ├── VerticalTimeline.js
│       ├── ParadigmShift.js
│       ├── FinalCTA.js
│       └── HardwareCard.js  # Existing component
│   ├── css/
│   │   └── custom.css     # Global custom styles, including new theme variables
├── sidebars.ts            # Sidebar configuration
└── docusaurus.config.ts   # Main configuration
```
**Structure Decision**: The implementation will be contained within the existing `handbook` Docusaurus project. New React components will be created for each section of the landing page to ensure modularity and maintainability.
