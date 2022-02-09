import React, { useEffect, useState } from "react";
import date from "date-and-time";

import { getTableData } from "../Services/Shipments";
import classes from "./Table.module.css";
import Button from "./UI/Button";
import logo from "../assets/questions.svg";
import { useTranslation } from "react-i18next";

const Table = () => {
  const [data, setData] = useState([]);
  const { t, i18n } = useTranslation();
  // for responsive

  useEffect(() => {
    async function fetData() {
      const shipments = await getTableData();
      setData(shipments);
    }
    fetData();
  }, []);

  return (
    <div
      className={classes.container}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className={classes.tableSection}>
        <h3>{t("shipmentDetails")}</h3>
        <table className={classes}>
          <thead>
            <tr>
              <th>branch</th>
              <th>date</th>
              <th>time</th>
              <th>details</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.date}>
                <td>{item.hub ? item.hub : "nasr city"}</td>
                <td>{date.format(new Date(item.date), "YYYY/MM/DD")}</td>
                <td>{date.format(new Date(item.time), "HH:mm:ss A")}</td>
                <td>{item.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={classes.addressContainer}>
        <h3>{t("shipmentAddress")}</h3>

        <p className={classes.paragraph}>{t("dummyAdress")}</p>
        <div className={classes.reportCard}>
          <div>
            <p>{t("haveProblem")}</p>
            <Button title={t("reportProblem")} />
          </div>
          <img src={logo} alt="have a question" className={classes.image} />
        </div>
      </div>
    </div>
  );
};

export default Table;
