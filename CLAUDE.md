# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hugo-based static website for RestApiTutorial.com, an educational platform teaching REST API design, HTTP methods, status codes, and best practices.

## Build Commands

```bash
./bin/hugo server -D    # Run local dev server with drafts enabled
./bin/hugo              # Build production site to public/
./bin/hugo --minify     # Build with minification
```

Hugo v0.147.7 is vendored in `tools/hugo/`. The `bin/hugo` wrapper script executes it. No npm or external build tools required.

## Project Structure

- `content/` - Hugo markdown pages with YAML front matter
- `layouts/` - Site-specific theme overrides (partials for ads, headers, footers)
- `themes/hugo-theme-relearn/` - Git submodule (v8.3.0)
- `static/` - Assets copied verbatim (images, CSS, robots.txt)
- `media/` - Downloadable book formats (PDF/ePub/Mobi/ODT)
- `public/` - Generated output (do not edit)
- `config.toml` - Hugo site configuration

## Content Guidelines

All content uses YAML front matter:
```yaml
---
title: "Page Title"
description: "SEO description"
weight: 1              # Navigation order
tags: ["tag1", "tag2"] # Optional
disableTopAd: false    # Optional: disable ads
disableBottomAd: false
---
```

- Use sentence case for headings
- Filenames: lowercase, no spaces, descriptive
- New sections require `_index.md` with `weight` for navigation order
- Available shortcodes: `{{% notice info "Title" %}}`, tabs, expand, icon (from Relearn theme)

## Testing

No automated tests. Validate changes by running `hugo server -D` and checking rendered pages in browser.

## Version Constraints

- Hugo: v0.147.7 (locked - later versions may break the build)
- Theme: Hugo Relearn v8.3.0 (git submodule)

If Hugo is missing, download to `tools/hugo/` per instructions in README.md.
