//bài 1
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K13";
let arrCrew = ["Phúc Nguyên", "Minh Phương", "Đăng Khoa", "Thu Hiền", "Quỳnh Như", "Thơm", "Thu Trang", "Nhật Khánh"];

function launchShip(arrCrew) {
    let listMember = "";
    for (let i in arrCrew) {
        listMember += arrCrew[i] + ", ";
    }
    console.log(`Chuẩn bị khởi động! Phi hành đoàn gồm: ${listMember} tên thành viên phi hành đoàn sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`);
}
launchShip(arrCrew);

//bài 2
function calculateDistance(speed, time) {
    return speed * time;
}

console.log(calculateDistance(1000, 24));

//bài 3

function convertTimeToHex(time) {
    return time.toString(16);
}
console.log(convertTimeToHex(120));

//bài 4
function decryptCode(code) {
    let result = "";
    for (let i = 0; i < code.length; i++) {
        if (code[i] === code[i].toUpperCase()) {
            result += code[i].toLowerCase();
        }
        else {
            result += code[i].toUpperCase();
        }
    }
    return result;

}
console.log(decryptCode('K13 Challenge'));

//bài 5:
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");

}
returnToEarth();