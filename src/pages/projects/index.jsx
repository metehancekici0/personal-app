import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Projects from "../../mocks/projects.json";
import "./style.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{`${t("projelerim")} - Personal website`} </title>
        <meta name="author" content="Metehan Çekici" />
        <meta
          name="description"
          content="Kariyerinde Full Stack Developer olarak ilerlemeyi hedeflemiş bu alanda oldukça özverili, heyecanlı, tutkulu bir yazılım geliştiricisi."
        />
      </Helmet>

      <div className="innerPage">
        <section className="breadcrumb">
          <div className="container">
            <h2 className="pageTitle">{t("projelerim")}</h2>
            <nav>
              <ul>
                <li>
                  <Link to="/">{t("anasayfa")}</Link>
                </li>
                <li>
                  <span>{t("projelerim")}</span>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section className="portfolio">
          <div className="container">
            <div className="projects">
              {Projects.map((item) => (
                <div className="item" key={item.id}>
                  <figure>
                    <img src={`./assets/images/projects/${item.image}`} alt="" />
                    <Link to={item.url}>
                      <button>
                        <FaArrowRight /> {t("daha_fazla")}
                      </button>
                    </Link>
                  </figure>
                  <div className="content">
                    <div className="title">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
