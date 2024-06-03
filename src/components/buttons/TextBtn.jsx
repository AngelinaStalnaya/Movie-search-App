import React from "react";
import { Button } from "@mantine/core";
import classes  from "./Buttons.module.css";

const TextBtn = () => {
  return (
    <Button className={classes.textBtn} variant="filled">
      Reset filters
    </Button>
  );
};

export default TextBtn;
