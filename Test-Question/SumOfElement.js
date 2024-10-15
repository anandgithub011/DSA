// * WAP to print sum of element of Array;

// let arr = [12, 3, 4, 5, 7, 44];

// function sumOfElement(arr) {
//   let sum = arr.reduce((a, b) => {
//     return a + b;
//   });
//   return sum;
// }
// let res = sumOfElement(arr);
// console.log(res);

// ~=============================================================================================
// *WAP to find the sum of even index elements of an Array?

// let arr = [12,3,4,5,7,44];
// function sumOfEvenIndex(arr) {
//   let sum = 0
//   for(let i = 0; i < arr.length; i++){
//       if(i % 2 == 0){
//           sum += arr[i];
//       }
//   }
//   return sum;
// }
// let res = sumOfEvenIndex(arr)
// console.log(res);

// ~=============================================================================================

//* WAP to  find the sum of odd index elements of an array?

// let arr = [12, 3, 4, 5, 7, 44];
// function sumOfOddIndex(arr) {
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//       if(i % 2 !== 0){
//           sum += arr[i];
//       }
//   }
//   return sum;
// }
// let res = sumOfOddIndex(arr);
// console.log(res);
// ~=============================================================================================

//* WAP to  find the sum of odd elements of an array?

// let arr = [12, 3, 4, 5, 7, 44];
// function sumOfOddElement(arr) {
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//       if(arr[i] % 2 !== 0){
//           sum += arr[i];
//       }
//   }
//   return sum;
// }
// let res = sumOfOddElement(arr);
// console.log(res);

// ~=============================================================================================

// * WAP To find the count the number of even elements in array?

// let arr = [12,3,4,5,7,44];
// function countOfEvenEle(arr){

//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 == 0){
//             count++;
//         }
//     }
//     return count;
// }
// let res = countOfEvenEle(arr);
// console.log(res);

// ~=============================================================================================

// *WAP to find the sum of even elements and odd elements in an array?

// let arr = [12,3,4,5,7,44];

