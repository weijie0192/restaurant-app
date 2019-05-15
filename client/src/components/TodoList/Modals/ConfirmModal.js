import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

export default ({ open, toggleEvent, callback, target, content }) => (
  <Dialog open={open} onClose={toggleEvent} fullWidth>
    <DialogTitle>Confirmation</DialogTitle>
    <DialogContentText>{content}</DialogContentText>
    <DialogActions>
      <Button onClick={toggleEvent} color="default">
        Cancel
      </Button>
      <Button
        // onClick={() => this.validateInput(submitEvent, todo)}
        color="primary"
      >
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
);
