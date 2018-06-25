import {
	controller,
	get
} from 'koa-decorators-router';

@controller('/')
export default class AdminController {
	@get('/')
	async r_movies(ctx, next) {
		ctx.body = {
			code: 0,
			msg: 'success'
		};
	}
}
