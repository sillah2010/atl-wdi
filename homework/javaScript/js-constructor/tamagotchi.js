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

    puke() {
        this.health--;
        console.log("Urghhhhhhhhhh");
        console.log(this.name + " is sick. Current health is " + this.health);
    }

    yawn() {
        this.restedness--;
        console.log("Yawnnnn!!");
        console.log(this.name + " has a current restedness of " + this.restedness);
    }

 
}


//create new Tamagotchis
const Josuke = new Tamagotchi('Josuke','monkey');
Josuke.cry();
Josuke.puke();
Josuke.yawn();
const Jotaro = new Tamagotchi('Jotaro','seal');
Jotaro.cry()
Jotaro.puke();
Jotaro.yawn();

//test out your Tamagotchies below via console.logs
