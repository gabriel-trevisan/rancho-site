import React, { Component } from "react"
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    content:{
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        color: "#fff"
    },
    map:{
        border: "none"
    }
});

class Map extends Component{

  render(){
    const { classes } = this.props;

    return(
      <section className={classes.content} id="map">
          <div className={classes.wrap}>    
            <iframe src="https://snazzymaps.com/embed/208405" title="Localização do Rancho do Arguile" width="100%" height="400px" className={classes.map}></iframe>
          </div>
      </section>
    );
  }
}

export default withStyles(styles)(Map)
