//1. Tính tống từ 1 đến 10
let tong = 0;
for (i = 1; i <= 10; i++) {
    tong += i;
    console.log(i);
}
console.log(i);
console.log(tong);

// //2. In bảng cửu chương từ 2 đến 9
let result = 0;
for (i = 2; i < 10; i++) {
    for (j = 0; j <= 10; j++) {
        result = i * j;
        console.log(i, "x", j, "=", result);
    }
    console.log("=============");
}

//3. Tạo một mảng chứa các số lẻ từ 1 đến 99
let arrLe = [];
for (i = 0; i < 100; i++) {
    if (i % 2 == 1) {
        arrLe.push(i);
    }
}
for (j = 0; j < arrLe.length; j++) {
    console.log(arrLe[j]);
}

//4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
//user-1@example.com, user2@example.com, ..., user10@example.com).
for (i = 1; i <= 10; i++) {
    console.log(`User${i}@example.com`);
}
//5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho
// và in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau: {“month”: 2, “total”: 100}

let tongDoanhThu = 0;
let doanhThu = [{ "month": 1, "total": 100 }, { "month": 2, "total": 101 }, { "month": 3, "total": 102 },
{ "month": 4, "total": 103 }, { "month": 5, "total": 104 }, { "month": 6, "total": 105 }, {
    "month": 7, "total": 106
}, { "month": 8, "total": 107 }, { "month": 9, "total": 108 }, { "month": 10, "total": 109 },
{ "month": 11, "total": 110 }, { "month": 12, "total": 112 },];

//console.log(doanhThu.length);
for (let i = 0; i < doanhThu.length; i++) {
    tongDoanhThu += doanhThu[i].total;
    console.log(doanhThu[i].total);
}
console.log(tongDoanhThu);