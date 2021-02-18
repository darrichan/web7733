$(function() {
        var layer = layui.layer
        getUsersInfo()
        $('#btnLogout').on('click', function() {
            layer.confirm('确定退出登录？', { icon: 3, title: '提示' }, function(index) {
                localStorage.removeItem('token')
                location.href = './login.html'
                    // 关闭confirm
                layer.close(index);
            });
        })
    })
    // 获取用户的基本信息
function getUsersInfo() {
    // console.log({
    //     Authorization: localStorage.getItem('token')
    // });
    $.ajax({
        method: 'GET',
        // url: 'http://ajax.frontend.itheima.net/my/userinfo',
        url: '/my/userinfo',
        // headers: {
        //     Authorization: localStorage.getItem('token') || ''
        // },
        success: function(res) {
            if (res.status !== 0) {
                return layui.layer.msg('获取用户信息失败！')
            }
            renderAvatar(res.data)
        },

    })
}
// 渲染用户头像
function renderAvatar(user) {
    // console.log(user);
    var name = user.nickname || user.username
    $('#welcome').html('欢迎&nbsp;&nbsp' + name)
    if (user.user_pic !== null) {
        $('.layui-nav-img').attr('src', user.user_pic).show()
        $('.text-avatar').hide()
    } else {
        $('.layui-nav-img').hide()
        var first = name[0].toUpperCase()
        $('.text-avatar').html(first).show()
    }
}