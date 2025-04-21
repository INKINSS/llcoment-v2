import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./pages/App.tsx";
import LayoutMain from "./layouts/LayoutMain.tsx";
import Publish from "./pages/Publish.tsx";
import ArticleBySlug from "./pages/ArticleBySlug.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<App />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/article/:slug" element={<ArticleBySlug />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
