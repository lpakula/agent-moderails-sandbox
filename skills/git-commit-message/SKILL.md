---
name: git-commit-message
description: Generate clear, conventional commit messages from staged changes. Use when the user asks to commit, needs help writing commit messages, or mentions git commits.
license: MIT
metadata:
  author: example
  version: "1.0"
allowed-tools: Bash(git:*)
---

# Git Commit Message Generator

Generate conventional commit messages based on staged changes.

## When to Use

- User asks to commit changes
- User needs help writing a commit message
- User mentions "commit", "git commit", or similar

## Instructions

1. Run `git diff --staged` to see what's being committed
2. Analyze the changes to understand the intent
3. Generate a commit message following Conventional Commits format

## Commit Format

```
<type>(<scope>): <subject>

<body>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, no code change
- `refactor`: Code change that neither fixes nor adds
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

## Examples

**Adding a login feature:**
```
feat(auth): add user login with email/password
```

**Fixing a bug:**
```
fix(api): handle null response from payment gateway
```

**Multiple changes:**
```
refactor(components): extract shared button styles

- Move button CSS to shared module
- Update imports in 5 components
- Add hover state variables
```

## Edge Cases

- If changes span multiple concerns, suggest splitting into separate commits
- If no staged changes, inform the user to stage files first
- For large diffs, focus on the most significant changes

