import React, { Component } from "react"
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Button } from '@material-ui/core';

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
    wpp:{
        "backgroundColor":"#26a69a",
        "color":"#fff"
    }
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
                <p>O Rancho do Arguile oferece essências, carvões e acessórios para arguiles em atacado.</p>
                <p>Para mais informações de atacado para arguiles na Região de Campinas, SP.</p>
                <p>Consulte nossa equipe:</p>
                <p>
                    <Button variant="contained" className={classes.wpp} type="submit" rel="noopener" target="_blank" href="https://api.whatsapp.com/send?phone=5519995057737&text=Oi%2C%20eu%20tenho%20interesse%20no%20produto%20de%20voc%C3%AAs&source=&data=">
                        <WhatsAppIcon style={{fontSize: "1rem", paddingRight: "3px"}}></WhatsAppIcon>Converse com nós
                    </Button>
                </p>
                <p><MailOutlineIcon style={{fontSize: "1rem", marginRight: "3px"}}></MailOutlineIcon><a href = "mailto: comercial@ranchodoarguile.com">comercial@ranchodoarguile.com</a></p>
                </div>
            </Container>
          </div>
      </section>
    );
  }
}

export default withStyles(styles)(Atacado)
