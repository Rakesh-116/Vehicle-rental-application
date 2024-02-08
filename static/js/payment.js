let daysCount = document.getElementById("daysCount");
let vehicleModel = document.getElementById("vehicleModel");
let pricePayable = document.getElementById("pricePayable");

let vehicleModelValue = vehicleModel.textContent;
let daysCountValue = parseInt(daysCount.textContent);

function price(){
    console.log("Function Called..."+daysCountValue+" "+daysCount.textContent);

    if(vehicleModelValue === "SUV"){
        pricePayable.textContent = daysCountValue * 3500;
    }else if(vehicleModelValue === "Ertiga"){
        pricePayable.textContent = daysCountValue * 3000;
    }else if(vehicleModelValue === "KIA"){
        pricePayable.textContent = daysCountValue * 3000;
    }else if(vehicleModelValue === "XUV 700"){
        pricePayable.textContent = daysCountValue * 3500;
    }else if(vehicleModelValue === "Omni"){
        pricePayable.textContent = daysCountValue * 2000;
    }else if(vehicleModelValue === "VW"){
        pricePayable.textContent = daysCountValue * 2000;
    }else if(vehicleModelValue === "Van"){
        pricePayable.textContent = daysCountValue * 2000;
    }else if(vehicleModelValue === "Scooter"){
        pricePayable.textContent = daysCountValue * 1500;
    }else if(vehicleModelValue === "Pulsar"){
        pricePayable.textContent = daysCountValue * 1500;
    }else if(vehicleModelValue === "Royal Enfield"){
        pricePayable.textContent = daysCountValue * 1800;
    }else if(vehicleModelValue === "Jawa"){
        pricePayable.textContent = daysCountValue * 1800;
    }
}