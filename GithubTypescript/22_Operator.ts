


    enum operator{
        Addition,
        Subtraction,
        Multiplication,
        Division
    }

    let result:operator = operator.Addition;
    let num1:number = 10;
    let num2:number = 5;
    function Calculator(){
        switch(result){
            case operator.Addition:{
                console.log(`Sum of a number : ${num1+num2}`);
                break;
            }
            case operator.Subtraction:{
                console.log(`result after Subtraction : ${num1 - num2}`);
                break;
            }
            case operator.Multiplication:{
                console.log(`multiplication of a number : ${num1 * num2}`);
                break;
            }
            case operator.Division:{
                console.log(`Division of a number : ${num1/num2}`);
                break;
            }
            default : {   
                console.log("Invalid Choice");
            }
        }   
    }
    Calculator();