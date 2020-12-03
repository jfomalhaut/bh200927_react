const mysql = require('mysql');
const dotenv = require('dotenv');

let conn;
let sql;

dotenv.config();

const info = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PWD,
	database: process.env.DB_NAME,
};

// about handleDisconnect
function handleDisconnect() {
	conn = mysql.createConnection(info);
	conn.connect(function(err, result, fields) {
		if (err) {
			console.log('err message : ' + err);
			setTimeout(handleDisconnect, 2000);
		}
	});

	conn.on('error', function(err) {
		console.log('db error : ' + err);
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect();
		} else {
			throw err;
		}
	});
}

// about disconnecting
handleDisconnect();

module.exports.getItem = (req, res) => { 
	sql = `SELECT * FROM items`;
	conn.query(sql, (err, data) => {
		if (err) {
			res.send({ result: false, error: err });
		} else {
			res.send({ result: true, data });
		}
	});
};

module.exports.insertItem = (req, res) => {
	const { body: { name, price } } = req;
	sql = `INSERT INTO items(name, price) values(?, ?)`;
	conn.query(sql, [name, price], (err) => {
		if (err) {
			res.send({ result: false, error: err });
		} else {
			res.send({ result: true });
		}
	});
};