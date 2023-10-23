// In javascript Language

// I solved this problems in two different approaches 

// Optimized version of this code 
// Time Complexity :- O(sqrt(n))

function isPrime(number) {
    // 1 and numbers less than 1 are not prime
    if (number <= 1) {
      return false;
    }
  
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // Found a divisor, not a prime number
      }
    }
  
    return true; // If no divisors were found, it's a prime number
  }
  
  // Test cases
  console.log(isPrime(2));     // true
  console.log(isPrime(31));    // true
  console.log(isPrime(29));     // true
  console.log(isPrime(14));     // false
  console.log(isPrime(40));     // false
  console.log(isPrime(-5));    // false
  

//   Brute Approach 
//   Time Complexity : O(n)
function isPrimeBrute(number) {
    // 1 and numbers less than 1 are not prime
    if (number <= 1) {
      return false;
    }
  
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false; // Found a divisor, not a prime number
      }
    }
  
    return true; // If no divisors were found, it's a prime number
  }
  
  // Test cases
  console.log(isPrimeBrute(2));     // true
  console.log(isPrimeBrute(31));    // true
  console.log(isPrimeBrute(29));     // true
  console.log(isPrimeBrute(14));     // false
  console.log(isPrimeBrute(40));     // false
  console.log(isPrimeBrute(-5));    // false
  