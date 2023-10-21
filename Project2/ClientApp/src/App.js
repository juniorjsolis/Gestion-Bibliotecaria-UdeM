import React, { Component } from "react";

import { LandingLayout } from "./layout";
import { RouterConfig } from "./router";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <RouterConfig>
        <LandingLayout />
      </RouterConfig>
    );
  }
}
