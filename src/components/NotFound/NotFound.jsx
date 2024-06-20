import React from "react";
import colors from "../../img/color-palette.png";
import { Image, Paper, Text } from "@mantine/core";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <Paper className={classes.errorContainer}>
      <Image src={colors} alt="4040" />
      <Text className={classes.errorText}>PAGE NOT FOUND 404</Text>
      <Image src={colors} alt="4040" />
    </Paper>
  );
};

export default NotFound;
