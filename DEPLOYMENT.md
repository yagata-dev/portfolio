# Deployment Guide

## GitHub Pages Setup

To deploy this portfolio website to GitHub Pages, you need to enable GitHub Pages in your repository settings. Follow these steps:

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/yagata-dev/portfolio
2. Click on **Settings** (in the repository menu)
3. Scroll down to the **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions** from the dropdown menu
5. Click **Save**

### Step 2: Verify Deployment

After enabling GitHub Pages:

1. Go to the **Actions** tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete successfully
4. Your site will be available at: https://yagata-dev.github.io/portfolio

### Custom Domain Configuration

This repository is configured to use the custom domain `minoruyoshida.net`. To set this up:

1. In the **Pages** settings, under **Custom domain**, enter: `minoruyoshida.net`
2. Click **Save**
3. Configure your DNS provider to point to GitHub Pages:
   - Add a CNAME record pointing `minoruyoshida.net` to `yagata-dev.github.io`
   - Or add A records pointing to GitHub Pages IPs (see [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site))

## Troubleshooting

### Deployment fails with 404 error

If you see an error like:
```
Error: Failed to create deployment (status: 404)
Ensure GitHub Pages has been enabled
```

This means GitHub Pages is not enabled yet. Follow Step 1 above to enable it.

### Files with underscores not loading

The `.nojekyll` file in the `public/` directory ensures that GitHub Pages properly serves files with underscores (like the `_astro/` directory). This file is automatically included in the build.

### Workflow Configuration

The deployment workflow is configured in `.github/workflows/deploy.yml` and will automatically:
- Run on every push to the `main` branch
- Build the Astro site
- Deploy to GitHub Pages

You can also manually trigger the deployment from the Actions tab using the "Run workflow" button.

## What Was Fixed

This repository had deployment issues that have been resolved:

1. **Missing `.nojekyll` file** - Added to ensure GitHub Pages serves files with underscores (like `_astro/` directory)
2. **Incorrect asset paths** - All asset paths (favicon, logos) now correctly include the `/portfolio` base URL
3. **Documentation** - Added comprehensive deployment instructions

The main issue preventing deployment is that GitHub Pages needs to be enabled in the repository settings (see Step 1 above).
