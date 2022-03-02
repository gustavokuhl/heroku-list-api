const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    // app.use(bodyParser.json());
    
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        next();
    })

    consign()
        .include('controllers')
        .into(app);

    return app;
}