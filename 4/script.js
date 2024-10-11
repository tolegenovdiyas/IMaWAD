const diceList = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

function onButtonDidTap() {
    let lhsRandomNumber = Math.floor(Math.random() * 6);
    let rhsRandomNumber = Math.floor(Math.random() * 6);
    let lhsRandomNumber2 = Math.floor(Math.random() * 6);
    let rhsRandomNumber2 = Math.floor(Math.random() * 6);

    document.getElementById("lhsDice").src = "img/" + diceList[lhsRandomNumber];
    document.getElementById("rhsDice").src = "img/" + diceList[rhsRandomNumber];
    document.getElementById("lhsDice2").src = "img/" + diceList[lhsRandomNumber2];
    document.getElementById("rhsDice2").src = "img/" + diceList[rhsRandomNumber2];

    let sumFirstPair = lhsRandomNumber + rhsRandomNumber + 2;
    let sumSecondPair = lhsRandomNumber2 + rhsRandomNumber2 + 2;
    let winnerText = "";
    if (sumFirstPair > sumSecondPair) {
        winnerText = "Player 1 Wins!";
    } else if (sumFirstPair < sumSecondPair) {
        winnerText = "Player 2 Wins!";
    } else {
        winnerText = "It's a Draw!";
    }
    document.getElementById("winnerText").innerText = winnerText;
}
