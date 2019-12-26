import React, { Component } from "react"
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const styles = theme => ({
    content:{
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        color: "#fff"
    },
    propertiesTitle:{
        textTransform: "uppercase",
        fontSize: "2em",
        display: "inline"
    },
    subtitle:{
        textTransform: "uppercase",
        fontSize: "0.6em",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: "72px"
    },
    wrap:{
        paddingTop: "70px",
        paddingBottom: "70px"
    }, 
    span:{
        height: "20px",
        width: "10px",
        backgroundColor: "#FF0000",
        display: "inline-block",
        marginRight: "5px"
    },
    conteudo:{
        marginTop: "50px",
        textAlign: "justify"
    },
    videoContainer:{
        ['@media only screen and (max-width: 425px)']: {
            width: "300px",
            height: "300px"
        }
    }
});

class Lounge extends Component{

  render(){
    const { classes } = this.props;

    return(
      <section className={classes.content} id="lounge">
          <div className={classes.wrap}>
            <Container fixed>
                <span className={classes.span}></span>
                <h2 className={classes.propertiesTitle}>Lounge</h2>
                <h5 className={classes.subtitle}>#isso√©rancho</h5>
                <div className={classes.conteudo}>
                    <Grid item xs={12} container direction="row" justify="center" alignItems="center">
                        <div>
                            <iframe className={classes.videoContainer} title="VÌdeo do Rancho do Arguile" src="https://www.youtube.com/embed/5358uaTe6mY" width="552" height="300" frameBorder="0" allowFullScreen="allowfullscreen">
                            </iframe>
                        </div>
                    </Grid>    
                </div>
            </Container>
          </div>
      </section>
    );
  }
}

export default withStyles(styles)(Lounge)
