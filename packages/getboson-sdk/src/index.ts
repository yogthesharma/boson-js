// Single entrypoint for Boson JS/TS SDK.
//
// We intentionally avoid `export *` from multiple packages that have overlapping type names,
// as that causes DTS generation conflicts. Instead, we:
// - Re-export the most common entrypoints as named exports
// - Provide namespace exports for full access without collisions

export { LangfuseClient } from "@getboson/client";

export * from "@getboson/tracing";
export * from "@getboson/otel";
export * from "@getboson/openai";
export * from "@getboson/langchain";

export * as client from "@getboson/client";
export * as core from "@getboson/core";
export * from "@getboson/tracing";
export * from "@getboson/otel";
export * from "@getboson/openai";
export * from "@getboson/langchain";
