import React from 'react';
import Slider from '../../components/slider/Slider';
import classes from './dailyForecasts.module.css';
import DailyForecast from './dailyForecast/DailyForecast';
import { v4 as uuidv4 } from 'uuid';

function DailyForecasts({ theme, dailyForecasts }) {
  console.log(dailyForecasts);
  const slides = dailyForecasts.map(forecast => ({
    id: uuidv4(),
    component: <DailyForecast theme={theme} forecast={forecast} />
  }));

  return (
    <div className={classes.container} data-theme={theme}>
      <div className={classes.content}>
        <h5 className={classes.title}>Days</h5>
        {slides.length > 0 && <Slider slides={slides} slidesToShow={7} />}
      </div>
    </div>
  );
}

export default DailyForecasts;
