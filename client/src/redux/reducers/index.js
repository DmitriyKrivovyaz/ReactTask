import { combineReducers } from 'redux';
import { dailyWeather } from './dailyWeatherReducer';
import { hourlyWeather } from './hourlyWeatherReducer';
import { currentWeather } from './currentWeatherReducer';
import { location } from './locationReducer';

export const rootReducer = combineReducers({
  dailyWeather,
  hourlyWeather,
  currentWeather,
  location
});
