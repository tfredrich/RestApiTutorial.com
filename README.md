# RestApiTutorial.com

Hugo source for www.RestApiTutorial.com. This repo also contains the downloadable formats (PDF/ePub/Mobi/ODT) for the RESTful Best Practices document.

Project layout highlights:
- `content/` holds Hugo pages and section indexes.
- `layouts/` contains site-specific theme overrides.
- `static/` includes assets copied verbatim.
- `media/` stores the downloadable book formats.
- `public/` is generated output and should not be edited by hand.
- `tools/` contains internal (and local) tools for the project.

Contributor notes:
- Read `AGENTS.md` before making changes.
- This site uses the project-local `./bin/hugo` wrapper (vendored Hugo v0.147.7 in tools/hugo) and the Hugo-Relearn theme v8.3.0; later versions MAY break the build.
- Contributors MUST download Hugo into `tools/` before development.

Run the site locally:

```bash
./bin/hugo server -D
```

Download Hugo 0.147.7 into `tools/hugo` (macOS):

```bash
mkdir -p tools/hugo
curl -L -o /tmp/hugo_0.147.7.tar.gz https://github.com/gohugoio/hugo/releases/download/v0.147.7/hugo_extended_0.147.7_darwin-universal.tar.gz
tar -xzf /tmp/hugo_0.147.7.tar.gz -C tools/hugo
rm /tmp/hugo_0.147.7.tar.gz
```

Download Hugo 0.147.7 into `tools/hugo` (Linux x86_64):

```bash
mkdir -p tools/hugo
curl -L -o /tmp/hugo_0.147.7.tar.gz https://github.com/gohugoio/hugo/releases/download/v0.147.7/hugo_extended_0.147.7_linux-amd64.tar.gz
tar -xzf /tmp/hugo_0.147.7.tar.gz -C tools/hugo
rm /tmp/hugo_0.147.7.tar.gz
```

Download Hugo 0.147.7 into `tools/hugo` (Linux arm64):

```bash
mkdir -p tools/hugo
curl -L -o /tmp/hugo_0.147.7.tar.gz https://github.com/gohugoio/hugo/releases/download/v0.147.7/hugo_extended_0.147.7_linux-arm64.tar.gz
tar -xzf /tmp/hugo_0.147.7.tar.gz -C tools/hugo
rm /tmp/hugo_0.147.7.tar.gz
```

![alt Creative Commons License](http://i.creativecommons.org/l/by-sa/4.0/88x31.png)

This work by <a xmlns:cc="http://creativecommons.org/ns#" href="http://www.restapitutorial.com/" property="cc:attributionName" rel="cc:attributionURL">RestApiTutorial.com</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
