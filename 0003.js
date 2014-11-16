/* If you can't figure this one out after a little while, ask for help.
 *
 * This one is a lot trickier than the previous two.  There are several ways to go about
 * doing this.  If you are interested in learning a whole lot about prime numbers, you can
 * go ahead and create what is called a "prime sieve", which is the fastest way to
 * generate prime numbers.  Your sieve will be very useful in future problems from project
 * euler, but it is overkill for this exact problem.
 *
 * I'll give you a few hints to get you started:
 *
 * The largest possible prime factor of any number, n, is sqrt( n ).  To find the square
 * root of a number in JavaScript:
 *
 *     var sqrt = Math.sqrt( num );
 *`
 * All prime numbers other than 2 are odd
 *
 * Notice that my loop starts at 3, and the +=2 at the end increments i by 2 each time,
 * instead of 1 like you're used to.  This means that i becomes 5, 7, 9, etc...
 */

/* The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */
module.exports = function(){
    var primeFactor = 0;
    var x = 341550071728321;
    var isPrime;
    var quo;

    for (var i = 3; i <= Math.sqrt(x); i += 2){
        quo = x / i;

        // If (x / i) is an integer then 'i' must be a factor
        if (quo % 1 == 0){

            // Assume i is prime
            isPrime = true;

            // Brute force check if i is not prime.
            for (var j = i - 1; j > 1; j--){
                if(i % j == 0){
                    isPrime = false;
                }
            }

            // If isPrime comes out of the forLoop still true
            if (isPrime === true){
                console.log(i);
            } else {
                console.log("Factor " + i + " was not a prime.");
            }
        }
    }
};
