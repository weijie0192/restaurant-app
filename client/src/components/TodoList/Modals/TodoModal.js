import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class TodoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  validateInput(input, callback, target) {
    input = input.trim();
    if (input !== '') {
      console.log(target);
      callback(input, target);
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    let input = '';
    const { open, label, toggleEvent, submitEvent, target } = this.props;
    return (
      <Dialog open={open} onClose={toggleEvent} fullWidth>
        <DialogTitle>{label}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Content"
            onChange={e => (input = e.target.value)}
            onFocus={e => {
              this.setState({ error: false });
            }}
            multiline
            fullWidth
            error={this.state.error}
            helperText={this.state.error ? 'Subject cannot be empty' : ''}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleEvent} color="default">
            Cancel
          </Button>
          <Button
            onClick={() => this.validateInput(input, submitEvent, target)}
            color="primary"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
