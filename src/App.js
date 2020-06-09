import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import classes from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import Pricing from "./Components/Pricing/Pricing";
import ProductPage from "./Components/ProductPage/ProductPage";

class App extends React.Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path={"/"} component={Homepage} />
            <Route path={"/howitworks"} component={HowItWorks} />
            <Route path={"/pricing"} component={Pricing} />
            <Route path={"/productdetails"} component={ProductPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
