function getLocationFast() {
  return new Promise((resolve) =>
    setTimeout(() => resolve('📍 Location from Fast API'), 500)
  );
}

function getLocationSlow() {
  return new Promise((resolve) =>
    setTimeout(() => resolve('📍 Location from Slow API'), 1500)
  );
}

function getWeather() {
  return new Promise((resolve) =>
    setTimeout(() => resolve('🌤 Weather: Sunny'), 800)
  );
}

function getAQI() {
  return new Promise((resolve) =>
    setTimeout(() => resolve('💨 AQI: Moderate'), 1200)
  );
}

function failAPI() {
  return Promise.reject('❌ This API failed');
}
// async function loadLocation() {
//   const location = await Promise.any([getLocationFast(), getLocationSlow()]);
//   console.log(location);
// }

// loadLocation();

// async function loadWeather() {
//   const weather = await Promise.allSettled([getWeather(), getAQI(), failAPI()]);
//   console.log(weather);
// }

// loadWeather();
async function loadDashboard() {
  try {
    const location = await Promise.any([getLocationFast(), getLocationSlow()]);
    console.log(location);

    const [weather, aqi, _] = await Promise.allSettled([
      getWeather(),
      getAQI(),
      failAPI(),
    ]);

    console.log(weather.value || 'Weather unavailable');
    console.log(aqi.value || 'AQI unavailable');

    const fastestWeather = await Promise.race([
      getWeather(),
      new Promise((resolve) =>
        setTimeout(() => resolve('⛅ Backup weather source'), 1000)
      ),
    ]);

    console.log('Fastest weather:', fastestWeather);
  } catch (err) {
    console.log('Dashboard error:', err);
  }
}

loadDashboard();
