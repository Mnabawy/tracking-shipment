import React from "react";
import { useTranslation } from "react-i18next";
import classes from "./Item.module.css";

const Item = props => {
  const { t, i18n } = useTranslation();

  return (
    <div className={`${classes.container}`}>
      <h5 className={classes.titleColor}>{props.title}</h5>
      <h3 className={props.textColor ? classes.textColor : ""}>{props.data}</h3>
    </div>
  );
};

export default Item;
