let age = +prompt(`Введіть рік `, `111`);
let humanAge = age%10;
let paintingAge = age%100;

if(age < 0)
    {
    console.log("Помилка: число від'ємне");
    }
    else if (isNaN(age))
    { console.log("Помилка: введений тип не є числом");}
        
    else if ((paintingAge >= 11) && (paintingAge <=19) || (age%5 === 0))  //перевірка 111 - 120
    {
        console.log(age + " років");
    }
    else if(humanAge === 1) //перевірка 1 і все що з 1
    {
        console.log(age + " рік");
    }
    else if((humanAge >= 2) && (humanAge <= 4)) //перевірка 2 до 4 і все що в кінці з 2,3,4
    {
        console.log(age + " роки");
    }
    else { console.log(age + " років"); }
