// interface is used to create a structure of an object and assign a data type to a properties.


interface perType {
    FName:string;
    LName:string;
    display:Function;
}

let Person:perType={
    FName:"Mehnajul",
    LName:"Hassan",
    display(){
        console.log(`First Name : ${Person.FName}\n Last Name : ${Person.LName}`);
    }
}

Person.display();