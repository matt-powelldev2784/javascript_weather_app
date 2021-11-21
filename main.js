import getGeoLocation from './getGeoLocation.js';
import getWeather from './getWeather.js';
import renderWeather from './renderWeather.js';
import processWeatherData from './processWeatherData.js';
import renderError from './renderError.js';

// object to store current search values
export const currentSearch = {};

const getAddress = async () => {
  const searchInput = document.querySelector('.search__input');

  searchInput.addEventListener('keyup', async () => {
    const address = searchInput.value;

    if (address.length > 1) {
      try {
        const geoLocation = await getGeoLocation(address);
        const weatherData = await getWeather(geoLocation.longLat);
        const processedWeatherData = processWeatherData(
          weatherData,
          geoLocation.locationTitle
        );
        renderWeather(processedWeatherData);
      } catch {}
    }
  });
};

getAddress();
