const processWeatherData = (weatherData, LocationTitle) => {
  weatherData = weatherData.daily;
  weatherData.length = 7;

  const processedWeatherData = weatherData.map(dailyWeather => {
    const weather = {
      title: LocationTitle,
      date: new Date(dailyWeather.dt * 1000).toDateString().slice(0, 10),
      icon: dailyWeather.weather[0].icon,
      maxTemp: Math.floor(dailyWeather.temp.max),
      description: dailyWeather.weather[0].main,
    };
    return weather;
  });
  return processedWeatherData;
};

export default processWeatherData;
