module.exports = function(){
	var sum = 5050 * 5050;
	for (var i = 1; i <= 100; i++)
	{
		sum -= i * i;
	}
	return sum;
};
