$(function(){    
    // 设置轮播图切换时间
    $('#myCarousel').carousel({
        interval: 3000
    });
    //点击服务时隐藏文字
    $('.containerBox').delegate('#serv_input','click',function(){
        var serv_check = $('#serv_input').is(':checked');
        if(serv_check){
            setTimeout(() => {
                $(this).siblings('#serv_label').css('display','none');
            },8);
        }else{
            setTimeout(() => {
                $(this).siblings('#serv_label').css('display','');
            }, 300);
        }
    })

    // 鼠标移动到图片发生样式改变
    $('.layer_body_list a').each(function(){
        $(this).mouseenter(function(){
            $(this).parent().css({background:'#D5CABD',borderRadius:'20px',boxShadow:'10px 10px 5px #888888'});
        }).mouseleave(function(){
            $(this).parent().css({background:'',borderRadius:'0',boxShadow:''});
        })
    })

    
})

