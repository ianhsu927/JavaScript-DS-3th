interface _Queue {
    enqueue(element: any): void;
    dequeue(): any;
    peek(): any;
    isEmpty(): boolean;
    size(): number;
}

class Queue implements _Queue {
    count: number;
    lowestCount: number;
    items: object;
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    dequeue() {
        delete this.items[this.lowestCount];
        this.lowestCount++;
    }
    isEmpty(): boolean {
        return this.count - this.lowestCount === 0;
    }
    _isEmpty(): boolean {
        return this.size() === 0;
    }
    peek() {
        return this.items[this.lowestCount];
    }
    size(): number {
        return this.count - this.lowestCount;
    }
    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    toString() {
        if (this.isEmpty()) {
            return "";
        }
        let objString = `${this.items[this.lowestCount]}`;  // 队列的头不一定是 0
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}

const queue = new Queue();

console.log(queue.isEmpty())

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
queue.enqueue('123')
console.log(queue.toString())