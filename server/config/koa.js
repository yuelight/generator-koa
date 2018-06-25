import Koa from 'koa';
import { Route } from 'koa-decorators-router';
import json from 'koa-json';
import onerror from 'koa-error';
import bodyparser from 'koa-bodyparser';
import logger from 'koa-logger';
import chalk from 'chalk'

import env from './env';
import Db from './mongo';

const app = new Koa();
const router = new Route({
	app,
	apiDirPath: `${__dirname}/../app/controller`
});

const db = new Db();
db.init();

onerror(app);
app.use(bodyparser({
	enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
app.use(require('koa-static')(`${__dirname}/../public`));

app.use(async (ctx, next) => {
	const start = new Date();
	await next();
	const ms = new Date() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

router.registerRouters();

app.on('error', (err, ctx) => {
	console.error('server error', err, ctx);
});

app.listen(env.port, () => {
	console.log(`Server is running at ${chalk.green(env.base)}`);
});

export default app;