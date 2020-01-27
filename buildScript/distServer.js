import express from 'express';
import path from 'path';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
    // Hard coding for simplicity. Pretend this hits a real database.
    res.json([
        { "id": 1, "firstName": "Gilinho", "lastName": "Hdz Gtz", "email": "ghernandez.9002" },
        { "id": 2, "firstName": "TiroLoco", "lastName": "McGraw", "email": "tiroloco.1990" },
        { "id": 3, "firstName": "Bugs Bunny", "lastName": "Lonney tony", "email": "bugs.buny" },
    ]);
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});