// question _______________ 127
let add = (a, b) => a + b;
// Question _________________ 128
let multiply = (...numbers) => {
    let product = 1;
    for (let num of numbers) {
        product *= num;
    }
    return product;
};
// Example usage
console.log(multiply(2, 3, 4)); // Output: 24
console.log(multiply(5, 10, 2)); // Output: 100
// Question ________________ 129
let obj = {
    name: "John",
    greet: function () {
        console.log(`Hello, ${this.name}!`);
    }
};
obj.greet(); // Output: Hello, John!
function globalFunction() {
    console.log(this === window); // Output: true (in browser environment)
}
globalFunction();
let obj2 = {
    name: "Jane",
    greet: function () {
        setTimeout(() => {
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    }
};
obj2.greet(); // Output: Hello, Jane! (after 1 second)
let globalArrow = () => {
    console.log(this === window); // Output: false (in browser environment)
};
globalArrow();
export {};
