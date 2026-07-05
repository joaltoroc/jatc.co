# Custom Rules

- **Documentation Sync:** Whenever you modify any code, styles, or configuration in this repository, you MUST review and update `README.md` and `context.md` (if they are relevant to the change) to ensure that the documentation remains perfectly synchronized with the codebase.
- **Lint & Syntax Validation:** Before completing a task, run lint checks (e.g., `pnpm lint`) to verify there are no syntax or style violations.
- **Build Verification:** Always verify that the static compilation (`pnpm build`) builds successfully without errors.
- **TypeScript Integrity:** Run Astro/TypeScript type checking (`pnpm check`) to guarantee all type signatures are intact and error-free.
- **Security Compliance:** Verify that security controls (e.g., Content Security Policy [CSP] directives in [.htaccess](./public/.htaccess), script sanitization, and AI crawler blocklists in [astro.config.mjs](./astro.config.mjs)) remain fully intact and correct.

