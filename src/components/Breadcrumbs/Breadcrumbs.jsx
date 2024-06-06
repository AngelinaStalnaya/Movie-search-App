import classes from "./Breadcrumbs.module.css";
import { Breadcrumbs, Anchor } from "@mantine/core";

const items = [
  { title: "Movies", href: "#" },
  { title: "Green mile", href: "#" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

const BreadcrumbsComponent = () => {
  return (
    <Breadcrumbs
      classNames={{
        children: classes.breadcrumbs,
        separator: classes.separator,
      }}
    >
      {items}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
