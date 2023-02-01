import React from "react";
import { ChakraProvider, useUpdateEffect } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import themes from "./styles/themes.js";

import "./styles/main.css";
import routes from "./config/routes.js";
import theme from "./styles/themes.js";

function App() {
  useUpdateEffect(() => {
    localStorage.removeItem("chakra-ui-color-mode");
  }, []);
  // const manager = createLocalStorageManager("my-key");

  return (
    <ChakraProvider theme={themes}>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} key={route.path} element={route.component} />
        ))}
      </Routes>
    </ChakraProvider>
  );
}

export default App;
