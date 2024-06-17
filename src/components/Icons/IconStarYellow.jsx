import { ActionIcon } from "@mantine/core";
import { IconStarFilled } from "@tabler/icons-react";
import classes from "./Icons.module.css";

const IconStarYellow = () => {
  return (
    <ActionIcon className={classes.starBtn} aria-label="Star rate">
      <IconStarFilled className={classes.starYellow} />
    </ActionIcon>
  );
};
export default IconStarYellow;
