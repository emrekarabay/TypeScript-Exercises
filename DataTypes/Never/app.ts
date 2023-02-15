function throwError(errorMessage: string): never {
    throw new Error(errorMessage);
}

throwError("Hatali");

let value: void = undefined;
// let value2: never = undefined; hata alıyoruz

export {};