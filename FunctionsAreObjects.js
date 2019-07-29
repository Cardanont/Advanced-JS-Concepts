
// Declaring a function
function one(){
    return 1;
}
one()

// Declaring a function as a method
const obj = {
    two(){
        return 2;
    }
}

obj.two()

// Using call() or apply()
function three(){
    return 3;
}

three.call()

// Function consturctor
const four = new Function('num', 'return 4')

four(4)


// functions are callable objects that can be invoked
function woohooo(){
    console.log('woohooo')
}

woohooo.yell = 'ahhhhh'