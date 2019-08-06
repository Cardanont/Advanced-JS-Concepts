
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
        return 'Atack with ' + this.weapon;
    }
}

class Elf extends Character (){
    constructor(name, weapon, type) {
        this.type = type
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');


