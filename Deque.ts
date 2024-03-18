interface _Deque {
    addFront(element: any): void;
    addBack(element: any): void;
    removeFront(): any;
    removeBack(): any;
    peekFront(): any;
    peekBack(): any;
    isEmpty(): boolean;
    size(): number;
}


class Deque implements _Deque {
    index: number;
    lowestIndex: number;
    items: object;
    constructor() {
        this.index = 0;
        this.lowestIndex = 0;
        this.items = {};
    }
    size(): number {
        return this.index - this.lowestIndex;
    }
    isEmpty(): boolean {
        return this.size() === 0;
    }
    addFront(element: any): void {
        this.items[--this.lowestIndex] = element;
    }
    addBack(element: any): void {
        this.items[++this.index] = element;
    }
    peekBack() {
        return this.items[this.index];
    }
    peekFront() {
        return this.items[this.lowestIndex];
    }
    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        let back = this.items[this.index];
        delete this.items[this.index];
        this.index--;
        return back;
    }
    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        let front = this.items[this.lowestIndex + 1];
        delete this.items[this.lowestIndex];
        this.lowestIndex++;
        return front;
    }
    fromArray(array: any[]) {
        array.forEach((item) => {
            this.addBack(item);
        })
    }
}


// 回文检查
function palindromeChecker(aString: string) {
    let deque = new Deque();
    const lowerString = aString.toLocaleLowerCase().split(' ').join('');
    deque.fromArray(Array.from(lowerString));
    let isEqual = true;
    let first, last;
    while (deque.size() > 1 && isEqual) {
        first = deque.removeFront();
        last = deque.removeBack();
        if (first !== last) {
            isEqual = false;
        }
    }
    return isEqual;
}

console.log(palindromeChecker('1211221'))