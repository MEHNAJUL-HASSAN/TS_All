// Generic is a tool which is used to create reusable component. generics allow us to work with variety of data type instead of any single data type.


function GenericsFunction<T,U>(args:T, Name:U):void{
    console.log(`FIrst Name:${args} LastName: ${Name}`)
}

console.log(GenericsFunction("Mehnajul","Hassan"));


interface genericType {
    FName:string;
    LName:string;
}

const gnericType1 ={
    FName:"Peter",
    LName:"Parker"
}

function GenericNewFunction<T extends genericType>(gnericType1:T):void{
    console.log(`First Name : ${gnericType1.FName} \n Last Name : ${gnericType1.LName}`);
}
GenericNewFunction(gnericType1)