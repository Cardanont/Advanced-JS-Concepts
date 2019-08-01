let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if(this.fire)
            return `I am ${this.name}, the beather of fire`
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    } 
}


lizard.__proto__ = dragon;
lizard.sing();

// Example of implment own prototype

let human = {
    mortal: true
}

let socrates = Object.create(human)

socrates.age = 23

console.log(human.isPrototypeOf(socrates)) //--> ture

//  Only functions have the prototype property
function multiplyBy5 (num){
    return num * 5;
}

multiplyBy5.__proto__


//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

Date.prototype.lastYear = function(){
    return this.getFullYear() - 1;
  }
  
  new Date('1987-10-10').lastYear()
  //'1899'
  
  Array.prototype.map = function (){
    let arr = [];
    for(var i = 0; i < this.length; i++){
      arr.push((this[i] + '🗺'));
    }
    return arr
  }
  
  //#Bonus
  // Mofify .map() to print '🗺' at the end of each item.
  console.log([1,2,3].map())
  //1🗺, 2🗺, 3🗺