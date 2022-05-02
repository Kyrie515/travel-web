// 定义了表单的入口操作
// JS实现input标签失去焦点验证
// 提交表单前验证
// 验证通过发送AJAX请求

$(function(){
    // 输入框失焦时判断
    $('#username').blur(function(){
        checkUsename($(this));
    });
    $('#password').blur(function(){
        checkPassword($(this));
    });
    $('#email').blur(function(){
        checkEmail($(this));
    });
    $('#tel').blur(function(){
        checkTel($(this));
    });
    // $('#birthday').blur(function(){
    //     checkBirthday($(this));
    // })

    // 提交表单时验证
    $('#registerForm').submit(function(){
        // 对全部数据进行验证
        var namechecked = checkUsename($('#username'));
        var passwordchecked = checkPassword($('#password'));
        var emailchecked = checkEmail($('#email'));
        var telchecked = checkTel($('#tel'));
        // var birthchecked = checkBirthday('#birthday')

        // 如果验证通过，则发送ajax请求，提交表单数据
        if(namechecked && passwordchecked && emailchecked && telchecked){
            $.post('registerServlet',$(this).serialize(),function(data){
                // 处理服务器响应的数据
            })
        }
        
        //跳转页面

        // return namechecked && passwordchecked && emailchecked && telchecked;

        return false;
    })
})