// let sumEven = 0
// let sumOdd = 0;

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2== 0){
//         sumEven += arr[i];
//     }
//     else{
//         sumOdd += arr[i];
//     }
// }
// console.log(sumEven);
// console.log(sumOdd);

// ~=============================================================================================
//* WAP to find the biggest element in a given Array?

// let arr = [72,3,4,55,7,44,66];
// function findBiggestElement(arr){

//     let biggest = -Infinity;

//     for(let i = 0; i < arr.length; i++){

//         if(biggest < arr[i]){
//             biggest = arr[i];
//         }
//     }
//     return biggest;

// }
// let res = findBiggestElement(arr);
// console.log(res);

// ~=============================================================================================
//* WAP to find the samllest element?

// let arr = [23,55,77,3,58,11];

// function findSmallesElement(arr){

//     let smallest = Infinity;
//     for(let i = 0; i < arr.length; i++){
//         if(smallest > arr[i]){
//             smallest = arr[i];
//         }
//     }
//     return smallest;
// }

// let res = findSmallesElement(arr);
// console.log(res);

// ~=============================================================================================
//* WAP to find 2nd biggest element?

// let arr = [23,76,77,3,58,67,11];
// // let arr = [2,4,42,56,86,35,29]
// function secondBiggestEle(arr){

//     let firstBiggest = arr[0];
//     let secondBiggest = -Infinity;

//     for(let i = 0; i < arr.length; i++){
//         if(secondBiggest < arr[i] && arr[i] < firstBiggest ){
//             secondBiggest = arr[i];
//         }
//         else if(arr[i] > firstBiggest){
//             secondBiggest = firstBiggest;
//             firstBiggest = arr[i]
//         }
//     }
//     console.log(secondBiggest);
// }
// secondBiggestEle(arr);

// ~=============================================================================================
//* WAP to find  2nd samllest element?

// let arr = [23,76,4,77,3,58,67,11];

// function find2ndSmallestEle(arr){
//     let fSmallest = arr[0];
//     let sSmallest = Infinity;

//     for(let i = 0; i < arr.length; i++){
//         if(sSmallest > arr[i] && arr[i] > fSmallest){
//             sSmallest = arr[i];
//         }
//         else if(arr[i] < fSmallest){
//             sSmallest = fSmallest;
//             fSmallest = arr[i];
//         }
//     }
//     return sSmallest;
// }
// let res = find2ndSmallestEle(arr);
// console.log(res);

// ~=============================================================================================

// * WAP to implement slice functionality start index and last index is given?

// let arr = [23, 76, 77, 3, 58, 67, 11];
// let slicedElement = arr.slice(-2,-4);
// console.log(slicedElement);

// function slicedElement(arr) {
//   let firstIndex = 5;
//   let lastIndex = 9;
//   let slicedElement = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i >= firstIndex && i < lastIndex) {
//       slicedElement.push(arr[i]);
//     }
//   }
//   return slicedElement;
// }
// let res = slicedElement(arr)
// console.log(res);

// ~=============================================================================================
// * WAP to print the running maximum element?

// let arr = [4,8,2,1,9];

// function runningMax(arr){

//     let max = -Infinity;
//     let resArr = [];

//     for(let i = 0; i < arr.length; i++){
//         if(max < arr[i]){
//             max = arr[i];
//         }
//         resArr.push(max);
//     }
//     console.log(resArr)
// }
// runningMax(arr);
// ~=============================================================================================

// * WAP to print the running sum of the element of Array?

// let arr = [4,8,2,1,9];
// function runningSum(arr){
//     let resArr = [];
//     let sum = arr[0];
//     for(let i = 1; i < arr.length; i++){

//         sum += arr[i];
//         resArr.push(sum);
//     }
//     console.log(resArr)
// }
// runningSum(arr);
// ~=============================================================================================
// * WAP to check whether the given element is present or NOT!!

// let arr = [4, 8, 2, 1, 9];

// function isElementPresent(arr,target) {

//   let flag = false;
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === target){
//         flag = true;
//     }
//   }
//   return flag;
// }
// let res = isElementPresent(arr,8)
// console.log(res);
// * includes (HOF)

// ~=============================================================================================

//* WAP to find the adjacent element whose sum is equal to the target?

// let arr = [4,8,2,1,9];

// function adjacentElement(arr,target){
//     let adjacent = [];
//     for(let i = 1; i < arr.length; i++){
//         let sum = arr[i]+arr[i-1];
//         if(sum === target){
//             return [arr[i],arr[i-1]];
//         }
//     }
//     return -1;
// }
// let res = adjacentElement(arr,19);
// console.log(res);

// ~=============================================================================================

//* WAP to print the the element which is greater than left element and smaller than the right element?

// let arr = [15,12,16,18,20];
// let arr = [15, 12, 25, 18, 20];
// let arr = [15, 12, 25, 18, 17];
// let arr = [9,8,2,3,9];

// function greaterLeftsmallerRight(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i == 0) {

//       if (arr[i] < arr[i + 1]) {
//         return arr[i];
//       }

//     } else if (i == arr.length - 1) {

//       if (arr[i] > arr[i - 1]) {
//         return arr[i];
//       }

//     } else {

//       if (arr[i] > arr[i - 1] && arr[i] < arr[i + 1]) {
//         return arr[i];
//       }
//     }
//   }
//   return -1;
// }

// let res = greaterLeftsmallerRight(arr);
// console.log(res);
// ~=============================================================================================
//* WAP to find any two index such that the sunm of its element is equal to target?

// let arr1 = [15, 12, 25, 18, 17];
// let target1 = 43;

// let arr = [2,4,6,7,9,1];
// let target = 10;

// function printIndex(arr,target){

//     let bag = "";
//     for(let i = 0; i < arr.length; i++){

//         for(let j = 0; j < arr.length; j++){

//             if(i == j){
//                 continue;
//             }
//             else if(arr[i]+arr[j] === target){
//                 return [i,j];
//             }
//         }
//     }
//     return -1;
// }
// let res = printIndex(arr,target)
// console.log(res)
// ~=============================================================================================
// * WAP to swap the adjacent element in array?

// let arr = [1,2,3,4,5,6];

// function swapAdjacentElement(arr){
//     let newArr = []
//     for(let i = 0; i < arr.length; i+=2){
//         let a = i;
//         let b = i+1;
//         newArr.push(arr[b],arr[a]);
//     }
//     return newArr
// }
// let res = swapAdjacentElement(arr);
// console.log(res)

//! OR

// function swapAdjacentElement(arr){
//     let newArr = []
//     for(let i = 0; i < arr.length; i+=2){     //arr.length-1
//         let temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }
//     return newArr
// }
// let res = swapAdjacentElement(arr);
// console.log(res)

// ~=============================================================================================

// * WAP to ratate the array by K times;

// let arr = [1, 2, 3, 4];
// let k = 3;

// function rotateArr(arr, k) {

//   for (let i = 0; i < k % arr.length; i++) {
//     let temp = arr[arr.length - 1];

//     for (let j = arr.length-1; j > 0; j--) {

//         arr[j] = arr[j-1];
//     }
//     arr[0] = temp;
//   }
//   return arr;
// }
// let res = rotateArr(arr, k);
// console.log(res);
// ~=============================================================================================
//* WAP to fold the array by K times; (k <= arr.length/2)given
// let arr = [1, 2, 3, 4, 5, 6];
// let k = 2;

// function foldArray(arr, k) {
//   for (let i = 0; i < k; i++) {
//     let temp = [];
//     let sum = 0;
//     for (let j = 0; j < Math.floor(arr.length / 2); j++) {
//       sum = arr[j] + arr[arr.length - 1 - j];
//       temp.push(sum);
//     }
//     if (arr.length % 2 !== 0) {
//       temp.push(arr[Math.floor(arr.length / 2)]);
//     }
//     arr = [...temp];
//   }
//   console.log(arr);
// }
// foldArray(arr, k);

// ~=============================================================================================
// * WAP to check whether the three consecutive element  are odd or NOT in an array;

// let arr = [1,2,3,4,7];

// function checkConsecutiveOdd(arr){
//     let c = 0;
//     for(let i = 0; i < (arr.length-2); i++){

//         if(arr[i] % 2 !== 0 && arr[i+1]% 2 !== 0 && arr[i+2] % 2 !== 0 ){
//             return true;
//         }
//     }
//     return false;
// }
// let res = checkConsecutiveOdd(arr);
// console.log(res);
// ~=============================================================================================

// function checkConsecutivePrime(arr){

//     for(let i = 0; i < arr.length-2; i++){

//     }
// }
// let res = checkConsecutivePrime(arr);
// console.log(res);

// ~=============================================================================================
//* WAP to insert the element at a given position inside array;

// let arr = [1,2,3,4];
// let position = 2;
// let newElement = 1000;
// function insertElement(arr,position,newElement){
//     for(let i = 0; i < arr.length; i++){
//         if(i == position-1){
//             for(let j = arr.length; j >= position; j--){
//                 arr[j] = arr[j-1];
//             }
//             arr[position-1] = newElement;
//             break;
//         }
//     }
//     return arr;
// }
// let res = insertElement(arr,position,newElement);
// console.log(res)
// ~=============================================================================================
// * WAP to print the frequency;
// let arr = [1,2,1,3,4,1];
// let ele = 1
// function printFrequency(arr,ele){

//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(ele === arr[i]){
//             count++;
//         }
//     }
//     return count;
// }
// let res = printFrequency(arr,ele)
// console.log(res);
// ~=============================================================================================

// * WAP to print the frequency of all elements from the given array;
// let arr = [1,2,1,3,4,1];
// function printFrequencyAllElement(arr){

//     let obj = {};
//     for(let i = 0; i < arr.length; i++){
//         if(!obj[arr[i]]){
//             obj[arr[i]] = 1;
//         }
//         else{
//             obj[arr[i]]++;
//         }
//     }
//     return obj;
// }

// let res = printFrequencyAllElement(arr);
// console.log(res);
// ~=============================================================================================
// * WAP to reverse the array;

// let arr = [1,2,3,4,5,6];

// function reverseArr(arr){

//     let left = 0;
//     let right = arr.length-1;
//     while(left <= right){
//         let temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;
//         left++;
//         right--;
//     }
//     return arr;
// }
// let res = reverseArr(arr);
// console.log(res);

// ~=============================================================================================
// * WAP to reverse the array and print the sum of even index element;

// let arr = [1,2,3,4,5];

// function sumReverseArr(arr){

//     let left = 0;
//     let right = arr.length-1;
//     while(left <= right){
//         let temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;
//         left++;
//         right--;
//     }
//     // return arr
//     let sum = 0;
//     arr.forEach((e,i)=>{
//         i % 2 == 0 && (sum += e);
//     })
//     return sum;

//     // for(let i = 0; i < arr.length; i++){
//     //     if(i % 2 == 0){
//     //         sum += arr[i];
//     //     }
//     // }
// }

// let res = sumReverseArr(arr);
// console.log(res);
// ~=============================================================================================

// * WAP to check whether the three consecutive element are ascending or NOT! in an array;

// let arr = [2,1,9,6,6,9];

// function checkConsecutiveOdd(arr){

//     for(let i = 0; i < (arr.length-2); i++){

//         if(arr[i] <= arr[i+1] && arr[i+1] <= arr[i+2] ){
//             return true;
//         }
//     }
//     return false;
// }
// let res = checkConsecutiveOdd(arr);
// console.log(res);
// ~=============================================================================================
// * WAP to sort the array in increasing order;

// let arr = [2,4,6,1,8,5];   //*[1,2,4,5,6,8]
// function sortAscending(arr){

//     let left = 0;
//     let right = arr.length-1;

//     while(left < right){
//         let temp = arr[left];
//         if(arr[left] < arr[right]){
//             right++;
//         }
//         else{
//             arr[left] = arr[right];
//             arr[right] = temp;
//             left++;
//         }
//     }
//     return arr;
// for(let i = 0; i < arr.length; i++){

//     for(let j = i+1; j < arr.length; j++){
//         if(arr[i] >= arr[j]){

//             let temp = arr[i];
//             arr[i] =arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// return arr;
// }

// let res = sortAscending(arr);
// console.log(res)
// ~=============================================================================================
// * WAP to replace duplicate element by "-" symbol;

// let arr = [1,0,1,2,0,1,3,3];

// function replaceDuplicate(arr){

//     for(let i = 0; i < arr.length; i++){

//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] === arr[j]){
//                 arr[j] = "-";
//             }
//         }
//     }
//     return arr;
// }
// let res = replaceDuplicate(arr);
// console.log(res);
// ~=============================================================================================
// * WAP to remove duplicate element in an array;

// let arr = [1, 0, 1, 1];
// function removeDuplicateEle(arr) {
//   //   for (let i = 0; i < arr.length; i++) {
//   //     for (let j = i + 1; j < arr.length; j++) {
//   //       if (arr[i] == arr[j]) {
//   //         for (let k = j; k < arr.length; k++) {
//   //           (arr[k] = arr[k + 1])
//   //         }
//   //         arr.length = arr.length-1;
//   //   j--
//   //       }
//   //     }
//   //   }
//   //   return arr;
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//       obj[arr[i]] = 1;
//     } else {
//       obj[arr[i]]++;
//     }
//   }
//   let j = 0;
//   for (let k in obj) {
//     arr[j] = +(k);
//     j++;
//     for (let j = 0; j < obj[k] - 1; j++) {
//       arr.pop();
//     }
//   }
//   return arr;
// }
// let res = removeDuplicateEle(arr);
// console.log(res);

// ~=============================================================================================
//*  WAP to find maximum profit from the stock of array;
// let arr = [1,2,5,7,4,9];

// function maxProfitStock(arr){
//     let min = arr[0];
//     let profit = 0;
//     for(let i = 0; i < arr.length; i++){
//         min = Math.min(min,arr[i]);
//         profit = Math.max(profit,arr[i]-min);
//     }
//     return profit;
// }
// let res = maxProfitStock(arr);
// console.log(res);

// ~=============================================================================================
//* WAP to convert given binary digit to a number;

// function binaryToNum(n){

//     let sum = 0;
//     let power = 0;
//     while(n != 0){
//         let rem = n % 10;

//         sum += rem*(2**power);
//         power++;
//         n = Math.floor(n/10);
//     }
//     return sum;
// }
// let res = binaryToNum(101101);
// console.log(res);
// ~=============================================================================================
//* WAP to convert to number to a binary digit;

// function numToBinary(n){

//     let binaryDigit = 0;
//     do{
//         let rem = n % 2;
//         binaryDigit = binaryDigit*10 + rem;
//         n = Math.floor(n/2);
//     }
//     while(n != 0){
//         return binaryDigit;
//     }
// }
// let res = numToBinary(45);
// console.log(res);

// console.log((+(""))) //* 0
// ~=============================================================================================

// let arr = [1,2,3,4,5];
// function sumOfArray(arr){

//     if(arr.length === 0){
//         return 0;
//     }
//     else{
//         return (arr[0]+(sumOfArray(arr.slice(1))));
//     }
// }
// let res = sumOfArray(arr);
// console.log(res);

// console.log(+[]);  //  *0
// console.log(Number(""));   //  *0
// console.log(+{});   //*  NaN
// ~=============================================================================================
//*  WAp to find sum of digit? if number is (-ve);

// let num = 456;
// let num = -456;

// function sumOfDigit(n){
//     let sum = 0;
//     let isNegative = false;
//     if(n < 0){
//         isNegative = true;
//         n *= -1;
//     }
//     do{
//         let rem = n % 10;
//         if(isNegative && n < 10){
//             sum -= rem;
//         }
//         else{
//             sum += rem;
//         }
//         n = Math.floor(n/10);
//     }
//     while(n != 0){
//         return sum;
//     }
// }
// let res = sumOfDigit(num);
// console.log(res);

// ~=============================================================================================

//* WAP to print the common prefix from the give array contain strings;

// let arr = ["flower", "floor", "flow"];
// let arr = ["flower", "floor", "low"];
// let arr = ["biggest", "biggest", "biggest"];

// function printCommonPrefix(arr) {
//   let firstWord = arr[0];
//   let ans = "";

//   for (let i = 0; i < firstWord.length; i++) {
//     let char = firstWord[i];
//     let isPresent = false;
//     for (let j = 1; j < arr.length; j++) {
//         let temp = arr[j][i];
//       if (char == temp) {
//         isPresent = true;
//       }
//       else{
//         isPresent = false;
//         break;
//       }
//     }
//     if(isPresent){
//         ans += char;
//     }else{
//         // return -1
//         break;
//     }
//   }
//   return ans;
// }
// let res = printCommonPrefix(arr);
// console.log(res);
// ~=======Binary Search in Sorted array===================================================================
// ~=============================================================================================

// let arr = [1,2,3,4,5,6];
// function binarySearch(arr,target){
//     let start = 0;
//     let end = arr.length-1;

//     while(start <= end){

//         let mid = Math.floor((start+end)/2);

//         if(arr[mid] == target){
//             return true;
//         }
//         if(arr[mid] > target){
//             end = mid-1;

//         }else{
//             start = mid+1;
//         }
//     }
//     return false;
// }

// let res = binarySearch(arr,5);
// console.log(res);
// ~=============================================================================================

// let arr = [6,5,4,3,2,1];

// function binarySearch(arr,target){
//     let start = 0;
//     let end = arr.length-1;

//     while(start <= end){

//         let mid = Math.floor((start+end)/2);

//         if(arr[mid] == target){
//             return true;
//         }
//         if(arr[mid] > target){
//             start = mid+1;

//         }else{
//             end = mid-1;
//         }
//     }
//     return false;
// }

// let res = binarySearch(arr,1);
// console.log(res);

// 

// ~=============================================================================================
//* WAP Tp print all the 3 digit palindrome number till 999;

// function printPalindromeNum(num){
//     let temp = num;
//     let rev = 0
//     do{
//         let rem = num % 10;
//         rev = rev*10+rem;
//         num = Math.floor(num/10);
//     }while(num != 0){
//         return rev == temp;
//     }
// }
// let res = printPalindromeNum(102);
// console.log(res)

// for(let i = 1; i <= 9; i++){

//     for(let j = 0; j <= 9; j++){
//         console.log(`${i}${j}${i}`);
//     }
// }
// ~=============================================================================================
// * WAP to check whether the given array is strictly increasing order or NOT!!!

// let arr = [1,2,3,4,5];
// function strictlyIncArr(arr){
//     let c = 1;
//     for(let i = 0; i < arr.length; i++){

//         if(arr[i] < arr[i+1]){
//             c++;
//         }
//     }
//     if(c === arr.length){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let res = strictlyIncArr(arr);
// console.log(res);

// let arr = [1,2,3,4,5];
// function strictlyIncArr(arr){

//     for(let i = 1; i < arr.length; i++){

//         if(arr[i-1] > arr[i]){
//             return false;
//         }
//     }
//     return true;
// }
// let res = strictlyIncArr(arr);
// console.log(res);
// ~=============================================================================================
// * WAP where given an strictly increasing array, find the index of the target(given) number and if the element is not present then you should check whether it is fit inside that given array and find the index?


// let arr = [100,150,200,300,390];
// let target = 320;
// function findIndex(arr,target){

//     for(let i = 1; i < arr.length; i++){
    
//         if(arr[i] === target || arr[i] > target){
//             return i;
//         }
//     }
//     return arr.length;
// }
// let res = findIndex(arr,target);
// console.log(res);
// ~=============================================================================================
// * WAP given array we have to replace all the elements according to the frequency in an array;

// let arr = [1,1,2,5,12,12,5];

// function replaceByFrequency(arr){
//     let obj = {};
//     for(let i = 0; i < arr.length; i++){
//         if(!obj[arr[i]]){
//             obj[arr[i]] = 1;
//         }else{
//             obj[arr[i]]++;
//         }
//     }
//     for(let j = 0; j < arr.length; j++){
//         arr[j] = obj[arr[j]];
//     }
//     return arr
// }
// let res = replaceByFrequency(arr);
// console.log(res);

// ~=============================================================================================
//* WAP to 

// let obj = {
//     1:"abc",
//     2:"def",
//     3:"ghi",
//     4:"jkl",
//     5:"mno",
//     6:"pqr",
//     7:"stu",
//     8:"vwx",
//     9:"yz"
// }

// function printTheValue(obj,n){

//     let rem = n % 10;
//     n = Math.floor(n/10);
//     let firstWord = obj[rem];
//     let secondWord = obj[n];
//     let bag = ""
//     for(let i = 0; i < firstWord.length; i++){

//         for(let j = 0; j < secondWord.length; j++){
//             bag += (secondWord[i]+firstWord[j])+" ";
//         }
//     }
//     return bag;
// }

// let res = printTheValue(obj,56);
// console.log(res);
// ~=============================================================================================
// * Wap to find Index; using binary Search; given arr is ascending or descending;

// let arr = [5,4,3,2,1];

// function binarySearch(arr,target){
//     let start = 0;
//     let end = arr.length-1;
//     let isAscending = (arr[start] < arr[end]);
//     while(start <= end){

//         let mid = Math.floor((start+end)/2);

//         if(arr[mid] == target){
//             return mid;
//         }
//         if(isAscending){
//             if(arr[mid] > target){
//                 end = mid-1;
//             }else{
//                 start = mid+1;
//             }
//         }else{
//             if(arr[mid] > target){
//                 start = mid+1;
//             }else{
//                 end = mid-1;
//             }
//         }
        
//     }
//     return -1;
// }

// let res = binarySearch(arr,1);
// console.log(res);

// ~=============================================================================================
// *  Dice Problem print the unobserved face value;
let observedValue = [2,4,3,1];
let n = 2;
let avg = 3;
function unObservedValueOfDice(observedValue,avg,n){
    let len = observedValue.length;
    let sumObserved = 0;
    for(let i = 0; i < len; i++){
        sumObserved+=observedValue[i];
    }
    let rem_Sum = avg*(len+n)-sumObserved;
    
    let unObservedArr = new Array(n).fill(1);
    rem_Sum = rem_Sum-n;

    for(let j = 0; j < unObservedArr.length; j++){
        let addition = Math.min(5,rem_Sum);
        unObservedArr[j] = unObservedArr[j]+addition;
        rem_Sum = rem_Sum-addition;
        if(rem_Sum === 0){
            break;
        }
    }
    return unObservedArr;
}
let res = unObservedValueOfDice(observedValue,avg,n)
console.log(res);
// ~=============================================================================================
// ~=============================================================================================
// ~=============================================================================================
// ~=============================================================================================
// ~=============================================================================================
// ~=============================================================================================
// ~=============================================================================================
// ~=============================================================================================
