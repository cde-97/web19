$(function () {
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