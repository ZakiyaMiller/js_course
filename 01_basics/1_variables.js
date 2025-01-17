const AccId=141414
let AccName="Parker";
var AccNum="456"
AccCity="Jaipur"
let AccPw
//AccId=565656
//console.log(AccId)
//TypeError: Assignment to constant variable.

AccName="kia"
//avoid var as it has block scope issues.
console.table([AccId, AccName,AccNum,AccCity,AccPw])