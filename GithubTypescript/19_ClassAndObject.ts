// class is like template or blueprint for creating object.
// object is an actual representation of a class.. new keyword is used to create an object.
// new keyword means creating an empty object.

interface personType{
    Fname:string;
    Lname:string;
    display:Function;
}

class Person<personType>{
    private Fname;
    private Lname;
    constructor(fname, lname){
        this.Fname = fname;
        this.Lname = lname;
    }

    display():void{
        console.log(`First Name : ${this.Fname} \n Last Name : ${this.Lname}`);
    }
}


let obj = new Person("Mehnajul","Hassan");
obj.display();