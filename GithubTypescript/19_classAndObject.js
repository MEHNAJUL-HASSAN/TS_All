// class is like template or blueprint for creating object.
// object is an actual representation of a class.. new keyword is used to create an object.
// new keyword means creating an empty object.
var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.Fname = fname;
        this.Lname = lname;
    }
    Person.prototype.display = function () {
        console.log("First Name : ".concat(this.Fname, " \n Last Name : ").concat(this.Lname));
    };
    return Person;
}());
var obj = new Person("Mehnajul", "Hassan");
obj.display();
