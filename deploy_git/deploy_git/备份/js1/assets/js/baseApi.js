$.ajaxPrefilter(function(options) {

    // options.url = 'http://ajax.frontend.itheima.net' + options.url

    // options.url = 'http://127.0.0.1:3000' + options.url

    // options.url = 'http: //ajax.frontend.itheima.net' + options.url
    options.url = 'http://101.133.165.226:3000' + options.url


    // console.log(options.url);
    // 同一为有权限的接口设置请求头
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token')
        }
    }
    options.complete = function(res) {
        if (res.responseJSON.status === 1 && res.responseJSON.message == "身份认证失败！") {
            localStorage.removeItem('token')
            location.href = './login.html'
        }
    }
})