import "dotenv/config";
import { NodeSDK } from "@opentelemetry/sdk-node";
import { LangfuseSpanProcessor } from "@getboson/otel";
import { observe, propagateAttributes } from "@getboson/tracing";

function requireEnv(name) {
  const v = process.env[name];
  if (!v) {
    console.error(`Missing ${name}. Copy .env.example to .env and set your project keys.`);
    process.exit(1);
  }
  return v;
}

requireEnv("LANGFUSE_PUBLIC_KEY");
requireEnv("LANGFUSE_SECRET_KEY");
requireEnv("LANGFUSE_BASE_URL");

const spanProcessor = new LangfuseSpanProcessor();
const sdk = new NodeSDK({
  spanProcessor,
  instrumentations: [],
});

sdk.start();

const runSmoke = observe(
  async () => {
    return { ok: true, at: new Date().toISOString() };
  },
  {
    name: "trace-smoke-handshake",
    asType: "span",
    captureInput: true,
    captureOutput: true,
  },
);

try {
  await propagateAttributes(
    {
      traceName: "trace-smoke",
      metadata: { app: "examples/trace-smoke" },
    },
    () => runSmoke(),
  );

  await spanProcessor.forceFlush();
  console.log(
    "Done. Open your Boson/Langfuse UI and look for trace name \"trace-smoke\" (span: trace-smoke-handshake).",
  );
} finally {
  await spanProcessor.shutdown();
  await sdk.shutdown();
}
