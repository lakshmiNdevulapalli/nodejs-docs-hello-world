var promise1 = new Promise(function(resolve, reject) {
	etTimeout(function() {
	  resolve('foo');
	}, 300);
  });