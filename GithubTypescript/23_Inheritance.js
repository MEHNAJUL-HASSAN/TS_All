// inheritance is one of four pillar of object oriented programming language.
// inheritance allow us to access the properties and method of parent class.
// inheritance are divided into multiple types:-
// single level, multi level, hierarchical .. multiple and hybrid is not working..
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
var Sport = /** @class */ (function () {
    function Sport(Name, sportname, role, age) {
        this.PlayerName = Name;
        this.SportName = sportname;
        this.Role = role;
        this.Age = age;
    }
    Sport.prototype.showPlayerDetails = function () {
        console.log("Player Name : ".concat(this.PlayerName));
        console.log("Sport Name  : ".concat(this.SportName));
        console.log("Role        : ".concat(this.Role));
        console.log("Age         : ".concat(this.Age));
    };
    return Sport;
}());
var Cristano = /** @class */ (function (_super) {
    __extends(Cristano, _super);
    function Cristano(PlayerName, SportName, Role, Age, goals, val) {
        var _this = _super.call(this, PlayerName, SportName, Role, Age) || this;
        _this.Total_Goals = goals;
        _this.Value = val;
        return _this;
    }
    Cristano.prototype.showPlayerCar = function () {
        console.log("Player Name : ".concat(this.PlayerName));
        console.log("Sport Name  : ".concat(this.SportName));
        console.log("Role        : ".concat(this.Role));
        console.log("Age         : ".concat(this.Age));
        console.log("Total Goals : ".concat(this.Total_Goals));
        console.log("Market Value: ".concat(this.Value));
    };
    return Cristano;
}(Sport));
var CristanoJunior = /** @class */ (function (_super) {
    __extends(CristanoJunior, _super);
    function CristanoJunior(PlayerName, SportName, Role, Age, goals, val, name, juniorage) {
        var _this = _super.call(this, PlayerName, SportName, Role, Age, goals, val) || this;
        _this.Name = name;
        _this.Age = juniorage;
        return _this;
    }
    CristanoJunior.prototype.showJuniorDetails = function () {
        console.log("Father Name : ".concat(this.PlayerName));
        console.log("Father Age  : ".concat(this.Age));
        console.log("Father Goals: ".concat(this.Total_Goals));
        console.log("Name        : ".concat(this.Name));
        console.log("Age         : ".concat(this.Age));
    };
    return CristanoJunior;
}(Cristano));
var playerObj = new CristanoJunior("Cristiano Ronaldo", "FootBall", "Center Forward / left Wing", 40, 916, 126534311354334342, "Cristiano Junior", 15);
playerObj.showJuniorDetails();
