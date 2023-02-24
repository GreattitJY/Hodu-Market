import React from "react";
import { ThemeProvider } from "styled-components";
import AppRouter from "./pages/Router";
import { GlobalStyle } from "./style/GolbalStyle";
import { theme } from "./style/theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider {...{ theme }}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
