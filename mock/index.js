const Koa = require('koa');
const koaBody = require('koa-body');
const router = require('./router');

const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
    console.log('mock success >>>>', ctx.url);
  } catch (err) {
    console.log('mock err >>>>', err);
  }
})

app.use(koaBody());
app.use(router.routes());

app.listen(5500);
console.log('mock 服务已经启动，正在监听5500端口 >>>>>>>')
