import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as logger from 'koa-logger';

const app = new Koa();
const router = new Router();
const port = 80;

router.get('/', async (ctx) => {
  ctx.body = '[GET "/"] Hello koa-router!';
});

// 利用 Router 帶入參數並印出訊息
router.get('/hello/:name', async (ctx) => {
  const name = ctx.params.name;
  const msg = `[GET "/hello/:name"] Hello ${name}!`;
  ctx.body = msg; // => [GET "/hello/:name"] Hello Joanna!
});

// 套用 Router 至 App
app
  .use(logger())
  .use(router.routes()) // 檢查 Router 中的所有路由，若符合則執行該 middleware
  .use(router.allowedMethods()) // 針對不合路由的要求回傳指定訊息
  .listen(port, () => console.info(`Server started at port ${port}`));