# MyDrugs Mod Wiki

This repository contains a MkDocs-based wiki for the uploaded MyDrugs mod snapshot.

## Local preview

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Then open the local URL shown in the terminal.

On Windows PowerShell, activate the environment with:

```powershell
.venv\Scripts\Activate.ps1
```

## Publishing on GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Set **Build and deployment → Source** to **GitHub Actions**.
4. Push to `main` or rerun the workflow in **Actions**.

The site configuration already points at:

- `site_url: https://AsarixLeDev.github.io/mydrugs-wiki/`
- `repo_url: https://github.com/AsarixLeDev/mydrugs-wiki`

## Snapshot note

This wiki documents the uploaded snapshot, including systems that are implemented in code and assets but not yet fully obtainable in survival through the current recipe set.
