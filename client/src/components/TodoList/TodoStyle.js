export default theme => ({
  todoTitle: {
    width: '100%'
  },
  todoProgress: {
    marginTop: '15px'
  },
  completedBarColor: {
    backgroundColor: 'green'
  },
  completedColor: {
    backgroundColor: 'rgb(201, 206, 234)'
  },
  itemList: {
    width: '100%'
  },
  itemCheckBox: {
    '&$checked': {
      color: 'green'
    }
  },
  checked: {},
  listItemHover: {
    transition: '0.2s ease',
    '&:hover': {
      background: theme.palette.action.hover
    }
  },
  fab: {
    float: 'right'
  }
});
