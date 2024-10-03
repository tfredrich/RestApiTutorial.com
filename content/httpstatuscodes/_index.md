+++
title = "HTTP Status Codes"
weight = 40
date = 2024-05-31T10:25:40-06:00
+++
This page is created from HTTP status code information found at [ietf.org](https://www.ietf.org/assignments/http-status-codes/http-status-codes.xml) and [Wikipedia](https://en.wikipedia.org/wiki/HTTP_status_code). Click on the category heading or the status code link to read more.

## 1xx Informational
This class of status code indicates a provisional response, consisting only of the Status-Line and optional headers, and is terminated by an empty line. There are no required headers for this class of status code. Since `HTTP/1.0` did not define any `1xx` status codes, servers MUST NOT send a `1xx` response to an `HTTP/1.0` client except under experimental conditions.

A client MUST be prepared to accept one or more `1xx` status responses prior to a regular response, even if the client does not expect a `100 (Continue)` status message. Unexpected `1xx` status responses MAY be ignored by a user agent.

Proxies MUST forward `1xx` responses, unless the connection between the proxy and its client has been closed, or unless the proxy itself requested the generation of the `1xx` response. (For example, if a proxy adds a `Expect: 100-continue` field when it forwards a request, then it need not forward the corresponding `100 (Continue)` response(s).)

{{% expand "100 Continue" %}}
The client SHOULD continue with its request. This interim response is used to inform the client that the initial part of the request has been received and has not yet been rejected by the server. The client SHOULD continue by sending the remainder of the request or, if the request has already been completed, ignore this response. The server MUST send a final response after the request has been completed. See [section 8.2.3] for detailed discussion of the use and handling of this status code.

This means that the server has received the request headers, and that the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a `POST` request). If the request body is large, sending it to a server when a request has already been rejected based upon inappropriate headers is inefficient. To have a server check if the request could be accepted based on the request's headers alone, a client must send `Expect: 100-continue` as a header in its initial request and check if a `100 Continue` status code is received in response before continuing (or receive `417 Expectation Failed` and not continue).
{{% /expand %}}

{{% expand "101 Switching Protocols" %}}
This means the requester has asked the server to switch protocols and the server is acknowledging that it will do so.

The server understands and is willing to comply with the client's request, via the Upgrade message header field (section 14.42), for a change in the application protocol being used on this connection. The server will switch protocols to those defined by the response's Upgrade header field immediately after the empty line which terminates the `101` response.

The protocol SHOULD be switched only when it is advantageous to do so. For example, switching to a newer version of `HTTP` is advantageous over older versions, and switching to a real-time, synchronous protocol might be advantageous when delivering resources that use such features.
{{% /expand %}}

{{% expand "102 Processing (WebDAV)" %}}
The `102 (Processing)` status code is an interim response used to inform the client that the server has accepted the complete request, but has not yet completed it. This status code SHOULD only be sent when the server has a reasonable expectation that the request will take significant time to complete. As guidance, if a method is taking longer than 20 seconds (a reasonable, but arbitrary value) to process the server SHOULD return a `102 (Processing)` response. The server MUST send a final response after the request has been completed.

Methods can potentially take a long period of time to process, especially methods that support the Depth header. In such cases the client may time-out the connection while waiting for a response. To prevent this the server may return a `102 (Processing)` status code to indicate to the client that the server is still processing the method.

As a `WebDAV` request may contain many sub-requests involving file operations, it may take a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet. This prevents the client from timing out and assuming the request was lost.
{{% /expand %}}

## 2xx Success
This class of status codes indicates the action requested by the client was received, understood, accepted, and processed successfully.

{{% expand "★ 200 OK" %}}
General status code. Most common code used to indicate success.

The request has succeeded. The information returned with the response is dependent on the method used in the request, for example:
- `GET` an entity corresponding to the requested resource is sent in the response.
- `HEAD` the entity-header fields corresponding to the requested resource are sent in the response without any message-body.
- `POST` an entity describing or containing the result of the action,
- `TRACE` an entity containing the request message as received by the end server.
{{% /expand %}}

{{% expand "★ 201 Created" %}}
Successful creation occurred (via either POST or PUT). Set the Location header to contain a link to the newly-created resource (on POST). Response body content may or may not be present.

The request has been fulfilled and resulted in a new resource being created. The newly created resource can be referenced by the URI(s) returned in the entity of the response, with the most specific URI for the resource given by a Location header field. The response SHOULD include an entity containing a list of resource characteristics and location(s) from which the user or user agent can choose the one most appropriate. The entity format is specified by the media type given in the Content-Type header field. The origin server MUST create the resource before returning the 201 status code. If the action cannot be carried out immediately, the server SHOULD respond with 202 (Accepted) response instead.

A 201 response MAY contain an ETag response header field indicating the current value of the entity tag for the requested variant just created, see section 14.19.</p>
{{% /expand %}}

{{% expand "202 Accepted" %}}
The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place. There is no facility for re-sending a status code from an asynchronous operation such as this.

