var promise1 = new Promise(function(resolve, reject) {
	etTimeout(function() {
	  resolve('foo');
	}, 300);
	});
	
	promise1.then(function value() {
		console.log(value());
	})