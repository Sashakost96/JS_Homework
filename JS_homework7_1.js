//Напишіть регулярний вираз, який допоможе знайти принаймні шість символів і не містити літери А (великої або малої)
//let string = "1234567";
//let string = "ZcXeVgN";
let string  = "Lost d0y of this month";
let pattern = /^[^Aa]{6,}$/;

pattern.test(string) === true ? console.log("whora! your string is fine!") : console.log("ups .. current string is out of our rules");