The 202 response is intentionally non-committal. Its purpose is to allow a server to accept a request for some other process (perhaps a batch-oriented process that is only run once per day) without requiring that the user agent's connection to the server persist until the process is completed. The entity returned with this response SHOULD include an indication of the request's current status and either a pointer to a status monitor or some estimate of when the user can expect the request to be fulfilled.
{{% /expand %}}

{{% expand "203 Non-Authoritative Information" %}}
The server successfully processed the request, but is returning information that may be from another source.

The returned metainformation in the entity-header is not the definitive set as available from the origin server, but is gathered from a local or a third-party copy. The set presented MAY be a subset or superset of the original version. For example, including local annotation information about the resource might result in a superset of the metainformation known by the origin server. Use of this response code is not required and is only appropriate when the response would otherwise be 200 (OK).

Not present in HTTP/1.0: available since HTTP/1.1
{{% /expand %}}

{{% expand "★ 204 No Content" %}}
Status when nothing is in the response body (e.g. DELETE). The server successfully processed the request, but is not returning any content.

The server has fulfilled the request but does not need to return an entity-body, and might want to return updated metainformation. The response MAY include new or updated metainformation in the form of entity-headers, which if present SHOULD be associated with the requested variant.

If the client is a user agent, it SHOULD NOT change its document view from that which caused the request to be sent. This response is primarily intended to allow input for actions to take place without causing a change to the user agent's active document view, although any new or updated metainformation SHOULD be applied to the document currently in the user agent's active view.

The 204 response MUST NOT include a message-body, and thus is always terminated by the first empty line after the header fields.
{{% /expand %}}

{{% expand "205 Reset Content" %}}
The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.

The server has fulfilled the request and the user agent SHOULD reset the document view which caused the request to be sent. This response is primarily intended to allow input for actions to take place via user input, followed by a clearing of the form in which the input is given so that the user can easily initiate another input action. The response MUST NOT include an entity.
{{% /expand %}}

{{% expand "206 Partial Content" %}}
The server is delivering only part of the resource due to a range header sent by the client. The range header is used by tools like wget to enable resuming of interrupted downloads, or split a download into multiple simultaneous streams. The request MUST have included a Range header field (section 14.35) indicating the desired range, and MAY have included an If-Range header field (section 14.27) to make the request conditional.

The response MUST include the following header fields:
- Either a Content-Range header field (section 14.16) indicating the range included with this response, or a multipart/byteranges Content-Type including Content-Range fields for each part. If a Content-Length header field is present in the response, its value MUST match the actual number of OCTETs transmitted in the message-body.
- Date
- ETag and/or Content-Location, if the header would have been sent in a 200 response to the same request
- Expires, Cache-Control, and/or Vary, if the field-value might differ from that sent in any previous response for the same variant

If the 206 response is the result of an If-Range request that used a strong cache validator (see section 13.3.3), the response SHOULD NOT include other entity-headers. If the response is the result of an If-Range request that used a weak validator, the response MUST NOT include other entity-headers; this prevents inconsistencies between cached entity-bodies and updated headers. Otherwise, the response MUST include all of the entity-headers that would have been returned with a 200 (OK) response to the same request.

A cache MUST NOT combine a 206 response with other previously cached content if the ETag or Last-Modified headers do not match exactly, see 13.5.4.</p>
A cache that does not support the Range and Content-Range headers MUST NOT cache 206 (Partial) responses.</p>
{{% /expand %}}

{{% expand "207 Multi-Status (WebDAV)" %}}
The message response body contains an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.

The 207 (Multi-Status) status code provides status for multiple independent operations (see section 11 for more information).
{{% /expand %}}

{{% expand "208 Already Reported (WebDAV)" %}}
The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.

The 208 (Already Reported) status code can be used inside a DAV: propstat response element to avoid enumerating the internal members of multiple bindings to the same collection repeatedly.  For each binding to a collection inside the request's scope, only one will be reported with a 200 status, while subsequent DAV:response elements for all other bindings will use the 208 status, and no DAV:response elements for their descendants are included.
{{% /expand %}}

{{% expand "226 IM Used" %}}
The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.  The actual current instance might not be available except by combining this response with other previous or future responses, as appropriate for the specific instance-manipulation(s).  If so, the headers of the resulting instance are the result of combining the headers from the status-226 response and the other instances, following the rules in section 13.5.3 of the HTTP/1.1 specification.

The request MUST have included an A-IM header field listing at least one instance-manipulation.  The response MUST include an Etag header field giving the entity tag of the current instance.

A response received with a status code of 226 MAY be stored by a cache and used in reply to a subsequent request, subject to the HTTP expiration mechanism and any Cache-Control headers, and to the requirements in section 10.6.

A response received with a status code of 226 MAY be used by a cache, in conjunction with a cache entry for the base instance, to create a cache entry for the current instance.
{{% /expand %}}

