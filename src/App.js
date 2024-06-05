import classes from "./App.module.css";
import { MantineProvider } from "@mantine/core";
import theme from "./theme.js";
import PrimaryBtnM from "./components/buttons/PrimaryBtnM.jsx";
import PrimaryBtnS from "./components/buttons/PrimaryBtnS.jsx";
import TextBtn from "./components/buttons/TextBtn.jsx";
import InputNum from "./components/Inputs/InputNum.jsx";
import SearchInput from "./components/Inputs/SearchInput.jsx";
import { useFavicon } from "@mantine/hooks";
import favicon from './img/svg/favicon.svg';
import TabsComponent from "./components/Tabs/Tabs.jsx";

const App = () => {
  useFavicon(favicon)
  
  return (
    <MantineProvider theme={theme}>
      <div className={classes.App}>
        start creating app
        <PrimaryBtnM>Save</PrimaryBtnM>
        <PrimaryBtnS>Search</PrimaryBtnS>
        <TextBtn >Reset filters</TextBtn>
        <InputNum placeholder='From'/>
        <SearchInput placeholder='Search movie title'/>
        <TabsComponent />
      </div>
    </MantineProvider>
  );
};

export default App;
