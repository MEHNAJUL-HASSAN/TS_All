// tuple allow us to store multiple value of different data type inside a single variable.

let newArr:[string, string, number] = ['Mehnajul', 'hassan', 1];
console.log(newArr);
newArr.map((value,index) =>{
    console.log(`${index} : ${value}`)
})