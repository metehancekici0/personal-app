import React from "react";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Sayfa Bulunamadı - Personal website</title>
        <meta name="author" content="Metehan Çekici" />
        <meta
          name="description"
          content="Kariyerinde Full Stack Developer olarak ilerlemeyi hedeflemiş bu alanda oldukça özverili, heyecanlı, tutkulu bir yazılım geliştiricisi."
        />
      </Helmet>
      <div className="innerPage">Sayfa Bulunamadı.</div>
    </>
  );
}
