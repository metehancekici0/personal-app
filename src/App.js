import React, { useEffect, useState } from 'react'
import Router from './Router';
import { useLocation } from "react-router-dom";

import Preloader from './components/preloader';
import Header from "./components/header";
import Footer from "./components/footer";


function App() {
  const [preloader, setPreloader] = useState({ loading: true, isActive: true, });
  const [pageLoader, setPageLoader] = useState(false);

  const [isHome, setIsHome] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setPreloader({ loading: false, isActive: true });
    }, 1200)

    setTimeout(() => {
      setPreloader({ loading: false, isActive: false });
    }, 2000)
  }, [])


  useEffect(() => {
    window.scrollTo(0, 0);
    setPageLoader(true);

    setTimeout(() => {
      setPageLoader(false);
    }, 0)

    if (location.pathname === "/") {
      setIsHome(true);
      document.querySelector("html").classList.add("home-page")
    }
    else {
      setIsHome(false);
      document.querySelector("html").classList.remove("home-page")
    }
    setIsMenuOpen(false)
  }, [location])

  return (
    <>
      <Preloader preloader={preloader} />
      <Header isHome={isHome} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <Router pageLoader={pageLoader} />

      {isHome ? "" : <Footer />}
    </>
  )
}

export default App