import React, { Component } from "react"
import { withStyles } from '@material-ui/core/styles';
import backgroundImg from "../images/slice.png"

const styles = theme => ({
  headerImg:{
    width: "100%",
    height: "250px",
    backgroundImage: `url(${backgroundImg})`,
    backgroundRepeat: "no-repeat", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    ['@media only screen and (min-width: 768px)']: {
        height: "500px"
    }
  }, 
  title: {
      textTransform: "uppercase",
      textAlign: "right",
      marginBottom: 0,
      fontSize: "3em",
      ['@media only screen and (max-width: 1024px)']: {
        fontSize: "2.25em",
      },
      ['@media only screen and (max-width: 500px)']: {
        fontSize: "1.5em",
      }
    },
  subTitle: {
    textTransform: "uppercase",
    textAlign: "right",
    marginTop: 0,
    fontSize: "1em",
    ['@media only screen and (max-width: 500px)']: {
      fontSize: "0.6em",
    }
  },
  containerTitle: {
    marginTop: "60px",
    width: "50vw",
    ['@media only screen and (max-width: 1024px)']: {
      width: "50vw",
    },
    ['@media only screen and (max-width: 768px)']: {
      width: "65vw",
    },
    ['@media only screen and (max-width: 500px)']: {
      width: "75vw",
    }
  },
  properties:{
    fontSize: "100%"
  }
});

class HeaderImg extends Component{

  render(){
    const { classes } = this.props;

    return(
      <header className={classes.headerImg}>
        <div className={classes.containerTitle}>
          <div className={classes.properties}>
            <h1 className={classes.title}>Rancho do Arguile</h1>
            <p  className={classes.subTitle}>Essências e acessórios para arguiles</p>
          </div>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(HeaderImg)
