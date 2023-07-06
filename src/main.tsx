import App from "App";
import React from "react";
import ReactDOM from "react-dom/client";

import { queryClient } from "api/index";
import { QueryClientProvider } from "react-query";

import "style/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
