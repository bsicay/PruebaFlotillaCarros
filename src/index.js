const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const flash = require('connect-flash');
const session = require('express-session');
const validator = require('express-validator');
const passport = require('passport');
const MySQLStore = require('express-mysql-session');
const bodyParser = require('body-parser');
const { database } = require('./keys');


//inicializaciones
const app = express();
require('./lib/passport');

//configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
  }))
app.set('view engine', 'hbs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(session({
    secret: 'vehicleSession',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(validator());



// variables globales
app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');
    app.locals.user = req.user;
    next();
});

//routes
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/vehicles', require('./routes/vehicles'));

//public
app.use(express.static(path.join(__dirname, 'public')));

//iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})