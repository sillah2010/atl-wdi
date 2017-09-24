console.log('tamagotchi file is loaded');

class Tamagotchi {
    constructor(name, creatureType) {
        this.name = name;
        this.creatureType = creatureType;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }

    cry() {
        this.foodInTummy --;
        console.log("WAHHH!!!");
        console.log(this.name + "'s food in tummy went down to " + this.foodInTummy);
        
    }
 
}


//create new Tamagotchis
const Jonathan = new Tamagotchi('Jojo','monkey');
Jonathan.cry();
const Jotaro = new Tamagotchi('Jotaro','seal');
Jotaro.cry()

//test out your Tamagotchies below via console.logs
