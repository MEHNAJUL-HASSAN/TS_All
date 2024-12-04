// Encapsulation allow us bind or wrap the data and method inside a single unit.
// we can achieve Encapsulation by using getter and setter.
var Cricket = /** @class */ (function () {
    function Cricket(name) {
        this.Name = name;
    }
    Object.defineProperty(Cricket.prototype, "PersonDetails", {
        get: function () {
            return this.Name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cricket.prototype, "newDetails", {
        set: function (newName) {
            this.Name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Cricket;
}());
var crickerObj = new Cricket("Mehnajul");
console.log(crickerObj.PersonDetails);
crickerObj.newDetails = "Hassan";
console.log(crickerObj.PersonDetails);
