let db = 'mongodb://localhost/test';
let port = 3000;

const host = process.env.HOST || 'localhost';
const env = process.env.NODE_ENV || 'development';

if (env !== 'development') {
	db = 'mongodb://localhost/prod';
	port = 4000;
}

const base = `http://${host}:${port}`;

export default {
	env,
	host,
	port,
	db,
	base
}