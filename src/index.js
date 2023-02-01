import { ColorModeScript } from "@chakra-ui/react";
import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import theme from "./styles/themes";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </StrictMode>
  </BrowserRouter>
);
