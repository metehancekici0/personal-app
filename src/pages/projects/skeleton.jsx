import React from "react";
import "./skeleton.css";

export default function LoaderPortfolio() {
  return (
    <div className="innerPage skeleton">
      <section className="portfolio">
        <div className="container">
          <div className="pageTitle object"></div>
          <div className="projects">
            <div className="item">
              <figure className="object"></figure>
              <div className="content">
                <div className="title object"></div>
              </div>
            </div>
            <div className="item">
              <figure className="object"></figure>
              <div className="content">
                <div className="title object"></div>
              </div>
            </div>
            <div className="item">
              <figure className="object"></figure>
              <div className="content">
                <div className="title object"></div>
              </div>
            </div>
            <div className="item">
              <figure className="object"></figure>
              <div className="content">
                <div className="title object"></div>
              </div>
            </div>
            <div className="item">
              <figure className="object"></figure>
              <div className="content">
                <div className="title object"></div>
              </div>
            </div>
            <div className="item">
              <figure className="object"></figure>
              <div className="content">
                <div className="title object"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
