import { initThemeMode } from "flowbite-react";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

import "./styles.css";
import { ProviderWrapper } from "./ProviderWrapper";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ProviderWrapper>
      <App />
    </ProviderWrapper>
  </React.StrictMode>,
);

initThemeMode();
