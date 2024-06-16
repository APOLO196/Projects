function grandpaStavri(input) {
    let days = Number(input.shift());
    let totalLiters = 0;
    let totalDegrees = 0;

    for (let i = 0; i < days; i++) {
        let liters = Number(input.shift());
        let degrees = Number(input.shift());

        totalLiters += liters;
        totalDegrees += liters * degrees;
    }

    let averageDegrees = totalDegrees / totalLiters;

    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${averageDegrees.toFixed(2)}`);

    if (averageDegrees < 38) {
        console.log("Not good, you should baking!");
    } else if (averageDegrees >= 38 && averageDegrees <= 42) {
        console.log("Super!");
    } else {
        console.log("Dilution with distilled water!");
    }
}


grandpaStavri(["3", "100", "45", "50", "55", "150", "36"]);
grandpaStavri(["2", "200", "43", "200", "40"]);
