import React from "react";
import { FaPhone, FaLocationDot, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./style.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{`${t("iletisim")} - Personal website`} </title>
        <meta name="author" content="Metehan Çekici" />
        <meta
          name="description"
          content="Kariyerinde Full Stack Developer olarak ilerlemeyi hedeflemiş bu alanda oldukça özverili, heyecanlı, tutkulu bir yazılım geliştiricisi."
        />
      </Helmet>

      <div className="innerPage">
        <section className="breadcrumb">
          <div className="container">
            <h2 className="pageTitle">{t("iletisim")}</h2>
            <nav>
              <ul>
                <li>
                  <Link to="/">{t("anasayfa")}</Link>
                </li>
                <li>
                  <span>{t("iletisim")}</span>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section className="contact">
          <div className="container">
            <div className="box">
              <div className="form-field">
                <h3 className="title">{t("iletisim_baslik")}</h3>
                <p className="sub-title">{t("iletisim_aciklama")}</p>
                <form action="">
                  <div className="input_group">
                    <input id="name" type="text" name="name" autoComplete="name" placeholder=" " required="" />
                    <label htmlFor="name">{t("input_1")}</label>
                  </div>
                  <div className="input_group">
                    <input id="email" type="email" name="email" autoComplete="email" placeholder=" " required="" />
                    <label htmlFor="email">{t("input_2")}</label>
                  </div>
                  <div className="input_group">
                    <input id="tel" type="tel" name="tel" autoComplete="tel" placeholder=" " />
                    <label htmlFor="tel">{t("input_3")}</label>
                  </div>
                  <div className="input_group">
                    <input id="subject" type="text" name="subject" placeholder=" " />
                    <label htmlFor="subject">{t("input_4")}</label>
                  </div>
                  <div className="input_group">
                    <textarea id="message" name="message" rows="5" placeholder=" "></textarea>
                    <label htmlFor="message">{t("input_5")}</label>
                  </div>
                  <button type="submit" className="submit-btn" disabled="">
                    {t("iletisim_button")}
                  </button>
                </form>
              </div>
              <div className="sidebar">
                <div className="info-field">
                  <div className="item">
                    <FaEnvelope />
                    <span className="value">metehancekici@gmail.com</span>
                  </div>
                  <div className="item">
                    <FaLocationDot />
                    <span className="value">Keçiören / ANKARA</span>
                  </div>
                  <div className="item">
                    <FaPhone />
                    <span className="value">+90 552 370 8602</span>
                  </div>
                </div>
                <div className="map-field">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54345.57793539883!2d32.82209036389276!3d40.02412980789776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4082097d856a2c3f%3A0x8d22ac4346722e44!2zS2XDp2nDtnJlbi9BbmthcmE!5e0!3m2!1str!2str!4v1697106906261!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    title="google map"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
