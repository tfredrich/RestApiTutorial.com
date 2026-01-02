# Repository Guidelines

## Project Structure & Module Organization
- `content/` holds the Hugo pages and section indexes (`_index.md`).
- `layouts/` contains site-specific layout overrides for the theme.
- `themes/` includes the `hugo-theme-relearn` theme source.
- `static/` is for site assets copied verbatim (images, manifests, ads.txt).
- `media/` stores downloadable book formats (PDF/ePub/Mobi/ODT).
- `public/` is the generated site output; do not edit by hand.

## Build, Test, and Development Commands
- `hugo server -D` runs the local site with drafts enabled.
- `hugo` builds the production site into `public/`.
- `hugo --minify` builds with minification for release previews.

## Coding Style & Naming Conventions
- Content files are Markdown with YAML front matter (`title`, `date`, `weight`).
- Prefer sentence case headings and short, descriptive filenames (lowercase, no spaces).
- Use Hugo shortcodes consistently (e.g., `{{% notice info "Title" %}}`).

## Testing Guidelines
- No automated test suite is present. Validate changes by running `hugo server -D` and checking the rendered pages.

## Commit & Pull Request Guidelines
- Recent commits use short, sentence-case summaries (e.g., “Fix minor typo in httpmethods.md”).
- Keep commits focused to one content or layout change when possible.
- PRs should describe the affected pages, mention any navigation or config changes, and include screenshots or page URLs if the layout changes.

## Configuration Notes
- Site settings live in `config.toml`; update theme or menu entries there.
- When adding new sections, include a `_index.md` with `weight` to keep navigation order predictable.
