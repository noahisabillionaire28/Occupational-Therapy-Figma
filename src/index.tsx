import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FigmaThumbnail } from "./screens/FigmaThumbnail/FigmaThumbnail";
import { OTLandingPage } from "./screens/OTLandingPage/OTLandingPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OTLandingPage />} />
        <Route path="/old" element={<FigmaThumbnail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
