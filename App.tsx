import { SafeAreaView, View } from "react-native";

import { Routes } from "./src/Routes";
import { ThemeProvider } from "styled-components";
import theme from "./src/Global/Styles/theme";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
