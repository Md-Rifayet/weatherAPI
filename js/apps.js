const API_KEY = `2c13c14b2ced83b37c8bd0d242176c1e`

const searchTemperature = () =>{
    const city = document.getElementById("city-name").value;
    if(city == ''){
        alert("Please enter a city name");
        return
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const setInnerText =(id, text) =>{
    document.getElementById(id).innerHTML = text
}

const displayTemperature = (temperature) =>{
    setInnerText('city', temperature.name)
    setInnerText('temp', temperature.main.temp)
    setInnerText('weather', temperature.weather[0].description)
    // set weather url
    const iconURL = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', iconURL);
    1
    console.log(temperature)
}