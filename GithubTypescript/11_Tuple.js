// tuple allow us to store multiple value of different data type inside a single variable.
var newArr = ['Mehnajul', 'hassan', 1];
console.log(newArr);
newArr.map(function (value, index) {
    console.log("".concat(index, " : ").concat(value));
});
