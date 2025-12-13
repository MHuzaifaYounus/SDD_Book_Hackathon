
# Research: Docusaurus Implementation

## 1. LaTeX and Math Equations

- **Decision**: Implement LaTeX support using `remark-math` and `rehype-katex`.
- **Rationale**: This is the standard and recommended approach for Docusaurus. `remark-math` parses the LaTeX syntax from MDX, and `rehype-katex` renders it into HTML.
- **Implementation Steps**:
    1.  Install the necessary packages:
        ```bash
        npm install remark-math rehype-katex
        ```
    2.  Configure `docusaurus.config.js` to use the plugins and include the KaTeX stylesheet:
        ```javascript
        import remarkMath from 'remark-math';
        import rehypeKatex from 'rehype-katex';

        export default {
          // ...
          presets: [
            [
              '@docusaurus/preset-classic',
              {
                docs: {
                  remarkPlugins: [remarkMath],
                  rehypePlugins: [rehypeKatex],
                },
              },
            ],
          ],
          stylesheets: [
            {
              href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
              type: 'text/css',
              crossorigin: 'anonymous',
            },
          ],
        };
        ```
- **Alternatives Considered**: None, as this is the official and widely adopted method.

## 2. Custom React Components in MDX

- **Decision**: Create custom React components in the `src/components` directory and import them directly into MDX files.
- **Rationale**: This approach is a core feature of MDX and Docusaurus, providing a clean and maintainable way to extend Markdown with interactive components. It allows for a clear separation of concerns between content and presentation.
- **Implementation Steps**:
    1.  Create a new React component, for example, `src/components/HardwareCard.js`.
    2.  In an `.mdx` file, import the component using an alias:
        ```mdx
        import HardwareCard from '@site/src/components/HardwareCard';

        <HardwareCard title="NVIDIA RTX 4090" spec="24GB VRAM" />
        ```
- **Alternatives Considered**:
    - **Swizzling `@theme/MDXComponents`**: This is more suitable for globally overriding default HTML elements (like `h1`, `p`) rather than for ad-hoc custom components. It would be overkill for the `<HardwareCard />` use case but could be considered for more fundamental style changes.
