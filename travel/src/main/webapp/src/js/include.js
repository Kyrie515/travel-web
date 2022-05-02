$(function(){
    $.get('header.html',function(data){
        $('#search_bar').html(data);
    })
})