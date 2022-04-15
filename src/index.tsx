import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";

import App from "./App";

if (process.env.NODE_ENV === `production`) {
  ReactGA.initialize(`UA-113488288-2`);
  ReactGA.pageview(window.location.pathname);
}

ReactDOM.render(<App />, document.getElementById(`root`));
