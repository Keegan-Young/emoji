//  Declare Dependencies
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

//  Instantiate Express
const app = express();

//  Set port number
const PORT = process.env.PORT || 5000;

// use body parser middleware
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//  Set view engine
app.set('view engine', 'hbs');

//  Set configurations
app.engine('hbs', handlebars ({
    layoutsDir: __dirname + '/views/layouts',
    extname:    'hbs'
}));

//  Define static assets folder
app.use(express.static('public'));

// Set handlebar index GET route
app.get('/', (req, res) => {
	res.render('index');	
});

// Set handlebar login GET route
app.get('/login', (req, res) => {
	res.render('login', {qs: req.query});		
});

// Set handlebar login POST route
app.post('/login', (req, res) => {
    if ((req.query.username === "admin") &&
        (req.query.password === "password")) {
        response.writeHead(302, {'Location': '/dashboard'});
        response.end();
    }

    //res.render('login');
});

// Set handlebar register GET route
app.get('/register', (req, res) => {
	res.render('register');		
});

//  Set handlebar register POST route
app.post('/register', (req, res) => {
    res.render('register');
});	

//  Render Dashboard Page
app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

//  File Not Found Page
app.get('*', (req, res) => {
    res.render('filenotfound');
});

app.listen(PORT, () => {
    console.log(`App now running on port ${PORT}`);
});