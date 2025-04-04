import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./pages/App.tsx";
import LayoutMain from "./layouts/LayoutMain.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
