var numbers = [1, 2, 3];
var names = ["Alice", "Bob", "Charlie"];
//1. Push: Thêm 4 vào cuối numbers; thêm "David" vào cuối names.

let newArr = numbers.push(4);
//numbers.push(5, 6, 7);
for (let i in numbers) {
    console.log(numbers[i]);
}

let newArr4 = names.push("David");
//numbers.push(5, 6, 7);
for (let i in names) {
    console.log(names[i]);
}

//2. Pop: Loại bỏ phần tử cuối của numbers = [1, 2, 3, 4].
let newArr1 = numbers.pop();
for (let i in numbers) {
    console.log(numbers[i]);
}
//3. Unshift: Thêm 0 vào đầu numbers; thêm "David" vào đầu names.
let newArr2 = numbers.unshift(0);
for (let i in numbers) {
    console.log(numbers[i]);
}

let newArr3 = names.unshift("David");
for (let i in names) {
    console.log(names[i]);
}

//4. Shift: Loại bỏ phần tử đầu của numbers = [1, 2, 3, 4].
let newArr5 = numbers.shift();
for (let i in numbers) {
    console.log(numbers[i]);
}
