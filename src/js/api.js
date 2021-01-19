const userLogin = async (myBody) => {
	console.log(myBody);
	const response = await fetch('/api/login', {
		method: 'POST',
		body: JSON.stringify(myBody), // string or object
		headers: {
			'Content-Type': 'application/json',
		},
	});
	if (response.statusCode == 200) {
		return { token: 'abcd' };
	} else {
		throw new Error('Invalid Request');
	}
	//extract JSON from the http response
	// do something with myJson
};
