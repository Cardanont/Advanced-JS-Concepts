// Amarron shopping
// Implement a cart feature
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

const amarronHistory = [];
const compose = (f,g) => (...args) => f(g(...args));

purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: "laptop", price: 200})

function purchaseItem (...fns){
    return fns.reduce(compose);
} 

function addItemToCart(user, item){
    amarronHistory.push(user)
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, {cart: updateCart})
}

function applyTaxToItems(user) {
    amarronHistory.push(user)
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price * taxRate
        }
    })
    return Object.assign({}, user, { cart: updatedCart })
}

function buyItem(user) {
    amarronHistory.push(user)
    return Object.assign({}, user, { purchases: user.cart })
}

function emptyCart(user) {
    amarronHistory.push(user)
    return Object.assign({}, user, { cart: [] })
}

// Bonus:
// Accept refunds.
function makeRefound(user){
    amarronHistory.push(user)
    return Object.assign({}, user, { purchases: [] })
    console.log("Your money will be refound in about 25 days hehe ");
}

// Track user history.
amazonHistory