## 3xx Redirection
This class of status code indicates that further action needs to be taken by the client in order to fulfill the request. The action required MAY be carried out by the user agent without interaction with the user if and only if the method used in the second request is `GET` or `HEAD`. A client SHOULD detect infinite redirection loops, since such loops generate network traffic for each redirection.

> __Note:__ previous versions of this specification recommended a maximum of five redirections. Content developers should be aware that there might be clients that implement such a fixed limitation.


{{% expand "300 Multiple Choices" %}}
Indicates multiple options for the resource that the client may follow. It, for instance, could be used to present different format options for video, list files with different extensions, or word sense disambiguation.

The requested resource corresponds to any one of a set of representations, each with its own specific location, and agent- driven negotiation information (section 12) is being provided so that the user (or user agent) can select a preferred representation and redirect its request to that location.

Unless it was a HEAD request, the response SHOULD include an entity containing a list of resource characteristics and location(s) from which the user or user agent can choose the one most appropriate. The entity format is specified by the media type given in the Content- Type header field. Depending upon the format and the capabilities of the user agent, selection of the most appropriate choice MAY be performed automatically. However, this specification does not define any standard for such automatic selection.

If the server has a preferred choice of representation, it SHOULD include the specific URI for that representation in the Location field; user agents MAY use the Location field value for automatic redirection. This response is cacheable unless indicated otherwise.
{{% /expand %}}

{{% expand "301 Moved Permanently" %}}
This and all future requests should be directed to the given URI.

The requested resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. Clients with link editing capabilities ought to automatically re-link references to the Request-URI to one or more of the new references returned by the server, where possible. This response is cacheable unless indicated otherwise.

The new permanent URI SHOULD be given by the Location field in the response. Unless the request method was HEAD, the entity of the response SHOULD contain a short hypertext note with a hyperlink to the new URI(s).

If the 301 status code is received in response to a request other than GET or HEAD, the user agent MUST NOT automatically redirect the request unless it can be confirmed by the user, since this might change the conditions under which the request was issued.

> **Note:**</strong>** When automatically redirecting a POST request after receiving a 301 status code, some existing HTTP/1.0 user agents will erroneously change it into a GET request.
{{% /expand %}}

{{% expand "302 Found" %}}
The requested resource resides temporarily under a different URI. Since the redirection might be altered on occasion, the client SHOULD continue to use the Request-URI for future requests. This response is only cacheable if indicated by a Cache-Control or Expires header field.

The temporary URI SHOULD be given by the Location field in the response. Unless the request method was HEAD, the entity of the response SHOULD contain a short hypertext note with a hyperlink to the new URI(s).

If the 302 status code is received in response to a request other than GET or HEAD, the user agent MUST NOT automatically redirect the request unless it can be confirmed by the user, since this might change the conditions under which the request was issued.

> **Note:** RFC 1945 and RFC 2068 specify that the client is not allowed to change the method on the redirected request.  However, most existing user agent implementations treat 302 as if it were a 303 response, performing a GET on the Location field-value regardless of the original request method. The status codes 303 and 307 have been added for servers that wish to make unambiguously clear which kind of reaction is expected of the client.</blockquote>

This is an example of industry practice contradicting the standard.[2] The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours. However, some Web applications and frameworks use the 302 status code as if it were the 303.
{{% /expand %}}

{{% expand "303 See Other" %}}
The response to the request can be found under another URI using a GET method. When received in response to a POST (or PUT/DELETE), it should be assumed that the server has received the data and the redirect should be issued with a separate GET message.

This method exists primarily to allow the output of a POST-activated script to redirect the user agent to a selected resource. The new URI is not a substitute reference for the originally requested resource. The 303 response MUST NOT be cached, but the response to the second (redirected) request might be cacheable.

The different URI SHOULD be given by the Location field in the response. Unless the request method was HEAD, the entity of the response SHOULD contain a short hypertext note with a hyperlink to the new URI(s).

> **Note:** Many pre-HTTP/1.1 user agents do not understand the 303 status. When interoperability with such clients is a concern, the 302 status code may be used instead, since most user agents react to a 302 response as described here for 303.

Since HTTP/1.1
{{% /expand %}}

{{% expand "★ 304 Not Modified" %}}
Used for conditional GET calls to reduce band-width usage. If used, must set the Date, Content-Location, ETag headers to what they would have been on a regular GET call. There must be no body on the response.

Indicates the resource has not been modified since last requested. Typically, the HTTP client provides a header like the If-Modified-Since header to provide a time against which to compare. Using this saves bandwidth and reprocessing on both the server and client, as only the header data must be sent and received in comparison to the entirety of the page being re-processed by the server, then sent again using more bandwidth of the server and client.

If the client has performed a conditional GET request and access is allowed, but the document has not been modified, the server SHOULD respond with this status code. The 304 response MUST NOT contain a message-body, and thus is always terminated by the first empty line after the header fields.

The response MUST include the following header fields:
- Date, unless its omission is required by section 14.18.1

