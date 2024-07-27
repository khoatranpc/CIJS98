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