---
title: "Responses"
description: "How REST APIs should structure responses, status codes, headers, and bodies."
summary: "How REST APIs should structure responses and status codes."
tags:
  - responses
  - http-status-codes
  - headers
  - responses
  - error-handling
categories:
  - responses
draft: false
---

In a REST API, HTTP responses are how the server communicates the result of a client’s request. Each response contains a **status code**, headers, and optionally, a body.

The **status code** informs the client of the outcome—whether the request was successful, resulted in an error, or requires further action. REST APIs __should__ rely on standard HTTP status codes to signal success (2xx), client errors (4xx), and server errors (5xx).

The **headers** provide additional information like content type or caching details _about_ the body.

The response **body** (if present) __should__ include the data requested by the client, such as JSON or XML objects, plus error messages, or other relevant information indicating the outcome of the request.

Clear and consistent HTTP responses are critical for ensuring that clients can correctly interpret and respond to the server's feedback.

See also: [HTTP Status Codes and Retry](/advanced/responses/retries.html)
