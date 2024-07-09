import { Text } from "@mantine/core";
import React from "react";
import classes from "./Text.module.css";

const TextBaseBold = ({ children, colored }) => {
  return (
    <Text
      className={colored ? classes.textBaseMBoldPurple : classes.textBaseMBold}
    >
      {children}
    </Text>
  );
};

export default TextBaseBold;
