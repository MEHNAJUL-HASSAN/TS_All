var operator;
(function (operator) {
    operator[operator["Addition"] = 0] = "Addition";
    operator[operator["Subtraction"] = 1] = "Subtraction";
    operator[operator["Multiplication"] = 2] = "Multiplication";
    operator[operator["Division"] = 3] = "Division";
})(operator || (operator = {}));
var result = operator.Addition;
var num1 = 10;
var num2 = 5;
function Calculator() {
    switch (result) {
        case operator.Addition: {
            console.log("Sum of a number : ".concat(num1 + num2));
            break;
        }
        case operator.Subtraction: {
            console.log("result after Subtraction : ".concat(num1 - num2));
            break;
        }
        case operator.Multiplication: {
            console.log("multiplication of a number : ".concat(num1 * num2));
            break;
        }
        case operator.Division: {
            console.log("Division of a number : ".concat(num1 / num2));
            break;
        }
        default: {
            console.log("Invalid Choice");
        }
    }
}
Calculator();
