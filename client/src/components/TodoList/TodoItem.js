import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Checkbox from '@material-ui/core/Checkbox';

export default ({ classes, itemList, checkboxEvent }) => (
  <React.Fragment>
    {itemList ? (
      <List className={classes.itemList}>
        {itemList.map(item => (
          <ListItem className={classes.listItemHover} key={item.id}>
            <Checkbox
              checked={item.isChecked}
              onChange={(e, isChecked) => checkboxEvent(item, isChecked)}
              color="default"
              classes={{
                root: classes.itemCheckBox,
                checked: classes.checked
              }}
            />
            <ListItemText primary={item.content} />
            <IconButton size="small">
              <EditIcon />
            </IconButton>
            <IconButton color="secondary">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    ) : null}
  </React.Fragment>
);
