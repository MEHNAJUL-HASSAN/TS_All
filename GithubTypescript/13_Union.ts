// Union allow us to assign multiple type of data into variable..

let str:string | number = 123;    
function Pallindrome(){
    if(typeof str ==='string'){
        let newstr = str.split('').reverse().join('');
        console.log('Reverse of a String : ',newstr)
    }
    else if(typeof str === 'number'){
        let rev=0;
        while(str>0){
            let rem = str%10;
            rev = rev * 10 + rem;
            str = Math.floor(str/10);
        }
        console.log('Reverse of a number : ', rev);
    }
}
Pallindrome();