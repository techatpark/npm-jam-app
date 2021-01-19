(function () {
	let login = document.getElementById('login');
	let logout = document.getElementById('logout');
	if (localStorage.getItem('TOKEN')) {
		login.style.display = 'none';
	} else {
		logout.style.display = 'none';
	}
    logout.addEventListener('click', function () {
        localStorage.clear();
        logout.style.display = 'none';
        login.style.display = 'block';
	});
})();
