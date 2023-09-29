
//215
//1
// function func(mas) {
//     let res = 0
//     for (let elem of mas) {
//         res += elem;
//     }
//     return res;
// }
// console.log(func([1, 3, 4, 5, 6, 7]))

//2
// function func2(num) {
//     let arr = [];
//     for (let i = 1; i <= num ; i++) {
//         if (num % i === 0) {
//             arr.push(i)
//         }
//     }
//     return arr;
// }
// console.log(func(20))

//3
// function func(str) {
//     let arr = [];
//     for (let elem of str) {
//         arr.push(elem);
//     }
//     return arr;
// }
// console.log(func('awdwad'))

//4
// function func(str) {
//     let rev = "";
//     for (let i = str.length - 1; i >= 0; i--){
//         rev += str[i];
//     }
//     return rev;
// }
// console.log(func("sdfsdfwerqw"));

//5
// function func1(str) {
//     let res = str.slice(0,1).toUpperCase() + str.slice(1);
//     return res;
// }
// // console.log(func('hsdf'))
//
// //6
// function func(str) {
//     let arr = str.split(' ')
//     let newArr = []
//     for (let word of arr) {
//         newArr.push(func1(word))
//     }
//     return newArr.join(' ')
// }
// console.log(func('hello world'))

//7
// function func(num) {
//     let arr = []
//     for (let i = 1; i <= num; i++) {
//         arr.push(i)
//     }
//     return arr;
// }
// console.log(func(9))

//8
// function summa(num){
//     let str=String(num);
//     let arr= str.split('');
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         sum+=Number(arr[i])
//     }
//     return sum
// }
// console.log(summa(783))

//9
// function func(num) {
//     if (num % 4 ===0) {
//         return ("Високосный")
//     } else return ("Не високосный")
// }
// console.log(func(2021))

//10
// function func(num) {
//     let sut = num/86400
//     return Math.floor(sut)
// }
// console.log(func(3434433))

//11
// function func(arr) {
//     let index = Math.floor(Math.random() * (arr.length))
//     return arr[index]
// }
// console.log(func([1, 2, 3, 4]))

//12
// function func(num) {
//     return func2(num).length === 2 ? 'простое' : 'не простое'
// }
// console.log(func(13))