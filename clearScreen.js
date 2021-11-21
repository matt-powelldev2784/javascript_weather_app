const clearScreen = () => {
  //clears errors
  let geoLocationError = document.getElementById('error');
  if (geoLocationError) {
    geoLocationError.remove();
  }

  //clears title
  let locationTitle = document.getElementById('title');
  if (locationTitle) {
    locationTitle.remove();
  }

  //clears weather
  const weather = document.getElementById('weather_render');
  while (weather.firstChild != null) {
    let weatherFirstChild = weather.firstChild;
    weather.removeChild(weatherFirstChild);
  }
};

export default clearScreen;
