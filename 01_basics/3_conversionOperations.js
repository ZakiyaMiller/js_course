"use strict"
let Marks= 45
let MarkesinNumber =Number(Marks)
// "33" => 33
// "33abc" => NaN-----------------still a Number datatype
//  true => 1; false => 0

let MarkesinString = String(Marks)
let MarkesinBool = Boolean(Marks)
// 1 => true; 0 => false
// "" => false
// "someText" => true

console.table( [typeof MarkesinNumber, typeof MarkesinString ,typeof MarkesinBool])


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);by default a string
// console.log(1 + 2 + "2");//by default a no. unless a string comes


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// prefix and postfix

let x=3;
let y=x++
console.log({x},{y})
let a=3
let b=++a
let c=++a+a++
console.log(a,b,c)