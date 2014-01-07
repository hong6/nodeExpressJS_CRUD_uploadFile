var express = require('express'),
    path = require('path'),
    home = require('./routes/home.js'),
    customer = require('./routes/customer.js');

var app = express();
app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');    
    app.use(express.bodyParser({ keepExtensions: true, uploadDir: path.join(__dirname, '/pictures')})); //add midware for post and file upload etc.
    app.use(express.methodOverride()); //add midware for http verbs other than GET and POST
    app.use(express.static(path.join(__dirname, 'public')));
});

//routes
app.get('/', home.index);
app.get('/contact', home.contact);
app.get('/customer', customer.index);
app.get('/customer/create', customer.create);
app.get('/customer/details/:id', customer.details);
app.post('/customer/create', customer.createCustomer);
app.get('/customer/edit/:id', customer.edit);
app.get('/customer/picture/:id', customer.picture);
app.post('/customer/edit/:id', customer.editCustomer);
app.delete('/customer/delete/:id', customer.delete);

app.locals.clockData = {datetime: new Date().toUTCString()};

app.listen(3000);


//npm uninstall express -g
//npm install express
//npm install jade (or npm install -d)

