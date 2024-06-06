import React from "react";
import { Button } from "@mantine/core";
import classes from "./Buttons.module.css";

const PrimaryBtnS = ({ actionFunc, children }) => {
  return (
    <Button
      className={classes.primaryBtnS}
      variant="filled"
      onClick={actionFunc}
    >
      {children}
    </Button>
  );
};

export default PrimaryBtnS;