If a clockless origin server obeys these rules, and proxies and clients add their own Date to any response received without one (as already specified by [RFC 2068], section 14.19), caches will operate correctly.
- ETag and/or Content-Location, if the header would have been sent in a 200 response to the same request</li>
- Expires, Cache-Control, and/or Vary, if the field-value might differ from that sent in any previous response for the same variant</li>

If the conditional GET used a strong cache validator (see section 13.3.3), the response SHOULD NOT include other entity-headers. Otherwise (i.e., the conditional GET used a weak validator), the response MUST NOT include other entity-headers; this prevents inconsistencies between cached entity-bodies and updated headers.

If a 304 response indicates an entity not currently cached, then the cache MUST disregard the response and repeat the request without the conditional.

If a cache uses a received 304 response to update a cache entry, the cache MUST update the entry to reflect any new field values given in the response.
{{% /expand %}}

{{% expand "305 Use Proxy" %}}
The requested resource MUST be accessed through the proxy given by the Location field. The Location field gives the URI of the proxy. The recipient is expected to repeat this single request via the proxy. 305 responses MUST only be generated by origin servers.
> **Note:** RFC 2068 was not clear that 305 was intended to redirect a single request, and to be generated by origin servers only.  Not observing these limitations has significant security consequences.

Many HTTP clients (such as Mozilla and Internet Explorer) do not correctly handle responses with this status code, primarily for security reasons.
{{% /expand %}}

{{% expand "306 (Unused)" %}}
The 306 status code was used in a previous version of the specification, is no longer used, and the code is reserved.

Originally meant "Subsequent requests should use the specified proxy."
{{% /expand %}}

{{% expand "307 Temporary Redirect" %}}
In this case, the request should be repeated with another URI; however, future requests can still use the original URI. In contrast to 302, the request method should not be changed when reissuing the original request. For instance, a POST request must be repeated using another POST request.

The requested resource resides temporarily under a different URI. Since the redirection MAY be altered on occasion, the client SHOULD continue to use the Request-URI for future requests. This response is only cacheable if indicated by a Cache-Control or Expires header field.

The temporary URI SHOULD be given by the Location field in the response. Unless the request method was HEAD, the entity of the response SHOULD contain a short hypertext note with a hyperlink to the new URI(s), since many pre-HTTP/1.1 user agents do not understand the 307 status. Therefore, the note SHOULD contain the information necessary for a user to repeat the original request on the new URI.

If the 307 status code is received in response to a request other than GET or HEAD, the user agent MUST NOT automatically redirect the request unless it can be confirmed by the user, since this might change the conditions under which the request was issued.
{{% /expand %}}

{{% expand "308 Permanent Redirect (experimental)" %}}
The request, and all future requests should be repeated using another URI. 307 and 308 (as proposed) parallel the behaviours of 302 and 301, but do not require the HTTP method to change. So, for example, submitting a form to a permanently redirected resource may continue smoothly.
{{% /expand %}}

## 4xx Client Error
The `4xx` class of status code is intended for cases in which the client seems to have erred. Except when responding to a `HEAD` request, the server SHOULD include an entity containing an explanation of the error situation, and whether it is a temporary or permanent condition. These status codes are applicable to any request method. Clients SHOULD display any included entity to the user.

If the client is sending data, a server implementation using `TCP` SHOULD be careful to ensure that the client acknowledges receipt of the packet(s) containing the response, before the server closes the input connection. If the client continues sending data to the server after the close, the server's `TCP` stack will send a reset packet to the client, which may erase the client's unacknowledged input buffers before they can be read and interpreted by the `HTTP` application.

{{% expand "★ 400 Bad Request" %}}
General error when fulfilling the request would cause an invalid state. Syntax and domain validation errors, missing data, etc. are some examples.

The request could not be understood by the server due to malformed syntax. The client SHOULD NOT repeat the request without modifications.
{{% /expand %}}

{{% expand "★ 401 Unauthorized" %}}
Error code response for missing or invalid authentication token.

Similar to 403 Forbidden, but specifically for use when authentication is possible but has failed or not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. See Basic access authentication and Digest access authentication.

The request requires user authentication. The response MUST include a WWW-Authenticate header field (section 14.47) containing a challenge applicable to the requested resource. The client MAY repeat the request with a suitable Authorization header field (section 14.8). If the request already included Authorization credentials, then the 401 response indicates that authorization has been refused for those credentials. If the 401 response contains the same challenge as the prior response, and the user agent has already attempted authentication at least once, then the user SHOULD be presented the entity that was given in the response, since that entity might include relevant diagnostic information. HTTP access authentication is explained in "HTTP Authentication: Basic and Digest Access Authentication".
{{% /expand %}}

{{% expand "402 Payment Required" %}}
This code is reserved for future use.

The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, but that has not happened, and this code is not usually used. As an example of its use, however, Apple's MobileMe service generates a 402 error ("httpStatusCode:402" in the Mac OS X Console log) if the MobileMe account is delinquent.
{{% /expand %}}

