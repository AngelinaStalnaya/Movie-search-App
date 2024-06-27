import React from "react";
import classes from "./MoviesPage.module.css";
import { Container, Group, Text } from "@mantine/core";
import DropdownFilter from "../../components/Dropdown/Dropdown";
import InputNum from "../../components/Inputs/InputNum";
import TextBtn from "../../components/buttons/TextBtn";
import SelectComponent from "../../components/Dropdown/SelectComponent";

const genres = [
  { value: "drama", label: "Drama" },
  { value: "comedy", label: "Comedy" },
  { value: "animation", label: "Animation" },
  { value: "thriller", label: "Thriller" },
  { value: "fantasy", label: "Fantasy" },
];

const years = [
  "1986",
  "1987",
  "1988",
  "1989",
  "1990",
  "1991",
  "1992",
  "1993",
  "1994",
  "1995",
  "1996",
  "1997",
  "1998",
  "1999",
  "2000",
];

const sortFilters = [
  "Most Popular",
  "Least Popular",
  "Most Rated",
  "Least Rated",
  "Most Voted",
  "Least Voted",
];

const clearFiltersCall = () => {
  console.log("clear all filters");
  clearFilters.clearFilterDropdown();
  clearFilters.clearFilterSelect();
};
const clearFilters =  {};

const MoviesPage = () => {
  return (
    <Container className={classes.container}>
      <Text className={classes.sectionHeader}>Movies</Text>
      <Group className={classes.filtergroup}>
        <DropdownFilter
          label="Genres"
          placeholder="Select genre"
          selectName="Select genres"
          data={genres}
          clearFilter={clearFilters}
        />
        <SelectComponent
          label="Release year"
          placeholder="Select release year"
          selectName="Select release year"
          data={years}
          clearFilter={clearFilters}
        />
        <InputNum placeholder="From" min={0} clearFilter={clearFilters}/>
        <InputNum placeholder="To" max={10} clearFilter={clearFilters}/>
        <TextBtn actionFunc={clearFiltersCall}>Reset filters</TextBtn>
      </Group>
      <SelectComponent
        label="Sort by"
        data={sortFilters}
        selectName="Sort by"
        defaultValue="Most Popular"
        // clearFilter={clearFilters}
      />
    </Container>
  );
};

export default MoviesPage;
