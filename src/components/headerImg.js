import React, { Component } from "react"
import { withStyles } from '@material-ui/core/styles';
import backgroundImg from "../images/slice.png"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  headerImg:{
    width: "100%",
    height: "500px",
    backgroundImage: `url(${backgroundImg})`,
    backgroundRepeat: "no-repeat", 
    backgroundSize: "cover",
    backgroundPosition: "center"
  }, 
  tituloPrincipal: {
      textTransform: "uppercase",
      marginTop: "125px",
      marginLeft: "35px",
      fontSize: "4vw",
      marginBottom: 0
    },
  subTitulo: {
    textTransform: "uppercase",
    marginLeft: "260px",
    fontSize: "1vw",
  }
});

class HeaderImg extends Component{

  constructor(props){
    super(props)

    this.states = {
      value: 0
    }
  }

  render(){
    const { classes } = this.props;

    return(
      <header className={classes.headerImg}>
        <h1 className={classes.tituloPrincipal}>Rancho do Arguile</h1>
        <p  className={classes.subTitulo}>Essências e acessórios para arguiles</p>
      </header>
    );
  }
}

export default withStyles(styles)(HeaderImg)
