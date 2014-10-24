/* This problem is pretty simple, but requires transforming numbers into strings.  To
 * do this in JavaScript:
 *
 *     var x = 10;
 *     var xStr = x.toString(); // x now == '10'
 *
 * The other thing you need to know is how the hell do you reverse a string?  :)  Well
 * there are several ways to do it.  I suggest writing a function to reverse strings,
 * as the way I'm about to show you is rather "hacky", but it's quick for me to write
 * and I use it often in Euler problems:
 *
 *     str.split('').reverse().join('')
 *
 * The above line reverses the string in the variable str by:
 *
 *     - convert str to an array of letters using "split"
 *     - Arrays have a reverse method, call it
 *     - Re-join the array back into a string
 *
 * If that doesn't make sense to you, don't worry, it's not important right now :)
 */

module.exports = function(){
	var value = 4;

	return value;
};