{{% expand "★ 403 Forbidden" %}}
Error code for user not authorized to perform the operation or the resource is unavailable for some reason (e.g. time constraints, etc.).

The request was a legal request, but the server is refusing to respond to it. Unlike a 401 Unauthorized response, authenticating will make no difference.

The server understood the request, but is refusing to fulfill it. Authorization will not help and the request SHOULD NOT be repeated. If the request method was not HEAD and the server wishes to make public why the request has not been fulfilled, it SHOULD describe the reason for the refusal in the entity. If the server does not wish to make this information available to the client, the status code 404 (Not Found) can be used instead.
{{% /expand %}}

{{% expand "★ 404 Not Found" %}}
Used when the requested resource is not found, whether it doesn't exist or if there was a 401 or 403 that, for security reasons, the service wants to mask.

The requested resource could not be found but may be available again in the future. Subsequent requests by the client are permissible.

The server has not found anything matching the Request-URI. No indication is given of whether the condition is temporary or permanent. The 410 (Gone) status code SHOULD be used if the server knows, through some internally configurable mechanism, that an old resource is permanently unavailable and has no forwarding address. This status code is commonly used when the server does not wish to reveal exactly why the request has been refused, or when no other response is applicable.
{{% /expand %}}

{{% expand "405 Method Not Allowed" %}}
A request was made of a resource using a request method not supported by that resource; for example, using GET on a form which requires data to be presented via POST, or using PUT on a read-only resource.

The method specified in the Request-Line is not allowed for the resource identified by the Request-URI. The response MUST include an Allow header containing a list of valid methods for the requested resource.</p>
{{% /expand %}}

{{% expand "406 Not Acceptable" %}}
The requested resource is only capable of generating content not acceptable according to the Accept headers sent in the request.

Unless it was a HEAD request, the response SHOULD include an entity containing a list of available entity characteristics and location(s) from which the user or user agent can choose the one most appropriate. The entity format is specified by the media type given in the Content-Type header field. Depending upon the format and the capabilities of the user agent, selection of the most appropriate choice MAY be performed automatically. However, this specification does not define any standard for such automatic selection.

> **Note:** HTTP/1.1 servers are allowed to return responses which are not acceptable according to the accept headers sent in the request. In some cases, this may even be preferable to sending a 406 response. User agents are encouraged to inspect the headers of an incoming response to determine if it is acceptable.

If the response could be unacceptable, a user agent SHOULD temporarily stop receipt of more data and query the user for a decision on further actions.
{{% /expand %}}

{{% expand "407 Proxy Authentication Required" %}}
The client must first authenticate itself with the proxy.

This code is similar to 401 (Unauthorized), but indicates that the client must first authenticate itself with the proxy. The proxy MUST return a Proxy-Authenticate header field (section 14.33) containing a challenge applicable to the proxy for the requested resource. The client MAY repeat the request with a suitable Proxy-Authorization header field (section 14.34). HTTP access authentication is explained in "HTTP Authentication: Basic and Digest Access Authentication".
{{% /expand %}}

{{% expand "408 Request Timeout" %}}
The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time.

The server timed out waiting for the request. According to W3 HTTP specifications:
> The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time.
{{% /expand %}}

{{% expand "★ 409 Conflict" %}}
Whenever a resource conflict would be caused by fulfilling the request. Duplicate entries and deleting root objects when cascade-delete is not supported are a couple of examples.

Indicates that the request could not be processed because of conflict in the request, such as an edit conflict.

The request could not be completed due to a conflict with the current state of the resource. This code is only allowed in situations where it is expected that the user might be able to resolve the conflict and resubmit the request. The response body SHOULD include enough information for the user to recognize the source of the conflict. Ideally, the response entity would include enough information for the user or user agent to fix the problem; however, that might not be possible and is not required.

Conflicts are most likely to occur in response to a PUT request. For example, if versioning were being used and the entity being PUT included changes to a resource which conflict with those made by an earlier (third-party) request, the server might use the 409 response to indicate that it can't complete the request. In this case, the response entity would likely contain a list of the differences between the two versions in a format defined by the response Content-Type.
{{% /expand %}}

{{% expand "410 Gone" %}}
Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource again in the future. Clients such as search engines should remove the resource from their indices. Most use cases do not require clients and search engines to purge the resource, and a &quot;404 Not Found&quot; may be used instead.

The requested resource is no longer available at the server and no forwarding address is known. This condition is expected to be considered permanent. Clients with link editing capabilities SHOULD delete references to the Request-URI after user approval. If the server does not know, or has no facility to determine, whether or not the condition is permanent, the status code 404 (Not Found) SHOULD be used instead. This response is cacheable unless indicated otherwise.

