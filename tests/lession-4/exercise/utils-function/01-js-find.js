var scores = [85, 90, 78];
var ages = [18, 21, 16, 25];
var words = ["apple", "banana", "cherry", "date"];
var numbers = [1, 2, 3, 4];
var expenses = [50, 100, 150];

//3.1 Tìm giá trị đầu tiên trong scores > 80.

let find1 = scores.find(num => num > 80);
console.log(find1);

//3.2 Tìm giá trị đầu tiên trong ages > 20.

let find2 = ages.find(num => num > 20);
console.log(find2);

//3.3 Tìm từ đầu tiên trong words có độ dài > 5.

let find3 = words.find(num => num.length > 5);
console.log(find3);