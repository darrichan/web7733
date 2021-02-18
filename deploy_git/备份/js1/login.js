// ajax调用登录请求

$(function() {
    var layer = layui.layer
        // $('#form1').on('submit', funciton(res))
    $('#loginbtn').on('click', function(e) {
        // 阻止默认提交行为
        e.preventDefault()
        console.log($('#name').val());
        console.log($('#password').val());

        $.ajax({
            url: 'http://101.133.165.226:3000/api/login',
            method: 'POST',
            // 快速获取表单中的数据
            data: {
                username: $('#name').val(),
                password: $('#password').val()
            },
            success: function(res) {
                // console.log(res);
                if (res.status !== 0) {
                    return layer.msg('登录失败！')
                }
                layer.msg('登录成功！')
                    // 将登录成功得到的 token 字符串，保存到 localStorage 中
                localStorage.setItem('token', res.token)
                    // 跳转到后台主页
                location.href = './index.html'
            }
        })
    })
})