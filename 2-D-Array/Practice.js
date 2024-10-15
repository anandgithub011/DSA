// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// function print1DArr(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       res.push(arr[i][j]);
//     }
//   }
//   return res;
// }
// let result = print1DArr(arr);
// console.log(result);

// ~===============================================================================================

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];

//   function sumOfElement(arr){

//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){

//         for(let j = 0; j < arr[i].length; j++){
//             sum += arr[i][j];
//         }
//     }
//     return sum;
//   }
//   let res = sumOfElement(arr);
//   console.log(res);
// ~===============================================================================================
// *WAP to print the diagonal element
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];

//   function printDiagonalElement(arr){

//     let res = "";
//     for(let i = 0; i < arr.length; i++){

//         for(let j = 0; j < arr[i].length; j++){
//             if(i == j){
//                 res += arr[i][j];
//             }
//         }
//     }
//     return res;
//   }
//   let result = printDiagonalElement(arr);
//   console.log(result)

// ~===============================================================================================
// *WAP to print the sum of diagonal element
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];

//   function printSumDiagonalElement(arr){

//     let res = 0;
//     for(let i = 0; i < arr.length; i++){

//         for(let j = 0; j < arr[i].length; j++){
//             if(i == j){
//                 res += arr[i][j];
//             }
//         }
//     }
//     return res;
//   }
//   let result = printSumDiagonalElement(arr);
//   console.log(result)
// ~===============================================================================================
// *WAP to print the Anti-diagonal element

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];

//   function printAntiDiagonalElement(arr){

//     let res = "";
//     for(let i = 0; i < arr.length; i++){

//         for(let j = 0; j < arr[i].length; j++){
//             if(i+j == arr.length-1){
//                 res += arr[i][j];
//             }
//         }
//     }
//     return res;
//   }
//   let result = printAntiDiagonalElement(arr);
//   console.log(result)
// ~===============================================================================================
// * WAP to print the transpose of this array
//* o/p: [ [ 1, 3 ], [ 2, 4 ] ]

// let arr = [
//   [1, 2],
//   [3, 4],
// ];

// function printtransposeArr(arr) {
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {

//     for (let j = 0; j < arr[i].length; j++) {

//         // arr[i][j+1] = arr[i+1][j];
//         if(i != j){
//             let temp = arr[i][j];
//             arr[i][j] = arr[j][i];
//             arr[j][i] = temp;
//             return arr;
//         }
//     }
//   }
// }

// let res = printtransposeArr(arr);
// console.log(res);
// ~===============================================================================================
// * WAP to print the sum of column of element of square Matrix;
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// function printEleArrayColumn(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//       sum += arr[j][i];
//     }
//     res.push(sum);
//   }
//   return res;
// }
// let result = printEleArrayColumn(arr);
// console.log(result);
// ~===============================================================================================
// * WAP to print the sum of column of element of Array;
// let arr = [
//     [1, 2, 3, 0],
//     [4, 5, 6, 9],
//     [7, 8, 9, 1],
//     [7, 8, 9, 1],
//   ];

//   function sumOfElementArr(arr){

//     let result = [];
//     for(let i = 0; i < arr[0].length; i++){

//         let sum = 0;
//         for(let j = 0; j < arr.length; j++){
//             sum += arr[j][i];
//         }
//         result.push(sum);
//     }
//     return result;
//   }
//   let res = sumOfElementArr(arr);
//   console.log(res)
// ~===============================================================================================
// * WAP to print the sum of row of element of Array;

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [7, 8, 9],
//   [4, 5, 6],
// ];

// function printSumColumn(arr) {

//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         let sum = 0;

//         for(let j = 0; j < arr[i].length; j++){
//             sum += arr[i][j];
//         }
//         result.push(sum);
//     }
//     return result
// }

// let res = printSumColumn(arr);
// console.log(res)
// ~===============================================================================================

// * WAP to transpose the 2d Array in a square matrix;

// let arr = [
//     [1, 2, 3, 0],
//     [4, 5, 6, 9],
//     [7, 8, 9, 1],
//     [7, 8, 9, 1],
//   ];

//   function transposeArr(arr){

//       for(let i = 0; i < arr.length; i++){

//         for(let j = 0; j < i; j++){
//             let temp = arr[i][j];
//             arr[i][j] = arr[j][i];
//             arr[j][i] = temp;
//         }
//     }
//     return arr;
//   }
//   let res = transposeArr(arr);
//   console.log(res);

// ~===============================================================================================
// * WAP to rotate the given array by 90 degree;

let arr = [
  [1, 2, 3, 0],
  [4, 5, 6, 9],
  [7, 8, 9, 1],
  [7, 8, 9, 1],
];

let n = arr.length;
function rotateBy90Degree(arr, n) {
  let res = new Array(n).fill(0).map(ele=> new Array(n).fill(0));
  
// console.log(res)

  for (let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++){
        res[j][n-i-1] = arr[i][j];
    }
  }
  return res;
}
let result = rotateBy90Degree(arr, n);
console.log(result);
// ~===============================================================================================
//* WAP to merge the sorted array;

