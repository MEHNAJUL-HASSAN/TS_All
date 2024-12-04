// array allow us to store multiple values inside a single variable.
let arr:string[] = ['Mehnajul', 'hassan'];
console.log(arr);
arr.map((value,index) =>{
    console.log(`${index}  : ${value}`);
})