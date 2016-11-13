"use strict";

/** IMPORTS **/
const express       = require('express'),
    bodyParser      = require('body-parser'),
    fs              = require('fs');

/** SET UP **/
const PORT          = process.env.PORT || 8080;
global.PACKAGE_NAME = "marketplace-instagram-package";
global.REDIRECT_URI = `http://localhost:8080/api/${PACKAGE_NAME}/callback`;
//global.REDIRECT_URI = require('os').hostname() + `/api/${PACKAGE_NAME}/callback`;

const app = express();
app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));

app.all(`/api/${PACKAGE_NAME}`, require('./api/metadata.js').do);
app.all(`/api/${PACKAGE_NAME}/getAccessToken`, require('./api/auth.js').auth);
app.all(`/api/${PACKAGE_NAME}/callback`, require('./api/auth.js').callback);

fs.readdirSync('api/').forEach((file) => {
    try {
        var type  = file.substring(file.lastIndexOf('.') + 1),
	    [method, 
	    filename] = file.split('_'),
            route = filename.substring(0, filename.length - type.length - 1);

	   if(!/post|get|put|delete/.test(method) || !type == 'js') return;
		
	   app[method](`/api/${PACKAGE_NAME}/${route}`, require(`./api/${file}`));

    } catch(e) { console.log(e); return; }
});

/** START LISTENING **/
app.listen(PORT);
module.exports = app;
