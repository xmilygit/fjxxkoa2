var fn_index = async(ctx, next) => {
    ctx.render('index.html', {
            title: 'welcome'
        })
        //ctx.response.body = "<h1>test</h1>"
}

var fn_signin = async(ctx, next) => {
    let
        name = ctx.request.body.name || "xmily",
        password = ctx.request.body.password || "guest";
    console.log(`signin with name: ${name} , password: ${password}`);
    if (name === 'admin' && password === 'admin') {
        ctx.render('signin-ok.html', {
            title: '登录成功',
            name: name
        })
    } else {
        ctx.render('signin-failed.html', {
            title: "登录失败"
        })
    }
}

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
};