class Stack {
    _items: any[];
    constructor() {
        this._items = [];
    }
    push(element) {
        this._items.push(element);
    }
    pop() {
        return this._items.pop();
    }
    peek() {
        return this._items[this._items.length - 1];
    }
    isEmpty() {
        return this._items.length === 0
    }
    clear() {
        this._items = [];
    }
    size() {
        return this._items.length;
    }
    print() {
        console.log(this._items);
    }
}


export { Stack }