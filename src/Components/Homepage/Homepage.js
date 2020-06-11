import React from "react";
import classes from "./Homepage.module.css";
import Axios from "axios";
import XpannPng from "../../Utils/Images/xpann-icon.jpg";
import CreteIcon from "../../Utils/Images/create-icon.jpg";
import GetIcon from "../../Utils/Images/get-icon.jpg";
import ExitingImgFirst from "../../Utils/Images/exciting_img-01.jpg";
import ExitingImgSecond from "../../Utils/Images/exciting_img-02.jpg";

class Homepage extends React.Component {
  state = {
    response: [],
    landingData: [],
    carousalCards: [],
  };
  componentWillMount = () => {
    this.getApiResponce()
      .then((res) => {
        console.log(res);
        this.setState({
          response: res,
          landingData: res[0].landingSection,
          carousalCards: res[0].carouselCards,
        });
        console.log(this.state.landingData);
        console.log(this.state.carousalCards);
      })
      .catch((err) => console.error(err));
    // Axios.get(
    //   "​https://5ed296ce717d5f0016518314.mockapi.io/api/v1/homepage-data"
    // )
    //   .then((res) => {
    //     console.log(res.data);
    //     this.setState({ response: res.data });
    //   })
    //   .catch((err) => console.error(err));
  };
  getApiResponce = async () => {
    const apiData = await Axios.get(
      "https://5ed296ce717d5f0016518314.mockapi.io/api/v1/homepage-data"
    )
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        return Promise.reject({ error });
      });
    return Promise.resolve(apiData);
  };

  render() {
    const landingData = this.state.landingData.map((data) => {
      return (
        <div className={classes.landingCards} key={data.id}>
          <h3>{data.name}</h3>
          <img src={data.preview_image} alt={data.name} />
        </div>
      );
    });
    return (
      <div>
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
            <div className={classes.landingSection}>{landingData}</div>
          </div>
        </div>
        <div className={classes.cardSection}>
          <div className={classes.cards}>
            <div>
              <img src={XpannPng} alt="" />
            </div>
            <div>
              <h3>“Chamb” Your Business</h3>
              <p>
                Grow easily with chamb. Create free account. We help expanding
                your business easily.
              </p>
            </div>
          </div>
          <div className={classes.cards}>
            <div>
              <img src={CreteIcon} alt="" />
            </div>
            <div>
              <h3>Create and add</h3>
              <p>
                Grow easily with chamb. Create free account. We help expanding
                your business easily.
              </p>
            </div>
          </div>
          <div className={classes.cards}>
            <div>
              <img src={GetIcon} alt="" />
            </div>
            <div>
              <h3>Get inspired</h3>
              <p>
                Grow easily with chamb. Create free account. We help expanding
                your business easily.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.thirdSection}>
          <div className={classes.leftSection}>
            <div className={classes.imgSection}>
              <img src={ExitingImgFirst} alt="" />
            </div>
            <div className={classes.infoSection}>
              <h3>
                Explore <strong>exciting</strong> and exotic products tailored
                to you.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
                laboris..
              </p>
            </div>
          </div>
          <div className={classes.rightSection}>
            <div className={classes.imgSection}>
              <img src={ExitingImgSecond} alt="" />
            </div>
            <div className={classes.infoSection}>
              <h3>
                <strong>List your products on </strong> chamb and grow
                connections.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
                laboris..
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
