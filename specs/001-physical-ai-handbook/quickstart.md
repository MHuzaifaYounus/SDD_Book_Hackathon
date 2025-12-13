
# Quickstart: Docusaurus Handbook

This guide provides instructions for developing and maintaining the Docusaurus-based handbook.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Start the Development Server**:
    ```bash
    npm run start
    ```
    This will open a browser window with a live-reloading preview of the handbook.

## Content Development

### Adding New Pages

- To add a new page, create a new `.md` or `.mdx` file within the appropriate subdirectory in the `docs/` folder.
- The sidebar navigation is automatically generated based on the directory structure. Use numbered prefixes on folders to control the order.

### Using Custom Components

- Custom React components are located in `src/components`.
- To use a component, import it into your `.mdx` file:
    ```mdx
    import HardwareCard from '@site/src/components/HardwareCard';

    <HardwareCard title="NVIDIA RTX 4090" spec="24GB VRAM" />
    ```

### Writing LaTeX Equations

- **Inline Equations**: Wrap your LaTeX code with single dollar signs (`$`).
    ```
    The equation is $E = mc^2$.
    ```
- **Block Equations**: Wrap your LaTeX code with double dollar signs (`$$`).
    ```
    $$
    \int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
    $$
    ```

## Building and Testing

- **Build the Project**:
    ```bash
    npm run build
    ```
    This command will generate a static build of the site in the `build/` directory. It will also check for broken links.
- **Serve the Build**:
    ```bash
    npm run serve
    ```
    This command will serve the static build locally to verify that it works correctly.