The 410 response is primarily intended to assist the task of web maintenance by notifying the recipient that the resource is intentionally unavailable and that the server owners desire that remote links to that resource be removed. Such an event is common for limited-time, promotional services and for resources belonging to individuals no longer working at the server's site. It is not necessary to mark all permanently unavailable resources as "gone" or to keep the mark for any length of time -- that is left to the discretion of the server owner.
{{% /expand %}}

{{% expand "411 Length Required" %}}
The request did not specify the length of its content, which is required by the requested resource.

The server refuses to accept the request without a defined Content-Length. The client MAY repeat the request if it adds a valid Content-Length header field containing the length of the message-body in the request message.</p>
{{% /expand %}}

{{% expand "412 Precondition Failed" %}}
The server does not meet one of the preconditions that the requester put on the request.

The precondition given in one or more of the request-header fields evaluated to false when it was tested on the server. This response code allows the client to place preconditions on the current resource metainformation (header field data) and thus prevent the requested method from being applied to a resource other than the one intended.
{{% /expand %}}

{{% expand "413 Request Entity Too Large" %}}
The request is larger than the server is willing or able to process.

The server is refusing to process a request because the request entity is larger than the server is willing or able to process. The server MAY close the connection to prevent the client from continuing the request.

If the condition is temporary, the server SHOULD include a Retry- After header field to indicate that it is temporary and after what time the client MAY try again.
{{% /expand %}}

{{% expand "414 Request-URI Too Long" %}}
The URI provided was too long for the server to process.

The server is refusing to service the request because the Request-URI is longer than the server is willing to interpret. This rare condition is only likely to occur when a client has improperly converted a POST request to a GET request with long query information, when the client has descended into a URI "black hole" of redirection (e.g., a redirected URI prefix that points to a suffix of itself), or when the server is under attack by a client attempting to exploit security holes present in some servers using fixed-length buffers for reading or manipulating the Request-URI.
{{% /expand %}}

{{% expand "415 Unsupported Media Type" %}}
The request entity has a media type which the server or resource does not support. For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format.

The server is refusing to service the request because the entity of the request is in a format not supported by the requested resource for the requested method.
{{% /expand %}}

{{% expand "416 Requested Range Not Satisfiable" %}}
The client has asked for a portion of the file, but the server cannot supply that portion. For example, if the client asked for a part of the file that lies beyond the end of the file.

A server SHOULD return a response with this status code if a request included a Range request-header field (section 14.35), and none of the range-specifier values in this field overlap the current extent of the selected resource, and the request did not include an If-Range request-header field. (For byte-ranges, this means that the first- byte-pos of all of the byte-range-spec values were greater than the current length of the selected resource.)

When this status code is returned for a byte-range request, the response SHOULD include a Content-Range entity-header field specifying the current length of the selected resource (see section 14.16). This response MUST NOT use the multipart/byteranges content- type.
{{% /expand %}}

{{% expand "417 Expectation Failed" %}}
The server cannot meet the requirements of the Expect request-header field.

The expectation given in an Expect request-header field (see section 14.20) could not be met by this server, or, if the server is a proxy, the server has unambiguous evidence that the request could not be met by the next-hop server.
{{% /expand %}}

{{% expand "418 I'm a teapot (RFC 2324)" %}}
This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. However, known implementations do exist. An Nginx HTTP server uses this code to simulate goto-like behaviour in its configuration.
{{% /expand %}}

{{% expand "420 Enhance Your Calm (Twitter)" %}}
Returned by the Twitter Search and Trends API when the client is being rate limited. The text is a quote from 'Demolition Man' and the '420' code is likely a reference to this number's association with marijuana. Other services may wish to implement the 429 Too Many Requests response code instead.
{{% /expand %}}

{{% expand "422 Unprocessable Entity (WebDAV)" %}}
The request was well-formed but was unable to be followed due to semantic errors.

The 422 (Unprocessable Entity) status code means the server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.  For example, this error condition may occur if an XML request body contains well-formed (i.e., syntactically correct), but semantically erroneous, XML instructions.
{{% /expand %}}

{{% expand "423 Locked (WebDAV)" %}}
The resource that is being accessed is locked.

The 423 (Locked) status code means the source or destination resource of a method is locked.  This response SHOULD contain an appropriate precondition or postcondition code, such as 'lock-token-submitted' or 'no-conflicting-lock'.
{{% /expand %}}

{{% expand "424 Failed Dependency (WebDAV)" %}}
The request failed due to failure of a previous request (e.g. a PROPPATCH).

The 424 (Failed Dependency) status code means that the method could not be performed on the resource because the requested action depended on another action and that action failed.  For example, if a command in a PROPPATCH method fails, then, at minimum, the rest of the commands will also fail with 424 (Failed Dependency).
{{% /expand %}}

{{% expand "425 Reserved for WebDAV" %}}
Defined in drafts of &quot;WebDAV Advanced Collections Protocol&quot;, but not present in &quot;Web Distributed Authoring and Versioning (WebDAV) Ordered Collections Protocol&quot;.

Slein, J., Whitehead, E.J., et al., &quot;WebDAV Advanced Collections Protocol&quot;,  Work In Progress.
{{% /expand %}}

