---
name: api-documentation
description: Generate clear API documentation from code including endpoints, parameters, responses, and examples. Use when documenting REST APIs, GraphQL schemas, or any programmatic interface.
license: MIT
metadata:
  author: example
  version: "1.0"
---

# API Documentation Generator

Create comprehensive API documentation from source code.

## When to Use

- User needs API docs for endpoints
- User asks to document an API
- User mentions "API documentation", "swagger", "openapi"

## Instructions

1. Identify the API framework (Express, FastAPI, Rails, etc.)
2. Find route definitions and controllers
3. Extract endpoint details
4. Generate documentation

## Documentation Template

For each endpoint, document:

```markdown
## `METHOD /path`

Brief description of what this endpoint does.

### Parameters

| Name | Type | In | Required | Description |
|------|------|-----|----------|-------------|
| id   | string | path | yes | Resource identifier |

### Request Body

```json
{
  "field": "type - description"
}
```

### Responses

#### 200 OK
```json
{
  "data": {}
}
```

#### 400 Bad Request
```json
{
  "error": "Description of what went wrong"
}
```

### Example

```bash
curl -X POST https://api.example.com/resource \
  -H "Authorization: Bearer token" \
  -d '{"field": "value"}'
```
```

## Best Practices

- Use consistent terminology
- Include realistic example values
- Document error responses
- Note authentication requirements
- Version your API docs


