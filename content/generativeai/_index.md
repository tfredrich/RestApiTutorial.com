---
archetype: "chapter"
menuPre: "<b>3. </b>"
title: "Generative AI"
description: "How to design REST APIs that work well with LLMs and agentic workflows."
summary: "Guidance on designing APIs for LLM and agent clients."
weight: 3
collapsibleMenu: true
tags:
  - generative-ai
  - llm
  - agentic-ai
  - mcp
categories:
  - generative-ai
images:
  - /images/logo.webp
---

You would have to be living under a rock (and never leave) these days to not hear about the "transformative impact" of generative AI (GenAI) on everything under the sun. APIs have long been the interfaces for business operations and data. That does not change with the advent of AI. They remain the conduit for large language models (LLMs) and agentic systems to access business data, systems, and operations in a secure, efficient manner.

But are there API design choices we can make in order to facilitate better LLM and agent interactions? Yes. The same principles of clarity, consistency, and safety still apply, but AI introduces new interaction patterns worth addressing directly.

## How GenAI Uses APIs

GenAI systems typically call APIs in one of three ways:

- Retrieval. The model fetches relevant records, documents, or facts to ground its response.
- Actions. The model performs state-changing operations like creating tickets, placing orders, or updating profiles.
- Orchestration. An agent chains multiple API calls to complete a goal, often across systems.

This is not fundamentally different from traditional clients, but now the client is probabilistic. This puts a premium on unambiguous APIs, clear error semantics, and good security.

## API Design Choices That Help LLMs

### Clear, Stable Identifiers

Human users can infer what a random "12345" might mean in an URL or JSON payload. LLMs cannot. Use stable, descriptive identifiers and return them consistently. If a resource has multiple identifiers (internal ID, external ID), make the difference explicit in response fields and documentation.

### Narrow, Purposeful Endpoints

Endpoints that do "a bit of everything" force a model to infer hidden rules. Prefer endpoints with narrow, well-defined behavior and predictable inputs. This reduces the chance an agent calls the wrong operation or crafts malformed payloads.

### Explicit Error Semantics

Traditional clients may retry on any 5xx. LLMs need direction. Define clear error codes and messages with next steps. For example, a validation error should explain which fields failed and why, while an authorization error should describe what scope is missing.

### Structured, Machine-Friendly Payloads

LLMs can read prose, but they are more reliable with strongly structured data. JSON payloads that follow a specific schema are recommended. Use enums and specific fields rather than overloaded strings. Provide examples in docs so agents can "pattern match" expected shapes.

### Safe Defaults and Confirmation Flows

For destructive actions, consider a two-step flow or a dry-run mode. A "preview" endpoint that returns the intended changes lets the agent confirm before committing.

### Pagination and Limits That are Easy to Use

Model calls are often time-bounded. Prefer cursor-based pagination with clear defaults. Provide parameters like `limit`, `filter`, and `sort` so the model can ask for only what it needs.

## Security and Governance in an AI Context

AI does not remove the need for strong security. If anything, it increases it.

- Principle of least privilege. Create scopes specifically for AI workloads rather than reusing broad admin scopes.
- Auditability. Include request IDs and user context in responses so agent actions can be traced.
- Rate limits. Models can loop. Provide clear rate limit headers and guidance for backoff.
- Prompt injection resistance. Avoid allowing untrusted inputs to directly drive high-privilege actions. Separate "read" operations from "write" operations whenever possible.

## Observability for Agent-Driven Clients

Agents can fail in novel ways. Add instrumentation that lets you see:

- Which tools or endpoints are used for a given task.
- Which errors block completion.
- How often the agent retries or abandons a flow.

This feedback loop makes it possible to improve both the model prompts and the APIs they rely on.

## Documentation is Critical (Especially for MCP Access)

Clear documentation is no longer optional when LLMs or agents are involved. It is how tools like MCP gain reliable access to your APIs. An OpenAPI specification provides the "what" of each endpoint, but successful agent behavior depends just as much on the "when" and the "why."

### Include Order of Precedence

Document when to call an API by describing ordering and preconditions. If an agent must create a customer before creating an order, say so explicitly. If an endpoint should only be called after a verification step, document that sequence and the required state transitions.

### Describe "Why" vs What it Does

Document why to call an API by explaining the intent and expected outcomes. For example, clarify the business purpose of an "approve" action, what side effects occur, and how it differs from a "submit" action. This reduces confusion between similar endpoints and helps agents choose the right tool.

### Include Precise Schemas

OpenAPI specifications can include JSON schema for requests and responses for each API resource (or path). Treat those schemas as executable contracts, not just documentation. LLMs make fewer mistakes when every field is defined with type, format, and constraints.

Include the details that humans often gloss over:

- Pay attention to how payload requirements differ for the HTTP methods: `POST`, `PUT`, `PATCH`, `GET`, etc.
- Required vs optional fields. Mark required properties explicitly and avoid "optional unless otherwise noted."
- Read-only, write-only vs editable fields. Mark read-only (like system-generated identifiers) and write-only properties explicity with `"readOnly": true` and `"writeOnly": true`
- Allowed values. Use enums for states, kinds, and types rather than free-form strings.
- String constraints. Add `pattern`, `minLength`, and `maxLength` where relevant (emails, IDs, slugs).
- Numeric constraints. Specify `minimum`, `maximum`, and units for quantities like prices and durations.
- Object shape. Lock down `additionalProperties` when unknown keys are invalid.
- Nullability. Be explicit about when `null` is allowed, not just missing.

Provide at least one example payload per request and response, and align it exactly with the schema. If the payload differs by scenario (success vs validation error), include both examples and reference them in the schema section.

OpenAPI descriptions should include practical guidance: required prerequisites, recommended call order, and the decision logic for picking one endpoint over another. That context is essential for MCP-based tool selection and safe automation.
