'use strict';

function beyond(num){
    if(num===Infinity || num == -Infinity){
        console.log('And beyond');
    }
    else if(0<num){
        console.log('To infinity');
    }
    else if(0>num){
        console.log('To negative infinity');
    }
    else{
        console.log('Staying home');
    }
}
beyond(NaN);
beyond('paul');
beyond(Infinity);
beyond(-Infinity);
beyond(1000000000);
beyond(-25);
beyond(0);
