var scores = [85, 90, 78];
var ages = [18, 21, 16, 25];
var words = ["apple", "banana", "cherry", "date"];
var numbers = [1, 2, 3, 4];
var expenses = [50, 100, 150];

//1.1 Kiểm tra tất cả giá trị trong scores có > 70 không.

let check = scores.every(num => num > 70);
console.log(check);

//1.2 Kiểm tra tất cả giá trị trong ages có > 15 không.

let check1 = ages.every(num => num > 15);
console.log(check1);

//1.3 Kiểm tra tất cả từ trong words có độ dài > 3 không.
    let check2 = words.every(value => value.length > 5);
    console.log(check2);


