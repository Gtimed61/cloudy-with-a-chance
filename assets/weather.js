var conditions = document.querySelector('#input');
var houston = document.getElementById("hou-button");
var dallas = document.getElementById("dal-button");
var chicago = document.getElementById("chi-button");
var newyork = document.getElementById("ny-button");
var losangeles = document.getElementById("la-button");
var sanfrancisco = document.getElementById("sf-button");

function getHou() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=76b386341da5821538de1905b8013fcd&units=imperial';
    $('#input').empty();        
fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    var hou = data.main.temp;
    var hou2 = data.main.humidity;
    var hou3 = data.wind.speed;
    var hou4 = data.weather[0].description;
    var hou5 = data.weather[0].icon;
    var hou6 = data.name;

    //create elements and append to DOM
    var houEl = document.createElement('div');
    houEl.textContent = "City: " + hou6;
    conditions.appendChild(houEl);
    
    var houEl2 = document.createElement('div');
    houEl2.textContent = "Temperature: " + hou + "°F";
    conditions.appendChild(houEl2);
    
    var houEl3 = document.createElement('div');
    houEl3.textContent = "Humidity: " + hou2 + "%";
    conditions.appendChild(houEl3);
    
    var houEl4 = document.createElement('div');
    houEl4.textContent = "Wind Speed: " + hou3 + " MPH";
    conditions.appendChild(houEl4);

    var houEl5 = document.createElement('div');
    houEl5.textContent = "Conditions: " + hou4;
    conditions.appendChild(houEl5);

    var houEl6 = document.createElement('img');
    houEl6.setAttribute('src', 'http://openweathermap.org/img/w/' + hou5 + '.png');
    conditions.appendChild(houEl6);
})
}

houston.addEventListener("click", getHou);

function getDal() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=76b386341da5821538de1905b8013fcd&units=imperial';
    $('#input').empty();
fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    var dal = data.main.temp;
    var dal2 = data.main.humidity;
    var dal3 = data.wind.speed;
    var dal4 = data.weather[0].description;
    var dal5 = data.weather[0].icon;
    var dal6 = data.name;
    
    //create elements and append to DOM
    var dalEl = document.createElement('div');
    dalEl.textContent = "City: " + dal6;
    conditions.appendChild(dalEl);
    
    var dalEl2 = document.createElement('div');
    dalEl2.textContent = "Temperature: " + dal + "°F";
    conditions.appendChild(dalEl2);
    
    var dalEl3 = document.createElement('div');
    dalEl3.textContent = "Humidity: " + dal2 + "%";
    conditions.appendChild(dalEl3);
    
    var dalEl4 = document.createElement('div');
    dalEl4.textContent = "Wind Speed: " + dal3 + " MPH";
    conditions.appendChild(dalEl4);
    
    var dalEl5 = document.createElement('div');
    dalEl5.textContent = "Conditions: " + dal4;
    conditions.appendChild(dalEl5);

    var dalEl6 = document.createElement('img');
    dalEl6.setAttribute('src', 'http://openweathermap.org/img/w/' + dal5 + '.png');
    conditions.appendChild(dalEl6);
})
}

dallas.addEventListener("click", getDal);

function getChi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=76b386341da5821538de1905b8013fcd&units=imperial';
    $('#input').empty();
fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    var chi = data.main.temp;
    var chi2 = data.main.humidity;
    var chi3 = data.wind.speed;
    var chi4 = data.weather[0].description;
    var chi5 = data.weather[0].icon;
    var chi6 = data.name;
    
    //create elements and append to DOM
    var chiEl = document.createElement('div');
    chiEl.textContent = "City: " + chi6;
    conditions.appendChild(chiEl);

    var chiEl2 = document.createElement('div');
    chiEl2.textContent = "Temperature: " + chi + "°F";
    conditions.appendChild(chiEl2);

    var chiEl3 = document.createElement('div');
    chiEl3.textContent = "Humidity: " + chi2 + "%";
    conditions.appendChild(chiEl3);

    var chiEl4 = document.createElement('div');
    chiEl4.textContent = "Wind Speed: " + chi3 + " MPH";
    conditions.appendChild(chiEl4);

    var chiEl5 = document.createElement('div');
    chiEl5.textContent = "Conditions: " + chi4;
    conditions.appendChild(chiEl5);
    
    var chiEl6 = document.createElement('img');
    chiEl6.setAttribute('src', 'http://openweathermap.org/img/w/' + chi5 + '.png');
    conditions.appendChild(chiEl6);    
})
}

chicago.addEventListener("click", getChi);

function getNyc() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=New York&appid=76b386341da5821538de1905b8013fcd&units=imperial';
    $('#input').empty();
fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    var nyc = data.main.temp;
    var nyc2 = data.main.humidity;
    var nyc3 = data.wind.speed;
    var nyc4 = data.weather[0].description;
    var nyc5 = data.weather[0].icon;
    var nyc6 = data.name;

    //create elements and append to DOM
    var nycEl = document.createElement('div');
    nycEl.textContent = "City: " + nyc6;
    conditions.appendChild(nycEl);

    var nycEl2 = document.createElement('div');
    nycEl2.textContent = "Temperature: " + nyc + "°F";
    conditions.appendChild(nycEl2);

    var nycEl3 = document.createElement('div');
    nycEl3.textContent = "Humidity: " + nyc2 + "%";
    conditions.appendChild(nycEl3);

    var nycEl4 = document.createElement('div');
    nycEl4.textContent = "Wind Speed: " + nyc3 + " MPH";
    conditions.appendChild(nycEl4);

    var nycEl5 = document.createElement('div');
    nycEl5.textContent = "Conditions: " + nyc4;
    conditions.appendChild(nycEl5);

    var nycEl6 = document.createElement('img');
    nycEl6.setAttribute('src', 'http://openweathermap.org/img/w/' + nyc5 + '.png');
    conditions.appendChild(nycEl6);
})
}

newyork.addEventListener("click", getNyc);

function getLa() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=76b386341da5821538de1905b8013fcd&units=imperial';
    $('#input').empty();
fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    var la = data.main.temp;
    var la2 = data.main.humidity;
    var la3 = data.wind.speed;
    var la4 = data.weather[0].description;
    var la5 = data.weather[0].icon;
    var la6 = data.name;
    
    //create elements and append to DOM
    var laEl = document.createElement('div');
    laEl.textContent = "City: " + la6;
    conditions.appendChild(laEl);
    
    var laEl2 = document.createElement('div');
    laEl2.textContent = "Temperature: " + la + "°F";
    conditions.appendChild(laEl2);

    var laEl3 = document.createElement('div');
    laEl3.textContent = "Humidity: " + la2 + "%";
    conditions.appendChild(laEl3);

    var laEl4 = document.createElement('div');
    laEl4.textContent = "Wind Speed: " + la3 + " MPH";
    conditions.appendChild(laEl4);
    
    var laEl5 = document.createElement('div');
    laEl5.textContent = "Conditions: " + la4;
    conditions.appendChild(laEl5);

    var laEl6 = document.createElement('img');
    laEl6.setAttribute('src', 'http://openweathermap.org/img/w/' + la5 + '.png');
    conditions.appendChild(laEl6);
})
}

losangeles.addEventListener("click", getLa);

function getSf() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=76b386341da5821538de1905b8013fcd&units=imperial';
    $('#input').empty();
fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    var sf = data.main.temp;
    var sf2 = data.main.humidity;
    var sf3 = data.wind.speed;
    var sf4 = data.weather[0].description;
    var sf5 = data.weather[0].icon;
    var sf6 = data.name;

    //create elements and append to DOM
    var sfEl = document.createElement('div');
    sfEl.textContent = "City: " + sf6;
    conditions.appendChild(sfEl);

    var sfEl2 = document.createElement('div');
    sfEl2.textContent = "Temperature: " + sf + "°F";
    conditions.appendChild(sfEl2);

    var sfEl3 = document.createElement('div');
    sfEl3.textContent = "Humidity: " + sf2 + "%";
    conditions.appendChild(sfEl3);

    var sfEl4 = document.createElement('div');
    sfEl4.textContent = "Wind Speed: " + sf3 + " MPH";
    conditions.appendChild(sfEl4);

    var sfEl5 = document.createElement('div');
    sfEl5.textContent = "Conditions: " + sf4;
    conditions.appendChild(sfEl5);

    var sfEl6 = document.createElement('img');
    sfEl6.setAttribute('src', 'http://openweathermap.org/img/w/' + sf5 + '.png');
    conditions.appendChild(sfEl6);
})
}

sanfrancisco.addEventListener("click", getSf);

//local storage
var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
var searchHistoryEl = document.querySelector("#searchHistory");
var searchHistoryBtn = document.querySelector("#searchHistoryBtn");

function renderSearchHistory() {
    searchHistoryEl.innerHTML = "";
    for (var i = 0; i < searchHistory.length; i++) {
        var city = searchHistory[i];
        var li = document.createElement("li");
        li.textContent = city;
        li.setAttribute("data-index", i);
        searchHistoryEl.appendChild(li);
    }
}

function init() {
    var storedSearchHistory = JSON.parse(localStorage.getItem("searchHistory"));
    if (storedSearchHistory !== null) {
        searchHistory = storedSearchHistory;
    }
    renderSearchHistory();
}

function storeSearchHistory() {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
}

searchHistoryBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var city = document.querySelector("#city").value.trim();
    if (city === "") {
        return;
    }
    searchHistory.push(city);
    document.querySelector("#city").value = "";
    storeSearchHistory();
    renderSearchHistory();
});
