import classes from "./App.module.css";
import { MantineProvider } from "@mantine/core";
import theme from "./theme.js";
import { useFavicon } from "@mantine/hooks";
import favicon from "./img/svg/favicon.svg";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
// import poster from "./../src/img/poster.png";
// import posterbig from "./../src/img/poster-big.png";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";


const App = ({sidebarList }) => {
  useFavicon(favicon);

  // const item = {
  //   src: poster,
  //   srcBig: posterbig,
  //   alt: "poster",
  //   title: "The Green Mile",
  //   year: "1999",
  //   stars: "9.3",
  //   rates: "2.9M",
  //   genres: "Drama, Crime, Fantasy",

  //   duration: 189,
  //   premiere: "December 6, 1999",
  //   budget: "$125,000,000",
  //   gross_worldwide: "$780,006,945",
  // };

  return (
    <MantineProvider theme={theme}>
      <div className={classes.App}>
        <Sidebar data={sidebarList} />
        <MoviesPage />
      </div>
    </MantineProvider>
  );
};

export default App;
