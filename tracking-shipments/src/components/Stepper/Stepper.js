import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "./Stepper.module.css";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

console.log(t("stepper.created"));

const CustomStipper = () => {
  const { t, i18n } = useTranslation();
  
  const steps = [
    t("stepper.shipmentDelevired"),
    t("stepper.outForDelivery"),
    t("stepper.recievedFromDealer"),
    t("stepper.created"),
  ];

  return (
    <Stepper
      activeStep={4}
      alternativeLabel
      sx={{
        width: "100%",
      }}
    >
      {steps.map(label => (
        <Step
          key={label}
          sx={{
            "& .MuiStepConnector-root": {
              top: "7px",
              left: "calc(-50% + 10px)",
              right: "calc(50% + 10px)",
            },
            "& .MuiStepConnector-line": {
              borderColor: "green",
              bordertTopStyle: "solid",
              borderTopWidth: "11px",
            },
            "& .MuiStepIcon-root": {
              color: "green !important",
            },
          }}
        >
          <StepLabel
            sx={{
              "& .MuiStepLabel-label": {
                color: "#01011f !important",
                fontWeight: "bold !important",
                fontFamily: "cairo !important",
              },
            }}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default CustomStipper;
