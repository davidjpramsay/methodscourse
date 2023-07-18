# Mathematics Notes Website

This is [Docusaurus](https://docusaurus.io) site customised for a [Mathematics Methods](https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods) course.

## Issues

### Geogebra

1. Geogebra embeddings are not very responsive to layout changes. CSS in Geogebra.js component needs looking at.
2. Integration of buttons to interact with embedded Geogebra needs implementing.
3. Local Geogebra file hosting? Custom plugin?

## Installation

Install [node.js](https://nodejs.org/en/download)

```bash
npx create-docusaurus@latest my-website classic
cd my-website
npx docusaurus start
```

## Changes from default Docusaurus site.

1. Homepage modified `src/components/HomepageFeatures/index.tsx` including icons, logos, and svg's: `static/img`
2. Config file edited, including menu bar links: `docusaurus.config.js`
3. Sidebars edited: `sidebars.js`
4. Install [Katex](https://docusaurus.io/docs/markdown-features/math-equations) plugins: `docusaurus.config.js`
5. Custom component for Geogebra embedding: `src/components/Geogebra.js`
