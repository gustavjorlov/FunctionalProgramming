var R = require('ramda');

var words = R.split(' ');
console.log(words("hey you little"));

var tripleList = R.map(R.multiply(3));
console.log(tripleList([3, 5, 6]));

var greater = function(a,b){
	return a > b ? a : b;
};
var maxer = R.reduce(greater, -Infinity);
console.log(maxer([1, 5, 23, 4, 6, 3]));