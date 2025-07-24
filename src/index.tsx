import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ElementDashboardHi } from "./screens/ElementDashboardHi/ElementDashboardHi";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ElementDashboardHi />
  </StrictMode>,
);
