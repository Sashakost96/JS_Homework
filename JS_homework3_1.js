
// First realisation
/* 
let high;
let i;
let symbolToDisplay;
function letsDraw (high, symbol) {  
    for (i=1, symbolToDisplay = symbol; i <= high; i++, symbolToDisplay += symbol)
    {
        console.log(symbolToDisplay) ;
      
    }
}
letsDraw (5, `⚪`);
*/ 

// Second realisation

let high;
let i=1;
let symbolToDisplay;
function letsDraw (high, symbol) {  
  symbolToDisplay = symbol;
      while (i <= high){
        console.log(symbolToDisplay)
        symbolToDisplay += symbol
        i++;
      }
        
}
letsDraw (5, `⚪`);

// Third realisation (just for practice) 
/*
let high;
let i=1;
let symbolToDisplay;
function letsDraw (high, symbol) {  
    symbolToDisplay = symbol
    do {
       
        console.log(symbolToDisplay)
        symbolToDisplay += symbol
        i++;
    } while (i <= high);
        
}
letsDraw (5, `⚪`);
*/