// Union allow us to assign multiple type of data into variable..
var str = 123;
function Pallindrome() {
    if (typeof str === 'string') {
        var newstr = str.split('').reverse().join('');
        console.log('Reverse of a String : ', newstr);
    }
    else if (typeof str === 'number') {
        var rev = 0;
        while (str > 0) {
            var rem = str % 10;
            rev = rev * 10 + rem;
            str = Math.floor(str / 10);
        }
        console.log('Reverse of a number : ', rev);
    }
}
Pallindrome();
