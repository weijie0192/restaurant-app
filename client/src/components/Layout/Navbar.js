import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/DashboardRounded';
import ChartIcon from '@material-ui/icons/BarChartRounded';
import MenuIcon from '@material-ui/icons/VerticalSplit';
import ManageIcon from '@material-ui/icons/DeveloperBoard';
import TodoIcon from '@material-ui/icons/Assignment';
import Divider from '@material-ui/core/Divider';

import { NavLink } from 'react-router-dom';

class MiniDrawer extends React.Component {
  AppTabs = [
    {
      text: 'Client Page',
      icon: <MenuIcon />,
      link: '/'
    },
    {
      text: 'Dashboard',
      icon: <DashboardIcon />,
      divide: true,
      link: '/dashboard'
    },
    {
      text: 'Tree',
      icon: <DashboardIcon />,
      divide: true,
      link: '/Tree'
    }
  ];

  AdminTabs = [
    {
      text: 'Manage Menu',
      icon: <ManageIcon />,
      link: '/manage'
    },
    {
      text: 'Track Traffic',
      icon: <ChartIcon />,
      divide: true,
      link: '/track'
    }
  ];
  DevTabs = [
    {
      text: 'Todo List',
      icon: <TodoIcon />,
      link: '/todo'
    },
    {
      text: 'Custom Table',
      icon: <TodoIcon />,
      link: '/table'
    }
  ];

  addNavTabs(tabs) {
    return tabs.map(item => (
      <NavLink
        to={item.link}
        key={item.text}
        exact
        style={{
          textDecoration: 'none',
          color: 'blue'
        }}
      >
        <ListItem button>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      </NavLink>
    ));
  }

  render() {
    const { classes, navOpen } = this.props;
    return (
      <Drawer
        id="navbar"
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={navOpen}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader} />
        <Divider />
        <List>{this.addNavTabs(this.AppTabs)}</List>
        <Divider />
        <List>{this.addNavTabs(this.AdminTabs)}</List>

        <Divider />
        <List>{this.addNavTabs(this.DevTabs)}</List>
      </Drawer>
    );
  }
}

const drawerWidth = 240;
const styles = theme =>
  console.log(theme) || {
    drawer: {
      width: 0,
      flexShrink: 0
    },

    drawerPaper: {
      width: drawerWidth
    },

    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end'
    }
  };

export default withStyles(styles, { withTheme: true })(MiniDrawer);
