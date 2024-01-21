function checkProbabilityTheory(count) {
    let i = 1;
    let pairNumCounter = 0;
    let nonPairNumCounter = 0;
    //let conclusion;
    while(i <= count){
        let rnd = ((Math.random() * 1000) + 100)
        rnd = Math.round(rnd);
        //console.log(rnd)
        if (rnd % 2 === 0){
            pairNumCounter++ ;
            //console.log(`pairNumCounter = ${pairNumCounter}`)
        } 
        else {
            nonPairNumCounter++;
            //console.log(`Non_pairNumCounter = ${nonPairNumCounter}`)
        }
       i++;
    }
    let pairNumPercent = Math.round((pairNumCounter/count) * 100);
    //console.log(`pair num % = ${pairNumPercent}`) ;

    let nonPairNumPercent = Math.round((nonPairNumCounter/count) * 100);
    //console.log(`non pair num % = ${nonPairNumPercent}`) ;
    if((pairNumPercent >= 40) && (pairNumPercent <= 60)){
       conclusion = 'Відсоткове співвідношення близьке до 50%50';
    }
    else conclusion = 'Відсоткове співвідношення НЕ близьке до 50%50';

    return console.log(` Кількість згенерованих чисел: ${count}\n Парних чисел: ${pairNumCounter} \n Не парних чисел: ${nonPairNumCounter}
    \n Відсоток парних до не парних: ${pairNumPercent}/${nonPairNumPercent} \n ${conclusion}`);
}
checkProbabilityTheory(15);
