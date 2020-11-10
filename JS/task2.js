'use strict';
//const calculateEngravingPrice = (message = "", pricePerWord = 0) => pricePerWord; // Write code in this line

const calculateEngravingPrice = function (message, pricePerWord) {
    let result = 0;
    if (message != '' && pricePerWord != null) {
        // console.log(message.split(' '));
        const words = message.split(' ');
        // console.log(words.length * pricePerWord);
        result = words.length * pricePerWord;
    }
    return result; 
}
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

console.log(calculateEngravingPrice('Uno', 100)); // 100