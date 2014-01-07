exports.index = function (req, res) {
    res.render('home/index', { title: 'Home Page', firstParagraph: 'Welcome to the home page' });

};

exports.contact = function (req, res) {
	res.render('home/contact', {email:"liuxh31@gmail.com", telephone:"1-800-EXPRESS"});
};
