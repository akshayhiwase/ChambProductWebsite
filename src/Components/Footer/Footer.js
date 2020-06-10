import React, { Component } from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div className={classes.footer}>
          <div className={classes.footerContainer}>
            <div className={classes.section}>
              <div className={classes.topContent}>
                <div className={classes.topHeading}>
                  <h2>Start a free account today</h2>
                </div>
                <div className={classes.inputContainer}>
                  <div className={classes.inputSection}>
                    <input type="text" placeholder="Enter your e-mail" />
                    <button>Continue</button>
                  </div>
                </div>
                <div className={classes.questionInfo}>
                  <div className={classes.infoElements}>
                    <h4>Question? Call us on 12 34 56 78 for help</h4>
                    <p>
                      Easy setup - no payment fees - up to 100 products for free
                    </p>
                  </div>
                </div>
              </div>
              <div className={classes.bottomContainer}>
                <div className={classes.bottomSection}>
                  <div className={classes.firstBox}>
                    <div>
                      <h2>SELL ON chamb</h2>
                      <ul>
                        <li>
                          <Link to="/pricing">Pricing</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2>BUY ON chamb</h2>
                      <ul>
                        <li>
                          <Link to="howitworks">How it works suppliers</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2>COMPANY</h2>
                      <ul>
                        <li>
                          <Link to="/pricing">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classes.lastBoxSection}>
                  <div className={classes.lastBox}>
                    <h2>INDUSTRIES</h2>
                    <ul>
                      <li>
                        <Link to="#">Textiles</Link>
                      </li>
                      <li>
                        <Link to="#">Furniture</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
