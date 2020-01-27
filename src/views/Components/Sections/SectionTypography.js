import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons


import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Quote from "components/Typography/Quote.js";

import LinearProgress from '@material-ui/core/LinearProgress';

import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

import CardHeader from "@material-ui/core/CardHeader";

import Collapse from "@material-ui/core/Collapse";

import IconButton from "@material-ui/core/IconButton";

import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";


import ExpandMoreIcon from "@material-ui/icons/ExpandMore";




import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);




const useStylesRR = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));




function RecipeReviewCard(props) {
  const classes = useStylesRR();
  const [expanded, setExpanded] = React.useState(false);
  const [liked,setLiked] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleLikeClick = () =>{
    setLiked(!liked);
   
  }


  return (
    <Card className={classes.card}>
  
      <CardHeader title={props.title} subheader="Fall 2019" />
      <CardMedia
        className={classes.media}
        image={props.imgs}
        title={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick ={handleLikeClick}>
         {liked && <FavoriteIcon color="primary" />}
        
           {!liked&&<FavoriteIcon />}
         
          
          
        </IconButton>
        <IconButton aria-label="share">
          <a href="https://github.com/manchukonda9" target="_blank">
        <i className={classes.socialIcons + " fab fa-github"} />
        </a>
        </IconButton>
     
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Technology:</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.tech1}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.tech2}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.tech3}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.tech4}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div id="Experience" className={classes.container}>
        <div >
         
          <GridContainer>
          <div>

            
            <h2>Experience </h2>
            
            <div className={classes.typo}>
              <div className={classes.note}>July 2018 - July 2019</div>
              <h4>Senior Systems Engineer</h4>
              <Quote
                text="Developed and tested custom API using java script to provide account inquiry for one the world largest financial companies .
                Worked on inbound and outbound API customizations.
                Followed the Agile software development life cycle and adhered to SOLID coding principles.
                "
                author="Infosys Ltd, Hyderabad, India"
              />
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>July 2017 - July 2018</div>
              <h4>Systems Engineer</h4>
              <Quote
                text="Designed and developed features to assess employees’ performance for Human Resources using test driven development.
                Collaborated with Human Resource team and designers to gather and understand requirements.
                Reinforced best practices with daily code reviews.
                "
                author="Infosys Ltd, Hyderabad, India"
              />
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>May 2015 - August 2015</div>
              <h4>Software Engineering Intern</h4>
              <Quote
                text="Developed the software counterpart which included problems and solutions from the textbook “Engineering Thermody- namics” using Python.
                The software development cycle involved critical reviewing and developing lucid solution to industry problems in Engi- neering courses.
                "
                author="
                Python Textbook Campaign, IIT Bombay, India"
              />
              </div>
            </div>
            <div className="space50"></div>
            <div className="space50"></div>
            <div className="space50"></div>
            <div className={classes.section}>
              <div className={classes.container}>
                <div id="Projects">
                  <h2>Projects</h2>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <h3>
                        <small></small>
                      </h3>
                      <RecipeReviewCard
                        tech1={"React"}
                        tech2={"MongoDB"}
                        tech3={"NodeJS"}
                        title={"The Social"}
                        imgs={"https://www.stockvault.net/data/2017/08/06/237854/preview16.jpg"}
                        
                        desc={
                          "This application allows users to connect, share content and chat online.Also provides multimedia services like news, weather updates, music, movies and YouTube services in one bundle."
                        }
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <h3>
                        <small></small>
                      </h3>
                      <RecipeReviewCard
                        tech1={"React"}
                        tech2={"MongoDB"}
                        tech3={"NodeJS"}
                        imgs={"https://image.shutterstock.com/image-vector/flat-colorful-design-concept-marketplace-600w-1042533502.jpg"}
                       
                        title={"NU Market Place"}
                        desc={
                          " NU Marketplace an E-commerce site web application is a platform for buying and selling services and goods such as electronics, fashion items, furniture, household goods, cars and bikes for Northeastern students"
                        }
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <h3>
                        <small></small>
                      </h3>
                      <RecipeReviewCard
                        tech1={"React"}
                        tech2={"Bootstrap"}
                        tech3={"REST API"}
                        imgs={"https://www.komando.com/wp-content/uploads/2019/08/weather-apps-thunder-storm.jpg"}
                        title={"Weather Forecase Application"}
                        desc={
                          "Forecasts the hourly weather for 5 days for any location on the globe. This application hits the rest API and handels the data in JSON format"
                        }
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <h3>
                        <small></small>
                      </h3>
                      <RecipeReviewCard
                        tech1={"Java"}
                        tech2={"Swing"}
                        tech3={"OOP Concepts"}
                        title={"Organ Bank Management System"}
                        imgs={"https://www.i2tutorials.com/wp-content/uploads/2019/08/Blood-banks-i2tutorials.jpg"}
                        desc={
                          "Developed an application for Organ Bank Supply Chain Management System which is highly scalable using Java swing"
                        }
                      />
                    </GridItem>
                  </GridContainer>
                </div>

              </div>

              <div className={classes.section}></div>
              <div className={classes.container}>
              <h2>Skills</h2>
              <div id="Skills">
              <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              
              <h4>Java</h4>
              <LinearProgress variant="buffer" value={90} valueBuffer={95} color="primary" />
              <h4>Bootstrap</h4>
              <LinearProgress variant="buffer" value={75} valueBuffer={80} color="secondary" />
              <h4>React</h4>
              <LinearProgress variant="buffer" value={75} valueBuffer={80} color="primary" />
              <h4>MongoDB</h4>
              <LinearProgress variant="buffer" value={75} valueBuffer={80} color="secondary" />
          
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
            <h4>Angular JS</h4>
            <LinearProgress variant="buffer" value={60} valueBuffer={75} color="primary" />
              <h4>SQL</h4>
              <LinearProgress variant="buffer" value={75} valueBuffer={85} color="secondary" />
              <h4>Node JS</h4>
              <LinearProgress variant="buffer" value={80} valueBuffer={85} color="primary" />
             
              
              <h4>HTML,CSS,JQUERY</h4>
              <LinearProgress variant="buffer" value={90} valueBuffer={95} color="secondary" />

            </GridItem>
            </GridContainer>

              </div>

              </div>

            </div>



          </GridContainer>
        </div>


  
       
      </div>
    </div>
  );
}
