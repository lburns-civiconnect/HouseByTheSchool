// DOCS:
// https://reactrouter.com/docs/en/v6

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import ErrorPage from "../pages/404";
import ScrollToTop from "./ScrollToTop";
import About from "../pages/About";

function Navigation(props) {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Navigation;
