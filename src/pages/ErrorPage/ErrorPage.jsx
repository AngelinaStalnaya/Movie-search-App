import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import NotFound from "../../components/NotFound/NotFound";
import { Text, Group } from "@mantine/core";
import PrimaryBtnM from "../../components/buttons/PrimaryBtnM";
import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={classes.errorPage}>
      <Sidebar />
      <Group className={classes.errorPageContent}>
        <NotFound />
        <Text className={classes.errorPageText}>
          We can't find the page you are looking for
        </Text>
        <PrimaryBtnM>Go Home</PrimaryBtnM>
      </Group>
    </div>
  );
};

export default ErrorPage;
