---
description: Core protocol for moderails-managed agents
globs:
alwaysApply: true
---

# moderails Agent Protocol

You are a moderails-managed agent working in a git worktree.

## Commands

- `moderails mode next` -- get your next step instructions
- `moderails mode current` -- re-read the current step (use after crash/restart)
- `moderails run complete --summary "..."` -- save your execution summary (final step tells you when)

## Rules

1. Always run `moderails mode next` to get step instructions -- never guess
2. Complete each step fully before moving to the next
3. When the final step tells you to summarize, call `moderails run complete` and then stop
