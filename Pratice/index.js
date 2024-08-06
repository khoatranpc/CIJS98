console.log('------ Câu 1 ------');
// ít nhất 3 cách sử dụng arrow function

// cách 1
// const squareNumber = (number) => {
//     // code...
//     return number * number;
// }

// cách 2
// const squareNumber = (number) => number * number;

// cách 3
const squareNumber = number => number * number;
console.log(squareNumber(4));

console.log('------ Câu 2 ------');
const str = 'Hello world, quần jean màu xanh!';
const findStr = 'jean màu xanh!';
/**
 * Khi tìm kiếm 1 chuỗi con, thì không phân biệt hoa, thường, dấu cách
 * How?
 *      - viết hoa hết để thực hiện tìm kiểm hoặc viết thường hết
 *      - bắt buộc phải loại bỏ hết dấu cách thừa trong việc tìm kiếm
 */
const checkIncludeStr = (strParent, strChild) => {
    return strParent.toLowerCase().trim().includes(strChild.toLowerCase().trim());
}
const result = checkIncludeStr(str, findStr);
console.log(result);

console.log('------ Câu 3 ------');

const arr3 = ["one", "two", "three"]; // ->  number -> ["number: one", "number: two", "number: three"];;

/**
 * Logic
 * -> mỗi một phần tử sẽ được thêm một chuỗi ở đằng trước:    number: 
 * -> số lượng phần tử không thay đổi -> chỉ có thay đổi về giá trị
 * Tạo 1 mảng mới
 * Duyệt mảng
 *  -> tạo 1 giá trị theo logic (thêm tiền tố) -> đưa giá trị này vào mảng vừa tạo
 *  -> kết thúc vòng lặp (duyệt mảng) -> ra được kết quả
 */

const addPrefix = (array, prefix) => {
    const newArr3 = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const newValue = `${prefix}: ${element}`;
        newArr3.push(newValue);
    }
    return newArr3;
}
const newArr3 = [];
const prefix = 'number';
for (let i = 0; i < arr3.length; i++) {
    const element = arr3[i];
    const newValue = `${prefix}: ${element}`;
    newArr3.push(newValue);
}
console.log(newArr3);

console.log('------ Câu 4 ------');

const arrNumber4 = [1, 2, 3, 4, 5, 6];

const doubleArray = (array) => {
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
        const e = array[i];
        resultArray.push(e * 2);
    }
    return resultArray;
}
console.log(doubleArray(arrNumber4));

console.log('------ Câu 5 ------');

const filterOddEArray = (arrayNumber) => {
    const resultArray = [];
    for (let i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] % 2 !== 0) {
            resultArray.push(arrayNumber[i]);
        }
    }
    return resultArray;
}
console.log(filterOddEArray(arrNumber4));
console.log('------ Câu 6 ------');
// Cách 1
const employees6 = [
    { id: 1, name: "John", workingDays: 22 },
    { id: 2, name: "Jane", workingDays: 20 },
    { id: 3, name: "Mark", workingDays: 25 },
];
let SUM6 = 0;
// employees6.forEach((item) => {
//     SUM6 += item.workingDays;
// });
// console.log(SUM6);

// Cách 2
// reduce: có 1 kết quả nào đó, và sẽ cầm kết quả này sử dụng cho những lần duyệt tiếp theo -> kết quả trả về sẽ là 1 kết quả
const result6 = employees6.reduce((prevValue, item) => {
    return {
        id: prevValue.id + item.id,
        workingDays: prevValue.workingDays + item.workingDays
    }
}, {
    id: 0,
    workingDays: 0
});
console.log(result6);

console.log('------ Câu 7 ------');
const employees7 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
];

let max = employees7[0];

for (let i = 1; i < employees7.length; i++) {
    if (max.salary < employees7[i].salary) {
        max = employees7[i];
    }
}
console.log(max);
console.log('------ Câu 8 ------');

const employees8 = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2 },
    { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
    { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
];

let max8 = employees8[0];

for (let i = 1; i < employees8.length; i++) {
    if ((max8.workingDays - max8.lateDays) < (employees8[i].workingDays - employees8[i].lateDays)) {
        max8 = employees8[i];
    }
}
console.log(max8);

console.log('------ Câu 9 ------');
const employees9 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
    { id: 4, name: "John", salary: 2200 },
];
// output
// {
//     "John": [
//         { id: 1, name: "John", salary: 2000 },
//         { id: 4, name: "John", salary: 2200 },
//     ],
//     "Jane": [{ id: 2, name: "Jane", salary: 2500 }],
//     "Mark": [{ id: 3, name: "Mark", salary: 3000 }],
// }



// output
// {
//     "John": [{ id: 1, name: "John", salary: 2000 }],
// }

const result9 = {};
employees9.forEach((item) => {
    if (!result9[item.name]) {
        result9[item.name] = [item];
    } else {
        result9[item.name].push(item);
    }
});
console.log(result9);

console.log('------ Câu 11 ------');
const employees11 = [
    { id: 1, name: "John", workingDays: 20 },
    { id: 2, name: "Jane", workingDays: 22 },
    { id: 3, name: "Mark", workingDays: 20 },
    { id: 4, name: "Sam", workingDays: 24 },
    { id: 5, name: "Lucy", workingDays: 22 },
];
// - Output: {
//     "20": 2,
//     "22": 2,
//     "24": 1
// }
const result11 = {};

employees11.forEach((item) => {
    if (!result11[item.workingDays]) result11[item.workingDays] = 1;
    else result11[item.workingDays]++;
});
console.log(result11);


console.log('------ Câu 12 ------');
const employees12 = [
    { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
];

const result12 = employees12.map((item) => {
    const mapData = {
        ...item,
        workInfo: {
            workingDays: item.workingDays,
            lateDays: item.lateDays
        }
    };
    delete mapData.salary;
    delete mapData.workingDays;
    delete mapData.lateDays;
    
    return mapData;
});
console.log(result12);