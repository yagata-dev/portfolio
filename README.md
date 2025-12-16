# Portfolio Website

Minoru Yoshida's personal portfolio website built with Astro.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 🚀 Deployment

This site is configured for automatic deployment to GitHub Pages when changes are pushed to the `main` branch.

**⚠️ Important:** Before the first deployment, you must enable GitHub Pages in your repository settings. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed setup instructions.

The deployment workflow:

1. Builds the site using `npm run build`
2. Uploads the `dist/` folder as an artifact
3. Deploys to GitHub Pages at https://yagata-dev.github.io/portfolio

To manually trigger a deployment, go to the Actions tab in GitHub and run the "Deploy to GitHub Pages" workflow.
