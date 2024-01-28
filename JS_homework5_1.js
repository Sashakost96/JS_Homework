let zombie = {
    name : "Buckethead Zombie",
    feature : "The bucket on his head gives him extra strength",
    strength: "High",
    speed: "Normal",
    cost: "125 sun",

setColor(color){
    zombie.color = color;
    //console.log(`color is set`);
},
showObj: function (zombie) {
        return console.log(zombie);
     }

}

zombie.showObj(zombie);
zombie.setColor('green');
zombie.showObj(zombie);
