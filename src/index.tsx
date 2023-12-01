import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme, ColorSchemeScript } from "@mantine/core";
import AppProvider from "./reduxModules/appStore/AppProvider";
const theme = createTheme({
  /** Put your mantine theme override here */
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ColorSchemeScript />
    <MantineProvider theme={theme}>
      <AppProvider>
        <App />
      </AppProvider>
    </MantineProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
