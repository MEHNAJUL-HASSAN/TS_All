// clousre is a method or way that allow us to access the properties and method in lexical enviroment..
function Outer() {
    var b = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        b[_i] = arguments[_i];
    }
    var c = 'hassan';
    function Inner() {
        return b + "," + c;
    }
    return Inner();
}
console.log(Outer(1, 2, 3, 4, 5));
