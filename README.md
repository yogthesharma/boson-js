![GitHub Banner](https://github.com/langfuse/langfuse-js/assets/2834609/d1613347-445f-4e91-9e84-428fda9c3659)

# boson-js

[![MIT License](https://img.shields.io/badge/License-MIT-red.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![CI test status](https://img.shields.io/github/actions/workflow/status/langfuse/langfuse-js/ci.yml?style=flat-square&label=All%20tests)](https://github.com/langfuse/langfuse-js/actions/workflows/ci.yml?query=branch%3Amain)
[![GitHub Repo stars](https://img.shields.io/github/stars/langfuse/langfuse?style=flat-square&logo=GitHub&label=langfuse%2Flangfuse)](https://github.com/langfuse/langfuse)
[![Discord](https://img.shields.io/discord/1111061815649124414?style=flat-square&logo=Discord&logoColor=white&label=Discord&color=%23434EE4)](https://discord.gg/7NXusRtqYU)
[![YC W23](https://img.shields.io/badge/Y%20Combinator-W23-orange?style=flat-square)](https://www.ycombinator.com/companies/langfuse)

Modular monorepo for Boson JS/TS SDK packages (wrappers around upstream Langfuse SDKs).

## What is Boson vs Langfuse here?

This repo intentionally contains **two layers**:

- **Upstream Langfuse SDK packages (unchanged APIs)**: `@langfuse/*`
  - These are the real implementations and match upstream closely to keep merges easy.
  - Source lives under `packages/{client,core,tracing,otel,openai,langchain}`.

- **Boson-branded install names (thin wrappers)**: `@getboson/*`
  - These packages **only re-export** the upstream `@langfuse/*` packages.
  - They exist so your users can `npm i @getboson/...` and import from `@getboson/...`,
    while we keep internal naming compatible with upstream.
  - Source lives under `packages/getboson-*`.

If you’re building an app on Boson, prefer installing/importing from **`@getboson/*`**.

## Packages

> [!IMPORTANT]
> The SDK was rewritten in v5 and released in March 2026. Refer to the [v5 migration guide](https://langfuse.com/docs/observability/sdk/upgrade-path/js-v4-to-v5) for instructions on updating your code.

### Upstream Langfuse packages

| Package                                     | NPM                                                                                                               | Description                                               | Environments |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------ |
| [@langfuse/client](./packages/client)       | [![NPM](https://img.shields.io/npm/v/@langfuse/client.svg)](https://www.npmjs.com/package/@langfuse/client)       | Langfuse API client for universal JavaScript environments | Universal JS |
| [@langfuse/tracing](./packages/tracing)     | [![NPM](https://img.shields.io/npm/v/@langfuse/tracing.svg)](https://www.npmjs.com/package/@langfuse/tracing)     | Langfuse instrumentation methods based on OpenTelemetry   | Node.js 20+  |
| [@langfuse/otel](./packages/otel)           | [![NPM](https://img.shields.io/npm/v/@langfuse/otel.svg)](https://www.npmjs.com/package/@langfuse/otel)           | Langfuse OpenTelemetry export helpers                     | Node.js 20+  |
| [@langfuse/openai](./packages/openai)       | [![NPM](https://img.shields.io/npm/v/@langfuse/openai.svg)](https://www.npmjs.com/package/@langfuse/openai)       | Langfuse integration for OpenAI SDK                       | Universal JS |
| [@langfuse/langchain](./packages/langchain) | [![NPM](https://img.shields.io/npm/v/@langfuse/langchain.svg)](https://www.npmjs.com/package/@langfuse/langchain) | Langfuse integration for LangChain                        | Universal JS |

### Boson-branded install names (thin wrappers)

| Package                                              | NPM                   | Description                                          | Environments |
| ---------------------------------------------------- | --------------------- | ---------------------------------------------------- | ------------ |
| [@getboson/client](./packages/getboson-client)       | `@getboson/client`    | Boson API client (wrapper around `@langfuse/client`) | Universal JS |
| [@getboson/tracing](./packages/getboson-tracing)     | `@getboson/tracing`   | Boson tracing (wrapper around `@langfuse/tracing`)   | Node.js 20+  |
| [@getboson/otel](./packages/getboson-otel)           | `@getboson/otel`      | Boson OpenTelemetry helpers (wrapper)                | Node.js 20+  |
| [@getboson/openai](./packages/getboson-openai)       | `@getboson/openai`    | Boson OpenAI integration (wrapper)                   | Universal JS |
| [@getboson/langchain](./packages/getboson-langchain) | `@getboson/langchain` | Boson LangChain integration (wrapper)                | Universal JS |

> The wrappers exist to let users install/import **Boson** packages while keeping internal code aligned with upstream Langfuse for easier syncing.

## Documentation

- [Docs](https://langfuse-docs-git-add-js-sdk-v4-docs-langfuse.vercel.app/docs/observability/sdk/typescript/overview)
- [Reference](https://langfuse-js-git-main-langfuse.vercel.app/)

## Development

This is a monorepo managed with pnpm. See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed development instructions.

Quick start:

```bash
pnpm install    # Install dependencies
pnpm build      # Build all packages
pnpm test       # Run tests
pnpm ci         # Run full CI suite
```

## License

[MIT](LICENSE)
