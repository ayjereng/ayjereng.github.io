# UC Berkeley Demography website

This folder contains the complete static website build. Open `index.html` through a local web server, or publish the folder with GitHub Pages.

## Preview locally

From this folder, run:

```bash
python3 -m http.server 4173
```

Then open <http://127.0.0.1:4173/>.

## Publish with GitHub Pages

1. Create an empty repository named `YOUR-USERNAME.github.io`. Using this name publishes the site at the domain root, which matches the website's existing links.
2. In this folder, run the commands below, replacing `YOUR-USERNAME`.

```bash
git init -b main
git add .
git commit -m "Add Demography website"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose **main**, select **/(root)**, and click **Save**.

GitHub will publish the site at `https://YOUR-USERNAME.github.io/` after deployment finishes.

If that repository name is already in use, the website can instead be adapted for a project URL such as `https://YOUR-USERNAME.github.io/demography/` or connected to a custom domain.

## Structure

- `index.html`: undergraduate minor landing page
- `department/index.html`: department landing page
- Other page folders: department pages with their original content
- `assets/` and `department-assets/`: local images, fonts, and supporting files
- Shared `.css` and `.js` files: site styling and navigation

This is a static website. It does not include the original WordPress administration area, database, or server-side forms. External destinations, the events calendar, embedded Google Map, and other third-party services still require internet access.
