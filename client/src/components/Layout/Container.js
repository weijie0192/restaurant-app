import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import RouterView from './RouterView';
import { Route } from 'react-router-dom';

class Container extends Component {
  render() {
    const { classes, navOpen } = this.props;
    return (
      <Grid
        container
        className={classNames(classes.content, {
          [classes.contentShift]: navOpen
        })}
      >
        <CssBaseline />
        <div className={classes.routerview}>
          <Route render={props => <RouterView location={props.location} />} />
        </div>
      </Grid>
    );
  }
}

const drawerWidth = 240;
const styles = theme => ({
  routerview: {
    width: '100%',
    position: 'relative'
  },
  content: {
    [theme.breakpoints.down('md')]: {
      padding: '10px'
    },
    [theme.breakpoints.up('md')]: {
      padding: '10px 20px 20px 20px'
    },
    transition: theme.transitions.create(['padding', ' margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexGrow: 1,
    zIndex: theme.zIndex.appBar - 1
  },

  contentShift: {
    [theme.breakpoints.down('md')]: {
      marginLeft: drawerWidth + 10,
      paddingLeft: 0
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: 0,
      paddingLeft: drawerWidth + 20
    },
    transition: theme.transitions.create(['padding', 'margin'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
});

export default withStyles(styles)(Container);
