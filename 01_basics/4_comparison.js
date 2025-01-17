//Numbet To Number comparisons
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// string is first convertes to number and then compared
// console.log("2" > 1);
// console.log("02" > 1);

//null can covert to 0 or NaN 
//hence comparison of null and undefined are unpredictable

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// strict check--->the string is not converted, the datatype is also checked 

console.log("2" === 2);//false