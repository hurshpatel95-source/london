# London 2026 field guide

A framework-free, mobile-first itinerary for 8–11 October 2026.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`. The site has no build step or package dependencies.

## Publish with GitHub Pages

Place these files at the root of a GitHub repository. In **Settings → Pages**, choose **Deploy from a branch**, then select the repository’s main branch and `/ (root)`. GitHub Pages will serve `index.html` directly. The included `.nojekyll` file keeps the static assets untouched.
