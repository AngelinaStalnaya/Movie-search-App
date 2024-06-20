import React from "react";
import classes from "./EmptyStatePage.module.css";
import { Image, Text } from "@mantine/core";
import noRate from "./../../img/no-rate.png";
import PrimaryBtnM from "./../../components/buttons/PrimaryBtnM";

const EmptyStatePage = () => {
  return (
    <div className={classes.emptyStateContainer}>
      <Image src={noRate} alt="no rate" className={classes.emptyStateImg} />
      <Text className={classes.emptyStateText}>
        You haven't rated any films yet
      </Text>
      <PrimaryBtnM>Find movies</PrimaryBtnM>
    </div>
  );
};

export default EmptyStatePage;