// let arr1 = [5, 7, 8, 9];
// let arr2 = [1, 4, 6];

// function mergeSortedArray(arr1, arr2) {
//   let newArr = [];

//   let i = 0;
//   let j = 0;
//   let result = [];

//   while (i < arr1.length || j < arr2.length) {
//     if (i < arr1.length && j < arr2.length) {

//         if(arr1[i] < arr2[j]){
//             result.push(arr1[i]);
//             i++;
//         }else{
//             result.push(arr2[j]);
//             j++;
//         }
//     }
//     else{
//         if(i < arr1.length){
//             result.push(arr1[i]);
//             i++;
//         }
//         if(j < arr2.length){
//             result.push(arr2[j]);
//             j++;
//         }
//     }
//   }
//   return result;
// }
// let res = mergeSortedArray(arr1, arr2);
// console.log(res);
// ~===============================================================================================
// * WAP to merge the array in sorted form;

// let arr1 = [2,4,1,3,6];
// let arr2 = [8.5,7,9];

// function mergeTwoArray(arr1,arr2){

//     let i = 0;
//     let j = 0;
//     let res = [];

// }
// let result = mergeTwoArray(arr1,arr2);
// console.log(result);
// ~===============================================================================================
//* WAP to Find the minimum notes of total amount from given array;
//* ATM Question

// let note = [50,100,200,500];
// let target = 1255;

// function minimumNote(note,target){

//     let result = [];
//     for(let i = note.length-1; i >= 0; i--){
//         while(target >= note[i]){
//             result.push(note[i]);
//             target -= note[i];
//         }
//         if(target === 0){
//             return result;
//         }
//     }
//     return -1;
// }

// let res = minimumNote(note,target);
// console.log(res);

// ~===============================================================================================

// * WAP
// let str = "hello";
// let vowel = "aeiou"

// function replaceChar(str){
//     let bag = "";
//     for(let i = 0; i < str.length; i++){

//         return str;
//     }
// }
// let res = replaceChar(str);
// console.log(res);
// ~===============================================================================================
// let str = "a3"
// // let s = /[a-z\d\@]+$/;
// let s = /[a-z\d\@]+$/i;

// console.log(str.match(s));
// console.log(s.test(str));
// ~===============================================================================================
// * WAP A array consisting of n elements each element will be ((2*i)+1). You have to pick the two elements you can do the following operation for one element either you can add or subtaract, Find the minimum number of operation required to make the array equal;
// * Array is odd

// // let n = 10;
// let n = 5;
// let arr = new Array(n);
// function minOperation(arr,n){
//     let operation = 0;
// //    for(let i = 0; i < n; i++){
//   //      arr[i] = (2*i)+1;
//     //}
//     if(n % 2 !== 0){
//         for(let j =0; j < n; j+=2){
//             operation += j;
//         }
//     }
//     else{
//         for(let k = 0; k < n; k+=2){
//             operation += k
//         }
//     }
//     return operation

