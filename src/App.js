import classes from "./App.module.css";
import { MantineProvider } from "@mantine/core";
import theme from "./theme.js";
import PrimaryBtnM from "./components/buttons/PrimaryBtnM.jsx";
import PrimaryBtnS from "./components/buttons/PrimaryBtnS.jsx";
import TextBtn from "./components/buttons/TextBtn.jsx";

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <div className={classes.App}>
        start creating app
        <PrimaryBtnM></PrimaryBtnM>
        <PrimaryBtnS> </PrimaryBtnS>
        <TextBtn></TextBtn>
      </div>
    </MantineProvider>
  );
};

export default App;
