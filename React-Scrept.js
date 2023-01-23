// // const arr = [4, 2, 6, 9, 2, 6, 4, 1, 9, 0]
// // /**
// //  * Remove all the repeated elements from the given array
// //  *
// //  * Expected output: [4, 2, 6, 9, 1, 0]
// //  */
// // let ex = []
// // arr.sort(function (a, b) {
// //     if (a == b) {
// //         return -1
// //     }
// // })
// const posts = [
//     {
//         userId: 1,
//         title: "sunt aut facere repellat ",
//         body: "quia et suscipit\nsuscipit",
//     },
//     {
//         userId: 2,
//         title: "et ea vero quia laudantium autem",
//         body: "delectus reiciendis molestiae",
//     },
//     {
//         userId: 2,
//         title: "in quibusdam tempore odit est dolorem",
//         body: "itaque id aut magnam\npraesentium",
//     },
//     {
//         userId: 3,
//         title: "dolor sint quo a velit explicabo quia nam",
//         body: "eos qui et ipsum ipsam suscipit",
//     },
// ];
// //   ["et ea vero quia laudantium autem", "in quibusdam tempore odit est dolorem"];
// // const ex = posts.map((item)=>{
// //     return item.title
// // }).
// // const ex = posts.filter((item) => {
// //     return item.userId == 2
// // }).map((item) => {
// //     return item.title
// // })
// // console.log("user 2 t ", ex)
// // useEffect(() => {
// //   callApi()
// // },[])
// const course = [
//     {
//         name: 'Learn Java',
//         price: 100
//     },
//     {
//         name: 'Learn JavaScript',
//         price: 200
//     },
//     {
//         name: 'Learn Python',
//         price: 300
//     },
//     {
//         name: 'Learn Ruby',
//         price: 400
//     },
// ]
// const searchText = 'java'
// const ex = course.filter(i => {
//     return i.name == 'java'
// })

// arrat to strung

// console.log(3 > 2 > 5) ??
//     string to string convert
// { "qqq", "22" }
// { 'qqq#', '22#' }
// console.log(1)
// setTimeout(() => {

// }, 1000);

///Async() & Await() 
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
    let paymentId = '';
    if (!oderid) {
        console.log('no oderid id');
        return
    }
    setTimeout(() => {
        paymentId = '15'
        return paymentId
    }, 4000)
}
async function placeOrder() {
    try {
        let confermationid = await cartValidation('15');
        console.log(confermationid);
        let orderid = await orderPlace('');
        console.log(orderid);
    }
    catch (err) {
        console.log(err);
    }
}
placeOrder();

//Promise()
// function cartValidation(productuctId){
//     let pr1=new Promise((resolve,reject)=>{
//         let confermationid='';
//         if(!productuctId){
//            reject('no productuctId id');  
//         }
//             setTimeout(()=>{
//                 confermationid='13'
//                 resolve(confermationid);
//             },7000); 
//     }) 
//     return pr1
// }
// function orderPlace(confermationid){
// let pr2= new Promise((resolve,resject)=>{
// let orderId='';
//     if(!confermationid){
//         resject('no confermation id')
//     }
//     setTimeout(()=>{
//         orderId='14'
//        resolve(orderId);
//     },5000);
// });
//    return pr2;
// }
// function payment(oderid){
//     let paymentId='';
//     if(!oderid){
//         console.log('no oderid id');
//         return
//     }
//     setTimeout(()=>{
//         paymentId='15'
//         return paymentId
//     },4000)
// }
// function placeOrder(){
//     cartValidation('12').then((confermationid)=>{
//         console.log(confermationid);
//         return confermationid;
//     })
//     .then((confermationid)=>{
//         return orderPlace(confermationid);
//     })
//     .then((orderId)=>{
//         console.log(orderId)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }
// placeOrder();

// CALLBACK || ASYNC , AWAIT || Promise

// console.log("1");
// setTimeout(()=>{console.log("4")},5000)
// setTimeout(()=>{console.log("2")},2000)
// console.log("3");
///////////////////////
// const printValue = (val) => {
//     console.log("printValue",val)
// }

// const sum = (a,b) => {
//     const result = a + b;
//     return result
// }

// const OutPut = sum(10,5)
// printValue(OutPut)
/////////////////  
//1.no controle to prevent the printValue() function call this time come to picture of callback function
// const printValue = (val) => {
//     console.log("printValue",val)
// }

