class cat {
    constructor(name = "Lucky", tiredness = 50, hunger = 50, loneliness = 50, hapiness = 100) {
        this._name = name;
        this._tiredness = tiredness;
        this._hunger = hunger;
        this._loneliness = loneliness;
        this._hapiness = hapiness;
    }

    tirednessLevel() {
        if(this.tiredness >= 0 && this.tiredness < 30) {
            return console.log(`${this._name} is running around full of energy`);
        } else if (this.tiredness >= 30 && this.tiredness < 60) {
            return console.log(`${this._name} is slowly looking for a place to lie down`);
        } else if (this.tiredness >= 60 && this.tiredness < 100) {
            this.sleep();
            return console.log(`${this._name} is sleeping`); 
        } 
    }

    hungerLevel() {
        if(this._hunger < 30) {
            return  console.log(`${this._name} has full belly`);
        } else if (this._hunger >= 30 && this._hunger < 70) {
            return  console.log(`${_name} looking at you intetly to feed her`);
        } else if (this._hunger >= 70) {
            return  console.log(`${this._name} is meowing loudly, demanding food`);
        } else if (this._hunger > 150 && this._loneliness > 150) {
            return console.log(`${this._name} died.... Shame on you!`);
        }
    }

    lonelinessLevel() {
        if(this._loneliness < 30) {
            return  console.log(`${this._name} is ignoring you`);
        } else if (this._loneliness >= 30 && this._loneliness < 70) {
            return  console.log(`${this._name} is still ignoring you`);
        } else if (this._loneliness >= 70) {
            return  console.log(`${this._name} is standing on your keyboard demanding full attention`);
        } else if (this._hunger > 150 && this._loneliness > 150) {
            return console.log(`${this._name} died.... Shame on you!`);
        }
    }

    hapinessLevel() {
        if(this._hapiness < 30) {
            return console.log(`do not touch me`);
        } else if (this._hapiness >= 30 && this._hapiness < 70) {
            return console.log(`${this._name} seems pretty content`);
        } else if (this._hapiness >= 60) {
            return console.log(`${this._name} is running around`);
        }
    }

    greet() {
        console.log(`you greeted the ${this._name}, but he is just staring intently`);
    }

    kick() {
        console.log(`you kicked the ${this._name}, and he ate your face.....`);
    }

    pet() {
        this._hapiness -= 20;
        this._loneliness -= 10;
    }

    feed() {
        this._hunger -= 20;
        this._hapiness += 10;
    }

    run() {
        if(this._tiredness > 100) {
            this.sleep();
        } else {
            this._tiredness += 20;
            this._hunger += 10;
        }
    }

    sleep() {
        this._tiredness = 0;
        return console.log(`${this._name} is snoring loudly`);
    }


}


const Emil = new cat("Emil", 50, 50, 50, 100);

Emil.greet();
Emil.pet();
console.log(Emil._hapiness);
Emil.hapinessLevel();
Emil.tirednessLevel();
Emil.run();
Emil.run();
Emil.run();
Emil.run();
console.log(Emil._tiredness);
Emil.tirednessLevel();