// Generators are a special kind of function that can stop, and then continue from where it stopped, using this kind of function you can make a function that implements 
// an iterative algorithm only by writing just one function which doesn't have to run its course at a go. They are defined by a function with an * in it and make use of
// the keyword yield in order to generate a set of numbers.
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function generateFunction() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
var generator = generateFunction();
var result = generator.next();
while (!result.done) {
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
