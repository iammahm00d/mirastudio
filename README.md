# MiraStudio — GitHub Pages Source

This package is ready for GitHub Pages. It does not require a custom domain and does not require you to edit the repository name in the code.

## Deploy

1. Create a new GitHub repository.
2. Upload all files from this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to the `main` branch.
6. GitHub Actions will build and deploy the site.

Your site will open at:

```txt
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

Internal pages use hash routes for maximum GitHub Pages compatibility:

```txt
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/#/about
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/#/services/brand-development
```

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production files will be generated inside `dist/`.
