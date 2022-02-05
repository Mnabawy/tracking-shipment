import React from "react";
import { useTranslation } from "react-i18next";
import Item from "./Item";
import classes from "./ShipmentProgress.module.css";

const ShipmentProgres = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={classes.container}
      dir={i18n.language === "ar" ? "ltr" : "rtl"}
    >
      <Item title={t("progress.deliveryTime")} data="3Jan 3030" />

      <Item title={t("progress.dealerName")} data="Souq.COM" />

      <Item
        title={t("progress.lastUpdate")}
        data="2020/04/06 at 5:33pm اﻷثنين "
      />

      <Item
        title={t("progress.shipmentNumber")}
        data={t("dummy_data.recieved")}
        textColor="green"
      />
      <hr />
      
    </div>
  );
};

export default ShipmentProgres;
