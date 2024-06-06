function schoolSubjects(input) {

    let packOfPencils = Number(input [0]);
    let packOfMarkers = Number(input [1]);
    let Cleaners = Number(input [2]);
    let annualInterestPercent = Number(input[4]);

let priceOfpackOfPencils = packOfPencils * 5.80;
let priceOfpackOfMarkers = packOfMarkers * 7.20;
let priceOfCleaners = Cleaners * 1.20;

let priceOfAllItems = (priceOfpackOfPencils + priceOfpackOfMarkers + priceOfCleaners);

let priceDiscount = ((priceOfAllItems * annualInterestPercent)/100);
let priceAfterDiscount = priceOfAllItems - priceDiscount;
console.log(priceDiscount);

}
schoolSubjects(["2 ","3 ","4 ","25 "]);