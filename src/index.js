import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "./index.css";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyle />
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
);
