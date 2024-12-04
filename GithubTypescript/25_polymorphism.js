//polymorphism allow us to create a method in class with diiferent implementation.
//in simple word we can say same method with different implementation in class.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    ;
    Circle.prototype.CreateCircle = function () {
        return Math.floor(Math.PI * Math.pow(this.radius, 2));
    };
    return Circle;
}());
var Reactangle = /** @class */ (function () {
    function Reactangle(height, width) {
        this.height = height;
        this.width = width;
    }
    ;
    Reactangle.prototype.CreateCircle = function () {
        return this.height * this.width;
    };
    return Reactangle;
}());
var obj1 = [new Circle(5), new Reactangle(5, 5)];
obj1.forEach(function (fun) {
    console.log(fun.CreateCircle());
});
// inheritance polymorphism
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.makeSound = function () {
        return "Animal sound";
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        return "meow meow";
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        return "bhaw bhaw eeerrrrgggrrrr";
    };
    return Dog;
}(Cat));
var obj = [new Cat(), new Dog()];
obj.forEach(function (element) {
    console.log(element.makeSound());
});
