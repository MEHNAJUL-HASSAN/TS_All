// interface is used to create a structure of an object and assign a data type to a properties.
var Person = {
    FName: "Mehnajul",
    LName: "Hassan",
    display: function () {
        console.log("First Name : ".concat(Person.FName, "\n Last Name : ").concat(Person.LName));
    }
};
Person.display();
