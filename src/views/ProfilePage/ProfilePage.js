import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components

import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import dp2 from "assets/img/examples/dp2.jpeg";

import fav1 from "assets/img/examples/fav1.jpg";
import fav2 from "assets/img/examples/fav2.jpeg";
import fav3 from "assets/img/examples/fav2.jpeg";

import fav4 from "assets/img/examples/fav4.jpeg";
import fav5 from "assets/img/examples/fav5.jpg";
import fav6 from "assets/img/examples/fav6.jpg";
import d1 from "assets/img/examples/d1.jpeg";
import d3 from "assets/img/examples/d3.jpeg";
import d2 from "assets/img/examples/d2.jpeg";
import d4 from "assets/img/examples/d4.jpeg";
import Header from "components/Header/Header.js";

import HeaderLinks from "components/Header/HeaderLinks.js";


import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
        <Header
        brand="Krishna's Profile"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />

      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={fav5} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Gopi Krishna</h3>
                    <h6>Full Stack Developer</h6>
                    <Button
                      href="https://www.linkedin.com/in/krishna82/"
                      target="_blank"
                      color="transparent"
                      className={classes.navLink}
                    >
                      <i className={classes.socialIcons + " fab fa-linkedin"} />
                    </Button>
                    <Button
                      color="transparent"
                      href="https://www.facebook.com/gopitheaawesomeguy"
                      target="_blank"
                      className={classes.navLink}
                    >
                      <i className={classes.socialIcons + " fab fa-facebook"} />
                    </Button>
                    <Button
                      color="transparent"
                      href="https://www.instagram.com/gopimanchu/"
                      target="_blank"
                      
                    >
                      <i
                        className={classes.socialIcons + " fab fa-instagram"}
                      />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                A graduate student passionate about building responsive websites with HTML and javaScript, topped with a sprinkle of CSS and Bootstrap. With a natural apitude for logic
                and a flair for graphic design.I can create websites that make the harshest Luddite reconsider technology.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="info"
                  tabs={[
                    {
                      tabButton: "Newyork",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={fav6}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={fav3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={dp2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={fav4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Drawings",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={d1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={d2}
                              className={navImageClasses}
                            />
                         
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={d4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={d3}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={fav2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={fav1}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={d3}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={fav4}
                              className={navImageClasses}
                            />
                          
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
