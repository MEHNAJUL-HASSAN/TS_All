// enum allow us to create a object with constant value which assign a number to a string.it is use for comparison.
var Language;
(function (Language) {
    Language[Language["English"] = 0] = "English";
    Language[Language["Hindi"] = 1] = "Hindi";
    Language[Language["Kannada"] = 2] = "Kannada";
})(Language || (Language = {}));
var ans = Language.Kannada;
function GetData() {
    switch (ans) {
        case Language.English:
            console.log("Language he or she speaks is English");
            break;
        case Language.Hindi:
            console.log("Language he or she speaks is English");
            break;
        case Language.Kannada:
            console.log("Language he or she speaks is Kannada");
            break;
        default:
            console.log("Invalid choice");
    }
}
GetData();
