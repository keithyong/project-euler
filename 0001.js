/**
 * Coding Lesson #1 -
 *
 * Open https://projecteuler.net/problem=1 -- Your task is to solve this problem.
 *
 * Information you need:
 *
 * Comments -- A code comment is text in a code file that is meant to be read by humans
 *             and that is (almost always) ignored by computers.  All of this text is
 *             a comment because it is wrapped in what's called a "comment block", that
 *             is all the text between the /* on the first line and the * / at the end
 *             (without the space -- if I were to remove the space, it would close the
 *             comment)
 *
 *             Single line comments can be made by typing:
 *
 *                // your comment goes here
 *
 *             If you're using a decent editor, comments usually appear grey.
 *
 * Variables -- Variables are a fundamental concept of programming.  Go through a couple
 *             of JavaScript lessons at codeacademy.com if you don't understand this, or
 *             I have a lesson I wrote in 2006 that explains them:
 *
 *             http://www.htmlgoodies.com/primers/jsp/article.php/3586411
 *
 * If statements -- Continue the codeacademy lessons, or read:
 *
 *             http://www.htmlgoodies.com/primers/jsp/article.php/3587821
 *
 * Equality operator (== or ===) -- Continue code academy lessons ;)
 *
 *             A brief explanation: In JavaScript, the = operator is used to _set_ a
 *             value:
 *
 *             var x = 5;
 *
 *             the value of x is set to 5.  The == and === operators are used to _check_
 *             a value:
 *
 *             if( x === 5 ){
 *                 // code here will execute only if x is 5
 *             }
 *
 * For Loops -- Continue the codeacademy lessons, or read:
 *
 *             http://www.htmlgoodies.com/primers/jsp/article.php/3589631
 *
 * Modulus operator -- If you remember back to basic math, when you divide two numbers
 *             you get a whole number part, and a remainder.  The modulus operator is
 *             the % sign, and only returns this remainder portion:
 *
 *             5 / 2 = 2.5
 *             5 % 2 = 1 (1 is the remainder)
 *             10 % 7 = 3
 *             10 % 5 = 0
 *
 *             This last example, 10 % 5 = 0 is important for this first problem.
 *             If there is no remainder, it means that a number is cleanly divisible by
 *             another, in this case 10 is cleanly divisibly by 5.
 */

module.exports = function(){ // Do not modify this line

	// Write your code here.  For this first problem, I've started the code for you.  I won't
	// for future problems.

	var sum = 0;

	for(var i = 0; i < 1000; i++){
		if((i % 3 == 0) || (i % 5 == 0)){
			sum += i;
		}
	}

	// when you find an answer, "return" it.  For now, you don't have to worry about what this
	// is doing ;)
	return sum;

}; // Do not modify this line