{{% expand "426 Upgrade Required" %}}
The client should switch to a different protocol such as TLS/1.0.

Reliable, interoperable negotiation of Upgrade features requires an unambiguous failure signal. The 426 Upgrade Required status code allows a server to definitively state the precise protocol extensions a given resource must be served with.
{{% /expand %}}

{{% expand "428 Precondition Required" %}}
The 428 status code indicates that the origin server requires the request to be conditional.

Its typical use is to avoid the "lost update" problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.  By requiring requests to be conditional, the server can assure that clients are working with the correct copies.

Responses using this status code SHOULD explain how to resubmit the request successfully.

The 428 status code is optional; clients cannot rely upon its use to prevent &quot;lost update&quot; conflicts.
{{% /expand %}}

{{% expand "429 Too Many Requests" %}}
The client has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes.

The response representations SHOULD include details explaining the condition, and MAY include a Retry-After header indicating how long to wait before making a new request.

When a server is under attack or just receiving a very large number of requests from a single party, responding to each with a 429 status code will consume resources.

Therefore, servers are not required to use the 429 status code; when limiting resource usage, it may be more appropriate to just drop connections, or take other steps.
{{% /expand %}}

{{% expand "431 Request Header Fields Too Large" %}}
The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large. The request MAY be resubmitted after reducing the size of the request header fields.

It can be used both when the set of request header fields in total are too large, and when a single header field is at fault.  In the latter case, the response representation SHOULD specify which header field was too large.

Servers are not required to use the 431 status code; when under attack, it may be more appropriate to just drop connections, or take other steps.
{{% /expand %}}

{{% expand "444 No Response (Nginx)" %}}
An Nginx HTTP server extension. The server returns no information to the client and closes the connection (useful as a deterrent for malware).
{{% /expand %}}

{{% expand "449 Retry With (Microsoft)" %}}
A Microsoft extension. The request should be retried after performing the appropriate action.
{{% /expand %}}

{{% expand "450 Blocked by Windows Parental Controls (Microsoft)" %}}
A Microsoft extension. This error is given when Windows Parental Controls are turned on and are blocking access to the given webpage.
{{% /expand %}}

{{% expand "451 Unavailable For Legal Reasons" %}}
Intended to be used when resource access is denied for legal reasons, e.g. censorship or government-mandated blocked access. A reference to the 1953 dystopian novel Fahrenheit 451, where books are outlawed, and the autoignition temperature of paper, 451°F.
{{% /expand %}}

{{% expand "499 Client Closed Request (Nginx)" %}}
An Nginx HTTP server extension. This code is introduced to log the case when the connection is closed by client while HTTP server is processing its request, making server unable to send the HTTP header back.
{{% /expand %}}


## 5xx Server Error
The server failed to fulfill an apparently valid request.

Response status codes beginning with the digit "5" indicate cases in which the server is aware that it has erred or is incapable of performing the request. Except when responding to a `HEAD` request, the server SHOULD include an entity containing an explanation of the error situation, and whether it is a temporary or permanent condition. Clients SHOULD display any included entity to the user. These response codes are applicable to any request method.

{{% expand "★ 500 Internal Server Error" %}}
The general catch-all error when the server-side throws an exception. This indicates a service outage.

The server encountered an unexpected condition which prevented it from fulfilling the request. A generic error message, given when no more specific message is suitable.
{{% /expand %}}

{{% expand "501 Not Implemented" %}}
The server either does not recognise the request method, or it lacks the ability to fulfill the request.

The server does not support the functionality required to fulfill the request. This is the appropriate response when the server does not recognize the request method and is not capable of supporting it for any resource.
{{% /expand %}}

{{% expand "502 Bad Gateway" %}}
The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.
{{% /expand %}}

{{% expand "503 Service Unavailable" %}}
The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.

The server is currently unable to handle the request due to a temporary overloading or maintenance of the server. The implication is that this is a temporary condition which will be alleviated after some delay. If known, the length of the delay MAY be indicated in a Retry-After header. If no Retry-After is given, the client SHOULD handle the response as it would for a 500 response.

> **Note:** The existence of the 503 status code does not imply that a server must use it when becoming overloaded. Some servers may wish to simply refuse the connection.
{{% /expand %}}

{{% expand "504 Gateway Timeout" %}}
The server was acting as a gateway or proxy and did not receive a timely response from the upstream server specified by the URI (e.g. HTTP, FTP, LDAP) or some other auxiliary server (e.g. DNS) it needed to access in attempting to complete the request.

> **Note:** Some deployed proxies are known to return 400 or 500 when DNS lookups time out.
{{% /expand %}}

{{% expand "505 HTTP Version Not Supported" %}}
The server does not support the HTTP protocol version used in the request.

The server is indicating that it is unable or unwilling to complete the request using the same major version as the client, as described in section 3.1, other than with this error message. The response SHOULD contain an entity describing why that version is not supported and what other protocols are supported by that server.
{{% /expand %}}

