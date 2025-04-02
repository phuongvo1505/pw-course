//Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 6));

//Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau.
//Cach 1:
function findMin(a, b, c) {
    let min = a;
    if (a < b) {
        min = a;
    } else min = b;
    if (min > c) {
        min = c;
    }
    console.log(min);
}

findMin(1, 2, 3);
findMin(9, 2, 3);
findMin(9, 2, 31);

//Cach 2:
function findMin1(a, b, c) {
    let min;
    let arr = [];
    arr.push(a);
    arr.push(b);
    arr.push(c);
    min = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    console.log(min);
}

findMin1(1, 2, 3);
findMin1(9, 2, 3);
findMin1(9, 2, 31);

//bai 3:
function getTopStudents(arrDS, threshold) {
    for (i = 0; i < arrDS.length; i++) {
        if (arrDS[i].diem > threshold) {
            console.log(`Hoc sinh co ten: ${arrDS[i].ten} co diem > ${threshold}`);
        }
    }
}
let dS = [{ ten: "Phuong", diem: 10 }, { ten: "Canh", diem: 9 }, { ten: "Duyen", diem: 8 }, { ten: "Thuy", diem: 7 }]
getTopStudents(dS, 5);

//bai 4: Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi đơn:
// total = principal + principal * rate * years / 100. Gọi hàm với ví dụ thực tế và in kết quả.
function calculateInterest(principal, rate, years) {
    return principal + principal * rate * years / 100;
}

console.log(calculateInterest(1, 2, 3))