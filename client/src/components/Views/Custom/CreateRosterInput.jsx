import React, { PureComponent } from 'react';
import AutoTextField from './AutoTextField';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';

class CreateRosterInput extends PureComponent {
  state = {
    value: '',
    error: '',
    options: [
      {
        label: 'one',
        id: '1'
      },
      {
        label: 'on123',
        id: '2'
      },
      {
        label: 'on231231',
        id: '3'
      },
      {
        label: 'on21312312',
        id: '4'
      }
    ]
  };

  updateValue = (event, { newValue }) => {
    this.setState({ value: newValue });
  };

  onFocusEvent = () => {
    this.setState({ error: '' });
  };

  onAddRoster = () => {
    if (this.state.value) {
      //add roster
    } else {
      this.setState({ error: 'Roster cannot be empty' });
    }
  };

  render() {
    return (
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          <AutoTextField
            label="New Roster"
            variant="outlined"
            error={this.state.error}
            margin="dense"
            options={this.state.options}
            value={this.state.value}
            onChange={this.updateValue}
            onFocus={this.onFocusEvent}
          />
        </Grid>
        <Grid item>
          <Fab size="small" color="primary" onClick={this.onAddRoster}>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    );
  }
}

export default CreateRosterInput;
