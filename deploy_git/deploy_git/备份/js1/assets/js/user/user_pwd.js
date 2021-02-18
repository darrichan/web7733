$(function() {
    var form = layui.form

    form.verify({
            pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
            samePwd: function(value) {
                if (value === $('[name=oldPwd]').val()) {
                    return '新旧密码不能相同！'
                }
            },
            rePwd: function(value) {
                if (value !== $('[name=newPwd]').val()) {
                    return '两次密码不一致！'
                }
            }
        })
        // $('#test_btn').on('click', function(e) {
        //     e.preventDefault()
        //     $.ajax({
        //         method: "post",
        //         url: '/my/updatepwd',
        //         headers: {
        //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsInVzZXJuYW1lIjoiaGVuYzEyMzEyMyIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOm51bGwsImVtYWlsIjpudWxsLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTYxMjM0MzQ1NiwiZXhwIjoxNjEyMzc5NDU2fQ.FveZUA7jkRKPM6-gQJs-AfujuuML8SclJAezdyklgzo'
        //         },
        //         "data": {
        //             "oldpwd": '0000001',
        //             "newPwd": '000000'
        //         },
        //         success: function(res) {
        //             console.log(res);
        //         }
        //     })
        // })
    $('.layui-form').on('submit', function(e) {
        e.preventDefault()
            // console.log($(this).serialize())
        $.ajax({
            "method": "post",
            "url": "/my/updatepwd",
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layui.layer.msg(res.message)
                }
                layui.layer.msg(res.message)
                $('.layui-form')[0].reset()
            }
        })


        $('#rest_btn').on('click', function(e) {
            e.preventDefault()
            $('.layui-form')[0].reset()

        })
    })
})