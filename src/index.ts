import * as koa from 'koa';

const app = new koa();
const port = 3000;

app.use(async (ctx, next) => {
    // 要求資料
    fetchData((err, data) => {
        if (err) {
            console.error(err);
        } else {
            console.info(data);
        }
    });
    //           ↑ 填入你的 callback function
    // 並在 callback function 中，利用 console.log 印出取得的 data
});

function fetchData(callback: (error: any, data: number) => void) {
    // 模擬網路傳輸，一秒後才會呼叫你的 callback
    setTimeout(() => {
        callback(null, 123);
    }, 1000);
}

app.listen(port, () => {
    console.info('Server started at port:', port);
});