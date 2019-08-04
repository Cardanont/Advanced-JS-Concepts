class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack(){
        return 'attack with ' + this.weapon
    }
}


const peter = new Elf('Peter', 'stones')
console.log(peter.attack())