const host = process.env.HOST || 'localhost';
const env = process.env.NODE_ENV || 'development';

export const db = env === 'development' ? 'mongodb://localhost/test' : 'mongodb://localhost/prod';
export const port = env === 'development' ? 8081 : 4000;

export const base = `http://${host}:${port}`;
