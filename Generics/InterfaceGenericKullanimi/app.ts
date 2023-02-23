// interface Months<U,V>{
//     key: U,
//     value: V
// }

// let months: Months<number,string> = {
//     key:1,
//     value:"January"
// }

// console.log(months);


interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}

class List<T> implements Collection<T>{
    private items: T[] = [];

    add(o: T): void {
        this.items.push(o);
    }

    remove(o: T): void {
        let index = this.items.indexOf(o);
        if(index > -1){
            this.items.splice(index,1);
        }
    }
}

let list = new List<number>();

for (let i = 0; i < 10; i++) {
    list.add(i);
}
