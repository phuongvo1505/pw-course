var scores = [85, 90, 78];
var ages = [18, 21, 16, 25];
var words = ["apple", "banana", "cherry", "date"];
var numbers = [1, 2, 3, 4];
var expenses = [50, 100, 150];

//6.1 Tính tổng các giá trị trong scores.
let sum = scores.reduce((numbers, total) => total + numbers, 0);
console.log(sum);
//6.2 Tính tích các giá trị trong numbers.
let totals = numbers.reduce((numbers, total) => total * numbers, 1);
console.log(totals);

//6.3 Tính tổng các giá trị trong expenses.
let sum1 = expenses.reduce((numbers, total) => total + numbers, 0);
console.log(sum1);