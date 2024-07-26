import React, { useState, useEffect } from "react";
import "./style.css";
import { FaCheck } from "react-icons/fa6";
import Projects from "../../mocks/projects.json";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function Detail() {
  const [incomingProject, setIncomingProject] = useState("");

  const { url } = useParams();

  useEffect(() => {
    const selectedProject = Projects.find((item) => item.url === url);
    if (selectedProject) setIncomingProject(selectedProject);
    else window.location.href = process.env.REACT_APP_BASE_URL + "/404";
  }, [url]);

  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{`${incomingProject.title} - Personal website`}</title>
        <meta name="author" content="Metehan Çekici" />
        <meta
          name="description"
          content="Kariyerinde Full Stack Developer olarak ilerlemeyi hedeflemiş bu alanda oldukça özverili, heyecanlı, tutkulu bir yazılım geliştiricisi."
        />
      </Helmet>

      <div className="innerPage">
        <section className="breadcrumb">
          <div className="container">
            <h2 className="pageTitle">{incomingProject.title}</h2>
            <nav>
              <ul>
                <li>
                  <Link to="/">{t("anasayfa")}</Link>
                </li>
                <li>
                  <Link to="/projects">{t("projelerim")}</Link>
                </li>
                <li>
                  <span>{incomingProject.title}</span>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section className="detail">
          <div className="container">
            <div className="row">
              <figure>
                <img src={`../assets/images/projects/${incomingProject.image}`} alt="" />
              </figure>
              <div className="sidebar">
                <div className="field">
                  <div className="header">{incomingProject.title} </div>
                  <ul className="body">
                    <li>
                      <h3> {t("site_adresi")}</h3>
                      <Link to={incomingProject.refLink} target="_blank">
                        {incomingProject.refLink}
                      </Link>
                    </li>
                    <li>
                      <h3> {t("kullanilan_teknolojiler")}</h3>
                      <p>
                        {incomingProject.technologies?.map((item, index) => (
                          <span key={index}>
                            {item}
                            {index !== incomingProject.technologies.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </p>
                    </li>
                    <li>
                      <h3> {t("aciklama")}</h3>
                      <p>{i18n.language === "tr" ? incomingProject.description : incomingProject.description_en} </p>
                    </li>
                    <li className="links">
                      <Link to={incomingProject.refLink} target="_blank" className="anim-hover-button">
                        {t("onizle")}
                      </Link>
                      <Link to={incomingProject.githubLink} target="_blank" className="anim-hover-button">
                        {t("kaynak_kodlari")}
                      </Link>
                    </li>
                  </ul>
                </div>
                {i18n.language === "tr" ? (
                  incomingProject.features?.length > 0 ? (
                    <div className="field another-features">
                      <div className="header">{t("ozellikler")}</div>
                      <ul className="body">
                        {incomingProject.features?.map((item, index) => (
                          <li key={index}>
                            <FaCheck />
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <></>
                  )
                ) : incomingProject.features_en?.length > 0 ? (
                  <div className="field another-features">
                    <div className="header">{t("ozellikler")}</div>
                    <ul className="body">
                      {incomingProject.features_en?.map((item, index) => (
                        <li key={index}>
                          <FaCheck />
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
