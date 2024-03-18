interface Comparable<T> {
    compareTo(b: T): number;
}
class MyObject implements Comparable<MyObject> {
    age: number;
    compareTo(b: MyObject): number {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    }
}

let obj1 = new MyObject(),
    obj2 = new MyObject();
obj1.age = 1;
obj2.age = 2;

console.log(obj1.compareTo(obj2))