// const sum = (a,b) => {
//     const result = a + b;
//     printValue(result)
// }

// const OutPut = sum(10,5)
/////////////////  
// const printValue = (val) => {
//     console.log("printValue",val)
// }

// const sum = (a,b,callback) => {
//     const result = a + b;
//     if(callback){
//         callback(result)
//     }
//     return result
// }

// const OutPut = sum(10,5)
// console.log("OutPut",OutPut)
// const OutPut2= sum(10,5,printValue)
/////////////////////////////Vanila callback Function/////
const paymentSuccess = true
const marks = 90
const enroll = (callback) => {
    console.log("enroll started")
    setTimeout(() => {
        if (paymentSuccess) {
            callback()
        } else {
            console.log("Payment Failed !! ")
        }
    }, 2000)
}

const progress = (callback) => {
    console.log("progress started")
    setTimeout(() => {
        if (marks > 80) {
            callback()
        } else {
            console.log("progress Failed !! ")
        }
    }, 2000)
}

const getCertificate = () => {
    console.log("getCertificate Process started")
    setTimeout(() => {
        console.log("Congratulation....")
    }, 2000)
}

enroll(() => {
    progress(getCertificate)
})
Example -
    enroll(() => {
        progress((getCertificate) => {
            c(() => {
                d(() => {
                    e(() => {
                        f(() => {

                        })
                    })
                })
            })
        })
    })
// it is a call back hell which is very difficult to maintain this call backs thats why promises is come to picture common error handel section is catch()
//////////////////// Promise ///////////////
const paymentSuccess = true
const marks = 90

const enroll = () => {
    console.log("enroll started")
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (paymentSuccess) {
                resolve()
            } else {
                reject("Payment Failed !! ")
            }
        }, 2000)
    })
    return promise
}

const progress = () => {
    console.log("progress started")
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (marks > 70) {
                resolve()
            } else {
                reject("Progress Failed !! ")
            }
        }, 2000)
    })
    return promise
}

const getCertificate = () => {
    console.log("getCertificate Process started")
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Congratulation....")
        }, 2000)
    })
    return promise
}

enroll()
    .then(progress)
    .then(getCertificate)
    .then((value) => {
        console.log("last value", value)
    })
    .catch((err) => {
        console.log(err)
    })
////////////////////////// Async Await ////////////////
//1. no need to return promise by default async return a promise //await is to hold the execution of code(waiting for promise) in js engine after getting the promise execution again started
const paymentSuccess = true
const marks = 90

const enroll = async () => {
    console.log("enroll started")
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (paymentSuccess) {
                resolve()
            } else {
                reject("Payment Failed !! ")
            }
        }, 2000)
    })
    return promise
}

const progress = async () => {
    console.log("progress started")
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (marks > 70) {
                resolve()
            } else {
                reject("Progress Failed !! ")
            }
        }, 2000)
    })
    return promise
}

const getCertificate = async () => {
    console.log("getCertificate Process started")
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Congratulation....")
        }, 2000)
    })
    return promise
}
const head = async () => {
    try {
        await enroll()
        await progress()
        const lastFunction = await getCertificate()
        console.log(lastFunction)
    } catch (err) {
        console.log("all err", err)
    }
}

// touchableOpacity vs button
// map vs forEach
// for vs forEach
// scrollView vs flatlist
// tradutional function vs arrow function
//     Lifecycle of React Native compare with functional component
// high resolution image optimize
// if keystore loose what will do
// certifecate create in importScriptsvertual scroll view
// cashing in RN
// null vs nan vs undefined
// datatypes ??
// while vs doWhile
// spread vs rest
// event loop
// call shack ??
//     call back quee ??
//         microtask quee ??

//             function declaration ??
//             function expression   ??
//             IIFF ??
//             first class function ??
//                 lexical scope ??
//                     scope chain ??
//                         first cass finction ??
//                             call back function??
//                                 hire order function ??




// let chars = ['A', 'B', 'A', 'C', 'B'];

// let uniqueChars = [];
// chars.forEach((c) => {
//     if (!uniqueChars.includes(c)) {
//         uniqueChars.push(c);
//     }
// });

// console.log(uniqueChars);
let ex
console.log(ex)

function name(params) {

}
const Abhi = () => {

}
arr.map(() => {

})
