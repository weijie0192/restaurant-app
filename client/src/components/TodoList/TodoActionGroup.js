import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default ({ toggleEditTodoModal, toggleDeleteTodoModal, todo }) => (
  <Grid item xs={12} style={{ padding: '0 15px' }}>
    <Grid container spacing={16} direction="row" justify="space-between">
      <Grid item>
        <Button color="primary">Add New Item</Button>
      </Grid>
      <Grid item>
        <Button onClick={() => toggleEditTodoModal(todo)}>Edit</Button>
        <Button color="secondary" onClick={() => toggleDeleteTodoModal(todo)}>
          Delete
        </Button>
      </Grid>
    </Grid>
  </Grid>
);
