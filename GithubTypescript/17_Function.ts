// function is a reusable block of code which perform specific task. 
// it improves code reusability.


function showMessage():string{
    return `Hello`;
}
showMessage();


function show(fname:string,lname:string ):void{
    console.log(`First Name :${fname} Last Name : ${lname}`);
}   
show("Mehnajul","Hassan");