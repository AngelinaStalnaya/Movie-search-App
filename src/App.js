import classes from "./App.module.css";
import { MantineProvider } from "@mantine/core";
import theme from "./theme.js";

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <div className={classes.App}>start creating app</div>
    </MantineProvider>
  );
};

export default App;
