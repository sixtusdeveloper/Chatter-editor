// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4391a38277240d09b1fca3bfad6c2399@o4507387492761600.ingest.us.sentry.io/4507677002235904",
  // dsn: "https://f6f9eb1d642ec14530853dd64cad4eef@o4507387442364416.ingest.us.sentry.io/4507599411412992",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
