// string literal allow you to assign string as a data type..
var result = 'Pass';
if (result === 'Pass') {
    console.log("Result : ", result);
}
else if (result === 'Fail') {
    console.log("Result : ".concat(result));
}
else {
    console.log("Result not announced Yet");
}
