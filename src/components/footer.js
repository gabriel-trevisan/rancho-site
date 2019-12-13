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
        paddingTop: "50px",
        paddingBottom: "50px"
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
    pFooter:{
        fontSize: "0.6em"
    }
});

class Footer extends Component{

  render(){
    const { classes } = this.props;

    return(
      <section className={classes.content}>
          <div className={classes.wrap}>
            <Container fixed>
                <Grid item xs={12} container direction="row" justify="center" alignItems="center">
                    <p className={classes.pFooter}>RANCHO DO ARGUILE - TODOS OS DIREITOS RESERVADOS</p>
                </Grid>
            </Container>
          </div>
      </section>
    );
  }
}

export default withStyles(styles)(Footer)
