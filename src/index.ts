import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 2, 8, 7])
numbersCollection.sort()

console.log('numbersCollection.data :>> ', numbersCollection.data);
// const sorter = new Sorter(numbersCollection);

// console.log("sorter instanceof Sorter :>> ", sorter instanceof Sorter);
// sorter.sort();
// console.log('Result: >> ', numbersCollection.data);

const charactersCollection = new CharactersCollection('aaXXuByC')
charactersCollection.sort()

console.log('charactersCollection.data :>> ', charactersCollection.data);
// const sorter2 = new Sorter(charactersCollection)
// sorter2.sort()
// console.log('charactersCollection.data :>> ', charactersCollection.data);

const linkedList = new LinkedList()
linkedList.add(1)
linkedList.add(2)
linkedList.add(-500)
linkedList.add(0)

linkedList.sort()
linkedList.print()
// const linkedList = new Sorter(new LinkedList())
// linkedList.compare(0, 1)


// const sorter3 = new Sorter(linkedList)
// sorter3.sort()
// linkedList.print()