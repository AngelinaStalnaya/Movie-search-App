import React from "react";
import { Button } from "@mantine/core";
import classes  from "./Buttons.module.css";

const PrimaryBtnS = ({children}) => {
  return (
    <Button className={classes.primaryBtnS} variant="filled">
      {children}
    </Button>
  );
};

export default PrimaryBtnS;
