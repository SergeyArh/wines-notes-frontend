import { initThemeMode } from "flowbite-react";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

import "./styles.css";
import { ProviderWrapper } from "./ProviderWrapper";

const CUSTOM_ROUTES = process.env.CUSTOM_ROUTES;

const environment = process.env.NODE_ENV || "development";
const isDevelopment = environment === "development";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);

const rootElement = (
  <React.StrictMode>
    <ProviderWrapper>
      <App />
    </ProviderWrapper>
  </React.StrictMode>
);

if (isDevelopment && CUSTOM_ROUTES) {
  import("./mocks/node").then(async ({ worker }) => {
    await worker.start({ onUnhandledRequest: "bypass" });

    root.render(rootElement);
  });
} else {
  root.render(rootElement);
}

initThemeMode();
