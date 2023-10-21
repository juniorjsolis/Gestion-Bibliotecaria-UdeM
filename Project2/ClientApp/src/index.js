import "bootstrap/dist/css/bootstrap.css";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider resetCSS={true}>
    <App />
  </ChakraProvider>
);
