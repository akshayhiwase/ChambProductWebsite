import React, { Component } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Logo from "../../Utils/Images/logo.png";
import Searchicon from "../../Utils/Images/search-icon.png";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <div className={classes.header}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className={classes.searchBar}>
          <img src={Searchicon} alt="search-icon" />
          <input type="text" placeholder="Search for products" />
        </div>
        <div className={classes.linkSection}>
          <div>
            <Link to="/howitworks">How it works</Link>
          </div>
          <div>
            <Link to="/pricing">Pricing</Link>
          </div>
        </div>
        <div className={classes.userSection}>
          <div className={classes.loginBtn}>
            <button>Log In</button>
          </div>
          <div className={classes.signUpBtn}>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
