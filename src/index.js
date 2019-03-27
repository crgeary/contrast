import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "normalize.css";
import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 14px;
        line-height: 1.65;
    }
`

ReactDOM.render(
    <>
        <Styles />
        <App />
    </>,
    document.getElementById("root")
);
