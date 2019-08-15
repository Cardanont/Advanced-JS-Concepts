

fn1(fn2(fn3(data)));
compose(fn1, fn2, fn3)(data)
pipe(fn3, fn2, fn1)(data)


// Compose right to left [||] Pipe left to right

const compose = (f, g) => (data) => f(g(data))
const pipe = (f, g) => (data) => g(f(data))
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive) 

multiplyBy3AndAbsolute(-50)
