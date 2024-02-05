const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myBlend(arr) {
    //function(element - current arr element, index - current elem index, array)
    arr.forEach((_, i, arr) => {
       
        let newI = Math.floor(Math.random() * (i + 1));

        // [a, b] = [b, a];
        [arr[i], arr[newI]] = [arr[newI], arr[i]];
    });
    return console.log(arr);
}
myBlend(arr);
