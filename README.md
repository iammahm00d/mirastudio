# MiraStudio — GitHub Pages Source

This is the final GitHub Pages version of the MiraStudio website.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- React Helmet Async
- Framer Motion
- lucide-react

## Deploy on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files from this folder to the repository.
3. Commit to the `main` branch.
4. Go to **Settings > Pages**.
5. Under **Build and deployment**, set **Source** to **GitHub Actions**.
6. The included workflow at `.github/workflows/deploy.yml` will build and publish the site.

## No custom domain required

The Vite base path is configured automatically in `vite.config.ts` during GitHub Actions builds.

For a normal project repository, your website will be available at:

```txt
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

For a user or organization Pages repository named `YOUR_USERNAME.github.io`, the site will use the root path automatically.

## Client-side routing support

This package includes a GitHub Pages SPA fallback:

- `public/404.html`
- a small restore script in `index.html`

That prevents direct refreshes like `/services/brand-development` from breaking on GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production output is generated in `dist/`.
