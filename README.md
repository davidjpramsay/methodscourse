# Mathematics Notes Website

This is a [Docusaurus 2](https://docusaurus.io) site customised for a [Mathematics Methods](https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods) course. It has Latex and Geogebra embedding.

# Install

Clone this repository and run the local server. Then edit files in steps 1, 2, 3 in [Changes from default Docusaurus site](#changes-from-default-docusaurus-site)
    
```bash
git clone https://github.com/davidjpramsay/methodscourse.git
cd methodscourse
npn install
npx docusaurus run
```

## Issues

### Geogebra

1. Geogebra embeddings are not very responsive to layout changes. CSS in Geogebra.js component needs looking at.
2. Integration of buttons to interact with embedded Geogebra needs implementing.
3. Local Geogebra file hosting? Custom plugin?

## Base Installation

Install [node.js](https://nodejs.org/en/download)

```bash
npx create-docusaurus@latest my-website-name classic --typescript
cd my-website
npx docusaurus run
```

## Changes from default Docusaurus site

1. Homepage modified `src/components/HomepageFeatures/index.tsx` including icons, logos, and svg's: `static/img`
2. Config file edited, including menu bar links: `docusaurus.config.js`
3. Sidebars edited: `sidebars.js`
4. Install [Katex](https://docusaurus.io/docs/markdown-features/math-equations) plugins: `docusaurus.config.js`
5. Custom component for Geogebra embedding: `src/components/Geogebra.js`
