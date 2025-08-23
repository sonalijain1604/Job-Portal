// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://2a66830b37150fc019b5d68fd8cfe56e@o4509791613681664.ingest.us.sentry.io/4509791651627008",
  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});