let phoneNumber = "0123 456 789";
let report = "Có một lỗi trong hệ thống.";
let numbersStr = "1,234,567";

//1. Thay khoảng trắng bằng "." trong phoneNumber.
const chuoi=phoneNumber.replace(' ','.');
console.log(chuoi);

const chuoi1=chuoi.replace(' ','.');
console.log(chuoi1);

//2. Thay "lỗi" bằng "bug" trong report.
const chuoi2=report.replace('lỗi','bug');
console.log(chuoi2);

//3. Thay "," bằng "." trong numbersStr.

const chuoi3=numbersStr.replace(',','.');
console.log(chuoi3);
const chuoi4=chuoi3.replace(',','.');
console.log(chuoi4);
