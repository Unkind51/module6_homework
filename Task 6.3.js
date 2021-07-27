function func1(a) {
    return function func2 (b) {
        return a+b;
    };
}
console.log(func1(2)(3)); 