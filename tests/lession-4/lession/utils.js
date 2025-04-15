//trim 
// let str = '     Minh Phuong'
// const strTrim = str.trim();
// console.log(strTrim);

// const upPer=str.toUpperCase();
// console.log(upPer);

// const lowPer=str.toLowerCase();
// console.log(lowPer);
//includes=> kiem tra chuoi co chua chuoi con hay khong==> tra ve true hoac false

let str = 'Vo Thi Minh Phuong';
// const strAfter=str.includes('Vo');
// console.log(strAfter);

// const chuoi=str.replace('Vo','Do');
// console.log(chuoi);

let word = str.split(' ');
//console.log(word);
// //substring
// const after = str.substring(0, 4);
// console.log(after);
// console.log(str.substring(1));
// console.log(str.indexOf('T'));

//mang
//map tao ra mang moi tu mang goc
let numbers = [1, 2, 3, 4];
let new_Number = numbers.map(num => num * 2);
console.log(new_Number);

// //filter
let new_Number1 = numbers.filter(num => num % 2 == 0);
console.log(new_Number1);

// //find
let new_Number2 = numbers.find(num => num % 2 == 0);
console.log(new_Number2);

// //reduce: áp dụng hàm lên các phần tử của mảng từ trái qua phải để trả về 1 giá trị duy nhất,
//đang từ mảng to, giảm giá trị xuống dùng để tính tổng các giá trị trong mảng, giá trị lớn nhất/nhỏ nhất
//total: hứng giá trị, num: phần tử trong mảng, 0: giá trị khởi tạo trong mảng
let new_Number3 = numbers.reduce((total, num) => total + num, 0);
console.log(new_Number3);
// //some=> chi can 1 trong cac phan tu cua mang thoa dieu kien thi tra ve true
let new_Number4 = numbers.some(num => num % 2 == 0);
console.log(new_Number4);

// //every => tat ca cac phan tu cua mang thoa dieu kien thi tra ve true
let new_Number5 = numbers.every(num => num % 2 == 0);
console.log(new_Number5);

//push, thay doi mang goc
let new_Number6 = numbers.push(5, 6, 7);
numbers.push(5, 6, 7);
for (let i in numbers) {
    console.log(numbers[i]);
}

//shift: loai bo phan tu dau mang, thay doi mang goc
//let new_Number7 = 
const loaiBo = numbers.shift();
console.log(loaiBo);
//sort: sap xep cac phan tu trong mang tang dan, thay doi mang goc
// numbers.sort();
// for (let i in numbers) {
//     console.log(numbers[i]);
// }
//tang dan
compareFn = (a, b) => a - b;
//giam dan
compareFn = (a, b) => b - a;
//if a-b <0 => a đứng trước b
//if a-b>0 => b đứng trước a

let number = [1, 10, 2, 21, 100];
number.sort((a, b) => a - b);
console.log(number);