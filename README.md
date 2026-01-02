HUGO source code for www.RestApiTutorial.com.

Also includes the PDF, ePub and Mobi (Kindle) versions of the associated RESTful Best Practices document.  In addition, the Libre/Open Office version of the source document is included in the 'media' directory.

This site uses the project-local `./bin/hugo` wrapper (vendored Hugo v0.126.1 in tools/hugo) and the Hugo-Relearn theme v7.0.1; later versions will break the build (needs upgrading). Contributors MUST download Hugo into `tools/` before development.

Download Hugo 0.126.1 into `tools/hugo`:

```bash
mkdir -p tools/hugo
curl -L -o /tmp/hugo_0.126.1.tar.gz https://github.com/gohugoio/hugo/releases/download/v0.126.1/hugo_extended_0.126.1_darwin-universal.tar.gz
tar -xzf /tmp/hugo_0.126.1.tar.gz -C tools/hugo
rm /tmp/hugo_0.126.1.tar.gz
```

![alt Creative Commons License](http://i.creativecommons.org/l/by-sa/4.0/88x31.png)

This work by <a xmlns:cc="http://creativecommons.org/ns#" href="http://www.restapitutorial.com/" property="cc:attributionName" rel="cc:attributionURL">RestApiTutorial.com</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
