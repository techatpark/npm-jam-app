/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | Please report any issues you encounter:
 |  https://github.com/shakyShane/browser-sync/issues
 |
 | For up-to-date information about the options:
 |  https://github.com/shakyShane/browser-sync/wiki/Working-with-a-Config-File
 |
 */
// var bodyParser = require('body-parser')

// var jsonParser = bodyParser.json()
module.exports = {
	/*
     |--------------------------------------------------------------------------
     | Files to watch
     |--------------------------------------------------------------------------
     | https://github.com/shakyShane/browser-sync/wiki/options#wiki-files
     */
	files: ['dist/css/*.css', 'dist/js/*.js', 'dist/**/*.html'],
	middleware: [
		require('body-parser').json(),
		{
			route: '/api',
			handle: function (req, res, next) {
				res.setHeader('Content-Type', 'application/json');

				if (req.url == '/login') {
					if (req.method == 'POST') {
						console.log(req.body);
						const username = req.body.username;
						const password = req.body.password;
						res.statusCode = 200;
						res.data = { message: 'success', token: 'hello-world' };
						res.end("{token:'abcf-sdssd-223-sdds-kdfd'}");
					} else {
						res.statusCode = 405;
						res.end('Invalid\n');
					}
				}
				next();
			},
		},
	],
	serveStatic: ['dist'],
};
