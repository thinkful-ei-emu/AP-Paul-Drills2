function crackCode(message){
    let array = ['a', 'b', 'c', 'd'];
    let first = message.split(" ");
    let current = "";
    for (let i = 0; i < first.length; i++){
        if (array.indexOf(first[i][0]) === -1){
            current += ' ';
            continue;
        }
    
        let array2 = [2, 3, 4, 5];
        let index = array.indexOf(first[i][0]);
    
        let characterIndex = array2[index];
        current += first[i].charAt(characterIndex - 1);
    }

    return current;
}

let sentence = 'craft block argon meter bells brown croon droop';

console.log(crackCode(sentence));