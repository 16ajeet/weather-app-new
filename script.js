const search_btn = document.getElementById('search-btn');
const inputBox = document.querySelector('.searchbar')
const displayCity = document.querySelector('.display-city');
const weatherImg = document.querySelector('.weather-img');
const weatherType = document.querySelector('.weather-type');
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity-detail');
const windSpeed = document.querySelector('.wind_speed')

search_btn.addEventListener('click', () => {
    const city_name = inputBox.value;
    weatherDetails(city_name);
    displayCity.innerText = city_name;
})

const api_key = "2d28fef0cb4e4138b98164543242605";

async function weatherDetails (city)  {
    const url = `http://api.weatherapi.com/v1/current.json?key=2d28fef0cb4e4138b98164543242605&q=${city}&aqi=no`;
    
    const weatherDataResponse = await fetch(`${url}`)

    const weatherData = await weatherDataResponse.json();


    temperature.innerText = weatherData.current.temp_c;
    weatherImg.src = weatherData.current.condition.icon;
    weatherType.innerText = weatherData.current.condition.text;
    humidity.innerText = weatherData.current.humidity;
    windSpeed.innerText = weatherData.current.wind_kph;
 }


 
