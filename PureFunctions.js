// no side effects 
// input --> output

// Idempotece:
function notGood(num){
    console.log(num)
}

notGood(5)

// Impreative vs Declarative
// jQuery is more Imperative while React is more Declarative

// Immutability

const obj = {name: 'Name'}

function clone(obj){
    return {...obj}; // this is pure.
}

function updateName(obj){
    const obj2 = clone(obj);
    obj2.name = 'Nona'
    return obj2
}

const updateObj = updateName(obj)
console.log(obj, updateObj)


// HOF
const hof = (fn) => fn(5);
hof(function a(x){return x}) 

// Closure

const closure = function(){
    let count = 55;
    return function getCounter(){
        return count;
    }
}

const getCounter = closure();
getCounter()
getCounter()