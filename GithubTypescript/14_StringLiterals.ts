// string literal allow you to assign string as a data type..

let result : 'Pass' | 'Fail' = 'Pass';
if(result ==='Pass'){
    console.log(`Result : `, result);
}
else if(result === 'Fail'){
    console.log(`Result : ${result}`);
}
else{
    console.log(`Result not announced Yet`);
}