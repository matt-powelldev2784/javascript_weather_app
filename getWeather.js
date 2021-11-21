import renderError from './renderError.js';

const getWeather = async locationLatLng => {
  try {
    //get weather using latitute and longitute from geo location
    const getWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${locationLatLng.lat}&lon=${locationLatLng.lng}&exclude=minutely&units=metric&appid=ce96bebb0d2a102f5cda8e9f1d1b7c58`
    );
    const weatherData = await getWeather.json();

    //throw error
    if (weatherData.cod === '400') {
      throw new Error();
    }

    return weatherData;

    // catch errors
  } catch (err) {
    renderError('Error getting weather. Please try again');
    return;
  }
};

export default getWeather;
