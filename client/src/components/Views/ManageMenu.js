import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'flatpickr/dist/themes/light.css';
import Flatpickr from 'react-flatpickr';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import CalendarIcon from '@material-ui/icons/CalendarToday';

class ManageMenu extends Component {
  render() {
    //  const { classes } = this.props;
    return (
      <div className="container">
        <CssBaseline />
        <Typography variant="display2" gutterBottom>
          This is Menu Management Page
        </Typography>
        <Paper style={{ height: 500 }}>
          <TextField
            InputProps={{
              inputComponent: Flatpickr,
              inputProps: {
                'data-enable-time': true,
                value: null
              },
              endAdornment: <CalendarIcon color="action" fontSize="small" />
            }}
            InputLabelProps={{
              shrink: true
            }}
            label="Start Date"
          />
        </Paper>
      </div>
    );
  }
}

const styles = theme => ({});

export default withStyles(styles)(ManageMenu);
