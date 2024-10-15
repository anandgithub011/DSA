function tribonacci(n) {
  if (n == 1) {
    return 0;
  } else if (n == 2) {
    return 1;
  } else if (n == 3) {
    return 1;
  } else if (n > 3) {
    let prev1 = 0;
    let prev2 = 1;
    let current = 1;
    let temp = 0;
    for (let i = 3; i < n; i++) {
      temp = prev1 + prev2 + current;
      prev1 = prev2;
      prev2 = current;
      current = temp;
    }
    return current;
  }
}

let res = tribonacci(4);
console.log(res);

// let a = 10;
// let b = 20;
// [a,b] = [b,a];
// console.log(a)
// console.log(b)

// let a = 100;
// let b = 20;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log("a", a);
// console.log("b", b);
