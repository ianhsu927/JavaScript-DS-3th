import { defaultEquals, IEqualsFunction } from './source/src/ts/util'
import { Node } from './source/src/ts/data-structures/models/linked-list-models'
interface _LinkedList<T> {
    push(element: any): void;
    insert(element: any, position: number): boolean;
    getElementAt(index: number): Node<any> | undefined;
    remove(element: any): Node<any>;
    indexOf(element: any): number;
    removeAt(position: number): T | undefined;
    isEmpty(): boolean;
    size(): number;
    getHead(): Node<any> | undefined;
    toString(): string;
    insert(element: T, index: number): boolean;
}

export default class LinkedList<T> implements _LinkedList<T> {
    protected count: number;
    protected head: Node<T> | undefined;
    constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals) { }
    push(element: T) {
        const node = new Node(element);
        let current;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
    size(): number {
        return this.count;
    }
    isEmpty(): boolean {
        return this.count === 0;
    }
    getElementAt(index: number): Node<T> | undefined {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    getHead(): Node<T> | undefined {
        return this.head;
    }
    indexOf(element: T): number {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(current.element, element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    removeAt(index: number): T | undefined {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current?.next;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous?.next;
                previous && (previous.next = current?.next)
            }
            this.count--;
            return current?.element;
        }
    }
    insert(element: T, index: number): boolean {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                let previous = this.getElementAt(index - 1);
                node.next = previous?.next;
                previous && (previous.next = node);
            }
            this.count++;
            return true;
        }
        return false;
    }
    toString() {
        if (this.head == null) {// {1}     
            return '';
        }
        let objString = `${this.head.element}`; // {2}   
        let current = this.head.next; // {3}   
        for (let i = 1; i < this.size() && current != null; i++) {// {4}     
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString; // {5} }
    }
}

class DoublyNode<T> extends Node<T> {
    protected prev: DoublyNode<T>;
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev;
    }
}

class DoublyLinkedList<T> extends LinkedList<T> {
    constructor()
}