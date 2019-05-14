import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import TodoIcon from '@material-ui/icons/Assignment';
import Divider from '@material-ui/core/Divider';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TodoActionGroup from './TodoActionGroup';
import TodoSummary from './TodoSummary';
import TodoItem from './TodoItem';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Styles from './TodoStyle';

class TodoList extends Component {
  state = {
    todoList: [
      {
        isDisplay: false,
        id: 1,
        summary: 'wdas dawd awd awd wad aw dwa daw',
        items: [
          {
            id: 3,
            isChecked: false,
            content: 'wdas jdiaowj dioaw jdioawj oidjwa d'
          },
          {
            id: 2,
            isChecked: true,
            content: 'wdas jdiaowj dioaw jdioawj oidjwa d'
          },
          {
            id: 1,
            isChecked: false,
            content: 'wdas jdiaowj dioaw jdioawj oidjwa d'
          }
        ]
      },
      {
        isDisplay: false,
        id: 2,
        summary: 'wdas d wad awdaw wad wa awdwda d awd wad aw dwa daw',
        items: [
          {
            id: 4,
            isChecked: true,
            content: 'wdas jdiad wa owj didwa dwa oaw jdioawj oidjwa d'
          },
          {
            id: 5,
            isChecked: true,
            content: 'wdas jdiaowj dioaw jdioawj oidjwa d'
          },
          {
            id: 6,
            isChecked: false,
            content: 'wdas jdiaowj dioaw jdioawj oidjwa d'
          }
        ]
      },
      {
        isDisplay: false,
        id: 3,
        summary: 'wdas dawd awd awd wad aw dwa daw',
        items: [
          {
            id: 7,
            isChecked: false,
            content: 'wdas jdiaowj dioaw jdioawj oidjwa d'
          },
          {
            id: 8,
            isChecked: false,
            content: 'wdas jdiaowj dioaw jdioawj oidjwa d'
          },
          {
            id: 9,
            isChecked: false,
            content: 'wdas jdiaowj dioaw jdioawj oidjwa d'
          }
        ]
      }
    ]
  };

  getProgress = todo => {
    var ratio =
      todo.items.reduce((acc, cur) => (acc += cur.isChecked ? 1 : 0), 0) /
      todo.items.length;
    return ratio * 100;
  };

  checkTodoItem = (item, isChecked) => {
    item.isChecked = isChecked;
    this.setState(state => {
      return { todoList: [...state.todoList] };
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <CssBaseline />
        <Typography variant="display1" gutterBottom>
          <TodoIcon fontSize="inherit" />
          &nbsp;Todo List
          <Tooltip title="Create New Todo">
            <Fab color="primary" size="small" className={classes.fab}>
              <AddIcon fontSize="large" />
            </Fab>
          </Tooltip>
        </Typography>

        {this.state.todoList.map((todo, i) => (
          <ExpansionPanel key={todo.id}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <TodoSummary
                progress={this.getProgress(todo)}
                summary={todo.summary}
                classes={classes}
              />
            </ExpansionPanelSummary>
            <ExpansionPanelActions>
              <TodoActionGroup />
            </ExpansionPanelActions>
            <Divider />
            <ExpansionPanelDetails style={{ padding: 0 }}>
              <TodoItem
                classes={classes}
                itemList={todo.items}
                checkboxEvent={this.checkTodoItem}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    );
  }
}

export default withStyles(Styles)(TodoList);
