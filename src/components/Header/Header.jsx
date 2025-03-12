import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/Header.module.scss";
import "../../i18n";

const Header = ({
  onSelect,
  selectedMovie,
  onSelectLanguage,
  selectedLanguage,
}) => {
  const { t, i18n } = useTranslation();

  function handleChangeLanguage(lang) {
    onSelectLanguage(lang);
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>{t("header.title")}</h1>
      <p className={styles.header__subtitle}>{t("header.description")}</p>

      <div className={`${styles.header__buttons} flex gap-3 justify-center`}>
        <button
          className={`${styles.header__button} ${
            selectedMovie === "rm" ? styles["header__button--active"] : ""
          }`}
          onClick={() => onSelect("rm")}
        >
          Rick y Morty
        </button>
        <button
          className={`${styles.header__button} ${
            selectedMovie === "hp" ? styles["header__button--active"] : ""
          }`}
          onClick={() => onSelect("hp")}
        >
          Harry Potter
        </button>
      </div>

      <div className={`${styles.header__buttons} flex gap-3 justify-center`}>
        <button
          className={`${styles.header__button} ${
            selectedLanguage === "es" ? styles["header__button--active"] : ""
          }`}
          onClick={() => handleChangeLanguage("es")}
        >
          {t("header.spanish")}
        </button>
        <button
          className={`${styles.header__button} ${
            selectedLanguage === "en" ? styles["header__button--active"] : ""
          }`}
          onClick={() => handleChangeLanguage("en")}
        >
          {t("header.english")}
        </button>
      </div>
    </header>
  );
};

export default Header;