{{% expand "506 Variant Also Negotiates (Experimental)" %}}
Transparent content negotiation for the request results in a circular reference.

The 506 status code indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
{{% /expand %}}

{{% expand "507 Insufficient Storage (WebDAV)" %}}
The server is unable to store the representation needed to complete the request.

The 507 (Insufficient Storage) status code means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.  This condition is considered to be temporary.  If the request that received this status code was the result of a user action, the request MUST NOT be repeated until it is requested by a separate user action.
{{% /expand %}}

{{% expand "508 Loop Detected (WebDAV)" %}}
<a data-toggle="collapse" data-target="#loop_detected"></a>
<div id="loop_detected" class="collapse">
The server detected an infinite loop while processing the request (sent in lieu of 208).

The 508 (Loop Detected) status code indicates that the server terminated an operation because it encountered an infinite loop while processing a request with &quot;Depth: infinity&quot;.  This status indicates that the entire operation failed.
{{% /expand %}}

{{% expand "509 Bandwidth Limit Exceeded (Apache)" %}}
This status code, while used by many servers, is not specified in any RFCs.
{{% /expand %}}

{{% expand "510 Not Extended" %}}
Further extensions to the request are required for the server to fulfill it.

The policy for accessing the resource has not been met in the request.  The server should send back all the information necessary for the client to issue an extended request. It is outside the scope of this specification to specify how the extensions inform the client.

If the 510 response contains information about extensions that were not present in the initial request then the client MAY repeat the request if it has reason to believe it can fulfill the extension policy by modifying the request according to the information provided in the 510 response. Otherwise the client MAY present any entity included in the 510 response to the user, since that entity may include relevant diagnostic information.
{{% /expand %}}

{{% expand "511 Network Authentication Required" %}}
The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network (e.g., &quot;captive portals&quot; used to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot).

The response representation SHOULD contain a link to a resource that allows the user to submit credentials (e.g. with a HTML form).

Note that the 511 response SHOULD NOT contain a challenge or the login interface itself, because browsers would show the login interface as being associated with the originally requested URL, which may cause confusion.

The 511 status SHOULD NOT be generated by origin servers; it is intended for use by intercepting proxies that are interposed as a means of controlling access to the network.

Responses with the 511 status code MUST NOT be stored by a cache.

The 511 status code is designed to mitigate problems caused by &quot;captive portals&quot; to software (especially non-browser agents) that is expecting a response from the server that a request was made to, not the intervening network infrastructure.  It is not intended to encouraged deployment of captive portals, only to limit the damage caused by them.

A network operator wishing to require some authentication, acceptance of terms or other user interaction before granting access usually does so by identifing clients who have not done so (&quot;unknown clients&quot;) using their MAC addresses.

Unknown clients then have all traffic blocked, except for that on TCP port 80, which is sent to a HTTP server (the &quot;login server&quot;) dedicated to &quot;logging in&quot; unknown clients, and of course traffic to the login server itself.

In common use, a response carrying the 511 status code will not come from the origin server indicated in the request's URL.  This presents many security issues; e.g., an attacking intermediary may be inserting cookies into the original domain's name space, may be observing cookies or HTTP authentication credentials sent from the user agent, and so on.

However, these risks are not unique to the 511 status code; in other words, a captive portal that is not using this status code introduces the same issues.

Also, note that captive portals using this status code on an SSL or TLS connection (commonly, port 443) will generate a certificate error on the client.
{{% /expand %}}

{{% expand "598 Network read timeout error" %}}
This status code is not specified in any RFCs, but is used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.
{{% /expand %}}

{{% expand "599 Network connect timeout error" %}}
This status code is not specified in any RFCs, but is used by some HTTP proxies to signal a network connect timeout behind the proxy to a client in front of the proxy.
{{% /expand %}}

## Status Codes Triggering Retry
Some of these HTTP status codes indicate temporary issues that may resolve over time, making them ideal candidates for automatic retries by a calling client. Implementing these retries enhances the resilience and reliability of distributed API systems.

The HTTP status codes that should trigger an automatic retry include:
- 408 (Request Timeout): The server took too long to respond. Retrying may help.
- 429 (Too Many Requests): Indicates rate-limiting. Retry after the delay specified in the `Retry-After` header.
- 500 (Internal Server Error): A server-side issue that may resolve itself. Retrying is optional.
- 502 (Bad Gateway): Suggests a temporary network issue or service stack disruption that may self-correct.
- 503 (Service Unavailable): Likely due to temporary service outages or in-progress deployments.
- 504 (Gateway Timeout): A downstream server (e.g., DNS) didn’t respond in time. Retrying may resolve the issue.

Implementing retries for these status codes (ideally with exponential back-off and retry limits) improves an application’s ability to handle network hiccups and temporary server errors.

---

★ **"Top 10"** HTTP Status Code. More REST service-specific information is contained in the entry.