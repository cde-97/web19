$(function () {
    //给业务模块添加内容
    var mokuai_yewu = [
        {
            number: '01',
            title: '企业培训平台',
            enTitle: 'Enterprise training platform',
            imgSrc: 'images/business_cimg01.png',
            description01: '我们的愿景：成为中国最强、最大的中小微企业定制在线学习服务提供商!',
            description02: '我们做的是“新学习、新媒体”！',
            detail01: '“小鸟掌学”云平台是一套完整的专家知识、学习管理、监督考核系统。首先根据企业和员工的特性，抓取学习需求，然后从“平台学习库、行业学习库和企业内训库”中调出教学资源，按学习计划“推送”任务给每一位员工，并对学习过程进行监管，对学习效果进行评估，根据学习情况调整学习计划，不断优化员工的职业生涯。',
            detail02: '“小鸟掌学”主要基于智能手机平台进行学习。针对性、趣味性、创新性的学习方式有助于员工建立学习兴趣，将学习与趣味相结合，提高学习吸收率。提高员工技能，增加企业效益。',
        },
        {
            number: '02',
            title: '小鸟掌学云服务',
            enTitle: 'cloud service',
            imgSrc: 'images/business_cimg02.png',
            description01: '我们的愿景：成为中国最强、最大的中小微企业定制在线学习服务提供商!',
            description02: '我们做的是“新学习、新媒体”！',
            detail01: '“小鸟掌学”云平台是一套完整的专家知识、学习管理、监督考核系统。首先根据企业和员工的特性，抓取学习需求，然后从“平台学习库、行业学习库和企业内训库”中调出教学资源，按学习计划“推送”任务给每一位员工，并对学习过程进行监管，对学习效果进行评估，根据学习情况调整学习计划，不断优化员工的职业生涯。',
            detail02: '“小鸟掌学”主要基于智能手机平台进行学习。针对性、趣味性、创新性的学习方式有助于员工建立学习兴趣，将学习与趣味相结合，提高学习吸收率。提高员工技能，增加企业效益。',
        },
        {
            number: '03',
            title: '企业培训课程内容提供',
            enTitle: 'Enterprise training course',
            imgSrc: 'images/business_cimg03.png',
            description01: '我们的愿景：成为中国最强、最大的中小微企业定制在线学习服务提供商!',
            description02: '我们做的是“新学习、新媒体”！',
            detail01: '“小鸟掌学”云平台是一套完整的专家知识、学习管理、监督考核系统。首先根据企业和员工的特性，抓取学习需求，然后从“平台学习库、行业学习库和企业内训库”中调出教学资源，按学习计划“推送”任务给每一位员工，并对学习过程进行监管，对学习效果进行评估，根据学习情况调整学习计划，不断优化员工的职业生涯。',
            detail02: '“小鸟掌学”主要基于智能手机平台进行学习。针对性、趣味性、创新性的学习方式有助于员工建立学习兴趣，将学习与趣味相结合，提高学习吸收率。提高员工技能，增加企业效益。',
        },

    ];
    for (var i = 0; i < mokuai_yewu.length; i++) {
        var $yewuSimple = $('<div class="yewucontent-simple"></div>');
        var $number = $('<div class="number">' + mokuai_yewu[i]['number'] + '</div>');
        var $title = $('<div class="title">' + '<h1>' + mokuai_yewu[i]["title"] + '</h1>' + '<p>' + mokuai_yewu[i]["enTitle"] + '</p>' + '</div>');
        var $centerImg = $('<div class="center-img">' + '<img src="" alt="">' + '</div>');
        $centerImg.children().attr('src', mokuai_yewu[i]["imgSrc"]);
        var $simpleDescription = $('<div class="simple-description">' + '<p>' + mokuai_yewu[i]["description01"] + '</p>' + '<p>' + mokuai_yewu[i]["description02"] + '</p>' + '</div>');
        var $icon = $('<div class="icon"></div>');
        var $detail = $('<div class="detial">' + '<p>' + mokuai_yewu[i]["detail01"] + '</p>' + '<p>' + mokuai_yewu[i]["detail01"] + '</p>' + '</div>');
        $number.appendTo($yewuSimple);
        $title.appendTo($yewuSimple);
        $centerImg.appendTo($yewuSimple);
        $simpleDescription.appendTo($yewuSimple);
        $icon.appendTo($yewuSimple);
        $detail.appendTo($yewuSimple);
        $yewuSimple.appendTo($('.mokuai-yewu'));
    }
    ;
    $('.icon').eq(0).addClass('icon-guanbi');
    $('.detial').eq(0).addClass('detial-display');
    $('.icon').on('click', function () {
        if ($(this).hasClass('icon-guanbi')) {
            $(this).removeClass('icon-guanbi');
            $(this).next().stop().slideUp(300);
        } else {
            $('.icon').removeClass('icon-guanbi');
            $(this).addClass('icon-guanbi');
            $('.detial').stop().slideUp(300);
            $(this).next().stop().slideDown(300);
        }

    })

    //给团队介绍添加内容
    var mokuai_team = [
        {
            heading: 'images/team_img02.png',
            name: '张三',
            work: 'Java工程师/经理',
            description: '十年Java开发经验，精通各种java框架，对于前端也有深刻的研究。',
        },
        {
            heading: 'images/team_img03.png',
            name: '李四',
            work: '前端工程师/设计师',
            description: '牛逼的前端工程师，牛逼的设计师，伪文艺青年一枚。',
        },
        {
            heading: 'images/team_img01.png',
            name: '张三',
            work: 'Java工程师/经理',
            description: '暂未更新，敬请期待。',
        },
        {
            heading: 'images/team_img01.png',
            name: '张三',
            work: 'Java工程师/经理',
            description: '暂未更新，敬请期待。',
        },
        {
            heading: 'images/team_img01.png',
            name: '张三',
            work: 'Java工程师/经理',
            description: '暂未更新，敬请期待。',
        },
        {
            heading: 'images/team_img01.png',
            name: '张三',
            work: 'Java工程师/经理',
            description: '暂未更新，敬请期待。',
        },
    ];
    for (var i = 0; i < mokuai_team.length; i = i + 2) {
        var $li = $('<li class="team-list"></li>');
        for (var j = 0; j < 2; j++) {
            var $div1 = $('<div class="team-info"></div>');
            var $div2 = $('<div class="team-info-right"></div>');
            var $left_div = $('<div class="left-div"></div>');
            var $center_div = $('<div class="center-div"></div>');
            var $imgbox = $('<div class="imgbox"></div>')
            var $img = $('<img src="">');
            var $mask = $('<span class="mask"></span>');
            $img.attr('src', mokuai_team[i + j]['heading']);
            $img.appendTo($imgbox);
            $mask.appendTo($imgbox);
            $imgbox.appendTo($left_div);
            var $name = $('<p class="name">' + mokuai_team[i + j]['name'] + '</p>');
            $name.appendTo($left_div);
            var $work = $('<p class="work">' + mokuai_team[i + j]['work'] + '</p>');
            $work.appendTo($left_div);
            $left_div.appendTo($div1)
            var $description = $('<p class="description">' + mokuai_team[i + j]['description'] + '</p>');
            var $a = $('<a href="javascript:;" class="send-email">' + '<i class="icon">' + '</i>' + '<span>发送邮件</span>' + '</a>');
            $description.appendTo($center_div);
            $a.appendTo($center_div);
            $center_div.appendTo($div1)
            var $ul = $('<ul class="right-slide"><li></li><li></li><li></li><li></li></ul>');
            $ul.appendTo($div1);
            $div1.appendTo($li);
            $li.appendTo($('.team-wrap'));
        }


    }
    $('.team-list:first-of-type').addClass('now-team');
//    实现切换
    var i = 1;
    $('.teamcontent-wrap .next').on('click', function () {
        $('.team-list:nth-of-type(1)').stop().animate({
            'left': '30px',
        }, 1000, function () {
            $('.team-list:nth-of-type(1)').animate({
                'left': '-1160px',
            }, 1000, function () {
            });
        });
        $('.team-list:nth-of-type(1)').next().delay(1000);
        $('.team-list:nth-of-type(1)').next().animate({
            'left': '0',
        }, 1000, function () {
            $('.team-list:nth-of-type(1)').next().addClass('now-team');
            $('.now-team:first-of-type').removeClass('now-team').appendTo($('.team-wrap'));
            $('.team-list').not(".now-team ").css('left', '1130px');

        });
        $('.point-list li').css('background', 'url("images/next&prev_others.png") no-repeat')
        $('.point-list li').eq(i).css('background', 'url("images/next&prev_now.png") no-repeat')
        i++;
        if (i >= 3) {
            i = 0;
        }

    })
});