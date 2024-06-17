import { ActionIcon } from "@mantine/core";
import { IconStarFilled } from "@tabler/icons-react";
import classes from "./Icons.module.css";
import { useState } from "react";

const IconStar = ({ rateStatus=false }) => {
  const [rated, setRated] = useState(false);

  if (rateStatus) {
    setRated(true);
  }

  return (
    <ActionIcon className={classes.starBtn} aria-label="Star rate">
      <IconStarFilled className={rated ? classes.starRated : classes.star} />
    </ActionIcon>
  );
};
export default IconStar;
