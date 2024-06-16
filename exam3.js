function calculateDelivery(input) {
    let weight = Number(input[0]);
    let typeOfService = input[1];
    let distance = Number(input[2]);
    
    let pricePerKilometer = 0;
    
    if (weight < 1) {
        pricePerKilometer = 0.03;
    } else if (weight >= 1 && weight <= 10) {
        pricePerKilometer = 0.05;
    } else if (weight > 10 && weight <= 40) {
        pricePerKilometer = 0.10;
    } else if (weight > 40 && weight <= 90) {
        pricePerKilometer = 0.15;
    } else {
        pricePerKilometer = 0.20;
    }
    
    if (typeOfService === "express") {
        if (weight < 1) {
            pricePerKilometer *= 0.8;
        } else if (weight >= 1 && weight <= 10) {
            pricePerKilometer *= 0.4;
        } else if (weight > 10 && weight <= 40) {
            pricePerKilometer *= 0.05;
        } else if (weight > 40 && weight <= 90) {
            pricePerKilometer *= 0.02;
        } else {
            pricePerKilometer *= 0.01;
        }
    }
    
    let totalCost = pricePerKilometer * distance;
    
    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${totalCost.toFixed(2)} lv.`);
}