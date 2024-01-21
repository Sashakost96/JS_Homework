function myIsNan(a) {
    if((a !== a)  || (a === undefined)) {
        return true;
    }
    else return false;

}
console.log(myIsNan(undefined));
// console.log(myIsNan(NaN));
// console.log(myIsNan('1'));
// console.log(myIsNan(false));
// console.log(myIsNan(true));
// console.log(myIsNan(12));
//console.log(myIsNan(null));
