import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 2, 8, 7])
const sorter = new Sorter(numbersCollection);

console.log("sorter instanceof Sorter :>> ", sorter instanceof Sorter);
sorter.sort();
console.log('Result: >> ', numbersCollection.data);
