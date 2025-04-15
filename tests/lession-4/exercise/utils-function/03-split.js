let names = "Nguyễn Văn A";
let emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
let date = "2024-05-19";
//1. Chia name thành mảng các từ (dùng khoảng trắng).

let name = names.split(" ");
console.log(name);

//2. Chia emails thành mảng các email (dùng dấu phẩy).
let email = emails.split(",");
console.log(email);

//3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang).
let dates = date.split("-");
console.log(dates);