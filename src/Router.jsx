import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Detail from "./pages/detail";
import Contact from "./pages/contact";
import NotFound from "./pages/404";

import LoaderAbout from "./pages/about/skeleton";
import LoaderProjects from "./pages/projects/skeleton";

export default function Router({ pageLoader }) {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={pageLoader ? <LoaderAbout /> : <About />} />
      <Route path="/projects" element={pageLoader ? <LoaderProjects /> : <Projects />} />
      <Route path="/projects/:url" element={<Detail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
