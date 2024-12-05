// const myPromise =  new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(()=>{
//             console.log("Promise Resolved 1");
//         });
//     },1000)
// })

// myPromise.then(()=>{
//     console.log("Promise then 1");
// })

// myPromise.catch((err)=>{
//     console.log("error :",err);
// })

// myPromise.finally(()=>{
//     console.log("all done..")
// })



function p1(){
    return new Promise((resolve,reject)=>{
        const name:string="Mehnajul";
        setTimeout(()=>{
            resolve(()=>{
                console.log(name);
            })
        },1000)
    }).catch((err)=>{
        console.log("ERROR : ", err)
    })
}

function p2(){
    return new Promise((resolve,reject)=>{
        const name:string="Hassan";
        if(name === 'Mehnajul'){
            setTimeout(()=>{
                resolve(()=>{
                    console.log(name);
                })
            },2000)
        }
        else{
            reject((err)=>{
                console.log("ERROR : ", err)
            })
        }
    })
}


Promise.all([p1(),p2()])  // it will execute all the promise.Rejects immediately when any promise is rejected and does not wait for the other promises to settle.

Promise.allSettled([p1(),p2()]) //it will give output after all promise is settled.  

Promise.any([p1(),p2()])  // any promise is fulfilled it will give resolve output. opposite to Promise.all, Resolves as soon as one promise resolves, and rejects only if all promises are rejected.

Promise.race([p1(),p2()]) // Resolves or rejects as soon as the first promise resolves or rejects. whichever will execute first will only give output
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log("Error",err)
})