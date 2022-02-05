import React from "react";
import { useTranslation } from "react-i18next";

import LogoIcon from "../UI/LogoIcon";
import classes from "./Header.module.css";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={classes.container}>
      <div className={classes.actions}>
        {i18n.language === "ar" ? (
          <button
            className={classes.button}
            onClick={() => {
              i18n.changeLanguage("en");
            }}
            >
            ENG
          </button>
        ) : (
          <button
          className={classes.button}
            onClick={() => {
              i18n.changeLanguage("ar");
            }}
          >
            AR
          </button>
        )}
        <a href="/">{t("buttons.signIn")}</a>|
        <a href="/">{t("buttons.followYourShipment")}</a>
      </div>
      <div className={classes.actions}>
        <a href="/">{t("buttons.callSales")}</a>
        <a href="/">{t("buttons.prices")} </a>
        <a href="/">{t("buttons.main")}</a>
      </div>
      <div clssName={classes.logo}>
        <LogoIcon />
      </div>
    </div>
  );
};

export default Header;
