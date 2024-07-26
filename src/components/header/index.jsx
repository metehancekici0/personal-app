import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.css";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { FaBars, FaXmark } from "react-icons/fa6";
import addScript from "../../helpers/external-files";
import { useTranslation } from "react-i18next";

export default function Header({ isHome, isMenuOpen, setIsMenuOpen }) {
  const [themeMode, setThemeMode] = useState("light");

  const { t, i18n } = useTranslation();

  useEffect(() => {
    let removeHeaderScript;
    const loadScripts = async () => {
      try {
        removeHeaderScript = await addScript(process.env.REACT_APP_BASE_URL + "assets/js/header.js");
      } catch (error) {
        console.error("Script yükleme hatası:", error);
      }
    };
    loadScripts();

    return () => {
      if (removeHeaderScript) removeHeaderScript();
    };
  }, []);

  useEffect(() => {
    if (themeMode === "dark") {
      document.querySelector("body").classList.add("theme-dark");
    } else {
      document.querySelector("body").classList.remove("theme-dark");
    }
  }, [themeMode]);

  return (
    <header className={`headerPart${!isHome ? " subHeader" : ""}`}>
      <div className="container">
        <div className={`mobile${isMenuOpen ? " show" : ""}`}>
          <nav>
            <ul>
              <li>
                <Link to="/">{t("anasayfa")}</Link>
              </li>
              <li>
                <Link to="/about">{t("hakkimda")}</Link>
              </li>
              <li>
                <Link to="/projects">{t("projelerim")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("iletisim")}</Link>
              </li>
            </ul>
          </nav>
          <button
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className="closeBtn"
          >
            <FaXmark />
          </button>
          <div id="menu-background-pattern"></div>
          <img src="../assets/images/background.jpeg" className="menu-background-image" alt="menu background" />
        </div>
        <div className="computer">
          <nav>
            <ul>
              <li>
                <NavLink to="/">{t("anasayfa")}</NavLink>
              </li>
              <li>
                <NavLink to="/about">{t("hakkimda")}</NavLink>
              </li>
              <li>
                <NavLink to="/projects">{t("projelerim")}</NavLink>
              </li>
              <li>
                <NavLink to="/contact">{t("iletisim")}</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <button
          onClick={() => {
            themeMode === "light" ? setThemeMode("dark") : setThemeMode("light");
          }}
          className="toggleThemeBtn"
        >
          {themeMode === "light" ? <BsFillSunFill /> : <BsMoonFill />}
        </button>
        <button
          onClick={() => {
            i18n.language === "tr" ? i18n.changeLanguage("en") : i18n.changeLanguage("tr");
          }}
          className="toggleLanguageBtn"
        >
          {i18n.language === "tr" ? "EN" : "TR"}
        </button>
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="menu-toggle-btn"
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
}
