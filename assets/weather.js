var conditions = document.querySelector('#input');
var houston = document.getElementById("hou-button");
var dallas = document.getElementById("dal-button");
var chicago = document.getElementById("chi-button");
var newyork = document.getElementById("ny-button");
var losangeles = document.getElementById("la-button");
var miami = document.getElementById("mia-button");
var requestUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=76b386341da5821538de1905b8013fcd';

function getHou() {
    var requestUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=29.7604&lon=95.3698&appid=76b386341da5821538de1905b8013fcd';
    $('#input').empty();        
fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function ({conditions}) {
    console.log(conditions);
for (var i = 0; i < conditions.length; i++) {
    var listItem = document.createElement('h2');
    var report = document.createElement('li');
    listItem.textContent = conditions[i].title;
    report.textContent = conditions[i].weather;
    conditions.appendChild(listItem);
    conditions.appendChild(report);
}
});
}

houston.addEventListener("click", getHou);

function getDal() {
    var requestUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=32.7767&lon=96.7970&appid=76b386341da5821538de1905b8013fcd';
    $('#input').empty();
fetch(requestUrl)
.then(function (response) {
    return response.json();
}
.then(function ({conditions}) {
    console.log(conditions);
for (var i = 0; i < conditions.length; i++) {
    var listItem = document.createElement('h2');
    var report = document.createElement('li');
    listItem.textContent = conditions[i].title;
    report.textContent = conditions[i].weather;
    conditions.appendChild(listItem);
    conditions.appendChild(report);
}
}));
}

dallas.addEventListener("click", getDal);

function getChi() {
    var requestUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=41.8781&lon=87.6298&appid=76b386341da5821538de1905b8013fcd';
    $('#input').empty();
fetch(requestUrl)
.then(function (response) {
    return response.json();
}
.then(function ({conditions}) {
    console.log(conditions);
for (var i = 0; i < conditions.length; i++) {
    var listItem = document.createElement('h2');
    var report = document.createElement('li');
    listItem.textContent = conditions[i].title;
    report.textContent = conditions[i].weather;
    conditions.appendChild(listItem);
    conditions.appendChild(report);
}
}));
}

chicago.addEventListener("click", getChi);

function getNy() {
    var requestUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=40.7128&lon=74.0060&appid=76b386341da5821538de1905b8013fcd';
    $('#input').empty();
fetch(requestUrl)
.then(function (response) {
    return response.json();
}
.then(function ({conditions}) {
    console.log(conditions);
for (var i = 0; i < conditions.length; i++) {

    var listItem = document.createElement('h2');
    var report = document.createElement('li');
    listItem.textContent = conditions[i].title;
    report.textContent = conditions[i].weather;
    conditions.appendChild(listItem);
    conditions.appendChild(report);
}
}));
}

newyork.addEventListener("click", getNy);

function getLa() {
    var requestUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=34.0522&lon=118.2437&appid=76b386341da5821538de1905b8013fcd';
    $('#input').empty();
fetch(requestUrl)
.then(function (response) {
    return response.json();
}
.then(function ({conditions}) {
    console.log(conditions);
for (var i = 0; i < conditions.length; i++) {
    var listItem = document.createElement('h2');
    var report = document.createElement('li');
    listItem.textContent = conditions[i].title;
    report.textContent = conditions[i].weather;
    conditions.appendChild(listItem);
    conditions.appendChild(report);
}
}));
}

losangeles.addEventListener("click", getLa);

function getMia() {
    var requestUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=25.7617&lon=80.1918&appid=76b386341da5821538de1905b8013fcd';
    $('#input').empty();
fetch(requestUrl)
.then(function (response) {
    return response.json();
}
.then(function ({conditions}) {
    console.log(conditions);
for (var i = 0; i < conditions.length; i++) {
    var listItem = document.createElement('h2');
    var report = document.createElement('li');
    listItem.textContent = conditions[i].title;
    report.textContent = conditions[i].weather;
    conditions.appendChild(listItem);
    conditions.appendChild(report);
}
}));
}

miami.addEventListener("click", getMia);



