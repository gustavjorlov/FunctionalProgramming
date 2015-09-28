var R = require('ramda');

var get = R.curry(function(x, obj) { return obj[x]; });

function compose(g, f){
	return function(x){
		return g(f(x));
	};
}

function addSalt(text){
	return "The word is: " + text;
}
function properNoun(text){
	return text[0].toUpperCase()+text.slice(1);
}
var specialHandling = compose(addSalt, properNoun);
console.log(specialHandling("gustav"));

// var lengths = compose(R.map(R.size), R.split(' '));
// console.log(lengths("Well you little..."));

var articles = [
  {
    title: 'Everything Sucks',
    url: 'http://do.wn/sucks.html',
    author: {
      name: 'Debbie Downer',
      email: 'debbie@do.wn'
    }
  },
  {
    title: 'If You Please',
    url: 'http://www.geocities.com/milq',
    author: {
      name: 'Caspar Milquetoast',
      email: 'hello@me.com'
    }
  }
];
// var names = R.compose(
// 	R.map(get('name')), 
// 	R.map(get('author'))
// );
var names = R.map( R.compose(get('name'), get('author')) );
console.log(names(articles)); // prints: [ 'Debbie Downer', 'Caspar Milquetoast' ]

var isAuthor = function(name, articles){
	return R.contains(name, names(articles));
};
var isAuthor2 = function(name, articles){
	return R.compose(R.contains(name), names)(articles);
};
console.log(isAuthor2('New Guy', articles));
console.log(isAuthor2('Debbie Downer', articles));

var fork = R.curry(function(lastly, f, g, x) {
  return lastly(f(x), g(x));
});

var avg = function(numbers){
	return fork(R.divide, R.sum, R.length, numbers);
};
console.log(avg([1, 2, 3, 4])); //prints: 2.5
console.log(avg([2, 42, 35, 4])); //prints: 20.75


