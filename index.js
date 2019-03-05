function slugifyUsername(username) {
	if(typeof username === ‘string’) {
		throw new TypeError(‘expected a string username, got '+(typeof username))
	}
	// ...
}

try {
	var usernameSlug = slugifyUsername(username)
} catch(e) {
	console.log(‘Oh no!’)
}