function getRandomNumber(items: number[]): number {
    let randomIndex = Math.floor(Math.random()*items.length);
    return items[randomIndex];
}


let numbers = [1,54,87,3,7];

// console.log(getRandomNumber(numbers));

function getRandomString(items: string[]): string {
    let randomIndex = Math.floor(Math.random()*items.length);
    return items[randomIndex];
}


let adlarim = ["Süleyman","Emre","Karabay"];

// console.log(getRandomString(adlarim));

// önerilmez any kullanımı
// function getRandomElement(items: any[]): any {
//     let randomIndex = Math.floor(Math.random()*items.length);
//     return items[randomIndex];
// }
// console.log(getRandomElement(numbers));
// console.log(getRandomElement(adlarim));

function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random()*items.length);
    return items[randomIndex];
}
console.log(getRandomElement<number>(numbers));
console.log(getRandomElement<string>(adlarim));


