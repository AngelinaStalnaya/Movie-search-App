import { Pagination, Group } from "@mantine/core";
import { useState } from "react";
import classes from "./Pagination.module.css";

const PaginationComponent = ({ total }) => {
  const [activePage, setActivePage] = useState(1);

  return (
    <Pagination.Root total={total} value={activePage} onChange={setActivePage}>
      <Group classNames={classes.pagination}>
        <Pagination.Previous className={classes.paginationChevron} />
        <Pagination.Items className={classes.paginationControl} />
        <Pagination.Next className={classes.paginationChevron} />
      </Group>
    </Pagination.Root>
  );
};

export default PaginationComponent;
