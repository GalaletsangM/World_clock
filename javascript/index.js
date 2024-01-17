setInterval(function(){
let sydneyElement = document.querySelector("#sydney .date");
let sydney  = moment.tz("Australia/Sydney").format("MMMM Do YYYY")
sydneyElement.innerHTML = sydney;

let sydneyTimeElement = document.querySelector("#sydney .time");
let sydneyTime = moment().tz("Australia/Sydney").format("h:mm:ss [<small>]A[</small>]");
sydneyTimeElement.innerHTML = sydneyTime;
}, 1000)

setInterval(function(){
let nycElement = document.querySelector("#new-york .date");
let nyc = moment.tz("America/New_York").format("MMMM Do YYYY");
nycElement.innerHTML = nyc;

let nycTimeElement = document.querySelector("#new-york .time");
let nycTime = moment()
  .tz("America/New_York")
  .format("h:mm:ss [<small>]A[</small>]");
nycTimeElement.innerHTML = nycTime;
}, 1000)