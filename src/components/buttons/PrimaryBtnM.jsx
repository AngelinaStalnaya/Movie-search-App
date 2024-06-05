import React from "react";
import { Button } from "@mantine/core";
import classes  from "./Buttons.module.css";

const PrimaryBtnM = ({children}) => {
  return (
    <Button className={classes.primaryBtnM} variant="filled">
      {children}
    </Button>
  );
};

export default PrimaryBtnM;