// }
// let res = minOperation(arr,n);
// console.log(res);
// ~===============================================================================================

// * WAP to sort a given string; by split method

// let str = "cba";
// function sortStr(str){
//     let arr = str.toLowerCase().split("");

//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){

//             if(arr[i] > arr[j]){  // c<b
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr.join("");

// }
// let res = sortStr(str);

// console.log(res);

// ~===============================================================================================\
//* WAP to print Valid Parenthisis or NOT?

// let str = "{[()}";
// function validParenthisis(str){
//     let obj = {
//         "{":"}",
//         "[":"]",
//         "(":")"
//     }

//     let stack = [];
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == "{" || str[i] == "[" || str[i] == "("){
//             stack.push(obj[str[i]]);
//         }else{
//             let closingStack = stack.pop();
//             if(closingStack !== str[i]){
//                 return false;
//             }
//         }
//     }
//     return stack.length == 0 ? true : false
// }

// let res = validParenthisis(str);
// console.log(res);

// ~===============================================================================================

// * WAP to write a logic for pascal Triangle?(multi-Dimensional Array)

// let n = 6
// function pascalTr(n){

//     let triangle = [];

//     for(let i = 0; i < n; i++){
//         if(i===0){
//             triangle.push([1]);
//         }
//          else if(i === 1){
//             triangle.push([1,1]);
//         }
//         else{
//             let arr = [1];
//             let previous_Arr = triangle[i-1];

//             for(let j = 0; j < i-1; j++){
//                 arr.push(previous_Arr[j+0]+previous_Arr[j+1]);
//             }
//             arr.push(1);
//             triangle.push(arr);
//         }
//     }
//     // console.log(triangle);
//     return triangle[n-1]

// }
// let res = pascalTr(n);
// console.log(res);

// ~===============================================================================================

//* WAP to print

// let arr = [1,3,3,2,2,2,5];

// function eleAscendingByFfrequency(arr){
//     let obj  = {};
//     for(let i = 0; i < arr.length; i++){
//         if(!obj[arr[i]]){
//             obj[arr[i]] = 1;
//         }else{
//             obj[arr[i]]++;
//         }
//     }
//     // console.log(obj)
//     var a = Object.entries(obj)
//     for(let j = 0; j < a.length; j++){

//         for(let k = j+1; k < a.length; k++){

//             if(a[j][1] > a[k][1]){
//                 let temp = a[j];
//                 a[j] = a[k]
//                 a[k] = temp;
//             }
//         }
//     }
//     let result = [];
//     for(let m = 0; m < a.length; m++){
//         result.push(+a[m][0]);
//     }
//     return result

// }
// let res = eleAscendingByFfrequency(arr);
// console.log(res);
// ~===============================================================================================
// * WAP to print fibonacci series upto n;

// function fibonacci(n) {
//   if (n == 1) {
//     return 0;
//   } else if (n == 2) {
//     return 1;
//   } else if (n > 1) {
//     let prev = 0;
//     let current = 1;
//     let num = 0;

//     let series = [];
//     for (let i = 2; i < n; i++) {
//       num = prev + current;
//       prev = current;
//       current = num;
//       series.push(prev,current)
//     }
//     return series;
//   }
// }
// let res = fibonacci(9);
// console.log(res);
// let n = 9;
// function fibonaciiArr(n){
//     let arr = [0,1];

//     for(let i = 2; i < n; i++){
//         arr.push(arr[i-1]+arr[i-2]);
//     }
//     return arr;
// }
// let res = fibonaciiArr(n);
// console.log(res);

// ~===============================================================================================


// * 
// ~===============================================================================================
// ~===============================================================================================
// ~===============================================================================================
// ~===============================================================================================
