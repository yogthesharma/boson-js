# trace-smoke

Minimal **real** Node app that sends one traced span to your Boson/Langfuse-compatible backend. Use this after unit/integration tests when you want to confirm ingestion and UI before shipping.

## Prereqs

1. A running API and a project with API keys (e.g. your Boson deployment at `https://app.getboson.com`).
2. SDK packages built once from the repo root:

   ```bash
   cd ../..   # sdk/boson-js
   pnpm install
   pnpm build
   ```

## Run

```bash
cd examples/trace-smoke
cp .env.example .env
# edit .env — LANGFUSE_BASE_URL, LANGFUSE_PUBLIC_KEY, LANGFUSE_SECRET_KEY

pnpm install   # from sdk/boson-js root, or once after adding this package to the workspace
pnpm start
```

From **`sdk/boson-js`** root you can also:

```bash
pnpm --filter trace-smoke start
```

(Install from root first so the workspace links resolve.)

## What success looks like

You should see a trace named **`trace-smoke`** in the product UI with a span **`trace-smoke-handshake`**. If that appears, your keys, network path, and SDK export path are aligned enough to treat as deployable for that environment.

## Next step for “real app” coverage

Copy this pattern into your actual service (Next.js route, worker, CLI): same `NodeSDK` + `LangfuseSpanProcessor`, then your real `observe` / `startActiveObservation` / OpenAI wrappers. This example is only the smallest possible handshake.
