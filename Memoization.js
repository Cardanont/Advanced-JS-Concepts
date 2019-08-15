// Memoization ~ ~ ~ ~ Caching

// without memoization
function addTo80(n) {
    return n + 80;
}

addTo80(7);

// with memoization
let cache = {};

function memoizedAddTo80(n){
    if(n in cache){
        return cache[n];
    } else {
        console.log('long time');
        cache[n] = n = 80;
        return cache[n];
    }
}

console.log('1', memoizedAddTo80(5))
console.log('2', memoizedAddTo80(5))

// Memoization 2 add the cache to the function and use closure and avoid the global variable

function memoizedAddTo802(){
    let cache2 = {};
    return function(n) {
        if(n in cache2) {
            return cache2[n];
        } else {
            console.log('long time');
            cache2[n] = n + 80;
            return cache2[n];
        }
    }
}

const memoized = memoizedAddTo802();

console.log(memoized(5))
console.log(memoized(5)) // cached
console.log(memoized(6)) 
console.log(memoized(6)) // chached




