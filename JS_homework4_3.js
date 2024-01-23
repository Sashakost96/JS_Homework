let line = 'Hello';
function myPad(line, symbol, count, condition) {
    while(condition === false){
        if (line.length >= count){
            break;
        }
        else line += symbol;
    }

    while(condition === true){
         if (line.length >= count){
            break;
        }
        else line = symbol + line;
    }
    
     return console.log(line);
}
myPad(line, '*', 15, false);
myPad(line, '*', 15, true);
myPad(line, '*', 5, false);
myPad(line, '*', 5, true);
myPad(line, '*', 6, false);
myPad(line, '*', 6, true);