import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);

export default function SectionLogin() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="Contact">
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <form className={classes.form}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Contact</h4>
                  <div className={classes.socialLine}>
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
                      className={classes.navLink}
                    >
                      <i
                        className={classes.socialIcons + " fab fa-instagram"}
                      />
                    </Button>
                  </div>
                </CardHeader>

                <p className={classes.divider}>
                  <h4>Email</h4>manchukonda.g@husky.neu.edu
                </p>

                <p className={classes.divider}>
                  <h4>Phone</h4>(857)-753-9758
                </p>

                <CardFooter className={classes.cardFooter}></CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
