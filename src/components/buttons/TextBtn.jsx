import React from "react";
import { Button } from "@mantine/core";
import classes from "./Buttons.module.css";

const TextBtn = ({ actionFunc, children }) => {
  return (
    <Button className={classes.textBtn} variant="filled" onClick={actionFunc}>
      {children}
    </Button>
  );
};

export default TextBtn;
