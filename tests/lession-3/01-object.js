//đối tượng car
let car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2021,
}
console.log(car.year);

//đối tượng persion
let person = {
    "name": "Phuong",
    "address": {
        "street": "Nghia Phat",
        "city": " HCM",
        "country": "Viet Nam",
    }
}

console.log(person.address.street);

//đối tượng student
let student = {
    "name": "Phuong",
    "grade": {
        "math": 10,
        "english": 9,
    }
}

student["dia_chi"] = "q1";
delete student.grade;
console.log(student);
console.log(student["dia chi"]);

//đối tượng setting
let setting = {
    "volumn": 5,
    "brightness": 15,
}

setting.volumn = 20;
console.log(setting);

//đối tượng bike
let bike = {
    "price": 2500000,
}

bike["color"] = "red"
console.log(bike);

//đối tượng employee
let employee = {
    "name": "Phương",
    "age": 18,
}

delete employee.age;
console.log(employee);

//đối tượng School
let school = {
    "class_A": ["An", "Bình", "Châu"],
    "class_B": ["Đào", "Hương", "Giang"],
}

console.log(school);
console.log(school["class_A"][0]);
console.log(school["class_B"][2]);
for (let i = 0; i < school["class_A"].length; i++) {
    console.log(school["class_A"][i]);
    console.log(school["class_B"][i]);
}