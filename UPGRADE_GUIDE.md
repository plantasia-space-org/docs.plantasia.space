# Docusaurus & React 19 Upgrade Guide

This guide outlines the steps to upgrade a Docusaurus project to support React 19 and the latest Docusaurus features (v3.7+).

## 1. Update Dependencies

Update your `package.json` to use the latest Docusaurus version and React 19.

### Option A: Manual Edit
Open `package.json` and update the versions:

```json
{
  "dependencies": {
    "@docusaurus/core": "latest",
    "@docusaurus/preset-classic": "latest",
    "@mdx-js/react": "^3.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    // ... other dependencies
  },
  "devDependencies": {
    "@docusaurus/module-type-aliases": "latest",
    "@docusaurus/types": "latest",
    // ... other devDependencies
  }
}
```

### Option B: Command Line
Run the following command to install the latest versions directly:

```bash
npm install @docusaurus/core@latest @docusaurus/preset-classic@latest react@^19.0.0 react-dom@^19.0.0
npm install -D @docusaurus/module-type-aliases@latest @docusaurus/types@latest
```

*Note: If you use other Docusaurus plugins (like `@easyops-cn/docusaurus-search-local`), make sure to update them to their latest versions as well to avoid peer dependency conflicts.*

## 2. Fix Deprecations in `docusaurus.config.js`

Docusaurus v3.7+ and v4 preparation deprecates the top-level `onBrokenMarkdownLinks` configuration.

**Before:**
```javascript
module.exports = {
  // ...
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn', // DEPRECATED
  // ...
};
```

**After:**
Move `onBrokenMarkdownLinks` inside the `markdown.hooks` object.

```javascript
module.exports = {
  // ...
  onBrokenLinks: 'throw',
  
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  // ...
};
```

## 3. Verify the Upgrade

1.  **Clean install (optional but recommended):**
    ```bash
    rm -rf node_modules package-lock.json
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm start
    ```
    Ensure the site loads correctly and check the console for any new warnings.

3.  **Build the project:**
    ```bash
    npm run build
    ```
    This confirms that the production build works with the new React version.

## Troubleshooting

*   **Peer Dependency Errors:** If `npm install` fails with `ERESOLVE` errors, it usually means a plugin hasn't updated its peer dependencies to support React 19 yet. You can try updating that specific plugin or, as a temporary measure, run with `--legacy-peer-deps`.
*   **Hydration Errors:** React 19 is stricter about hydration. If you see errors in the console, check your custom components for mismatches between server-rendered HTML and client-side rendering.
