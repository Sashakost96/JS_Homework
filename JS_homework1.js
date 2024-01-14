/*
1) number + 3 + 3 ->  number33 (конкатенацій строк)
*/
let line1;
line1 = 'number' + 3 + 3;
console.log(line1); //number33

/* 
1) null -> false -> 0 (null - це тип який відноситься до falsy значень. JS намагаэться привести null до числа)
3) 0 + 3 -> 3 (операція додавання)
*/
let line2 = null + 3
console.log(line2); //3

/*
 1) число -> true і не пуста стрінга -> true; 
 2) якщо всі операнди true, то && повертає останнє значення -> "qwerty" )
*/

let line3 = 5 && "qwerty"
console.log(line3); //qwerty

/* 
1) +'40' -> 40 i +'2' -> 2 (знак "+" перед операндом приводить його до числа)
2) 40 + 2 -> 42 (проходимось зліва на право бінарний +)
3) 42 + "hillel" -> 42hillel конкатенація 
*/
let line4 = +'40' + +'2' + "hillel";
console.log(line4); //42hillel

/*
1) '10' -> 10 (JS автоматично приводить '10' до числа)
2) 10 - 5 -> 5 (бінарний мінус)
3) 5 === 6 -> false (операнд строгої рівності(враховує значення і типи) тож number: 5 не дорівнює number: 6 => false)
*/
let line5 = '10' - 5 === 6;
console.log(line5); //false

/*
1) true -> 1, a false -> 0 (JS приводить буленові значення до чисел)
2) 1 + 0 -> 1 (арифметична операція)
*/
let line6 = true + false
console.log(line6); //1

/*
1) string мінус number -> NAN
*/
let line7 = '4px' - 3
console.log(line7); //NAN

/*
1) '4' -> 4 (JS приводить string значення до числа)
2) 4 - 3 -> 1 (арифметична операція)
*/
let line8 = '4' - 3
console.log(line8); //1

/*
1) 3 ** 0 -> 1 (приведення до степені - це у нас правоассоціативна операція виконується перша);
2) '6' + 1 -> 61 (конкатенація string)
*/
let line9 = '6' + 3 ** 0;
console.log(line9); //61

/*
1) '6' -> 6 (JS приводить string значення до числа)
2) 12/6 -> 2 (арифметична операція)
*/
let line10 = 12 / '6'
console.log(line10); //2

/*
1) (5 === 6) -> false (оператор строгої рівності поверне нам false, бо він враховує не тільки типи, а й значення)
2) '10' + false конкатенація стрінги до результату у дужках
*/
let line11 = '10' + (5 === 6);
console.log(line11); //10false

/* 
1) Отримуємо false тому що JS не може привести до одного типу пустий string і null
*/
let line12 = null == ''
console.log(line12); //false

/*
1) 9/3 = 3;
2) 3^3 = 27;
*/
let line13 = 3 ** (9 / 3);
console.log(line13); //27

/*
1) !!'false' -> true; (!! приводить до типу boolean. Не пуста стрінга is true)
2) !!'true' -> true;
3) true == true -> true;
*/
let line14 = !!'false' == !!'true'
console.log(line14); //true

/*
1) 0 || '0' -> true (логічне OR поверне нам true при умові, що операнд_1(0 -> false) або операнд_2('0' -> true) є true);
2) true && 1 -> true (логічне AND повертає останнє значення 1, бо обидва операнди є true);
*/
let line15 = 0 || '0' && 1
console.log(line15); //1

/*
1) null -> 0
2) 0 == false -> true;
3) true < 1 -> false
*/
let line16 = (+null == false) < 1;
console.log(line16); //false

/*
1) false && true -> false; (логічне AND поверне нам тру при умові, що операнд_1 та операнд_2 є true)
2) false || true -> true; (логічне OR поверне нам тру при умові, що операнд_1 або операнд_2 є true)
*/
let line17 = false && true || true
console.log(line17); //true

/*
1) (false || true) -> true;
2) false && true -> false;
*/
let line18 = false && (false || true);
console.log(line18); //false

/*
1) 1^5 -> 1;
2) +null -> 0;
3) (0 == false) -> true;
4) true < 1 -> false
*/
let line19 = (+null == false) < 1 ** 5;
console.log(line19); //false
