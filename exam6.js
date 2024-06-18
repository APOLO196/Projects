function generatePINs(input) {
    let firstLimit = Number(input.shift());
    let secondLimit = Number(input.shift());
    let thirdLimit = Number(input.shift());

    for (let i = 2; i <= firstLimit; i += 2) {
        for (let j = 2; j <= secondLimit; j++) {
            if (j === 2 || j === 3 || j === 5 || j === 7) {
                for (let k = 2; k <= thirdLimit; k += 2) {
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
}


generatePINs(["3", "5", "5"]);
generatePINs(["8", "2", "8"]);
