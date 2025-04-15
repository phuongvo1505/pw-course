let fullName = "Nguyễn Văn A";
let date = "2024-05-19";
let email = "example@gmail.com";

//1. Trích xuất họ từ fullName (từ đầu đến ký tự thứ 6).
const fullName1 = fullName.substring(0, 6);
 console.log(fullName1);
//2. Trích xuất năm từ date (4 ký tự đầu).
const sub = date.substring(0, 4);
 console.log(sub);
//3. Trích xuất tên miền từ email (từ sau "@").

const sub1 = email.substring(7);
 console.log(sub1);