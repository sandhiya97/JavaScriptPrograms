function randomDiceNo(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const diceNo = randomDiceNo(1, 6);
console.log(diceNo);