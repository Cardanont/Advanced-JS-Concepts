// Functions first class citizens in JS

// 1 assign a fucntion to a variable
var stuff = function(){}

// 2 Pass a fucntion as a parameter
function a(fn){
    fn()
}
a(function(){console.log("Hi there")})

// 3 return fucntions as values froma a function
function b(){
    return function c(){console.log('bye')}
}
var d = b()
d()

// Higher Order Functions
// function()  |  function(a,b)    |    HOF

//  fucntion(){}  fucntion()      Don't reapeat yourself
function letAdamLogin(){
    let array = [];
    for(let i = 0; i < 1000000; i++){
        array.push(i)
    }
    return 'Access granted to Adam';
}

function letEvaLogin(){
    let array = [];
    for(let i = 0; i < 1000000; i++){
        array.push(i)
    }
    return 'Access granted to Eva';
}

letAdamLogin()
letEvaLogin()


// function(a,b){} function with parameters
const giveAccesTo = (name) => 'Access granted to' + name

function letUserLogin(user){ // ++ we now
    // WHAT DATA to use.
    let array = [];
    for(let i = 0; i < 100000; i++){
        array.push(i)
    }
    return giveAccesTo(user);
}

// when we have more roles.
function letAdminLogin(user){
    let array = [];
    for(let i = 0; i < 500000; i++){
        array.push(i)
    }
    return giveAccesTo(user);
}

// HOF 
const giveAccesTo = (name) => 'Access granted to' + name

function letUserLogin(verify){ 
    let array = [];
    for(let i = 0; i < verify; i++){
        array.push(i)
    }
    return true;
}

// This is a HOF
function letPerson(person, fn){
    if(person.level === 'admin'){
        fn(500000)
    }else if(person.level === 'user'){
        fn(100000)
    }
    return giveAccesTo(person.name)
}

letPerson({level: 'admin', name: 'Sally'}, authenticate)


// HOF 2
const multiplyBy = (num1) => (num2) => num1 * num2

multiplyBy(5)(5)
