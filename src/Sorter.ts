import { NumbersCollection } from "./NumbersCollection";

interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
    // constructor(public collection: Sortable) {}
    abstract length: number
    abstract compare(lefIndex: number, rightIndex: number): boolean
    abstract swap(lefIndex: number, rightIndex: number): void

    sort(): void {
        const { length } = this;

        for (let i = 0; i < length; i++) {
            let isSwap = false;
            for (let j = 0; j < length - i - 1; j++) {
                if(this.compare(j, j + 1)){
                    this.swap(j, j + 1)
                    isSwap = true
                }
            }
            if (isSwap === false) break;
        }
    }
}
