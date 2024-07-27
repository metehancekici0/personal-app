import React from "react";
import "./style.css";
import { FaEnvelope, FaWhatsapp, FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{`${t("hakkimda")} - Personal website`} </title>
        <meta name="author" content="Metehan Çekici" />
        <meta
          name="description"
          content="Kariyerinde Full Stack Developer olarak ilerlemeyi hedeflemiş bu alanda oldukça özverili, heyecanlı, tutkulu bir yazılım geliştiricisi."
        />
      </Helmet>

      <div className="innerPage">
        <section className="breadcrumb">
          <div className="container">
            <h2 className="pageTitle">{t("hakkimda")}</h2>
            <nav>
              <ul>
                <li>
                  <Link to="/">{t("anasayfa")}</Link>
                </li>
                <li>
                  <span>{t("hakkimda")}</span>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section className="about">
          <div className="container">
            <div className="photo">
              <img src="./assets/images/profile.jpg" alt="" />
            </div>
            <div className="content">
              <h2 className="title">{t("benkimim")}?</h2>
              <div className="text">
                <p>{t("hakkimda_p1")}</p>
                <p>{t("hakkimda_p2")}</p>
                <p>{t("hakkimda_p3")}</p>
              </div>
              <div className="links">
                <Link to="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=metehancekici0@gmail.com" target="_blank" className="btnMail">
                  <FaEnvelope /> <p>{t("hakkimda_btn1")}</p>
                </Link>
                <Link to="https://wa.me/905523708602" target="_blank" className="btnWhatsapp">
                  <FaWhatsapp /> WhatsApp
                </Link>
                <Link to="/assets/CV_METEHAN_CEKICI.pdf" className="btnResume" target="_blank">
                  <FaDownload /> <p>{t("hakkimda_btn2")}</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="skills">
          <div className="container">
            <div className="item">
              <div className="left">
                <img src="./assets/images/skills/html.png" alt="" />
              </div>
              <div className="right">
                <div style={{ width: "98%" }} className="header">
                  <span className="title">HTML</span>
                  <span className="experiance">4 {t("yil2")} (98%)</span>
                </div>
                <div className="bar">
                  <div style={{ width: "98%" }} className="score"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="left">
                <img src="./assets/images/skills/css.png" alt="" />
              </div>
              <div className="right">
                <div style={{ width: "98%" }} className="header">
                  <span className="title">CSS</span>
                  <span className="experiance">4 {t("yil2")} (98%)</span>
                </div>
                <div className="bar">
                  <div style={{ width: "98%" }} className="score"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="left">
                <img src="./assets/images/skills/javascript.png" alt="" />
              </div>
              <div className="right">
                <div style={{ width: "95%" }} className="header">
                  <span className="title">JavaScript</span>
                  <span className="experiance">4 {t("yil2")} (95%)</span>
                </div>
                <div className="bar">
                  <div style={{ width: "95%" }} className="score"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="left">
                <img src="./assets/images/skills/react.png" alt="" />
              </div>
              <div className="right">
                <div style={{ width: "90%" }} className="header">
                  <span className="title">React.js</span>
                  <span className="experiance">1-2 {t("yil1")} (90%)</span>
                </div>
                <div className="bar">
                  <div style={{ width: "90%" }} className="score"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="left">
                <img src="./assets/images/skills/nextjs.png" alt="" />
              </div>
              <div className="right">
                <div style={{ width: "60%" }} className="header">
                  <span className="title">Next.js</span>
                  <span className="experiance">0-1 {t("yil1")} (60%)</span>
                </div>
                <div className="bar">
                  <div style={{ width: "60%" }} className="score"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="left">
                <img src="./assets/images/skills/nodejs.png" alt="" />
              </div>
              <div className="right">
                <div style={{ width: "60%" }} className="header">
                  <span className="title">Node.js</span>
                  <span className="experiance">0-1 {t("yil1")} (60%)</span>
                </div>
                <div className="bar">
                  <div style={{ width: "60%" }} className="score"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="left">
                <img src="./assets/images/skills/php.png" alt="" />
              </div>
              <div className="right">
                <div style={{ width: "90%" }} className="header">
                  <span className="title">PHP</span>
                  <span className="experiance">1-2 {t("yil2")} (90%)</span>
                </div>
                <div className="bar">
                  <div style={{ width: "90%" }} className="score"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="left">
                <img src="./assets/images/skills/mysql.png" alt="" />
              </div>
              <div className="right">
                <div style={{ width: "98%" }} className="header">
                  <span className="title">MySQL</span>
                  <span className="experiance">1-2 {t("yil2")} (98%)</span>
                </div>
                <div className="bar">
                  <div style={{ width: "98%" }} className="score"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
