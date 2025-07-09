# Catalog

This repository contains a simple static affiliate product catalog website.

Open `index.html` to browse recommended products. Individual product pages contain affiliate links and structured data to help search engines and chatbots understand the content. The home page now includes Open Graph metadata, a canonical link, and an ItemList JSON-LD block listing all products.

Images are loaded from placeholder URLs so no binary assets are stored in the repository.

## Deployment on GitHub Pages

1. Create a new repository on GitHub and push the contents of this project.
2. In the repository **Settings** > **Pages**, choose the `main` branch as the source and set the folder to `/` (root).
3. (Optional) Add a `.nojekyll` file to bypass Jekyll processing.
4. Update `sitemap.xml` and `robots.txt` with the final domain GitHub provides (e.g. `https://<user>.github.io/<repo>/`).
5. Commit and push all changes. GitHub Pages will build and host the site automatically.

Visit the generated URL to see your catalog live.
