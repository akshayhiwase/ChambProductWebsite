import React from "react";
import classes from "./Homepage.module.css";

class Homepage extends React.Component {
  state = {};
  render() {
    return (
      <div className={classes.mainContainer}>
        <div className={classes.firstSection}>
          <div className={classes.headingSection}>
            <h1>Find your next product here.</h1>
            <h4>It has never been easier.</h4>
            <div className={classes.searchContainer}>
              <div className={classes.searchBox}>
                <input type="text" placeholder="Search something you want" />
              </div>

              <div className={classes.dropdownSection}>
                <select className={classes.categorySelectMenu}>
                  <option>Furniture </option>
                  <option>Appliances</option>
                  <option>Stationary</option>
                </select>
              </div>
              <div className={classes.searchBtn}>
                <button>Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.productContainer}>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Homepage;
