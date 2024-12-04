// void means nothing or empty(no object no value) 
// when we take void in variable the output will be undefined.
// when we don't want to return anything in function then we use void in function..which we are returning void(nothing).

let num:void;
console.log(num);


function showNum():void{
    let nums:number=1;
    console.log(`Number = ${nums}`)
}
showNum();