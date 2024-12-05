// Generators are a special kind of function that can stop, and then continue from where it stopped, using this kind of function you can make a function that implements 
// an iterative algorithm only by writing just one function which doesn't have to run its course at a go. They are defined by a function with an * in it and make use of
// the keyword yield in order to generate a set of numbers.



function* generateFunction(){
    yield 1;
    yield 2;
}

const generator = generateFunction();
let result = generator.next();
while(!result.done){
    console.log(result.value);
    result = generator.next();
}


// class GeneratorClass {
//     constructor() {
//         const iterator = this.generator(10);
//         iterator.next();
//     }
//     *generator(count:number): IterableIterator<number> {
//         while(true)
//             yield count++;
//     }   
// }

// function* fibonacciGenerator() {
//     const f0 = 0;
//     yield f0;
//     const f1 = 1;
//     yield f1;
//     let previousValue = f0, currentValue = f1, nextValue;
//     while(true) {
//         nextValue = previousValue + currentValue;
//         previousValue = currentValue;
//         currentValue = nextValue;
//         yield nextValue;
//     }
// }

// const it = fibonacciGenerator();
// console.log(it.next().value); // 0
// console.log(it.next().value); // 1
// console.log(it.next().value); // 1
// console.log(it.next().value); // 2
// console.log(it.next().value); // 3