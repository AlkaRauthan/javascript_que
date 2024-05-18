const cart = ["shoes","pants","kurta"];

const promise = createOrder(cart);

function createOrder(cart){
    return new Promise(function(resolve,reject){
        if(!validateCart()){
            const err = new Error("Error")
            reject(err);
        }
        resolve("1234") //with some order Id
    })
}

function validateCart(){
    return true;
}

promise
.then(function(orderId){
    console.log(orderId)
})
.catch(function(err){
    console.log(err);
})

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("payment successful")
    })
}

promise
.then(function(orderId){
    console.log(orderId)
    return orderId
})
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err);
})
