import React from "react";
import { Button } from "@mantine/core";
import classes  from "./Buttons.module.css";

const TextBtn = ({children}) => {
  return (
    <Button className={classes.textBtn} variant="filled">
      {children}
    </Button>
  );
};

export default TextBtn;
