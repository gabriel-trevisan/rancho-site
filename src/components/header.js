import { Link } from "gatsby"
import React, { Component } from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HeaderImg from '../components/headerImg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header:{
    backgroundColor: '#000000'
  },
  nav:{
    flexWrap: "wrap"
  }
});

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      {...props}
    />
  );
}

class Header extends Component{

  constructor(props){
    super(props)

    this.state = {
      value: 0
    }
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue
    });
  };

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const y = window.scrollY;
    const main = document.getElementById("main").getBoundingClientRect().top + window.scrollY;
    const sobrenos = document.getElementById("sobrenos").getBoundingClientRect().top + window.scrollY;
    const atacado = document.getElementById("atacado").getBoundingClientRect().top + window.scrollY;
    const lounge = document.getElementById("lounge").getBoundingClientRect().top + window.scrollY;
    
    if(y >= sobrenos && y < atacado){ //Sobre Nós
      this.handleChange(null, 1);
    } else if(y >= atacado && y < lounge){ //Atacado
      this.handleChange(null, 2);
    } else if(y >= lounge){ //Lounge
      this.handleChange(null, 3);
    } else { // Home
      this.handleChange(null, 0);
    }
  }

  render(){
    const { classes } = this.props;
    const logo = require('../images/logo.png');

    return(
      <React.Fragment>
        <AppBar position="fixed" className={classes.header}>
          <Toolbar component="nav" className={classes.nav}>
            <Typography variant="h6" className={classes.title}>
              <Link to='/' className={classes.link}>
                <img width={40} src={logo} alt="" />
              </Link>
            </Typography>
            <Tabs value={this.state.value} onChange={this.handleChange} variant="scrollable" scrollButtons="auto">
              <LinkTab label="HOME" href="#main" {...a11yProps(0)} />
              <LinkTab label="SOBRE NÓS" href="#sobrenos" {...a11yProps(1)} />
              <LinkTab label="ATACADO" href="#atacado" {...a11yProps(2)} />
              <LinkTab label="LOUNGE" href="#lounge" {...a11yProps(3)} />
            </Tabs>
          </Toolbar>
        </AppBar>
        <HeaderImg></HeaderImg>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Header)
