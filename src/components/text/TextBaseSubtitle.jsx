import { Text } from "@mantine/core";
import React from "react";
import classes from "./Text.module.css";

const TextBaseSubtitle = ({ children }) => {
  return (
    <Text
      className={classes.textBaseSubtitle}
    >
      {children}
    </Text>
  );
};

export default TextBaseSubtitle;
