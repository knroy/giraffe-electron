const express = require('express');

const startServer = () => {
    const app = express();

    app.use(express.static(__dirname + '/node'));
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/index.html');
    });

    app.get('/microsoft-teams/authentication', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    })

    app.get('/connections/ecohub/authentication', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    })

    app.get('/connections/outlook/authentication', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    })

    app.listen(4200, () => {
        console.log('application starting');
    });

    return app;
}

module.exports = {
    startServer: startServer
}