// Encapsulation allow us bind or wrap the data and method inside a single unit.
// we can achieve Encapsulation by using getter and setter.


class Cricket {
    public Name;
    constructor(name:string){
        this.Name = name;
    }

    get PersonDetails():string{
        return this.Name;
    }

    set newDetails(newName:string){
        this.Name = newName;
    }
}
    
let crickerObj = new Cricket("Mehnajul");
console.log(crickerObj.PersonDetails);
crickerObj.newDetails="Hassan";
console.log(crickerObj.PersonDetails);