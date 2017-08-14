import * as koa from 'koa';

const app = new koa();
const port = 3000;

app.use(async () => {
  const result = await handle();
  console.info(result);
});
async function handle() {
  const data = await fetchData();
  const ans = await plus(data);
  return ans;
}

function plus(data: number) {
  const answer = data + 1;
  return new Promise<number>((resolve) => {
    resolve(answer);
  });
}

function fetchData() {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(125);
    }, 5000);
  });
}

app.listen(port, () => {
  console.info('Server started at port:', port);
});