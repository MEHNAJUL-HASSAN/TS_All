// Generic is a tool which is used to create reusable component. generics allow us to work with variety of data type instead of any single data type.
function GenericsFunction(args, Name) {
    console.log("FIrst Name:".concat(args, " LastName: ").concat(Name));
}
console.log(GenericsFunction("Mehnajul", "Hassan"));
var gnericType1 = {
    FName: "Peter",
    LName: "Parker"
};
function GenericNewFunction(gnericType1) {
    console.log("First Name : ".concat(gnericType1.FName, " \n Last Name : ").concat(gnericType1.LName));
}
GenericNewFunction(gnericType1);
