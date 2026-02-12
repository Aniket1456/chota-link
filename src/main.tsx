import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LinkProvider } from "./context/LinkContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LinkProvider>
        <App />
      </LinkProvider>
    </BrowserRouter>
  </React.StrictMode>
);
