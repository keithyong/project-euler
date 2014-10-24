/* You shouldn't need any additional tools for this problem.  As a brief reminder,
 * to check if a number is even, you can write:
 *
 *     if( num % 2 === 0 ){
 *     }
 *
 * The one thing that might trip you up is that you will have to swap values from one
 * variable to another, e.g.:
 *
 *     var a = 10;
 *     var b = 20;
 *
 *     a = b;
 *     // a and b are now both 20
 */

module.exports = function(){
	var sum = 0;
    var prev1 = 1;
    var prev2 = 1;
    for(i = prev1 + prev2; i < 4000000; i++){
        i = prev1 + prev2;
        if (i % 2 == 0){
            sum += i;
        }
        prev1 = prev2;
        prev2 = i;
    }
	return sum;
};