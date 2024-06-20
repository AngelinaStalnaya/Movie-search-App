import classes from "./App.module.css";
import { Divider, MantineProvider } from "@mantine/core";
import theme from "./theme.js";
// import PrimaryBtnM from "./components/buttons/PrimaryBtnM.jsx";
// import PrimaryBtnS from "./components/buttons/PrimaryBtnS.jsx";
// import TextBtn from "./components/buttons/TextBtn.jsx";
// import InputNum from "./components/Inputs/InputNum.jsx";
// import SearchInput from "./components/Inputs/SearchInput.jsx";
import { useFavicon } from "@mantine/hooks";
import favicon from "./img/svg/favicon.svg";
// import TabsComponent from "./components/Tabs/Tabs.jsx";
// import ModalComponent from "./components/Modal/Modal.jsx";
// import IconStar from "./components/Icons/IconStar.jsx";
// import IconBtn from './components/buttons/IconBtn.jsx';
// import { IconChevronUp } from '@tabler/icons-react';
// import BreadcrumbsComponent from "./components/Breadcrumbs/Breadcrumbs.jsx";
import DropdownFilter from "./components/Dropdown/Dropdown.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import MovieCard from "./components/Cards/MovieCard.jsx";
import poster from "./../src/img/poster.png";
import MovieCardBig from "./components/Cards/MovieCardBig.jsx";
import posterbig from "./../src/img/poster-big.png";
import PaginationComponent from "./components/pagination/Pagination.jsx";

const App = () => {
  useFavicon(favicon);

  const data = [
    { label: "Movies", href: "movies" },
    { label: "Rated movies", href: "ratedmovies" },
  ];

  const item = {
    src: poster,
    srcBig: posterbig,
    alt: "poster",
    title: "The Green Mile",
    year: "1999",
    stars: "9.3",
    rates: "2.9M",
    genres: "Drama, Crime, Fantasy",

    duration: 189,
    premiere: "December 6, 1999",
    budget: "$125,000,000",
    gross_worldwide: "$780,006,945",
  };

  return (
    <MantineProvider theme={theme}>
      <div className={classes.App}>
        UI components:
        <Divider />
        {/* -primaryBTNM: <PrimaryBtnM>Save</PrimaryBtnM>
        -primaryBtnS: <PrimaryBtnS>Search</PrimaryBtnS>
        -textBtn: <TextBtn >Reset filters</TextBtn>
        -inputnNum: <InputNum placeholder='From'/>
        -searchInput: <SearchInput placeholder='Search movie title'/>
        -tabscomponent: <TabsComponent />
        -modalComponent: <ModalComponent modalTitle='Modal rating' title='Coco' />
        -IconStar: <IconStar />
        -IconBtn: <IconBtn actionFunc={console.log('chevron up pressed')}><IconChevronUp/></IconBtn>
        -breadcrumps: <BreadcrumbsComponent /> */}
        -dropdownMenu:{" "}
        <DropdownFilter
          placeholder="Select genre"
          label="Genres"
          selectName="Genres filter"
        />
        -sidebar: <Sidebar data={data} />
        -moviecard small: <MovieCard item={item} />
        -moviecardBg: <MovieCardBig item={item} />
        -pagination : <PaginationComponent total={3}/>
      </div>
    </MantineProvider>
  );
};

export default App;
