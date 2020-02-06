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
    //给签证服务添加内容
    var liuchengArr = [
        {
            'title': '美国签证加急预约',
            'content-1': [
                {
                    'content': '受理范围: 全国受理',
                },
                {
                    'content': '入境次数: 多次往返',
                },
                {
                    'content': '有效期限: 十年有效',
                },
                {
                    'content': '停留期限: 海关决定',
                },
                {
                    'content': '是否邮寄: 无需邮寄',
                }
            ],
            'content-2': '办理难度: ',
            'content-3': '能否加急: 可加急办理',
        },
        {
            'title': '代填美国签证DS160主申请表',
            'content-1': [
                {
                    'content': '受理范围: 全国受理',
                },
                {
                    'content': '入境次数: 根据类型',
                },
                {
                    'content': '有效期限: 根据类型',
                },
                {
                    'content': '停留期限: 海关决定',
                },
                {
                    'content': '是否邮寄: 无需邮寄',
                }
            ],
            'content-2': '办理难度: ',
            'content-3': '能否加急: 可加急办理',
        },
        {
            'title': '美国签证加急预约',
            'content-1': [
                {
                    'content': '受理范围: 全国受理',
                },
                {
                    'content': '入境次数: 不适用',
                },
                {
                    'content': '有效期限: 不适用',
                },
                {
                    'content': '停留期限: 不适用',
                },
                {
                    'content': '是否邮寄: 无需邮寄',
                }
            ],
            'content-2': '办理难度: ',
            'content-3': '能否加急: 可加急办理',
        }
    ];
    var zhoubianArr = [
        {
            'title': '美国签证EVUS登记',
            'content-1': [
                {
                    'content': '受理范围: 全国受理',
                },
                {
                    'content': '入境次数: 多次往返',
                },
                {
                    'content': '有效期限: 两年有效',
                },
                {
                    'content': '停留期限: 海关决定',
                },
                {
                    'content': '是否邮寄: 无需邮寄',
                }
            ],
            'content-2': '办理难度: ',
            'content-3': '能否加急: 可加急办理',
        },
        {
            'title': '代缴美国签证SEVIS费',
            'content-1': [
                {
                    'content': '受理范围: 全国受理',
                },
                {
                    'content': '入境次数: 多次往返',
                },
                {
                    'content': '有效期限: 使馆批复',
                },
                {
                    'content': '停留期限: 海关决定',
                },
                {
                    'content': '是否邮寄: 无需邮寄',
                }
            ],
            'content-2': '办理难度: ',
            'content-3': '能否加急: 可加急办理',
        },
    ];
    var quanchengArr = [
        {
            'title': '美国十年旅游签证',
            'content-1': [
                {
                    'content': '受理范围: 全国受理',
                },
                {
                    'content': '入境次数: 多次往返',
                },
                {
                    'content': '有效期限: 十年有效',
                },
                {
                    'content': '停留期限: 海关决定',
                },
                {
                    'content': '是否邮寄: 无需邮寄',
                }
            ],
            'content-2': '办理难度: ',
            'content-3': '能否加急: 可加急办理',
        },
        {
            'title': '美国十年商务签证',
            'content-1': [
                {
                    'content': '受理范围: 全国受理',
                },
                {
                    'content': '入境次数: 多次往返',
                },
                {
                    'content': '有效期限: 两年有效',
                },
                {
                    'content': '停留期限: 海关决定',
                },
                {
                    'content': '是否邮寄: 无需邮寄',
                }
            ],
            'content-2': '办理难度: ',
            'content-3': '能否加急: 可加急办理',
        },
        {
            'title': '美国十年探亲签证',
            'content-1': [
                {
                    'content': '受理范围: 全国受理',
                },
                {
                    'content': '入境次数: 多次往返',
                },
                {
                    'content': '有效期限:  十年有效',
                },
                {
                    'content': '停留期限: 海关决定',
                },
                {
                    'content': '是否邮寄: 无需邮寄',
                }
            ],
            'content-2': '办理难度: ',
            'content-3': '能否加急: 可加急办理',
        },
        {
            'title': '美国F1留学签证',
            'content-1': [
                {
                    'content': '受理范围: 全国受理',
                },
                {
                    'content': '入境次数: 多次往返',
                },
                {
                    'content': '有效期限: 使馆决定',
                },
                {
                    'content': '停留期限: 海关决定',
                },
                {
                    'content': '是否邮寄: 无需邮寄',
                }
            ],
            'content-2': '办理难度: ',
            'content-3': '能否加急: 可加急办理',
        },
        {
            'title': '美国J1交流访问签证',
            'content-1': [
                {
                    'content': '受理范围: 全国受理',
                },
                {
                    'content': '入境次数: 多次往返',
                },
                {
                    'content': '有效期限: 使馆批复',
                },
                {
                    'content': '停留期限: 海关决定',
                },
                {
                    'content': '是否邮寄: 无需邮寄',
                }
            ],
            'content-2': '办理难度: ',
            'content-3': '能否加急: 可加急办理',
        },
        {
            'title': '美国C1过境签证',
            'content-1': [
                {
                    'content': '受理范围: 全国受理',
                },
                {
                    'content': '入境次数: 多次往返',
                },
                {
                    'content': '有效期限: 五年有效',
                },
                {
                    'content': '停留期限: 海关决定',
                },
                {
                    'content': '是否邮寄: 无需邮寄',
                }
            ],
            'content-2': '办理难度: ',
            'content-3': '能否加急: 可加急办理',
        },
        {
            'title': '美国L1工作签证',
            'content-1': [
                {
                    'content': '受理范围: 全国受理',
                },
                {
                    'content': '入境次数: 多次往返',
                },
                {
                    'content': '有效期限: 签证官批',
                },
                {
                    'content': '停留期限: 海关决定',
                },
                {
                    'content': '是否邮寄: 无需邮寄',
                }
            ],
            'content-2': '办理难度: ',
            'content-3': '能否加急: 可加急办理',
        },
        {
            'title': '美国免面签代传递',
            'content-1': [
                {
                    'content': '受理范围: 全国受理',
                },
                {
                    'content': '入境次数: 多次往返',
                },
                {
                    'content': '有效期限: 十年有效',
                },
                {
                    'content': '停留期限: 海关决定',
                },
                {
                    'content': '是否邮寄: 无需邮寄',
                }
            ],
            'content-2': '办理难度: ',
            'content-3': '能否加急: 可加急办理',
        },
    ];
    //循环添加数据
    //签证流程
    for (var i = 0; i < liuchengArr.length; i++) {
        var $div = $('<div class="content-liucheng"></div>');
        var $a = $('<a href=""></a>');
        var $h3 = $('<h3></h3>');
        var $p1 = $('<p class="content-1 hidden-xs"></p>');
        var $p2 = $('<p class="content-2"></p>');
        var $p3 = $('<p class="content-3"></p>');
        var $abtn = $('<a href="">查看详情</a>');
        var $span = $('<span class="color">★★★★</span><span>★</span>')
        $abtn.addClass('btn btn-default');
        $h3.text(liuchengArr[i]['title']);
        for (j = 0; j < liuchengArr[i]['content-1'].length; j++) {
            $('<span>' + liuchengArr[i]['content-1'][j]['content'] + '</span>').appendTo($p1);
        }
        $p2.text(liuchengArr[i]['content-2']);
        $p3.text(liuchengArr[i]['content-3']);
        $h3.appendTo($a);
        $a.appendTo($div)
        $p1.appendTo($div);
        $span.appendTo($p2);
        $p2.appendTo($div);
        $abtn.appendTo($p3);
        $p3.appendTo($div);
        $div.appendTo($('.right-content'));

    };

    //签证周边
    for (var i = 0; i < zhoubianArr.length; i++) {
        var $div = $('<div class="content-zhoubian"></div>');
        var $a = $('<a href=""></a>');
        var $h3 = $('<h3></h3>');
        var $p1 = $('<p class="content-1 hidden-xs"></p>');
        var $p2 = $('<p class="content-2"></p>');
        var $p3 = $('<p class="content-3"></p>');
        var $abtn = $('<a href="">查看详情</a>');
        var $span = $('<span class="color">★★★★</span><span>★</span>')
        $abtn.addClass('btn btn-default');
        $h3.text(zhoubianArr[i]['title']);
        for (j = 0; j < zhoubianArr[i]['content-1'].length; j++) {
            $('<span>' + zhoubianArr[i]['content-1'][j]['content'] + '</span>').appendTo($p1);
        }
        $p2.text(zhoubianArr[i]['content-2']);
        $p3.text(zhoubianArr[i]['content-3']);
        $h3.appendTo($a);
        $a.appendTo($div)
        $p1.appendTo($div);
        $span.appendTo($p2);
        $p2.appendTo($div);
        $abtn.appendTo($p3);
        $p3.appendTo($div);
        $div.appendTo($('.right-content'));
    };
    //签证全程
    for (var i = 0; i < quanchengArr.length; i++) {
        var $div = $('<div class="content-quancheng"></div>');
        var $a = $('<a href=""></a>');
        var $h3 = $('<h3></h3>');
        var $p1 = $('<p class="content-1 hidden-xs"></p>');
        var $p2 = $('<p class="content-2"></p>');
        var $p3 = $('<p class="content-3"></p>');
        var $abtn = $('<a href="">查看详情</a>');
        var $span = $('<span class="color">★★★★</span><span>★</span>')
        $abtn.addClass('btn btn-default');
        $h3.text(quanchengArr[i]['title']);
        for (j = 0; j < quanchengArr[i]['content-1'].length; j++) {
            $('<span>' + quanchengArr[i]['content-1'][j]['content'] + '</span>').appendTo($p1);
        }
        $p2.text(quanchengArr[i]['content-2']);
        $p3.text(quanchengArr[i]['content-3']);
        $h3.appendTo($a);
        $a.appendTo($div)
        $p1.appendTo($div);
        $span.appendTo($p2);
        $p2.appendTo($div);
        $abtn.appendTo($p3);
        $p3.appendTo($div);
        $div.appendTo($('.right-content'));
    };
    $('.content-1 span:nth-of-type(5)').addClass('hidden-sm');
    //签证内容侧边栏
    $(window).on('scroll',function () {
        if ($(window).scrollTop() >= 71) {
            var leftHeight=$(window).height()-71;
            $('.leftBox').css({
                'position': 'fixed',
                'top': 71,
                'height':leftHeight,

            })
        } else {
            var leftHeight=$(window).height()-127;
            $('.leftBox').css({
                'position': 'static',
                'height':leftHeight,
            })
        }
    });

});