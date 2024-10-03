---
title: "Idempotence"
date: 2024-05-31T10:25:40-06:00
weight: 50
---
{{< youtube 6dVNdFwqeKs >}}

Idempotence is a funky word that often hooks people. Idempotence is sometimes a confusing concept, at least from the academic definition.

From a RESTful service standpoint, for an operation (or service call) to be idempotent, clients can make that same call repeatedly while producing the same result. In other words, making multiple identical requests has the same effect as making a single request. Note that while idempotent operations produce the same result on the server (no side effects), the response itself may not be the same (e.g. a resource's state may change between requests).

The PUT and DELETE methods are defined to be idempotent. However, there is a caveat on DELETE. The problem with DELETE, which if successful would normally return a 200 (OK) or 204 (No Content), will often return a 404 (Not Found) on subsequent calls, unless the service is configured to "mark" resources for deletion without actually deleting them. However, when the service actually deletes the resource, the next call will not find the resource to delete it and return a 404. However, the state on the server is the same after each DELETE call, but the response is different.

{{% notice warning "Keep **Idempotent** Methods Idempotent" %}}
Ensure API implementations maintain idempotence for PUT and DELETE HTTP methods.
{{% /notice %}}

GET, HEAD, OPTIONS and TRACE methods are defined as [safe](safety.html), meaning they are only intended for retrieving data (and, therefore, do not modify that data). This makes them idempotent as well since multiple, identical requests will behave the same.

----
* Previous: [Resource Naming](/introduction/resourcenaming.html)
* Next: [Safety](/introduction/safety.html)
