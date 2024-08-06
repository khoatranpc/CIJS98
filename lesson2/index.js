console.log('Hi');

let numberA = 10;
let numberB = 10;

console.log(numberA === numberB);


let personA = {
    name: 'Doraemon',
    // ..... key: value
};

let personB = {
    name: 'Doraemon'
};
// so sánh địa chỉ ô nhớ
// đưa dạng dữ liệu về string

console.log(JSON.stringify(personA) === JSON.stringify(personB));


console.log('=======  Array methods =======');
// duyệt mảng

const fruits = ['Apple', 'Banana', 'Cherry'];
// forEach -> chỉ để duyệt mảng -> chạy hết phần tử của mảng là ngừng
// tên mảng.forEach(()=>{ });

// in ra màn hình số lẻ và chia hết cho 3
// listNumber.forEach((item) => {
//     if (item % 2 !== 0 && item % 3 === 0) {
//         console.log(item);
//     }
// });

// map -> trả về 1 mảng mới, với các phần tử của mảng mới này sẽ là giá trị return của callback, 
// số lượng phần tử bằng với mảng ban đầu
const listNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const resultMap = listNumber.map((item) => {
//     return item * 2;
// });
// console.log(resultMap);

// filter (lọc, bộ lọc): dựa vào điều kiện gì đấy để trả ra kết quả
// vẫn duyệt hết các phần tử trong mảng, tuy nhiên, kết quả trả về, số lượng phần tử sẽ là số lượng phần tử của mảng đang duyệt
// thoả mãn điều kiện return, giá trị trả vè sẽ là giá trị thoả mãn


// mảng phía trên, lọc ra các phần tử là số chẵn
// const resultFilter = listNumber.filter((item) => {
//     return item % 2 === 0;
// });
// console.log(resultFilter);

// từ vị trí số 3 xoá đi 1 phần tử
listNumber.splice(3, 1, 5);
console.log(listNumber);
