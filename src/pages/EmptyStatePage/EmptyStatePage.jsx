import React from "react";
import classes from "./EmptyStatePage.module.css";
import { Image } from "@mantine/core";
import noRate from "./../../img/no-rate.png";
import PrimaryBtnM from "./../../components/buttons/PrimaryBtnM";
import TitleSemibold from "../../components/text/TitleSemibold";

const EmptyStatePage = () => {
  return (
    <div className={classes.emptyStateContainer}>
      <Image src={noRate} alt="no rate" className={classes.emptyStateImg} />
      <TitleSemibold>
        You haven't rated any films yet
      </TitleSemibold>
      <PrimaryBtnM>Find movies</PrimaryBtnM>
    </div>
  );
};

export default EmptyStatePage;
