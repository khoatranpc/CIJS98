import aPlusB, { PI as Name } from './math.js';
/**
 * Normal function
 * function functionName() {
 *  // code ...
 * }
 *
 * f(x) = Ax + B -> ra kết quả;
 *
 * f(2) = A.2 + B;
 * 2 cách sử dụng hàm:
*   Thực thi
*   Thực thi và trả về kết quả



--- Arrow function

const functionName = () => {

    }

    -- số lượng tham số
const functionName = a => {

    }
    {}
    -- dựa vào logic (kết quả trả về) -> dựa vào kết quả trả về
const functionName = a => {
    return value....;
    }
const functionName = (a, b) => ({}) ;

 */
// console.log(sum(1, 2));
// function sum(a, b) {
//     return a + b;
// }

// const sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(2, 4));

// biến thể đầu tiên - chỉ có 1 tham số truyền vào
// const printConsole = str => {
//     console.log(str);
// }
// printConsole('Hello world!');

// biến thể t2 - liên quan về kết quả trả về
// const funcReturnArray = () => ({name: 'nobita',age: 10});

// console.log(funcReturnArray());

const h = 3;
const m = 35;
const s = 3;
// 3h 35m 3s
// console.log(h, 'h ', m, 'm ', s, 's');

// 24h:  3h
// const viewTimer = `${h}h ${m}m ${s}s`;
// const orderNumber = 10;
// console.log(`STT: ${orderNumber < 10 ? `0${orderNumber}` : orderNumber}`);
const obj = {
    name: 'Nobita',
    age: 10
}
const { age, name } = obj;

const array = [10, 20, 30, 10];
const [first, ...hi] = array;
console.log(hi);
