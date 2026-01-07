+++
archetype="chapter"
menuPre = "<b>2. </b>"
title = "Advanced API Design"
weight = 2
collapsibleMenu = true
+++

![7 Pillars](images/seven_pillars.webp "Seven Pillars")

Let's continue a deeper journey in designing exquisite RESTful APIs that consumers love and developers can maintain!

## Introducing the Seven Pillars of Advanced API Design

API design can be broken down into seven essential pillars. These pillars provide a comprehensive framework for designing robust, scalable, and maintainable APIs.

The seven pillars of API design are:

1. __URL Design:__
As humans are still involved in API consumption, well-structured URLs are the foundation of a well-designed API. This pillar focuses on creating consistent, readable, and scalable URL structures.
2. __Representations:__
This pillar deals with the structure and format of the data being exchanged between clients and the API, including JSON data and nuances of the payload design.
3. __Requests:__
API requests define how clients interact with the API, including HTTP methods, query parameters, and working with collections of data.
4. [__Responses:__](responses.html)
Covers the structure and content of API responses, including asynchronous vs syncronous behavior, response codes, error handling and caching.
5. __Content-Type Negotiation:__
This pillar is about use of standard content-types like `application/json`, different data formats on single resources, and bulk operations.
6. __Relationships:__
API relationships define how resources are connected and the concept of clients being able to "follow their nose" to navigate an API.
7. __Security:__
The final pillar focuses on ensuring the security and integrity of the API, including authentication, authorization, and data encryption.
8. __\*BONUS\* Documentation:__
This forgotten pillar encompasses them all by wrapping it all up in a neat package complete with bow! In fact, tools like OpenAPI enable documentation- or design-first for all of these concepts.

By understanding and implementing these pillars, you'll be well on your way to designing a robust, scalable, and maintainable API that makes consumers happy.