import React, { PureComponent } from 'react';
import {
  Grid,
  Paper,
  TextField,
  Button,
  Divider,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AutoTextField from './Custom/AutoTextField';

class Test extends PureComponent {
  state = {
    inputData: {},
    UserNameInput: '',
    loading: false,
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

  onChangeInputData = (value, pointer) => {
    this.setState(state => ({
      inputData: { ...state.inputData, [pointer]: value }
    }));
  };

  onChangeUserName = value => {
    this.setState({
      UserNameInput: value,
      loading: true
    });
    setTimeout(() => {
      this.setState({
        loading: false,
        options: [
          { label: 'w' + Math.random() },
          { label: 'w' + Math.random() },
          { label: 'w' + Math.random() },
          { label: 'w' + Math.random() }
        ]
      });
    }, 400);
  };

  serverSideSearch = value => Promise.resolve(value);

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h6" color="textSecondary">
          Create New Member
        </Typography>
        <Paper>
          <Grid container>
            <Grid item md={4} className={classes.GridItem}>
              <AutoTextField
                options={this.state.options}
                label="User Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={this.state.UserNameInput}
                onChange={this.onChangeUserName}
                select
                serverSide={this.serverSideSearch}
              />
            </Grid>
            <Grid item md={4} className={classes.GridItem}>
              <TextField
                label="Facility"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item md={4} className={classes.GridItem}>
              <TextField
                label="Add Roster"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>

            <Grid item md={12} className={classes.GridItem}>
              <TextField label="Roster" fullWidth margin="normal" />
              <br />
              <br />
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  console.log(this.state);
                }}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

const styles = themes => ({
  GridItem: {
    padding: '0 20px 20px 10px',
    border: '1px solid lightgray'
  }
});

export default withStyles(styles)(Test);

const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' }
];
