import React from 'react';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles, makeStyles } from '@material-ui/styles';

function renderInputComponent(inputProps) {
  const {
    classes,
    inputRef = () => {},
    ref,
    loading,
    select,
    error,
    ...other
  } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input
        },
        endAdornment: select && (
          <InputAdornment>
            {loading ? (
              <CircularProgress size={24} />
            ) : (
              <SearchIcon color="action" />
            )}
          </InputAdornment>
        )
      }}
      error={error}
      helperText={error}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  if (suggestion === 'empty') {
    return (
      <MenuItem disabled component="div">
        <div>No Result....</div>
      </MenuItem>
    );
  }

  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);
  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map(part => (
          <span
            key={part.text}
            style={{ fontWeight: part.highlight ? 500 : 400 }}
          >
            {part.text}
          </span>
        ))}
      </div>
    </MenuItem>
  );
}

function getSuggestions(value, options) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : options.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

const style = () => ({
  root: {
    height: 250,
    flexGrow: 1
  },
  container: {
    position: 'relative'
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1000,
    marginTop: 1,
    left: 0,
    right: 0
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  divider: {
    height: 1
  }
});

function renderSuggestionsContainer(options) {
  return (
    <Paper {...options.containerProps} square>
      {options.children}
    </Paper>
  );
}

let time = 0;
let searchTimeout;
class IntegrationAutosuggest extends React.PureComponent {
  state = {
    stateSuggestions: [],
    loading: false
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    const { serverSide, options } = this.props;
    if (serverSide) {
      this.setState({ loading: true });
      if (searchTimeout) {
        clearTimeout(searchTimeout);
        searchTimeout = null;
      }

      searchTimeout = setTimeout(() => {
        serverSide(value)
          .then(({ data }) => {
            this.setState({
              stateSuggestions: data || ['empty'],
              loading: false
            });
          })
          .catch(e => {
            this.setState({ loading: false });
          });
      }, 300);
    } else {
      this.setState({
        stateSuggestions: getSuggestions(value, options) || []
      });
    }
  };

  // do nothing
  handleSuggestionsClearRequested = () => {};

  onSuggestionSelected = () => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
      searchTimeout = null;
    }
  };

  handleBlur = () => {
    if (this.props.select) {
      if (
        this.state.stateSuggestions.findIndex(
          item => item.label === this.props.value
        ) === -1
      ) {
        this.props.onChange(false, { newValue: '' });
      }
    }
  };
  render() {
    const {
      options,
      onChange,
      onBlur,
      value,
      select,
      serverSide,
      classes,
      ...other
    } = this.props;

    return (
      <Autosuggest
        renderInputComponent={renderInputComponent}
        suggestions={this.state.stateSuggestions}
        onSuggestionSelected={this.onSuggestionSelected}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          onBlur: this.handleBlur,
          classes,
          value: value || '',
          onChange: onChange,
          select,
          loading: this.state.loading,

          ...other
        }}
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        }}
        renderSuggestionsContainer={renderSuggestionsContainer}
      />
    );
  }
}

export default withStyles(style)(IntegrationAutosuggest);
