let input = document.querySelector("#input");
let form = document.querySelector("form");
let container = document.querySelector(".container");
let apikey = "10ee6d2ca9820a4e0510016837ee1e60";
let url = (city) => `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=10ee6d2ca9820a4e0510016837ee1e60&units=metric`;

async function getWeather(city){
    let weather = await fetch(url(city));
    let data = await weather.json();
    console.log(data);
    showWeather(data,city)
};

function showWeather(data,city){
    let html = "";
    
        let gg = document.createElement('div'); 
        gg.innerHTML = `<div class="temp">
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h2>${data.main.temp}°C</h2>
        </div>    
        <h3>${data.weather[0].main}</h3>` 
        container.appendChild(gg)
   
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let city = input.value;
    if(city){
        getWeather(city)
    }
    input.value = "";
    
})

// let darkMode = document.querySelector(".dark-mode");
// darkMode.addEventListener("click",(e)=>{
//     if(e.target.checked){
//         document.body.style.background = "black";
//         document.body.style.color = "";
//     }else{

//     }
// })