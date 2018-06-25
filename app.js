const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
	require('babel-core/register');
	require('./server/config/koa');
} else {
	require('./dist/config/koa');
}