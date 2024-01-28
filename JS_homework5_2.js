const services = {
    "Manicure" : "25$",
    "Gel polish manicures" : "35$",
    "French manicures" : "40",
    "Deluxe manicure" : "50$",
}

    function price(){
    var sum = 0;
    for (let key in  services){
        console.log(`${key} -` + ` ${services[key]}`);
        let value = parseInt(services[key]);
        sum += value;
    }
    return console.log(`Total sum = ${sum}` + `$`);
  };


function minPrice(){
    let min = parseInt(services["Manicure"]);
        for (let key in  services) {
            let num = parseInt(services[key]);
            if(num < min){
                min = num;
            } else continue;

        }
    return console.log(`The cheapest service cost` + ` ${min} $`);
};


function maxPrice(){
    let max = parseInt(services["Manicure"]);
        for (let key in  services) {
            let num = parseInt(services[key]);
            if(num > max){
                max = num;
            } else continue;

        }
    return console.log(`The dearest service cost` + ` ${max} $`);
};

services["Add polish"] = "10$";
price();
minPrice();
maxPrice();