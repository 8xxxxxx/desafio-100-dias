document.getElementById('searchButton').addEventListener('click', function() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'SUA_API_KEY'; // Substitua pela sua chave da API OpenWeatherMap
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Cidade não encontrada');
          }
          return response.json();
      })
      .then(data => {
          const temperature = data.main.temp;
          const weatherDescription = data.weather[0].description;
          const weatherResult = `
              <h2>${data.name}</h2>
              <p>Temperatura: ${temperature}°C</p>
              <p>Condições: ${weatherDescription}</p>
          `;
          document.getElementById('weatherResult').innerHTML = weatherResult;
      })
      .catch(error => {
          document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
      });
});
