import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/CardCharacter.module.scss";
import "../../i18n";

const CharacterCard = ({ name, image, movie, gender, species, link }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>
          {t("card_characters.name")} {name}
        </h3>
        <p className={styles.card__text}>
          <strong>{t("card_characters.movie")}:</strong> {movie}
        </p>
        <p className={styles.card__text}>
          <strong>{t("card_characters.gender")}:</strong>{" "}
          {gender ? gender : t("card_characters.unknownGender")}
        </p>
        <p className={styles.card__text}>
          <strong>{t("card_characters.species")}:</strong>{" "}
          {species ? species : t("card_characters.unknownSpecies")}
        </p>
        <p className={styles.card__text}>
          <strong>{t("card_characters.link")}:</strong>{" "}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card__link}
          >
            {t("card_characters.showMore")}
          </a>
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
