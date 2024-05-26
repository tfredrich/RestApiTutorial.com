---
title: "What is REST?"
date: 2022-06-06T16:35:40-06:00
weight: 10
---
The term RESTful APIs or RESTful services is a hot topic. So what is REST? And how do we create a so-called RESTful API? Good question! Let's talk about this often misunderstood phrase...

{{% notice info "A Loose Definition" %}}
When someone says, "REST service," "REST API" or "RESTful API" they more-than-likely mean an HTTP or Web-based server that accepts requests over HTTP and responds in human-readable JSON.

Yep, that really is it. But there are a lot of nuances--read on to discover more details!
{{% /notice %}}

Technically, REST is an acronym for "REpresentational State Transfer" which is simply an architectural style originally written about by Roy Fielding in his doctoral dissertation (see https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm). You can read more details about the six contraints here, but first I want to give you a brief overview of what people mean when they say "REST."

To be clear, the constraints in Roy Fielding's dissertation MUST be met in order for a service to be technically RESTful. And the REST constraints do not specify a communication protocol. However, at this point the term is used very loosely and in today's Internet world, RESTful almost always means an HTTP-based API. That means it operates in a request-response fashion over HTTP, usually using JSON as the data format in the request and response bodies. Though there are a lot of nuances, it's really just that simple!

In other words, the caller (or client):
* Makes an HTTP request to a URL...
    * Using one of the standard HTTP methods (GET, PUT, POST, PATCH, DELETE, etc.)...
    * With some content (usually JSON) in the body...
* And waits for a response, which:
    * Indicates status via an HTTP response code
    * And usually has more JSON in the body.

For example, say we wanted to search iTunes for RadioHead songs. We would call the iTunes Search API (See: https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html).

We can use 'curl' on the command-line as follows. In this case all the query-string paremeters on the URL are simply telling the search API what term to search for (radiohead), how many results we want returned (3), and the type of media (music):
```bash
curl -i 'https://itunes.apple.com/search?term=radiohead&media=music&limit=3'
```

Which returns the following JSON response:

