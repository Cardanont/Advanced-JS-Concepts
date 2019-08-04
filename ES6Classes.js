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

// use this - 4 ways

// new binding
function Person(name, age){
    this.name = name;
    this.age = age;
}

const person1 = new Person('Xavier', 55)
person1

// implicitin binding
const person = {
    name: 'Karen',
    age: 30,
    hi(){
        console.log('Hi ' + this.name)
    }
}

// explicit binding
const person3 = {
    name: 'Karen',
    age: 30,
    hi: function() {
        console.log('Hi ' + this.setTimeout) // Explicit telling to be window
    }.bind(window) // use bind() call() or apply()
}

person3.hi()

// arrow function 
const person4 = {
    name: 'Karen',
    age: 30,
    hi: function() {    
        var inner = () => {
            console.log('Hi ' + this.name)
        }
        return inner()
    }
}

person4.hi()