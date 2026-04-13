# MyDrugs Mod Wiki

This repository is a static documentation site for the MyDrugs mod, built with **MkDocs** and hosted best on **GitHub Pages**.

## Local preview

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Then open the local address shown by MkDocs.

## Build the static site

```bash
pip install -r requirements.txt
mkdocs build
```

The generated HTML site will be written to `site/`.

## Publish on GitHub Pages

1. Create a GitHub repository and upload these files.
2. In the repository settings, enable **GitHub Pages** with **GitHub Actions** as the source.
3. Push to `main`.
4. The included workflow will build and publish the wiki automatically.

## Before publishing

Update these fields in `mkdocs.yml`:

- `site_url`
- `repo_name`
- `repo_url`

That is enough to get a clean public wiki online.
