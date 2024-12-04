"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonName = void 0;
var PersonName = /** @class */ (function () {
    function PersonName(name) {
        this.Name = name;
    }
    PersonName.prototype.DisplayName = function () {
        console.log("Name : ".concat(this.Name));
    };
    return PersonName;
}());
exports.PersonName = PersonName;
