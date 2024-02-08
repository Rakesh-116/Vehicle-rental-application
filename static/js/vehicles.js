let carsHeading = document.getElementById("cars");
let cars = document.getElementById("typesOfCars");
let busesHeading = document.getElementById("buses");
let buses = document.getElementById("typesOfBuses");
let bikesHeading = document.getElementById("bikes");
let bikes = document.getElementById("typesOfBikes");

function goToHome(){
    window.location.assign("home.html");
}

function goToVehicles(){
    window.location.assign("vehicles.html");
}

function goToAboutUs(){
    window.location.assign("aboutUs.html");
}

function bookVehicle(){
    window.location.assign("bookNow.html")
}

function carsPage(){
    cars.style.display = "block";
    buses.style.display = "none";
    bikes.style.display = "none";

    carsHeading.classList.add("onclick-changes");
    busesHeading.classList.remove("onclick-changes");
    bikesHeading.classList.remove("onclick-changes");
}

function busesPage(){
    buses.style.display = "block";
    cars.style.display = "none";
    bikes.style.display = "none";

    busesHeading.classList.add("onclick-changes");
    carsHeading.classList.remove("onclick-changes");
    bikesHeading.classList.remove("onclick-changes");
}

function bikesPage(){
    bikes.style.display = "block";
    cars.style.display = "none";
    buses.style.display = "none";

    bikesHeading.classList.add("onclick-changes");
    carsHeading.classList.remove("onclick-changes");
    busesHeading.classList.remove("onclick-changes");
}