project-euler
=============

My solutions for Project Euler

Problem 4

/*A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.*/

var num = 0;
var finalStr;
// Brute force
for (var a = 999; a >= 100; a--){
  for (var b = 999; b >= 100; b--){
    num = a * b;
    numStr = num.toString();
    numStrReverse = numStr.split('').reverse().join('');
    
    if (numStr === numStrReverse){
      finalStr = numStr;
      console.log("Biggest palindromic num: " + finalStr);
      return;
    }
  }
}
