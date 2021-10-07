# portfolio-site-v2-client

## Summary

portfolio-site-v2-client uses React, TypeScript, and Material UI.

View my live site at [CamCobb.com](https://camcobb.com)

## Getting Started

1. `npm install`
2. `npm start`

## Recommended VS Code Configuration

It is recommended that you add these settings to your `settings.json` file in VS Code

```
"editor.formatOnSave": true,
"workbench.editor.enablePreview": false,
"editor.codeActionsOnSave": {
  "source.organizeImports": true
}
```

## Practices

Refer to `tsconfig.json` and `tslint.json` for syntax and coding practices. Other practices include:

- Named exports
- ES6 arrow functions
- Ending semicolon
- Ordered imports
- Functional components (React Hooks)
- Alt attribute with all images
- Meaningful/proper HTML tags (`<section>`, `<article>`, `<h1>`, `<h2>`...)
- No Higher Order Components (HOC)
- Limit inline styles
- Use `rem`, `em`, or percentages for CSS styling and font sizes (refer to `index.css` for root font size)
- Limit use of pixels (`px`) for CSS styling
- Use React's `<Link>` from `react-router-dom` instead of `<a>` tags when navigating to different routes
- Import React hooks and components instead of `React.useEffect`, `React.useState`...

#### Other references

- [HTML Best Practices](https://github.com/hail2u/html-best-practices)
- [Why you shouldn't use pixels](https://engageinteractive.co.uk/blog/em-vs-rem-vs-px#:~:text=A%20typical%20method%20is%20to,rem%20would%20now%20equal%2020px.)
