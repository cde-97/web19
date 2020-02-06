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
    //签证咨询左边内容
    var contArr = [
        {
            'imgUrl': 'img/20170509103625563.jpg',
            'title': '92名中国民工被欠薪受困塞班岛 华裔中介扣钱逃匿',
            'date': '时间：2017-05-09',
            'cont': '他们大部分来自东北，在去年10月份时，其所在城市的劳务中介公司找到他们，介绍了塞班岛的工作，中介给他们开出每天工作8小时日薪300元、如果加班每小时50元的待遇。民工称他们当时也没',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },
        {
            'imgUrl': 'img/20170508061916221.png',
            'title': '2017年赴美签证新规定',
            'date': '时间：2017-05-08',
            'cont': '美国国务院领事事务局2016年10月6日公告，自2016年11月1日开始，申请美国护照或签证，要使用没有戴眼镜的照片。',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },
        {
            'imgUrl': 'img/20170508052848613.jpg',
            'title': '美国有多少人缴纳个人所得税及其它',
            'date': '时间：2017-05-08',
            'cont': '前几天我们有一篇博文介绍了美国个人所得税税率，不少网友提出许多有关美国个税税收的问题，这里就集中回答。由于个税牵涉到联邦所得税以及',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },
        {
            'imgUrl': 'img/20170414112021996.jpg',
            'title': '多国签证利好频出，带火春节出境游',
            'date': '时间：2017-4-15',
            'cont': '近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },
        {
            'imgUrl': 'img/20170414112021996.jpg',
            'title': '多国签证利好频出，带火春节出境游',
            'date': '时间：2017-4-15',
            'cont': '近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },
        {
            'imgUrl': 'img/20170414112021996.jpg',
            'title': '多国签证利好频出，带火春节出境游',
            'date': '时间：2017-4-15',
            'cont': '近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },
        {
            'imgUrl': 'img/20170414112021996.jpg',
            'title': '多国签证利好频出，带火春节出境游',
            'date': '时间：2017-4-15',
            'cont': '近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },
        {
            'imgUrl': 'img/20170414112021996.jpg',
            'title': '多国签证利好频出，带火春节出境游',
            'date': '时间：2017-4-15',
            'cont': '近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },
        {
            'imgUrl': 'img/20170414112021996.jpg',
            'title': '多国签证利好频出，带火春节出境游',
            'date': '时间：2017-4-15',
            'cont': '近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },
        {
            'imgUrl': 'img/20170414112021996.jpg',
            'title': '多国签证利好频出，带火春节出境游',
            'date': '时间：2017-4-15',
            'cont': '近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },
        {
            'imgUrl': 'img/20170414112021996.jpg',
            'title': '多国签证利好频出，带火春节出境游',
            'date': '时间：2017-4-15',
            'cont': '近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },
        {
            'imgUrl': 'img/20170414112021996.jpg',
            'title': '多国签证利好频出，带火春节出境游',
            'date': '时间：2017-4-15',
            'cont': '近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },
        {
            'imgUrl': 'img/20170414112021996.jpg',
            'title': '多国签证利好频出，带火春节出境游',
            'date': '时间：2017-4-15',
            'cont': '近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },
        {
            'imgUrl': 'img/20170414112021996.jpg',
            'title': '多国签证利好频出，带火春节出境游',
            'date': '时间：2017-4-15',
            'cont': '近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },
        {
            'imgUrl': 'img/20170414112021996.jpg',
            'title': '多国签证利好频出，带火春节出境游',
            'date': '时间：2017-4-15',
            'cont': '近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },
        {
            'imgUrl': 'img/20170414112021996.jpg',
            'title': '多国签证利好频出，带火春节出境游',
            'date': '时间：2017-4-15',
            'cont': '近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },
        {
            'imgUrl': 'img/20170414112021996.jpg',
            'title': '多国签证利好频出，带火春节出境游',
            'date': '时间：2017-4-15',
            'cont': '近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },
        {
            'imgUrl': 'img/20170414112021996.jpg',
            'title': '多国签证利好频出，带火春节出境游',
            'date': '时间：2017-4-15',
            'cont': '近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },
        {
            'imgUrl': 'img/20170414112021996.jpg',
            'title': '多国签证利好频出，带火春节出境游',
            'date': '时间：2017-4-15',
            'cont': '近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间',
            'autor': '作者：中岚签证',
            'source': 'clantrip.com'
        },


    ];
    for(var i=0,j=0;i<contArr.length&&j<10;i++,j++){
        var $media=$('<div class="media"></div>');
        var $mediahead=$('<div class="media-heading media-left"></div>');
        var $img=$('<img class="img-responsive img-thumbnail media-object">');
        var $mediabody=$('<div class="media-body media-left"></div>');
        var $h3=$("<a href='' class='h4'></a>");
        var $view=$('<span class=" pull-right"><i class="glyphicon glyphicon-eye-open"></i>0</span>')
        var $p1=$('<p></p>');
        var $p2=$('<p></p>');
        var $p3=$('<p></p>');
        var $span=$('<span></span>')
        var $btn=$("<a href='' class='pull-right'>[详情]</a>")
        $img.attr('src',contArr[i]['imgUrl']).appendTo($mediahead);
        $mediahead.appendTo($media);
        $h3.text(contArr[i]['title']).appendTo($mediabody);

        $p1.text(contArr[i]['date']).appendTo($mediabody);
        $view.appendTo($p1);
        $p2.text(contArr[i]['cont']).appendTo($mediabody);

        $p3.text(contArr[i]['autor']).appendTo($mediabody);
        $span.text(contArr[i]['source']).appendTo($p3);
        $btn.appendTo($p3);
        $mediabody.appendTo($media);
        $media.insertBefore($('.pagebtn'))
    }
    $('.pagebtn li:nth-of-type(3)').on('click',function (e) {
        e.preventDefault();
        console.log(123)
        $('.pagebtn li').removeClass('active');
        $(this).addClass('active');
        $('.right-content').children().is('.media').empty();
        // for(var i=10,j=0;i<contArr.length&&j<1;i++,j++){
        //     var $media=$('<div class="media"></div>');
        //     var $mediahead=$('<div class="media-heading media-left"></div>');
        //     var $img=$('<img class="img-responsive img-thumbnail media-object">');
        //     var $mediabody=$('<div class="media-body media-left"></div>');
        //     var $h3=$("<a href='' class='h4'></a>");
        //     var $view=$('<span class=" pull-right"><i class="glyphicon glyphicon-eye-open"></i>0</span>')
        //     var $p1=$('<p></p>');
        //     var $p2=$('<p></p>');
        //     var $p3=$('<p></p>');
        //     var $span=$('<span></span>')
        //     var $btn=$("<a href='' class='pull-right'>[详情]</a>")
        //     $img.attr('src',contArr[i]['imgUrl']).appendTo($mediahead);
        //     $mediahead.appendTo($media);
        //     $h3.text(contArr[i]['title']).appendTo($mediabody);
        //     $p1.text(contArr[i]['date']).appendTo($mediabody);
        //     $view.appendTo($p1);
        //     $p2.text(contArr[i]['cont']).appendTo($mediabody);
        //     $p3.text(contArr[i]['autor']).appendTo($mediabody);
        //     $span.text(contArr[i]['source']).appendTo($p3);
        //     $btn.appendTo($p3);
        //     $mediabody.appendTo($media);
        //     $media.insertBefore($('.pagebtn'))
        // }

    })
    //签证资讯侧边栏
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 71) {
            var leftHeight = $(window).height() - 71;
            $('.leftBox').css({
                'position': 'fixed',
                'top': 71,
                'height': leftHeight,

            })
        } else {
            var leftHeight = $(window).height() - 127;
            $('.leftBox').css({
                'position': 'static',
                'height': leftHeight,
            })
        }
    });
});