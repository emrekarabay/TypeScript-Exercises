/// readonly 
var format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format("eMre", false));
