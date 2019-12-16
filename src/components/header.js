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

  render(){
    const { classes } = this.props;
    const logo = require('../images/logo.png');

    return(
      <AppBar position="static" className={classes.header}>
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
        <HeaderImg></HeaderImg>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header)
