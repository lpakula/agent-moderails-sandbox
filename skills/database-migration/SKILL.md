---
name: database-migration
description: Create and manage database migrations for schema changes. Use when user needs to modify database schema, add tables, columns, indexes, or manage data migrations.
license: MIT
compatibility: Requires database CLI tools (psql, mysql, sqlite3) for verification
metadata:
  author: example
  version: "1.0"
---

# Database Migration

Create safe, reversible database migrations.

## When to Use

- User needs to change database schema
- User asks about migrations
- User mentions "add column", "create table", "alter table"

## Safety Rules

1. **Always reversible** - Every `up` needs a `down`
2. **Small changes** - One logical change per migration
3. **No data loss** - Never drop without backup plan
4. **Idempotent** - Safe to run multiple times

## Migration Checklist

Before creating:
- [ ] Is this change backward compatible?
- [ ] Will this lock the table for long?
- [ ] Do we need a data migration too?
- [ ] Is there a rollback plan?

## Common Patterns

### Adding a column (safe)
```sql
-- Up
ALTER TABLE users ADD COLUMN phone VARCHAR(20);

-- Down  
ALTER TABLE users DROP COLUMN phone;
```

### Adding NOT NULL column (requires default)
```sql
-- Up
ALTER TABLE users ADD COLUMN status VARCHAR(20) DEFAULT 'active' NOT NULL;

-- Down
ALTER TABLE users DROP COLUMN status;
```

### Renaming (use copy pattern for zero downtime)
```sql
-- Step 1: Add new column
ALTER TABLE users ADD COLUMN full_name VARCHAR(255);

-- Step 2: Copy data (in application or separate migration)
UPDATE users SET full_name = name;

-- Step 3: (Later) Drop old column
ALTER TABLE users DROP COLUMN name;
```

### Adding index (concurrent for large tables)
```sql
-- PostgreSQL
CREATE INDEX CONCURRENTLY idx_users_email ON users(email);
```

## Framework Detection

- `db/migrate/` → Rails
- `migrations/` or `alembic/` → Python/SQLAlchemy
- `prisma/migrations/` → Prisma
- `drizzle/` → Drizzle

Match the project's migration format and naming convention.


