import * as koa from 'koa';

const app = new koa();
const port = 3000;

app.use(async (ctx, next) => {
    // 要求資料
    fetchDataPromise()
        .then((data) => plusPromise(data))
        .then((ans) => console.info(ans));
});

function fetchDataPromise() {
    return new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(123);
        }, 1000);
    });
}

function plusPromise(data: number) {
    const ans = data + 1;
    return new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(ans);
        }, 500);
    });
}

app.listen(port, () => {
    console.info('Server started at port:', port);
});