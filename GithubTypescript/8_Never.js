// never means it will not return anything especially it is used to avoid infinite loop type of task.
function NeverFunction() {
    while (true) {
        console.log("Repeat");
    }
}
NeverFunction();
