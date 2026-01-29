const cityInput = document.getElementById('cityInput');
const fetchBtn = document.getElementById('fetchBtn');

const weatherContent = document.getElementById('weatherContent');
const forecastContent = document.getElementById('forecastContent');
const aqiContent = document.getElementById('aqiContent');
const statusMsg = document.getElementById('statusMsg');

fetchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (!city) {
    statusMsg.textContent = 'Please enter a city name.';
    return;
  }
  weatherContent.textContent = 'Loading...';
  forecastContent.textContent = 'Loading...';
  //aqiContent.textContent = 'Loading...';
  statusMsg.textContent = 'Loading...';

  loadCityWeather(city);
});

function loadCityWeather(city) {
  statusMsg.textContent = 'Fetching Data.....';
  Promise.allSettled([fetchWeather(city), getForecast(city)])
    .then(([weatherResult, forecastResult]) => {
      if (weatherResult.status === 'fulfilled') {
        const { lat, lon } = weatherResult.value.coord;

        getAirQuality(lat, lon)
          .then((aqiData) => {
            const aqiValue = aqiData.list[0].main.aqi;
            aqiContent.textContent = `AQI: ${aqiValue}`;
          })
          .catch(() => {
            aqiContent.textContent = 'AQI unavailable ❌';
          });

        const data = weatherResult.value;
        weatherContent.textContent = `${
          data.weather[0].description
        } - ${Math.round(data.main.temp - 273.15)}°C`;
      } else {
        weatherContent.textContent = 'Weather Unavailable';
      }
      // Update FORECAST
      if (forecastResult.status === 'fulfilled') {
        const data = forecastResult.value;
        forecastContent.textContent = `Next weather: ${data.list[1].weather[0].main}`;
      } else {
        forecastContent.textContent = 'Forecast unavailable ❌';
      }

      statusMsg.textContent = 'Done ✔️';
    })
    .catch((err) => {
      statusMsg.textContent = 'Something went wrong ❌';
      console.error(err);
    });
}

function fetchWeather(city) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f98c38f9dfef111861cd49e13dc5ce53`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.cod !== 200) {
        return Promise.reject('City Not Found');
      }
      return data;
    });
}
function getForecast(city) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f98c38f9dfef111861cd49e13dc5ce53`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.cod !== '200') {
        return Promise.reject('Forecast City Not Found');
      }
      return data;
    });
}

function getFastestWeather(city) {
  // Backup weather in case main API is slow
  const backupWeather = new Promise(
    (resolve) =>
      setTimeout(() => {
        resolve({
          backup: true,
          msg: `Backup weather used for ${city}`,
          temp: 'N/A',
        });
      }, 1000) // backup responds in 1s
  );

  return Promise.race([fetchWeather(city), backupWeather]);
}
function getAirQuality(lat, lon) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=f98c38f9dfef111861cd49e13dc5ce53`
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data.list || data.list.length === 0) {
        return Promise.reject('AQI data unavailable');
      }
      return data;
    });
}
