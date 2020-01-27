/*eslint-disable*/
import React from "react";

// react components for routing our app without refresh
import { Link } from "react-router-dom";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";


// @material-ui/icons
import { Apps, CloudDownload,AccountCircle,SchoolIcon,Work,FitnessCenter,ContactMail} from "@material-ui/icons";




import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);


export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
     
  
      <ListItem className={classes.listItem}>
        <Button
          href="https://manchukonda9.github.io/myportfolio/#Experience"
          color="transparent"
          
          className={classes.navLink}
        >
          <Work className={classes.icons} /> Experience
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://manchukonda9.github.io/myportfolio/#Projects"
          color="transparent"
          target=""
          className={classes.navLink}
        >
          <Apps className={classes.icons} /> Projects
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
   
        <Button
          href="https://manchukonda9.github.io/myportfolio/#Skills"
          color="transparent"
        
          className={classes.navLink}
        >
          <FitnessCenter className={classes.icons} /> Skills
        </Button>

      </ListItem>
   
      <ListItem className={classes.listItem}>
        <Button
         href="https://manchukonda9.github.io/myportfolio/#Contact"
          color="transparent"
          
          className={classes.navLink}
          // onClick={() => setClassicModal(true)}
        >
          <ContactMail className={classes.icons} /> Contact
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
     
        <Button
          href="https://manchukonda9.github.io/profilepage/"
          color="transparent"
          target=""
          className={classes.navLink}
        >
          <AccountCircle className={classes.icons} /> About
        </Button>
        
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Krishna82"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.linkedin.com/in/krishna82/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="manchukonda9"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/manchukonda9"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Krish9Man"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://bitbucket.org/Krish9Man/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-bitbucket"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
