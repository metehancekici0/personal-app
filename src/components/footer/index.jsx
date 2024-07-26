import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footerPart">
      <div className="container">
        <span>Copyright © 2023 Metehan Çekici.</span> <span>{t("tumhaklarisaklidir")}.</span>
      </div>
    </footer>
  );
}
