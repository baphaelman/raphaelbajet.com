const express = require('express');
const fs = require('fs');
const port = 3000;
const axios = require('axios');

require('dotenv').config();

const apiKey = process.env.API_KEY;
console.log(apiKey);


const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

  app.get('/art/', (req, res) => {
    res.sendFile(__dirname + '/public/art.html');
    res.send('Express on Vercel');
  });

  app.get('/dogs/', (req, res) => {
    res.sendFile(__dirname + '/public/dogs.html');
    res.send('Express on Vercel');
  });

  app.get('/hobbies/', (req, res) => {
    res.sendFile(__dirname + '/public/hobbies.html');
    res.send('Express on Vercel');
  });


app.get('/weather', async (req, res) => {
      try {
        const city = 'Berkeley';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
        const response = await axios.get(apiUrl);
        const weatherData = response.data;
    
        res.json(weatherData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        console.error('API URL: ', apiUrl);
        res.status(500).json({ error: 'Could not fetch weather data' });
      }
      res.send('Express on Vercel');
    });


app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;