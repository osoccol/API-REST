const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Requête reçue !');
    next();
})

app.use((req, res, next) => {
    console.log('Requête 2 !');
    next();
})

app.use((req, res, next) => {
    console.log('Requête 3 !');
    res.status(200);
    res.json({message: 'Réponse formatée'});
//    res.end();
})

module.exports = app;