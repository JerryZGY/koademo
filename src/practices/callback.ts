import * as koa from 'koa';

const app = new koa();
const port = 3000;

app.use(async () => {
    fetchData((error, data) => {
        if (error) {
            console.info(error);
        } else {
            console.info(data);
        }
    });
});

function fetchData(callback: (error: any, data: number) => void) {
    setTimeout(() => {
        callback(null, 123);
    }, 5000);
}

app.listen(port, () => {
    console.info('Server started at port:', port);
});
