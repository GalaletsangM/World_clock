function updateTime() {

    let sydneyElement = document.querySelector("#sydney .date");
    if (sydneyElement) {
    let sydney = moment().tz("Australia/Sydney").format("MMMM Do YYYY");
    sydneyElement.innerHTML = sydney;

    let sydneyTimeElement = document.querySelector("#sydney .time");
    let sydneyTime = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss [<small>]A[</small>]");
    sydneyTimeElement.innerHTML = sydneyTime;
  }

  
    let nycElement = document.querySelector("#new-york .date");
    if (nycElement) {
    let nyc = moment.tz("America/New_York").format("MMMM Do YYYY");
    nycElement.innerHTML = nyc;

    let nycTimeElement = document.querySelector("#new-york .time");
    let nycTime = moment()
      .tz("America/New_York")
      .format("h:mm:ss [<small>]A[</small>]");
    nycTimeElement.innerHTML = nycTime;
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current"){
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(`${cityTimeZone}`);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format(" A")}</small></div>
        </div>
        <a href="index.html">All cities</a>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
