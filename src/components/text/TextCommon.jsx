import { Text } from "@mantine/core";
import React from "react";
import classes from "./Text.module.css";

const TextCommon = ({ children, colored }) => {
  return (
    <Text
      className={colored ? classes.textCommonGrey : classes.textCommonBlack}
    >
      {children}
    </Text>
  );
};

export default TextCommon;
