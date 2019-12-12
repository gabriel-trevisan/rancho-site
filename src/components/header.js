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
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header:{
    backgroundColor: '#000000'
  }
});

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

class Header extends Component{

  constructor(props){
    super(props)

    this.states = {
      value: 0
    }
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue
    });
  };

  render(){
    const { classes } = this.props;
    const logo = require('../images/logo.png');

    return(
      <AppBar position="static" className={classes.header}>
        <Toolbar component="nav">
          <Typography variant="h6" className={classes.title}>
            <Link to='/' className={classes.link}>
              <img width={40} src={logo} alt="" />
            </Link>
          </Typography>
          <Tabs value={this.states.value} onChange={this.handleChange} aria-label="simple tabs example">
            <Tab label="HOME" {...a11yProps(0)} />
            <Tab label="SOBRE NÓS" {...a11yProps(1)} />
            <Tab label="ATACADO" {...a11yProps(2)} />
            <Tab label="LOUNGE" {...a11yProps(3)} />
            <Tab label="CONTATO" {...a11yProps(4)} />
          </Tabs>
        </Toolbar>
        <HeaderImg></HeaderImg>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header)
