$(function () {
    //设置轮播图图片切换间隔
    $('#banner').carousel({
        interval: 2000
    });
    //给我们的服务部分添加事件
    $('.our-serve').delegate('li', 'mouseover', function () {
        $('.our-serve li').removeAttr('class');
        $(this).attr('class', 'actively');
    });

    //给我们的客户部分添加事件
    var imgGray = ["img/client1-gray.png", "img/client2-gray.png", "img/client3-gray.png", "img/client4-gray.png", "img/client5-gray.png", "img/client6-gray.png", "img/client7-gray.png", "img/client8-gray.png", "img/client9-gray.png", "img/client10-gray.png", "img/client11-gray.png", "img/client12-gray.png"];
    var imgColor = ["img/client1.png", "img/client2.png", "img/client3.png", "img/client4.png", "img/client5.png", "img/client6.png", "img/client7.png", "img/client8.png", "img/client9.png", "img/client10.png", "img/client11.png", "img/client12.png"];
    $('.our-client').delegate('img', 'mouseover', function () {
        $(this).attr('src', imgColor[$(this).index('.client-logo')]);
    });
    $('.our-client').delegate('img', 'mouseout', function () {
        $(this).attr('src', imgGray[$(this).index('.client-logo')]);
    });

    //给右侧固定导航栏添加事件
    $(window).on('scroll', function () {
        if ($(this).scrollTop() < 200) {
            $('.right-slide li:last-of-type').css('display', 'none');
        } else {
            $('.right-slide li:last-of-type').css('display', 'inline-block');
        }
    });
    $('.right-slide li:last-of-type').on('click', function () {
        $('body,html').animate({
            'scrollTop': 0
        }, 500);
    });
    //给手机端底部箭头添加事件
    $('.bottom-arrow').on('click', function () {
        $('body,html').animate({
            'scrollTop': 0
        }, 500);
    })
    //给留言框添加事件
    $('#btn').on('click', function () {
        if ($(this).hasClass('icon-chuangkouzuixiaohua')) {
            $(this).parent().siblings().css('display', 'none');
        } else {
            $(this).parent().siblings().css('display', 'block');
        }
        $(this).toggleClass('icon-chuangkouhuanyuan icon-chuangkouzuixiaohua');
    });

});