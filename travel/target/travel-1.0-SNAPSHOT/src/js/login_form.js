$(function(){
    // 提交表单时验证
    $('#login_form').submit(function(){
        $.post("loginServlet",$('#login_form').serialize(),function(data){
            // data: {flag:false, errorMsg:''}
            if(data.flag){
                location.href = "index.html";
            }else{
                // 登录失败

            }
        })
    })
})