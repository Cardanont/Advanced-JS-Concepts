
// Pass by value
var a = 5;
var b = a;

b++;

// Pass by reference
let obj1 = {name: Yao, pass: '123'};
let obj2 = obj1;

obj2.pass = 'easypeasy';


var c = [1,2,3,4,5];
var d = c;
d.push(23449958333);

// Clone an object
let obj = {a: 'a', b: 'b', c: 'c'}
let clone = Object.assign({}, obj);
let clne2 = {...obj}

// Objext inside object

let obj3 = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'Try and copy me'
    } 
};

let clone3 = {...obj3} // Cannot clone an object inside an object this way

let superClone = JSON.parse(JSON.stringify(obj3)) // at least that you do this. Be careful with pretty deep objects