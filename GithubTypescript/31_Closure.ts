// clousre is a method or way that allow us to access the properties and method in lexical enviroment..



function Outer(...b){
    let c:string ='hassan'
    function Inner(){
        return b +"," + c;
    }
    return Inner();
}

console.log(Outer(1,2,3,4,5))