```json
{
   "resultCount":3,
   "results":[
      {
         "wrapperType":"track",
         "kind":"song",
         "artistId":657515,
         "collectionId":1109714933,
         "trackId":1109715066,
         "artistName":"Radiohead",
         "collectionName":"In Rainbows",
         "trackName":"15 Step",
         "collectionCensoredName":"In Rainbows",
         "trackCensoredName":"15 Step",
         "artistViewUrl":"https://music.apple.com/us/artist/radiohead/657515?uo=4",
         "collectionViewUrl":"https://music.apple.com/us/album/15-step/1109714933?i=1109715066&uo=4",
         "trackViewUrl":"https://music.apple.com/us/album/15-step/1109714933?i=1109715066&uo=4",
         "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/af/72/85/af728523-8048-4a8b-9e13-e8f4f64e9d69/mzaf_8205306206851675436.plus.aac.p.m4a",
         "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9a/4f/8a/9a4f8a4b-0254-d5ab-74b5-ebe39bbbe85d/634904032463.png/30x30bb.jpg",
         "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9a/4f/8a/9a4f8a4b-0254-d5ab-74b5-ebe39bbbe85d/634904032463.png/60x60bb.jpg",
         "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9a/4f/8a/9a4f8a4b-0254-d5ab-74b5-ebe39bbbe85d/634904032463.png/100x100bb.jpg",
         "collectionPrice":9.99,
         "trackPrice":1.29,
         "releaseDate":"2007-10-10T07:00:00Z",
         "collectionExplicitness":"notExplicit",
         "trackExplicitness":"notExplicit",
         "discCount":1,
         "discNumber":1,
         "trackCount":10,
         "trackNumber":1,
         "trackTimeMillis":237293,
         "country":"USA",
         "currency":"USD",
         "primaryGenreName":"Alternative",
         "isStreamable":true
      },
      {
         "wrapperType":"track",
         "kind":"song",
         "artistId":657515,
         "collectionId":1109714933,
         "trackId":1109715161,
         "artistName":"Radiohead",
         "collectionName":"In Rainbows",
         "trackName":"Bodysnatchers",
         "collectionCensoredName":"In Rainbows",
         "trackCensoredName":"Bodysnatchers",
         "artistViewUrl":"https://music.apple.com/us/artist/radiohead/657515?uo=4",
         "collectionViewUrl":"https://music.apple.com/us/album/bodysnatchers/1109714933?i=1109715161&uo=4",
         "trackViewUrl":"https://music.apple.com/us/album/bodysnatchers/1109714933?i=1109715161&uo=4",
         "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ba/e4/ac/bae4ac59-3bfa-e4b9-4f4c-03f667324fc0/mzaf_14837742185575446625.plus.aac.p.m4a",
         "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9a/4f/8a/9a4f8a4b-0254-d5ab-74b5-ebe39bbbe85d/634904032463.png/30x30bb.jpg",
         "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9a/4f/8a/9a4f8a4b-0254-d5ab-74b5-ebe39bbbe85d/634904032463.png/60x60bb.jpg",
         "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9a/4f/8a/9a4f8a4b-0254-d5ab-74b5-ebe39bbbe85d/634904032463.png/100x100bb.jpg",
         "collectionPrice":9.99,
         "trackPrice":1.29,
         "releaseDate":"2007-10-10T07:00:00Z",
         "collectionExplicitness":"notExplicit",
         "trackExplicitness":"notExplicit",
         "discCount":1,
         "discNumber":1,
         "trackCount":10,
         "trackNumber":2,
         "trackTimeMillis":242293,
         "country":"USA",
         "currency":"USD",
         "primaryGenreName":"Alternative",
         "isStreamable":true
      },
      {
         "wrapperType":"track",
         "kind":"song",
         "artistId":657515,
         "collectionId":1109714933,
         "trackId":1109715168,
         "artistName":"Radiohead",
         "collectionName":"In Rainbows",
         "trackName":"Weird Fishes / Arpeggi",
         "collectionCensoredName":"In Rainbows",
         "trackCensoredName":"Weird Fishes / Arpeggi",
         "artistViewUrl":"https://music.apple.com/us/artist/radiohead/657515?uo=4",
         "collectionViewUrl":"https://music.apple.com/us/album/weird-fishes-arpeggi/1109714933?i=1109715168&uo=4",
         "trackViewUrl":"https://music.apple.com/us/album/weird-fishes-arpeggi/1109714933?i=1109715168&uo=4",
         "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/6c/e9/79/6ce9792e-c06a-b49b-6efe-60b96a690af8/mzaf_5478326228427438939.plus.aac.p.m4a",
         "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9a/4f/8a/9a4f8a4b-0254-d5ab-74b5-ebe39bbbe85d/634904032463.png/30x30bb.jpg",
         "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9a/4f/8a/9a4f8a4b-0254-d5ab-74b5-ebe39bbbe85d/634904032463.png/60x60bb.jpg",
         "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9a/4f/8a/9a4f8a4b-0254-d5ab-74b5-ebe39bbbe85d/634904032463.png/100x100bb.jpg",
         "collectionPrice":9.99,
         "trackPrice":1.29,
         "releaseDate":"2007-10-10T07:00:00Z",
         "collectionExplicitness":"notExplicit",
         "trackExplicitness":"notExplicit",
         "discCount":1,
         "discNumber":1,
         "trackCount":10,
         "trackNumber":4,
         "trackTimeMillis":318187,
         "country":"USA",
         "currency":"USD",
         "primaryGenreName":"Alternative",
         "isStreamable":true
      }
   ]
}
```
----
* Previous: [Introduction](/introduction.html)
* Next: [The Six Constraints](/introduction/restconstraints.html)