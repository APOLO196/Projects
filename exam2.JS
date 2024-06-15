function calculateGift(input) {
    let dailyPocketMoney = Number(input.shift());
    let dailyEarnedMoney = Number(input.shift());
    let totalExpenses = Number(input.shift());
    let giftPrice = Number(input.shift());

    let savedMoney = (dailyPocketMoney * 5) + (dailyEarnedMoney * 5);
    let totalSavedMoney = savedMoney - totalExpenses;

    if (totalSavedMoney >= giftPrice) {
        let profit = totalSavedMoney.toFixed(2);
        console.log(`Profit: ${profit} BGN, the gift has been purchased.`);
    } else {
        let insufficientMoney = (giftPrice - totalSavedMoney).toFixed(2);
        console.log(`Insufficient money: ${insufficientMoney} BGN.`);
    }
}


calculateGift(["5.12", "32.05", "15", "150"]);
calculateGift(["2.10", "17.50", "20.20", "148.50"]);
calculateGift(["15.20", "200.00", "7.30", "1500.12"]);
