const userLogin = async (myBody) => {
	console.log(myBody);
	const response = await fetch('https://run.mocky.io/v3/eb02fb17-ccd5-423b-8f60-5b7f2bf79493', {
		method: 'POST',
		body: JSON.stringify(myBody), // string or object
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await response.json();
	return data;

	//extract JSON from the http response
	// do something with myJson
};
window.onload = (event) => {
	const loginForm = document.querySelector('.form-signin>form');

	loginForm.onsubmit = async function (event) {
		event.preventDefault();

		// Where did the event happend
		const form = event.currentTarget;

		// Collect Data from Form
		const userName = form.elements['userName'].value;
		const password = form.elements['password'].value;
		const data = await userLogin({ username: userName, password: password });
		localStorage.setItem('TOKEN', data.token);
		// Perform Logic
		if (data.token) {
			window.location.href = '/';
		} else {
			alert('Invalid User');
		}

		return false;
	};
};
