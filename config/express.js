const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const compress = require('compression');

module.exports = () => {
    
    if (process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    }
    else if(process.env.NODE_ENV === 'production'){
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({ //only parse body when url is encoded
        extended: true
    }));
    
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.set('views', 'views'); //folder name with ejs templates
    app.set('view engine', 'ejs'); //use ejs view engine
    app.use('/', require('../routes/index.server.routes.js')); //path to routes
    app.use('/public/img', express.static('./public/img'));
    app.use(express.static("./node_modules"));

    return app;
};