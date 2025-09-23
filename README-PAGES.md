GitHub Pages deployment

This repository contains a Vite app in the `chronicleos/` subfolder. The workflow `.github/workflows/pages.yml` builds the app from that folder and deploys `chronicleos/dist` to GitHub Pages.

A `CNAME` file is present at the repo root with `www.chronicleos.com`. Ensure your DNS matches GitHub Pages requirements and wait for the DNS check to complete in GitHub Pages settings.
