
import React from "react";
import { createRoot } from "react-dom/client";
import Index from "./routes/index";
import "./styles.css";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <Index />
    </React.StrictMode>
  );
}
