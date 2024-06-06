import React from "react";
import { Button } from "@mantine/core";
import classes from "./Buttons.module.css";

const PrimaryBtnM = ({ actionFunc, children }) => {
  return (
    <Button
      className={classes.primaryBtnM}
      variant="filled"
      onClick={actionFunc}
    >
      {children}
    </Button>
  );
};

export default PrimaryBtnM;
