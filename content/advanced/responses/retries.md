---
title: "HTTP Status Codes and Retry"
description: "Which HTTP status codes should trigger automatic retries in API clients."
summary: "Which HTTP status codes should trigger retries."
weight: 10
---
## Status Codes Triggering Retry</h2>

Some HTTP status codes indicate temporary issues that may resolve over time, making them ideal candidates for automatic retries by a calling client. Implementing these retries enhances the resilience and reliability of distributed API systems.</p>

The HTTP status codes that should trigger an automatic retry include:</p>

- **408 (Request Timeout):** The server took too long to respond. Retrying may help.
- **429 (Too Many Requests):** Indicates rate-limiting. Retry after the delay specified in the _Retry-After_ header.
- **500 (Internal Server Error):** A server-side issue that may resolve itself. Retrying is optional.
- **502 (Bad Gateway):** Suggests a temporary network issue or service stack disruption that may self-correct.
- **503 (Service Unavailable):** May be due to temporary service outages or in-progress deployments.
- **504 (Gateway Timeout):** A downstream server (e.g., DNS) didn't respond in time. Retrying may resolve the issue.

Implementing retries for these status codes (ideally with exponential back-off and retry limits) improves an application's ability to handle network hiccups and temporary server errors. The trade-off is additional latency. API gateways and other elements of the stack may limit how long a client can wait.

## Status Codes That Should Not Trigger Retry

Some HTTP status codes represent permanent errors or client-side issues that automatic retries cannot resolve. In such cases, automatically retrying the request leads to unnecessary resource consumption or even worsen the situation. These include:</p>

- **400 (Bad Request):** The client sent an invalid request. Fix the issue in the request before trying again.
- **401 (Unauthorized):** Authentication is required or failed. Fix the authentication issue before trying again (e.g. get a fresh token).
- **403 (Forbidden):** The client lacks permission to access the resource. Retrying will not change the server's response. Fix the authorization issue such as getting a new a token with additional scopes before trying again.
- **404 (Not Found):** The requested resource does not exist. Retrying will not succeed _unless the resource becomes available later_ due to some background processing.
- **405 (Method Not Allowed):** The HTTP method used is not supported. Retrying with the same method will not resolve the issue.
- **409 (Conflict):** Indicates a conflict in the request such as unique constraints for referential integrity. Retrying without addressing the conflict will continue to fail.
- **422 (Unprocessable Entity):** The server understands the request but cannot process it due to semantic errors. Fix the issue in the request before trying again.

For these status codes, client-side adjustments or corrections are required before reattempting the request.
