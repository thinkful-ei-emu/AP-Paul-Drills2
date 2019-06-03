function roShamBo(num){
    if (num !== 1 && num !== 2 && num !== 3){
        throw new Error("Pick a number 1-3");
    }

    let randomNo = Math.floor(Math.random() *3) + 1;

    let result = (num - randomNo) % 3;

    let array = ["rock", "paper", "scissors"];
    console.log(`Computer: ${array[randomNo -1]}, You: ${array[num -1]}`);
    if (result === 1 || result === -2){
        return "You win";
    }

    if (result === 2 || result === -1){
        return "You lose";
    }

    if (result === 0){
        return "You tied";
    }
}

console.log(roShamBo(1));
console.log(roShamBo(2));
console.log(roShamBo(3));
