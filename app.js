// Factorial Finder


function factorial(n) {
  // Base case 
  if (n <= 0) {
    return 1;
  }
  // Recursive statement
  else {
    return n * factorial(n-1);
  }
}
console.log(factorial(3))