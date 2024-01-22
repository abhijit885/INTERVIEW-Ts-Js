const F1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("F1 Promise resolve value !! ");
    },10000);
});
const F2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("F2 Promise resolve value !! ");
    },1000)
});
async function handelPromise(){
    console.log("handelPromise started");
    const val1 = await F1;
    console.log("val1");
    console.log(val1);
    const val2 = await F2;
    console.log("val2");
    console.log(val2);
};
handelPromise();
//console.log("Welcome to JS");