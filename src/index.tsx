import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import PokemonProvider from "./contexts/Pokemon";
import MainRoutes from "./routes/MainRoutes";
import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PokemonProvider>
          <GlobalStyle />
          <MainRoutes />
        </PokemonProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
