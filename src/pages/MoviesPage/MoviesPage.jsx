import React from "react";
import classes from "./MoviesPage.module.css";
import { Container, Group, Text, Fieldset } from "@mantine/core";
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
const clearFilters = {};

const clearFiltersCall = () => {
  clearFilters.clearFilterDropdown();
  clearFilters.clearFilterSelect();
  clearFilters.clearFilterInput();
  clearFilters.clearFilterInput();
};


const MoviesPage = () => {
  return (
    <Container className={classes.container}>
      <Container className={classes.moviesPageFilters}>
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
        <Fieldset legend='Ratings' classNames={{
          root: classes.inputNumFieldset,
          legend: classes.inputNumFieldsetLegend,
          }}>
          
          <InputNum
            placeholder="From"
            min={0}
            max={10}
            clearFilter={clearFilters}
            id='inputNum'
          />
          <InputNum
            placeholder="To"
            min={1}
            max={10}
            clearFilter={clearFilters}
            id='inputNum'
          />
        </Fieldset>
          
        <TextBtn actionFunc={clearFiltersCall}>Reset filters</TextBtn>
      </Group>
      <Group className={classes.separateFilter}>
      <SelectComponent
        label="Sort by"
        data={sortFilters}
        selectName="Sort by"
        defaultValue="Most Popular"
      />
      </Group>
      </Container>
      <Container className={classes.MoviesPageCatalogue}>

      </Container>
      
      
    </Container>
  );
};

export default MoviesPage;
