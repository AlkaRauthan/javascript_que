const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'fooreject');
});

//console.log(promise2 instanceof Promise)

// Promise.all([promise1,promise2,promise3]).then((res)=> {
//     console.log(res);
// })
// .catch((err)=> {
    
// })
// Promise.all([promise1,promise2,promise4]).then((res)=> {
//     console.log(res);
// })
// .catch((err)=> {
//     console.log(err);
// })

runAll = function(promises) {
  let result = new Array(promises.length); //initialize array with length same as of promises array
  let totalPromisesResolved = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((val) => {
          result[index] = val; //store the result of promise at the same index
          totalPromisesResolved++;
          if (totalPromisesResolved == promises.length)
            resolve(result); //all promises are resolved, call resolve
        }).catch((err) => {
          reject(err); //if any promise rejects, call the reject function
        });
    });
  });
};

function all(promises){
    let result = new Array(promises.length);
    let totalPromisesResovled = 0;
    return new Promise((resolve,reject) => {
        promises.forEach((promise,index) => {
          if(promise instanceof Promise){
            promise
            .then((val) => {
                result[index] = val;
                totalPromisesResovled = totalPromisesResovled + 1;
                if(totalPromisesResovled == promises.length){
                    resolve(result);
                }
            })
            .catch((err) => {
                reject(err);
            });
          }else{
            result[index] = promise;
            totalPromisesResovled = totalPromisesResovled + 1;
                if(totalPromisesResovled == promises.length){
                    resolve(result);
                }
          }
        });
    });
}

all([promise1,promise2,promise4]).then((res)=> {
    console.log(res);
}).catch((err) => {
    console.log(err);
})
