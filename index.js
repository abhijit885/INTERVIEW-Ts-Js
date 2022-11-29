// function show() {
//     //console.log(a)
//     var a = 1
//     var a = 11
//     console.log(a)

//const arr = [1, 2, 3, 4, 6, 7, 6, 4, 9, 7]
//const len = arr.filter(item => item > 5)
// console.log("len", arr.reduce(function (acc, curr) {
//     acc = acc + curr
//     return acc
// }, 2))
//console.log(arr.length)
// console.log('greatest', arr.reduce(function (acc, curr) { //previous ,current
//     if (acc > curr) {
//         curr = acc
//     }
//     return curr
// }, 0))
// }
// function x(){
//     for (var i = 1 ;)
// }

function cartValidation(productuctId) {
    let pr1 = new Promise((resolve, reject) => {
        let confermationid = '';
        if (!productuctId) {
            reject('no productuctId id');
        }
        setTimeout(() => {
            confermationid = '13'
            resolve(confermationid);
        }, 7000);
    })
    return pr1
}
function orderPlace(confermationid) {
    let pr2 = new Promise((resolve, reject) => {
        let orderId = '';
        if (!confermationid) {
            reject('no confermation id')
        }
        setTimeout(() => {
            orderId = '14'
            resolve(orderId);
        }, 5000);
    });
    return pr2;
}
function payment(oderid) {
    let pr3 = new Promise((resolve, reject) => {
        let paymentId = '';
        if (!oderid) {
            console.log('no oderid id');
            return
        }
        setTimeout(() => {
            paymentId = '15'
            resolve(paymentId);
        }, 2000)
    })
    return pr3;
}
async function placeOrder() {
    try {
        let confermationid = await cartValidation('15');
        console.log(confermationid);
        let orderid = await orderPlace('ewwe');
        console.log(orderid);
        let paymentid = await payment("ewewewee")
        console.log(paymentid);

    }
    catch (err) {
        console.log(err);
    }
}
placeOrder();