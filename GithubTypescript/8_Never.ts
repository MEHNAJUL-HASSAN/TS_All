// never means it will not return anything especially it is used to avoid infinite loop type of task.

function NeverFunction():never{
    while(true){
        return `true`
    }
}
NeverFunction();