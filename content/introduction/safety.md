---
title: "Safety"
weight: 60
---
Safety is defined in the HTTP specification as a method that does not modify resources on the server. When a client makes a request using a safe method, it should not incur any side effects on the server.  The HTTP methods that are considered "safe" are GET, HEAD, OPTIONS, and TRACE.

{{% notice warning "Keep **Safe** Methods Safe" %}}
Ensure API implementations maintain safety for GET, HEAD, OPTIONS, and TRACE HTTP methods.
{{% /notice %}}

The key benefit of using safe methods is that they are cacheable and [idempotent](idempotence.html). GET requests in particular can be cached to improve performance. That means multiple identical GET requests should return the same response. Safe methods are also idempotent, meaning making the same request multiple times produces the same result on the server side.

For APIs and web services, it's best practice to use safe methods whenever possible. For example, GET should be used for retrieving resources, OPTIONS can be used to retrieve metadata, etc. Unsafe methods like POST, PUT, PATCH, and DELETE modify data and therefore are not cacheable or [idempotent](idempotence.html). 

Keeping methods safe improves scalability, caching, and overall reliability of web services. It also prevents unintended consequences from clients accidentally sending non-idempotent requests multiple times. APIs designed with primarily safe methods are easier to cache and scale horizontally.

In summary, safe HTTP methods avoid modifying server state, which provides benefits like [idempotence](idempotence.html) and cacheability. Using safe methods correctly is an important aspect of API design. It improves performance, scalability, and prevents issues with non-idempotent requests from clients.

----
* Previous: [Idempotence](/introduction/idempotence.html)
* Next: [Chapter 2. Advanced API Design](/advanced.html)
