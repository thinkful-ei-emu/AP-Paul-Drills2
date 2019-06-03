'use strict'

function jediName(firstName, lastName){
    let start =lastName.substring(0,3);
    let end = firstName.substring(0,2);
    let fullName = start+end;
    return fullName;
}

let Arpan = jediName('Paul','Han');
console.log(Arpan);

