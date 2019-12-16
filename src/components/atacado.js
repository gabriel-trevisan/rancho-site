import React, { Component } from "react"
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const styles = theme => ({
    content:{
        width: "100%",
        height: "100%",
        backgroundColor: "#fffffff",
        color: "#000000"
    },
    propertiesTitle:{
        textTransform: "uppercase",
        fontSize: "2em",
        display: "inline"
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

class Atacado extends Component{

  render(){
    const { classes } = this.props;

    return(
      <section className={classes.content} id="atacado">
          <div className={classes.wrap}>
            <Container fixed>
                <span className={classes.span}></span><h2 className={classes.propertiesTitle}>ATACADO</h2>
                <div className={classes.conteudo}>
                <p>O Rancho do Arguile está entrando no mercado de atacado de essências, carvões e acessórios para arguiles no mês de Dezembro de 2019.</p>
                <p>Para mais informações de atacado para arguiles na Região de Campinas, SP. Consulte nossa equipe:</p>
		        <p><WhatsAppIcon style={{fontSize: "1rem"}}></WhatsAppIcon> WhatsApp: (19) 9XXXX-XXXX</p>
                <p><MailOutlineIcon style={{fontSize: "1rem"}}></MailOutlineIcon> E-mail: comercial@ranchodoarguile.com</p>
                </div>
            </Container>
          </div>
      </section>
    );
  }
}

export default withStyles(styles)(Atacado)
