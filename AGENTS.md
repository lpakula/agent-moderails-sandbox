# Agent Instructions

## Task Management
Use `bd` (Beads) for all task tracking and planning.

## Workflow

### Planning-First Approach (MANDATORY)
For any new feature or significant change:

1. **Create Design Issue First** - Create a planning/design issue with:
   - Clear description of WHAT needs to be done
   - Proposed approach in `--design` field (HOW you plan to do it)
   - Success criteria in `--acceptance` field (WHAT success looks like)
   - Set status to `blocked` until approved
   
2. **Present Plan to User** - Show the design issue and ask:
   - "I've created a design plan for [feature]. Should I proceed with this approach?"
   - "Here's my proposed design. Does this align with your expectations?"
   
3. **Wait for Approval** - DO NOT implement until user approves the approach

4. **After Approval** - Unblock and implement:
   - Update status to `open` or `in_progress`
   - Create implementation subtasks if needed
   - Link them with dependencies

5. **During Work** - Update status and notes regularly
6. **Complete** - Close with summary of what was done

### Exception: Auto-create WITHOUT asking
- Clear bugs discovered during work
- Technical debt with obvious scope
- Test tasks
- Documentation updates

### Standard Workflow
1. At session start, run `bd ready` to see available work
2. Create issues as needed (follow planning-first for features)
3. Update task status with `bd update <id> --status in_progress` when starting work
4. Close tasks with `bd close <id> --reason "description"` when complete
5. Link related work with `bd dep add` for dependencies

## Commands
- `bd ready` - Find work with no blockers
- `bd create "title" -p <0-3>` - Create new task (0=critical, 3=low)
- `bd update <id> --status <status>` - Update task status
- `bd close <id> --reason "..."` - Complete task
- `bd show <id>` - View task details
- `bd list` - View all tasks

Use `--json` flag for all commands when processing output programmatically.

## Creating Planning/Design Issues

When creating a design issue for approval:

```bash
bd create "Feature: Add dark mode" -t feature -p 1 \
  --description "Add dark mode toggle to app with theme persistence" \
  --design "APPROACH: Use Tailwind dark: classes with localStorage. 
            Toggle in header. CSS variables for custom colors.
            ALTERNATIVES CONSIDERED: CSS media query (but want user control).
            TRADE-OFFS: localStorage means no server-side persistence." \
  --acceptance "- [ ] Dark mode toggle visible in header
                - [ ] Theme persists across page refreshes  
                - [ ] All pages respect dark mode setting
                - [ ] Smooth transition between themes"
```

**Key Fields:**
- `--description` - WHAT: The goal/requirement
- `--design` - HOW: Your proposed approach, alternatives, trade-offs
- `--acceptance` - SUCCESS: Verifiable outcomes (use - [ ] checklist format)

**After creating, present to user:**
"I've created issue `bd-xyz` with my proposed approach for [feature]. 
Design: [summarize design field]
Acceptance criteria: [list criteria]
Should I proceed with this approach, or would you like me to adjust it?"

## Approval Workflow

### Status Management for Approvals

**Design/Planning Issues:**
1. Create with status `blocked` (needs approval)
2. Add label or note: "needs-approval"
3. Present plan to user and WAIT
4. After approval: `bd update <id> --status open`
5. Then proceed with implementation

**Example:**
```bash
# 1. Create design issue (blocked = needs approval)
bd create "Add payment processing" -t feature -p 0 \
  --description "Integrate Stripe for credit card payments" \
  --design "Use Stripe Checkout (hosted page) for PCI compliance..." \
  --acceptance "- [ ] Users can pay with credit card..." \
  --status blocked

# 2. Present to user
echo "Created bd-abc for payment processing. Design uses Stripe Checkout 
for PCI compliance. Should I proceed?"

# 3. WAIT for user response

# 4. User approves: "Yes, go ahead"
bd update bd-abc --status open --notes "Approved by user. Proceeding with Stripe Checkout approach."

# 5. Now create implementation tasks
bd create "Add payment processing > Set up Stripe account" -p 0
bd create "Add payment processing > Implement checkout flow" -p 0

# 6. Work on it
bd update bd-abc --status in_progress
```

### When to Use `blocked` Status
- Design needs approval
- Architecture decision needed
- User input required on approach
- Trade-off requires business decision

### When NOT to Block
- Implementation details (agent decides)
- Bug fixes (just fix it)
- Code refactoring (obvious improvements)
- Test implementation (part of definition of done)

## Landing the Plane (Session Completion)

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd sync
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds
