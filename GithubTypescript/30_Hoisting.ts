// hoisting is a default behaviour that allow variable declared with a var and normal function moves to the top at the time of executing program.
// temporal dead zone is the period between decleration and initialization of let and const variable. if ypu go to details we will see that let and const also allow hoisting but it
// will go to global execution context , it will go sepearte script file that is why it comes error instead of undefined.

export{}
hello();
function hello(){
    console.log("hello how are you?");
}

console.log(name)
var name:string | undefined ="Mehnajul";