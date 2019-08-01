// Closures are a conbination of functions and the Lexical scope

function a(){
    let grandpa = 'grandpa'
    return function b(){
        let father = 'father'
        return function c(){
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

a()()()


const hello = (string) => (name1) => (name2) => console.log(`${string} ${name1} ${name2}`)

hello("hi")("Dan")("Ezra")

// Memory efficient

// Without Closure
function heavyDuty(index){
    const bigArray = new Array(70000).fill('😸');
    console.log('created!')
    return bigArray[index];
}

// Call without
heavyDuty(688)
heavyDuty(688)
heavyDuty(699)
// Call with
heavyDuty2(688)
heavyDuty2(99)
heavyDuty2(799)

// With Closure
function heavyDuty2(){
    const bigArray = new Array(70000).fill('😸');
    console.log('created with Closure!')
    return function(index){
        return bigArray[index];
    }
}

// Encapsulation

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction ++;
    const totalPaceTime = () => timeWithoutDestruction;
    const launch = () =>{
        timeWithoutDestruction = -1;
        return "boooom!";
    }
    setInterval(passTime, 1000)
    return{
        totalPaceTime: totalPaceTime
    }
}

const ohno = makeNuclearButton();

ohno.launch()


// Excersice Closures

let view;

function initialize(){
    console.log('view has ben set!')

    return function(){
        view = "🎮"
    }
}


// Excercise Use Colosures to call just once view
let view;

function initialize(){
    view = "🎮"
    console.log('view has ben set!')
}

initialize();
initialize();
initialize();
console.log(view)

// Naive Solution

let view;

function initialize(){
    let called = 0;
    return function(){
        if(called > 0){
            return
        }else{
            view = "🎮";
            called ++;
            console.log('view has ben set!')
        }
    }
}

// assign to a variable or const
const startOnce = initialize();
startOnce();
startOnce();
startOnce();
console.log(view);

// Now use encapsulation to avoid call the initilaize wenever they want

let view;

function initialize(){
    let called = 0;
    return function(){
        if(called > 0){
            return
        }else{
            view = "🎮";
            called ++;
            console.log('view has ben set!')
        }
    }
}