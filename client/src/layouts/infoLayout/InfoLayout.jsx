import React from 'react';
import classes from 'infoLayout.module.css';

function InfoLayout({ theme }) {
  return (
    <div className={classes.container} data-theme={theme}>
      <h3 className={classes.infoTitle}>Info</h3>
    </div>
  );
}

export default InfoLayout;
