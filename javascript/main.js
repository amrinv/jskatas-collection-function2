// Kata 01 Add
function add(a, b) {
  return a + b;
}
// let result = add(5, 3);
console.log("Addition of two numbers is:", add(5, 3));

// Kata 02 Multiply
function multiply(a, b) {
  let answer = 0;
  let count = 0;
  while (count < b) {
    answer = add(a, answer);
    count += 1;
  }
  return answer;
}
let mul_res = multiply(3, 5);
console.log("Multiplication of two values is:", mul_res);

//  Kata 03 Power/Exponentiation
function power(x, n) {
  let ans = x;
  let count = 0;
  while (count < n - 1) {
    ans = multiply(x, ans);
    count++;
  }
  return ans;
}
console.log("The final result of Exponentiation is:", power(2, 8));

//  Kata 04 Factorial

function factorial(x) {
  let count = 0;
  let ans = 1;
  while (x > count) {
    ans = multiply(x, ans);
    x = x - 1;
  }
  return ans;
}
console.log("The Factorial is:", factorial(5));

//  Kata 05 Fibonacci(Bonus)

function fibonacci(n) {
  let num1 = 0;
  let num2 = 1;
  let sum;
  let i = 2;

  if (n == 1) {
    return 0;
  }
  while (i < n) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    i += 1;
  }
  return num2;
}
console.log("The Fibonacci number is:", fibonacci(4));
