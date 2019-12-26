import React, { Component } from "react"
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

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
    social:{
        color: "#fff"
    },
    socialFacebook:{
        '&:hover': {
            color: "rgb(17, 82, 147)"
        }
    },
    socialInstagram:{
        '&:hover': {
            color: "#D91E18"
        }
    },
});

class AboutUs extends Component{

  render(){
    const { classes } = this.props;

    return(
      <section className={classes.content} id="sobrenos">
          <div className={classes.wrap}>
            <Container fixed>
                <span className={classes.span}></span><h2 className={classes.propertiesTitle}>Sobre nós</h2>
                <div className={classes.conteudo}>
                    <p>Fundado em 26 de Maio de 2018, o Rancho do Arguile traz uma proposta de Lounge, Bar e Tabacaria para os amantes do Arguile na Cidade de Campinas e Região, SP.</p>
                    <p>Atualmente, o Rancho do Arguile tem o maior lounge da cidade de Campinas e oferece estrutura para eventos com DJs de Funk e Eletrônico.</p>
                    <p>Quer saber mais sobre nós e eventos? </p> 
                    <p>Siga-nos em nossas redes socias.</p>
                </div>
                <Grid item xs={12} container direction="row" justify="center" alignItems="center">
                    <a className={[classes.social, classes.socialInstagram].join(" ")} href="https://www.instagram.com/ranchodoarguile/" target="_blank" rel="noopener noreferrer"><InstagramIcon style={{ fontSize: 64 }}></InstagramIcon></a>
                    <a className={[classes.social, classes.socialFacebook].join(" ")} href="https://www.facebook.com/ranchodoarguile/" target="_blank"rel="noopener noreferrer"><FacebookIcon  style={{ fontSize: 64 }}></FacebookIcon></a>
                </Grid>
            </Container>
          </div>
      </section>
    );
  }
}

export default withStyles(styles)(AboutUs)
