// number allow us to create a variable which will accept only numeric value

let num:number = 785;
let rev:number=0
while(num>0){
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num/10);
}
console.log(rev);