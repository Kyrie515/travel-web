// 定义了一些匹配表单填写的方法
// 方法需传入jquery对象作为this参数
// 返回匹配结果值flag，类型为：true/false

// 匹配用户名
function checkUsename(__this){
    // 获取用户名
    var username = __this.val();
    // 定义正则表达式
    var reg_username = new RegExp("^[a-zA-Z_][a-zA-Z0-9_-]{5,12}$","g")
    // 判断
    var flag = reg_username.test(username);
    // 提示信息
    if(flag){
        __this.css('border','none');
        // 添加正确标签
        __this.parent('td').siblings('.td_flag')[0].innerHTML = '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>';
        // 移除错误提示CSS类
        __this.parent().parent().removeClass('tips');
    }else{
        // 为input标签添加边框
        __this.css('border','2px solid red');
        // 添加错误标签
        __this.parent('td').siblings('.td_flag')[0].innerHTML = '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>';
        // 添加错误提示CSS类
        __this.parent().parent().addClass('tips').attr('err-tips','用户名格式错误');
    }
    return flag;
}

// 匹配密码
function checkPassword(__this){
    var password = __this.val();
    // 定义正则表达式
    var reg_password = new RegExp("^[a-zA-Z0-9_-]{6,18}$","g")
    // 判断
    var flag = reg_password.test(password);
    // 提示信息
    if(flag){
        __this.css('border','none');
        __this.parent('td').siblings('.td_flag')[0].innerHTML = '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>';
        __this.parent().parent().removeClass('tips');
    }else{
        __this.css('border','2px solid red');
        __this.parent('td').siblings('.td_flag')[0].innerHTML = '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>';
        __this.parent().parent().addClass('tips').attr('err-tips','密码格式错误');
    }
    return flag;
}

// 匹配邮箱
function checkEmail(__this){
    var email = __this.val();
    // 定义正则表达式
    var reg_email = new RegExp("^\\w+(\.\\w+)*@\\w+(\.\\w)+$","g");
    // var reg_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g;
    // 判断
    var flag = reg_email.test(email);
    // 提示信息
    if(flag){
        __this.css('border','none');
        __this.parent('td').siblings('.td_flag')[0].innerHTML = '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>';
        __this.parent().parent().removeClass('tips');
    }else{
        __this.css('border','2px solid red');
        __this.parent('td').siblings('.td_flag')[0].innerHTML = '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>';
        __this.parent().parent().addClass('tips').attr('err-tips','邮箱格式错误');
    }
    return flag;
}

// 匹配电话号码
function checkTel(__this){
    var tel = __this.val();
    // 定义正则表达式
    var reg_tel = new RegExp("^1[3|4|5|8][0-9]{9}$","g")
    // 判断
    var flag = reg_tel.test(tel);
    // 提示信息
    if(flag){
        __this.css('border','none');
        __this.parent('td').siblings('.td_flag')[0].innerHTML = '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>';
        __this.parent().parent().removeClass('tips');
    }else{
        __this.css('border','2px solid red');
        __this.parent('td').siblings('.td_flag')[0].innerHTML = '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>';
        __this.parent().parent().addClass('tips').attr('err-tips','电话号码格式错误');
    }
    return flag;
}

// 匹配出生日期
function checkBirthday(__this){
    var birthday = __this.val();
    // // 定义正则表达式
    // var reg_birth = new RegExp("^1[3|4|5|8][0-9]{9}$","g")
    // 判断
    // 提示信息
    if(flag){
        __this.css('border','none');
        __this.parent('td').siblings('.td_flag')[0].innerHTML = '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>';
        __this.parent().parent().removeClass('tips');
    }else{
        __this.css('border','2px solid red');
        __this.parent('td').siblings('.td_flag')[0].innerHTML = '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>';
        __this.parent().parent().addClass('tips').attr('err-tips','出生日期未正确填写');
    }
    return flag;
}
