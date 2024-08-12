import React from "react";
 
function Result ({secretNum, term}) {
    let result;

    if(term) {

    if(term > secretNum) {
        result= 'Higher'
    }else if(term < secretNum) {
        result = 'Lower'
    }else if(term == secretNum) {
        result = 'Yipee!  corret'; 
    }else {
        result = 'enter valid input';
        }
    }

    return <h3>you guessed: {result} </h3>
}

export default Result;