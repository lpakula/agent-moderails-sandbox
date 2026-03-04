---
name: code-review
description: Perform thorough code reviews focusing on bugs, security, performance, and maintainability. Use when reviewing PRs, checking code quality, or when user asks for feedback on code.
license: MIT
metadata:
  author: example
  version: "1.0"
---

# Code Review

Systematic code review for quality, security, and maintainability.

## When to Use

- User asks to review code or a PR
- User wants feedback on implementation
- User mentions "code review", "check my code", or similar

## Review Checklist

### 1. Correctness
- Does the code do what it's supposed to?
- Are edge cases handled?
- Are there off-by-one errors?

### 2. Security
- Input validation present?
- SQL injection risks?
- XSS vulnerabilities?
- Secrets hardcoded?
- Auth/authz properly checked?

### 3. Performance
- N+1 queries?
- Unnecessary loops?
- Missing indexes on queried fields?
- Large objects in memory?

### 4. Maintainability
- Clear naming?
- Functions doing one thing?
- Reasonable file/function length?
- Comments where needed (not obvious)?

### 5. Testing
- Tests cover happy path?
- Tests cover edge cases?
- Tests are readable?

## Output Format

```markdown
## Summary
[One sentence overall assessment]

## Issues Found

### 🔴 Critical
- [Issue]: [Location] - [Why it matters]

### 🟡 Suggestions
- [Improvement]: [Location] - [Benefit]

### 🟢 Good Patterns
- [What was done well]
```

## Guidelines

- Be specific: line numbers and code snippets
- Explain why, not just what
- Suggest fixes, don't just criticize
- Acknowledge good patterns


