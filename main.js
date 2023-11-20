const apikey = "7d0c00d86b99474c65c03d44c42bf9f0";
// const apiurl =
//   "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=7d0c00d86b99474c65c03d44c42bf9f0&units=metric";
async function checkWeather() {
  const respose = await fetch(apiurl + `&appid=${apikey}`);
  var data = await respose.json();
  console.log(data);
  // const searchbar = document.querySelector(".search__bar input");
  // const searchbtn = document.querySelector(".search__bar button");
  // console.log(apiurl);
  document.querySelector(".temp").innerHTML = data.main.temp;
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".kilo").innerHTML = data.wind.speed + "KhM";
  // document.querySelector(".city").innerHTML = data.name;
  // document.querySelector(".temp").innerHTML = Math.round(main.temp) + "°C";
  // document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  // document.querySelector(".kilo").innerHTML = data.wind.speed + "Km/h";
}

checkWeather();
