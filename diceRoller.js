function rollDice(){
    const numDice = document.getElementById("numDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numDice; i++){
        const value = Math.floor(Math.random()*(numDice - i + 1)) + i;
        values.push(value)
        images.push(`<img src="Icons/dice${value}.png">`)
    }
    diceResult.textContent = `Dice: ${values.join(`, `)}`;
    diceImages.innerHTML = images.join(``)
    console.log(values)
}