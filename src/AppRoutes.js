import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./index.css";
import App from "./App";
import Tos from "./components/Legals/TOS";
import Policy from "./components/Legals/Policy";

export default function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence
      initial={true}
      exitBeforeEnter
      onExitComplete={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <Routes key={location.pathname} location={location}>
        <Route path="/politique" element={<Policy />} />
        <Route path="/tos" element={<Tos />} />
        <Route path="/" element={<App />} />
      </Routes>
    </AnimatePresence>
  );
}
