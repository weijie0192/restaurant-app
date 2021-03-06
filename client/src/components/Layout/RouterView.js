import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Views/Dashboard';
import Home from '../Views/Home';
import TodoList from '../TodoList/TodoList';
import TrafficControl from '../Views/TrafficControl';
import ManageMenu from '../Views/ManageMenu';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MyTable from '../Views/CustomTable';
import Tree from '../Views/Tree';

class RouterView extends Component {
  shouldComponentUpdate({ location }) {
    if (location.pathname === this.props.location.pathname) {
      return false;
    }
    return true;
  }

  render() {
    const { location } = this.props;
    return (
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={200}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/todo" component={TodoList} />
            <Route exact path="/manage" component={ManageMenu} />
            <Route exact path="/track" component={TrafficControl} />
            <Route exact path="/table" component={MyTable} />
            <Route exact path="/tree" component={Tree} />
            <Route exact path="*" component={Home} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default RouterView;
