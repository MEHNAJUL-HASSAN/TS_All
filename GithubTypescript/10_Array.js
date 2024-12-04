// array allow us to store multiple values inside a single variable.
var arr = ['Mehnajul', 'hassan'];
console.log(arr);
arr.map(function (value, index) {
    console.log("".concat(index, "  : ").concat(value));
});
