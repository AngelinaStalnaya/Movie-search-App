import React from "react";
import { Button } from "@mantine/core";
import classes  from "./Buttons.module.css";

const PrimaryBtnM = () => {
  return (
    <Button className={classes.primaryBtnM} variant="filled">
      Save
    </Button>
  );
};

export default PrimaryBtnM;
