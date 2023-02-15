function toplam(a: string,...numbers: number[]): any {
    let total = 0;

    numbers.map((num) => {
        total += num;
    })
    return a + " " + total;
}

let result = toplam("Emre",10,20,30);
console.log(result);


