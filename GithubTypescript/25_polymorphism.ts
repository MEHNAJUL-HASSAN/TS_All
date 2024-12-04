//polymorphism allow us to create a method in class with diiferent implementation.
//in simple word we can say same method with different implementation in class.


// interface polymorphism
export {}

interface circleInterface {
    CreateCircle():number;
}

class Circle implements circleInterface{
    constructor(private radius:number){};
    CreateCircle():number{
        return Math.floor( Math.PI * this.radius ** 2);
    }
}
class Reactangle implements circleInterface{
    constructor(private height:number, private width:number){};
    CreateCircle():number{
        return this.height * this.width;
    }
}

let obj1:circleInterface[] = [new Circle(5), new Reactangle(5,5)];
obj1.forEach((fun)=>{
    console.log(fun.CreateCircle());
})


// inheritance polymorphism

class Animal {
    makeSound():string {
        return `Animal sound`;
    }
}

class Cat extends Animal {
    makeSound(): string {
        return `meow meow`;
    }
}

class Dog extends Cat {
    makeSound(): string {
        return `bhaw bhaw eeerrrrgggrrrr`;
    }
}

let obj:Animal[] = [new Cat(), new Dog()];
obj.forEach((element) => {
    console.log(element.makeSound());
});



// function overloading

class Person{
    constructor(private name:string | string[]){}
    greet(name:string):string;
    greet(name:string[]):string;

    greet(names:string | string[]):string{
        if(Array.isArray(names)){
            return `hello ${names.join(",")}`;
        }
        else{
            return `hello ${names}`;
        }
    }
}
const p = new Person("Mehnajul");
const p1 = new Person(['Mehnajul','hassan']);
console.log(p.greet("Mehnajul"));
console.log(p1.greet(['Mehnajul','hassan']));



// function override


class A{
    makeSound(sound:string):string{
        console.log("ooohhhhaaaaa hhhhahhhhaa");
        return sound
    }
}

class B extends A{
    override makeSound(sound:string):string{
        console.log("ldjhfhdkjfhkdhkfhkedhk");
        return sound
    }
}
const obj = new B();
obj.makeSound('hskhdh');

