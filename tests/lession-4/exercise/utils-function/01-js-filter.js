var scores = [85, 90, 78];
var ages = [18, 21, 16, 25];
var words = ["apple", "banana", "cherry", "date"];
var numbers = [1, 2, 3, 4];
var expenses = [50, 100, 150];

//2.1 Lọc các giá trị trong scores > 80.
let filter1 = scores.filter(num => num > 80);
console.log(filter1);
//2.2 Lọc các giá trị trong ages ≥ 18.
let filter2 = ages.filter(num => num >= 18);
console.log(filter2);

//2.3 Lọc các từ trong words có độ dài > 5.
let filter3 = words.filter(num => num.length > 5);
console.log(filter3);
