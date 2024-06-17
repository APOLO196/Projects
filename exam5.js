function barberShop(input) {
    let target = Number(input.shift());
    let earnedMoney = 0;

    while (true) {
        let command = input.shift();

        if (command === "closed" || earnedMoney >= target) {
            break;
        }

        if (command === "haircut") {
            let service = input.shift();
            let price = 0;

            switch (service) {
                case "mens":
                    price = 15;
                    break;
                case "ladies":
                    price = 20;
                    break;
                case "kids":
                    price = 10;
                    break;
            }

            earnedMoney += price;
        } else if (command === "color") {
            let type = input.shift();
            let price = 0;

            switch (type) {
                case "touch up":
                    price = 20;
                    break;
                case "full color":
                    price = 30;
                    break;
            }

            earnedMoney += price;
        }
    }

    if (earnedMoney >= target) {
        console.log("You have reached your target for the day!");
    } else {
        let neededMoney = target - earnedMoney;
        console.log(`Target not reached! You need ${neededMoney}lv. more.`);
    }

    console.log(`Earned money: ${earnedMoney}lv.`);
}

barberShop(["300", "haircut", "ladies", "haircut", "kids", "color", "touch up", "closed"]);
barberShop(["50", "color", "full color", "haircut", "ladies"]);
