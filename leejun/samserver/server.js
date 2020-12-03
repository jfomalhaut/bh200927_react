const express = require('express');
const http = require('http');
const app = express();
const api = require('./api/api');

app.get('/', (req, res) => {
	res.send('ok');
});

app.get('/samyang', (req, res) => {
	res.send('samyang');
});

app.use('/api', api);

const server = http.Server(app);
server.listen(80, () => {
	console.log('Start Node server Port Number : ' + 80);
});