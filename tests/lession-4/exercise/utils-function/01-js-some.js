var scores = [85, 90, 78];
var ages = [18, 21, 16, 25];
var words = ["apple", "banana", "cherry", "date"];
var numbers = [1, 2, 3, 4];
var expenses = [50, 100, 150];

//5.1 Kiểm tra scores có giá trị nào > 80 không.
let Scores = scores.some(num => num > 80);
console.log(Scores);
//5.2 Kiểm tra ages có giá trị nào < 18 không.
let Ages = ages.some(num => num < 18);
console.log(Scores);

//5.3 Kiểm tra words có từ nào dài > 5 không.

let Words = words.some(num => num.length > 5);
console.log(Scores);