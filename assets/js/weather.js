let apiKey= "1986b334b39c120ef223908ef0568069";
let data;
async function fetchWeather(city){
     await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city +"&units=metric&appid="+apiKey).then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
    
}

function displayWeather(data){
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText ="Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')";
}

function search(){
    fetchWeather(document.querySelector(".search-bar").value);
}

document.querySelector(".search button").addEventListener("click", function () {
    search();
  });
  
  document.querySelector(".search-bar").addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        search();
      }
    });
  
fetchWeather("Palestine");
