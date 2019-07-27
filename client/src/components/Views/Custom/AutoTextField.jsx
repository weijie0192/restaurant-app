import React from 'react';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment';

function renderInputComponent(inputProps) {
  const {
    classes,
    inputRef = () => {},
    ref,
    loading,
    select,
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
              <CircularProgress size={30} />
            ) : (
              <SearchIcon color="action" />
            )}
          </InputAdornment>
        )
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
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

const useStyles = makeStyles(theme => ({
  root: {
    height: 250,
    flexGrow: 1
  },
  container: {
    position: 'relative'
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
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
    height: theme.spacing(2)
  }
}));

export default function IntegrationAutosuggest({
  options,
  onChange,
  onBlur,
  value,
  pointer,
  select,
  serverSide,
  ...other
}) {
  const classes = useStyles();
  const [stateSuggestions, setSuggestions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleSuggestionsFetchRequested = ({ value }) => {
    console.log('wow');
    if (serverSide) {
      setLoading(true);
      serverSide(value)
        .then(({ data }) => {
          setSuggestions(
            data || [
              { label: value + Math.random() },
              { label: value + Math.random() },
              { label: value + Math.random() },
              { label: value + Math.random() }
            ]
          );
        })
        .catch()
        .finally(e => {
          setLoading(false);
        });
    } else {
      setSuggestions(getSuggestions(value, options || []));
    }
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleChange = (event, { newValue }) => {
    if (onChange) {
      onChange(newValue, pointer);
    }
  };

  const handleBlur = () => {
    if (select) {
      if (options.findIndex(item => item.label === value) === -1) {
        onChange('', pointer);
      }
    }
  };

  return (
    <Autosuggest
      renderInputComponent={renderInputComponent}
      suggestions={stateSuggestions}
      onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
      onSuggestionsClearRequested={handleSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={{
        onBlur: handleBlur,
        classes,
        value: value || '',
        onChange: handleChange,
        select,
        loading,
        ...other
      }}
      theme={{
        container: classes.container,
        suggestionsContainerOpen: classes.suggestionsContainerOpen,
        suggestionsList: classes.suggestionsList,
        suggestion: classes.suggestion
      }}
      renderSuggestionsContainer={options => (
        <Paper {...options.containerProps} square>
          {options.children}
        </Paper>
      )}
    />
  );
}
