import React from 'react';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

export default ({ classes, progress, summary }) => (
  <Typography
    className={classes.todoTitle}
    variant="subheading"
    style={{ width: '100%' }}
  >
    {summary}
    <LinearProgress
      variant="determinate"
      color={progress >= 100 ? 'secondary' : 'primary'}
      value={progress}
      classes={{
        root: classes.todoProgress,
        barColorSecondary: classes.completedBarColor,
        colorSecondary: classes.completedColor
      }}
    />
  </Typography>
);
