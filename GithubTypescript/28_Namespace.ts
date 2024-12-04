// namespace is similar to module it's also a way to pass the class from one file to another..but with different syntax..


namespace studentNamespace {
    export  class Student{
        constructor(private Name:string){}
        displayPersonName(){
            console.log(`Name : ${this.Name}`);
        }
    }
}