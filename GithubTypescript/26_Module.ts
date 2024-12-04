// modeule is way to send the class from one typescript file to another typescript file..

export interface nameType {
    Name:string;
}


export class PersonName<nameType>{
    public Name;
    constructor(name:string){
        this.Name = name;
    }
    DisplayName(){
        console.log(`Name : ${this.Name}`);
    }
}