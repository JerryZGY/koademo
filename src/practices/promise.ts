import * as Koa from 'Koa';

const app = new Koa();
const port = 3000;

app.use(async () => {
  fetchData()
    .then(test)
    .then(test1);
    // .then((data) => plus(data)) // 收到promise<125>丟給自訂fn的變數data,在自訂的fn裡呼叫plus()
    // .then((ans) => console.info(ans)); // 收到promise<126>丟給自訂fn的變數ans,在自訂的fn裡印出ans

});
function test(data: number) {
  return plus(data);
}
function test1(ans: number) {
  console.info(ans);
}

function fetchData() {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(125);
    }, 1000);
  });
}
function plus(num: number) {
  const ans = num + 1;
  return new Promise<number>((resolve) => {
    resolve(ans);
  });
}
app.listen(port, () => {
  console.info('Server started at port:', port);
});
