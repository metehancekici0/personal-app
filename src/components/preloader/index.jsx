import React from "react";
import styles from "./styles.module.css";

export default function Preloader({ preloader }) {
  return (
    preloader.isActive && (
      <div id={styles.preloader} className={!preloader.loading ? styles.preloaded : ""}>
        <div className={styles.loaderLine}></div>
      </div>
    )
  );
}
