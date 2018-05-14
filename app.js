const Koa = require('koa')
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const controller = require('./controller');
const templating = require('./templating');
const app = new Koa();

app.use(async(ctx, next) => {
    //console.log('${ctx.request.method} ${ctx.request.url}');
    console.log(`${ctx.request.method} ${ctx.request.url}`)
    await next();
})

app.use(async(ctx, next) => {
    const start = new Date().getTime();
    await next();
    const ms = new Date().getTime() - start;
    console.log(`耗时: ${ms} ms`);
})
app.use(static(__dirname + "/static"));
app.use(bodyParser());
app.use(templating('views', {
    noCache: false,
    watch: false
}))
app.use(controller());
//app.use(router.routes());
app.listen(3000);



console.log('app started at port 3000...')