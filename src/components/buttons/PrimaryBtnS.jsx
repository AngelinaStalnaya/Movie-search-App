import React from "react";
import { Button } from "@mantine/core";
import classes  from "./Buttons.module.css";

const PrimaryBtnS = () => {
  return (
    <Button className={classes.primaryBtnS} variant="filled">
      Search
    </Button>
  );
};

export default PrimaryBtnS;
