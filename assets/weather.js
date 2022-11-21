var houston = document.getElementById("hou-button");
var dallas = document.getElementById("dal-button");
var austin = document.getElementById("aus-button");
var chicago = document.getElementById("chi-button");
var newyork = document.getElementById("ny-button");
var losangeles = document.getElementById("la-button");
var miami = document.getElementById("mia-button");
var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=Houston&units=imperial&appid=3b8d4b0b0f8b1c1c8c1c8c1c8c1c8c1c";

function getHou() {
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + hou + "&appid=2f8b5b0b1b1b1b1b1b1b1b1b1b1b1b1b";
    $("#hou-button").empty();        
fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function ({Houston}) {
    console.log(Houston);
for (var i = 0; i < Houston.length; i++) {
    var hou = Houston[i];
    var houEl = document.createElement("div");
    houEl.classList = "hou";
    houEl.textContent = hou;
    houEl.appendChild(houEl);
}
});
}

houston.addEventListener("click", getHou);

//function getDal() {



/* //API Key: 7a70829eed4249369e766b2485bafa8d
var wineList = document.getElementById('inputbox');
var cabButton = document.getElementById('cab-button');
var pinotButton = document.getElementById('pinot-button');
var ChardonnayButton = document.getElementById('char-button');
var merlotButton = document.getElementById('mer-button');
var requestUrl = "https://api.spoonacular.com/food/wine/recommendation?apiKey=7a70829eed4249369e766b2485bafa8d";
//Cabernet, Pinot Grigio, Chardonnay, Merlot


//for Cabernet recommendation

function getCab() {
    var requestUrl = "https://api.spoonacular.com/food/wine/recommendation?apiKey=7a70829eed4249369e766b2485bafa8d&wine=cabernet_sauvignon&number=10";
    $('#inputbox').empty();
fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function ({recommendedWines}) {
    console.log(recommendedWines);
    for (var i = 0; i < recommendedWines.length; i++) {
        var listItem = document.createElement('h2');
        var winePrice = document.createElement('li');
        listItem.textContent = recommendedWines[i].title;
        winePrice.textContent = recommendedWines[i].price;
        wineList.appendChild(listItem);
        wineList.appendChild(winePrice);
    }
});
}

cabButton.addEventListener('click', getCab);

//for Pinot Grigio recommendation
function getPinot() {
    var requestUrl = "https://api.spoonacular.com/food/wine/recommendation?apiKey=7a70829eed4249369e766b2485bafa8d&wine=pinot_grigio&number=10";
    $('#inputbox').empty();
fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function ({recommendedWines}) {
    console.log(recommendedWines);
    for (var i = 0; i < recommendedWines.length; i++) {
        var listItem = document.createElement('h2');
        var winePrice = document.createElement('li');
        listItem.textContent = recommendedWines[i].title;
        winePrice.textContent = recommendedWines[i].price;
        wineList.appendChild(listItem);
        wineList.appendChild(winePrice);
    }
});
}

pinotButton.addEventListener('click', getPinot);

//for Chardonnay recommendation
function getChardonnay() {
    var requestUrl = "https://api.spoonacular.com/food/wine/recommendation?apiKey=7a70829eed4249369e766b2485bafa8d&wine=chardonnay&number=10";
    $('#inputbox').empty();
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function ({recommendedWines}) {
    console.log(recommendedWines);
    for (var i = 0; i < recommendedWines.length; i++) {
        var listItem = document.createElement('h2');
        var winePrice = document.createElement('li');
        listItem.textContent = recommendedWines[i].title;
        winePrice.textContent = recommendedWines[i].price;
        wineList.appendChild(listItem);
        wineList.appendChild(winePrice);
    }
});
}

ChardonnayButton.addEventListener('click', getChardonnay);

//for Merlot recommendation
function getMerlot() {
    var requestUrl = "https://api.spoonacular.com/food/wine/recommendation?apiKey=7a70829eed4249369e766b2485bafa8d&wine=merlot&number=10";
    $('#inputbox').empty();
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function ({recommendedWines}) {
    console.log(recommendedWines);
    for (var i = 0; i < recommendedWines.length; i++) {
        var listItem = document.createElement('h2');
        var winePrice = document.createElement('li');
        listItem.textContent = recommendedWines[i].title;
        winePrice.textContent = recommendedWines[i].price;
        wineList.appendChild(listItem);
        wineList.appendChild(winePrice);
    }
});
}

merlotButton.addEventListener('click', getMerlot);*/
