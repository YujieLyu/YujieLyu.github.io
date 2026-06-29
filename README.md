# YujieLyu.github.io

Public GitHub Pages deployment shell for Jessie's personal website.

The frontend source lives outside this repository in `jessie-site-frontend`. This repo intentionally contains only custom-domain/static support files, the generated `site/` artifact, and the Pages deployment workflow.

## Deploy flow

1. Build the private frontend project.
2. Sync the generated static files into `site/`.
3. Push this shell repo to `master`; GitHub Actions uploads `site/` to GitHub Pages.

For local sibling checkouts, run this from `../jessie-site-frontend`:

```sh
npm run sync:shell
```
