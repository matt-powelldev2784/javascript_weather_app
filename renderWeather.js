import clearScreen from './clearScreen.js';
import checkScreenSize from './checkScreenSize.js';
import renderLocationTitle from './renderTitle.js';

const renderWeather = weatherData => {
  clearScreen();

  renderLocationTitle(weatherData[0].title);

  if (checkScreenSize() === 'desktop') {
    weatherData.map((dailyWeather, i) => {
      let weatherDom = document.getElementById('weather_render');

      let html = `
      <div class=a${i}col>
      <div>${dailyWeather.date}</div>
      <div><img class='icon' src="http://openweathermap.org/img/wn/${dailyWeather.icon}@2x.png"></img></div>
      <div>${dailyWeather.maxTemp}&deg C ${dailyWeather.description}</div>
      </div>`;

      weatherDom.insertAdjacentHTML('beforeend', html);
    });
  }

  if (checkScreenSize() === 'mobile') {
    weatherData.map((dailyWeather, i) => {
      let weatherDom = document.getElementById('weather_render');

      let html = `
      <div class=a${i}col>
      ${dailyWeather.date}
      <img class='icon' src="http://openweathermap.org/img/wn/${dailyWeather.icon}@2x.png"></img>
      ${dailyWeather.maxTemp}&deg C ${dailyWeather.description}
      </div>`;

      weatherDom.insertAdjacentHTML('beforeend', html);
    });
  }

  document.querySelector('.row').style.visibility = 'visible';
};

export default renderWeather;
