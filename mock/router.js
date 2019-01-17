const KoaRouter = require('koa-router');
const Mock = require('mock');
const api = require('./modules');

const router = new KoaRouter();

Object.keys(api).forEach((route) => {
  const [url = '/', method = 'get'] = route.split(':');
  let validMethod = router[method.toLocaleLowerCase()];
  if (typeof validMethod !== 'function') {
    validMethod = router.get;
  }
  validMethod.call(router, url, (ctx) => {
    const mockFunc = api[route];
    if (typeof mockFunc === 'function') {
      ctx.body = Mock.mock(mockFunc({ ...ctx.query }));
    } else {
      ctx.body = Mock.mock(mockFunc);
    }
  });
})

module.exports = router;
