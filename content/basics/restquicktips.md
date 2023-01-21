---
title: "REST Quick Tips"
date: 2022-06-06T16:58:56-06:00
weight: 20
---
Whether it's technically RESTful or not (according to the six constraints mentioned previously), here are a few recommended REST-like concepts. These six quick tips will result in better, more usable services.

## Use HTTP Methods to Make Requests Mean Something
{{% notice tip "Verb-Free URLs" %}}
API consumers are capable of sending GET, POST, PUT, PATCH and DELETE methods (or verbs), which greatly enhance the clarity of a given request.

Therefore, it is recommended that no verbs (action words) appear in the URL. Instead leverage the HTTP Methods to provide the verb.
{{% /notice %}}

Generally, the five primary HTTP methods are used as follows:

| Method | Description |
| ---- | ----------- |
| GET  | Read a specific resource (by an identifier) or a collection of resources.|
| PUT  | Replace a specific resource (by an identifier) or a collection of resources. Can also be used to create a specific resource if the resource identifier is known before-hand.|
| PATCH | Update a specific resource (by an identifier) or a collection of resources. This can be thought of in some ways as a 'partial update' vs the replace that PUT performs.|
| DELETE | Remove/delete a specific resource by an identifier. |
| POST | Create a new resource. Also a catch-all verb for operations that don't fit into the other categories. |

{{% notice warning "Safety" %}}
GET requests MUST not change any underlying resource data. Measurements and tracking which update data may still occur, but the resource identified by the URI MUST not change.
{{% /notice %}}

## Provide Sensible Resource Names
{{% notice tip "Art and Science" %}}
Producing a great API is 80% art and 20% science. Creating a URL hierarchy representing sensible resources is the art part. Having sensible resource names (which are just URL paths, such as /customers/12345/orders) improves the clarity of what a given request does. As humans are involved in understanding an API, this clarity counts.
{{% /notice %}}

Appropriate resource names provide context for a service request, increasing understandability of the API. Resources are viewed hierarchically via their URI names, offering consumers a friendly, easily-understood hierarchy of resources to leverage in their applications.

Here are some quick-hit rules for URL path (resource name) design:
* Use identifiers in your URLs instead of in the query-string. Using URL query-string parameters is fantastic for filtering, but not for resource names.
    * Good: /users/12345
    * Poor: /api?type=user&id=23
* Leverage the hierarchical nature of the URL to imply structure.
* Design for your clients, not for your data.
* Resource names should be nouns. Avoid verbs as resource names, to improve clarity. Use the HTTP methods to specify the verb portion of the request.
* Use plurals in URL segments to keep your API URIs consistent across all HTTP methods, using the collection metaphor.
    * Recommended: /customers/33245/orders/8769/lineitems/1
    * Not: /customer/33245/order/8769/lineitem/1
* Avoid using collection verbiage in URLs. For example 'customer_list' as a resource. Use pluralization to indicate the collection metaphor (e.g. customers vs. customer_list).
* Use lower-case in URL segments, separating words with underscores ('_') or hyphens ('-'). Some servers ignore case so it's best to be clear.
* Keep URLs as short as possible, with as few segments as makes sense.

## Use HTTP Response Codes to Indicate Status
Response status codes are part of the HTTP specification. There are quite a number of them to address the most common situations. In the spirit of having our RESTful services embrace the HTTP specification, our Web APIs should return relevant HTTP status codes. For example, when a resource is successfully created (e.g. from a POST request), the API should return HTTP status code 201. A list of valid HTTP status codes is available here which lists detailed descriptions of each.

Suggested usages for the "Top 10" HTTP Response Status Codes are as follows:

| Status Code | Description |
| ----------- | ----------- |
| 200 OK      | General success status code. This is the most common code. Used to indicate success. |
| 201 CREATED | Successful creation occurred (via either POST or PUT). Set the Location header to contain a link to the newly-created resource (on POST). Response body content may or may not be present. |
| 204 NO CONTENT | Indicates success but nothing is in the response body, often used for DELETE and PUT operations. |
| 400 BAD REQUEST | General error for when fulfilling the request would cause an invalid state. Domain validation errors, missing data, etc. are some examples. |
| 401 UNAUTHORIZED | Error code response for missing or invalid authentication token. |
| 403 FORBIDDEN | Error code for when the user is not authorized to perform the operation or the resource is unavailable for some reason (e.g. time constraints, etc.). |
| 404 NOT FOUND | Used when the requested resource is not found, whether it doesn't exist or if there was a 401 or 403 that, for security reasons, the service wants to mask. |
| 405 METHOD NOT ALLOWED | Used to indicate that the requested URL exists, but the requested HTTP method is not applicable. For example, POST /users/12345 where the API doesn't support creation of resources this way (with a provided ID). The Allow HTTP header must be set when returning a 405 to indicate the HTTP methods that are supported. In the previous case, the header would look like "Allow: GET, PUT, DELETE" |
| 409 CONFLICT | Whenever a resource conflict would be caused by fulfilling the request. Duplicate entries, such as trying to create two customers with the same information, and deleting root objects when cascade-delete is not supported are a couple of examples. |
| 500 INTERNAL SERVER ERROR | __Never return this intentionally.__ The general catch-all error when the server-side throws an exception. Use this only for errors that the consumer cannot address from their end. |

## Support JSON
Favor JSON support unless you're in a highly-standardized and regulated industry that requires XML, schema validation and namespaces. If you must provide both JSON and XML let consumers switch between formats using the HTTP `Accept` header: `application/json` or `application/xml`.

Be aware that as soon as we start talking about XML support, we start talking about schemas for validation, namespaces, etc. Unless required by your industry, avoid supporting all that complexity initially, if ever. JSON is designed to be simple, fairly terse and functional.

## Create Fine-Grained Resources
When starting out, it's best to create APIs that mimic the underlying application domain or database architecture of your system. Eventually, you'll want aggregate services that utilize multiple underlying resources to reduce chattiness. However, it's much easier to create larger resources later from individual resources than it is to create fine-grained or individual resources from larger aggregates. Make it easy on yourself and start with small, easily defined resources, providing CRUD functionality on those. You can create those use-case-oriented, chattiness-reducing resources later.

## Consider Connectedness
One of the principles of REST is connectedness—via hypermedia links (search HATEOAS). While services are still useful without them, APIs become more self-descriptive and discoverable when links are returned in the response. At the very least, a 'self' link reference informs clients how the data was or can be retrieved. Additionally, utilize the HTTP Location header to contain a link on resource creation via POST (or PUT). For collections returned in a response that support pagination, 'first', 'last', 'next' and 'prev' links at a minimum are very helpful.

Regarding linking formats, there are many. The HTTP Web Linking Specification (RFC5988) explains a link as follows:

> a link is a typed connection between two resources that are identified by Internationalised Resource Identifiers (IRIs) [RFC3987], and is comprised of:
> * A context IRI,
> * a link relation type
> * a target IRI, and
> * optionally, target attributes.
>
> A link can be viewed as a statement of the form "{context IRI} has a {relation type} resource at {target IRI}, which has {target attributes}."

At the very least, place links in the HTTP Link header as recommended in the specification, or embrace a JSON representation of this HTTP link style (such as Atom-style links, see: RFC4287) in your JSON representations. Later, you can layer in more complex linking styles such as HAL+JSON, Siren, Collection+JSON, and/or JSON-LD, etc. as your REST APIs become more mature.