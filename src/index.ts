import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as Router from 'koa-router';

const app = new Koa();
const router = new Router();
const port = 80;
// route
router.get('/:id', async (ctx) => {
  const mes = 'Hello koa-router path in "/"';
  console.info(ctx.params);
  ctx.body = mes;
});

router.get('/name/:name', async (ctx) => {
  const mes = `Hello ${ctx.params.name} path in "/name"`;
  console.info(ctx.params);
  ctx.body = mes;
});

app
  .use(logger())       // 當middleware紀錄
  .use(router.routes())  // 先檢查路徑，koa-router 會內建自訂next
  .use(router.allowedMethods()) // 允許router以什麼方式跟server溝通
  .listen(port, () => {
    console.info('Server started at port:', port);
  });