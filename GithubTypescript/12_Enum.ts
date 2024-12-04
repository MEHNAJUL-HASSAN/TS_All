// enum allow us to create a object with constant value which assign a number to a string.it is use for comparison.

enum Language {
    English,
    Hindi,
    Kannada,
}

let ans:Language = Language.Kannada ;
function GetData(){
    switch(ans){
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




