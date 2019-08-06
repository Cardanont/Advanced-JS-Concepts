
//#region OOP with functions
/*
// factory functions
const elFunctions = {
    attack() {
        return "attack with " + this.weapon
    }
}

// Object.create()
function createElf(name, weapon){
    let newElf = Object.create(elFunctions)
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf("Peter", "axe")
console.log(peter.attack())

// Constructor functions
function Elf(name, weapon){
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function(){
    return 'attack with ' + this.weapon
}

const peter = new Elf("Peter", "stones")
console.log(peter.attack())
const sam = new Elf("Sam", "fire")
console.log(sam.attack()) */

//#endregion


// Implementing OOP in JS for "Game"

class Character {
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }

    attack(){
        return this.name + ' attack with ' + this.weapon;
    }
}

class Elf extends Character (){
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
    }
}

class Ogre extends Character {
    constructor(name, weapon, color){
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongest for in the world made';
    }
}

class King extends Character {
    constructor(name, weapon, land, order) {
        super(name, weapon)
        this.land = land
        this.order = order 
    }
    kingDemand (){
        return 'The king demands ' + this.order;
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
dolby.attack()
const shrek = new Ogre('Shrek', 'club', 'green');
shrek.makeFort()
const arthur = new King("Arthur", "sword", "Britain", "Coffe");
arthur.attack();
arthur.kingDemand();


