import { NavLink, Paper, Image } from "@mantine/core";
import { useState } from "react";
import logo from "./../../img/svg/logo.svg";
import classes from './Sidebar.module.css'

const Sidebar = ({ data }) => {
  const [active, setActive] = useState(0);
  const items = data.map((item, index) => {
    return (
      <NavLink
        href={item.href}
        key={item.label}
        active={index === active}
        label={item.label}
        onClick={() => setActive(index)}
        w={232}
      />
    );
  });

  return (
    <Paper className={classes.sidebarPaper}>
      <Image src={logo} className={classes.sidebarLogo}/>
      {items}
    </Paper>
  );
};

export default Sidebar;
