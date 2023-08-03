# Mathematics Notes Website

This is a [Docusaurus 2](https://docusaurus.io) site customised for a [Mathematics Methods](https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods) course. It has Latex and Geogebra embedding.

# Requirements

1. [Node.js](https://nodejs.org/en)
2. [Git](https://github.com/git-guides/install-git)

# Install

Clone this repository and run the local server. Then edit files in steps 1, 2, 3 in the "[Changes from default Docusaurus site](#changes-from-default-docusaurus-site)" section below.
    
```bash
git clone https://github.com/davidjpramsay/methodscourse.git
cd methodscourse
npm install
npm run start
```

## Issues

### URL Referencing

I want to set the base path to route so all the Docs are not in the Docs folder but when I do 

```jsx
docs: {
          // routeBasePath: '/', change when building and referencing error is fixed.
```

### Geogebra

1. Geogebra embeddings are not very responsive to layout changes. CSS in Geogebra.js component needs looking at.
2. Integration of buttons to interact with embedded Geogebra needs implementing.
3. Local Geogebra file hosting? Custom plugin?

## Base Installation

Install [node.js](https://nodejs.org/en/download)

```bash
npx create-docusaurus@latest my-website-name classic --typescript
cd my-website
npm run start
```

## Changes from default Docusaurus site

1. Homepage modified `src/components/HomepageFeatures/index.tsx` including icons, logos, and svg's: `static/img`
2. Config file edited, including menu bar links: `docusaurus.config.js`
3. Sidebars edited: `sidebars.js`
4. Install [Katex](https://docusaurus.io/docs/markdown-features/math-equations) plugins: `docusaurus.config.js`
5. Custom component for Geogebra embedding: `src/components/Geogebra.js`
6. Table of contents extended to 3 headings deep `docusaurus.config.js`

# Editing

1. Install VSCode.
2. Inside of the `methodscourse` directory run `code .` in terminal.
3. Edit markdown files

## Types

## Latex via Katex

Inline Equation

```latex
This is an inline equation $a^{\frac{m}{n}} = \sqrt[m]{a^n}$
```

Display Equation

```markdown
$$
a^{\frac{m}{n}} = \sqrt[m]{a^n}
$$
```

## Youtube Embed

```html
<div class="video-container">
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoID" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
```

### Accordion Component

```html
<details>
<summary>Title</summary>
<div>

"Content"

</div>
</details>
```

### Admonitions

```markdown
:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```