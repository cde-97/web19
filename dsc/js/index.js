$(function () {
    //顶部广告点击×消失
    $("#top i").on('click',function () {
        $('#top').css('display','none');
    })
    //地址窗口显示
    $('.navlist:first-child li:first-child').on('mouseover', function () {
        $('.addressName').css('zIndex', 1);
        $(this).css('backgroundColor', 'white');

    })
    //浏览地址信息
    $('.initial span').on('mouseover', function () {
        var num = $(this).index();
        $('.addBox').scrollTop($('.addList').eq(num).position().top + $('.addBox').scrollTop());
    })
    //更改地址
    $('.addList span').on('click', function () {
        $('.navlist li>span').text($(this).text());
    })
    //地址窗口隐藏
    $('.addressName').on('mouseout', function () {
        $('.addressName').css('zIndex', -1)
        $('.navlist:first-child li:first-child').css('backgroundColor', '#EEEEEE');
    })
    $('.navlist:first-child li:first-child').on('mouseout', function () {
        $('.addressName').css('zIndex', -1)
        $(this).css('backgroundColor', '#EEEEEE');
    })
    //鼠标移入网站导航显示隐藏内容
    $('.navlist:last-child>li:last-child').on('mouseover', function () {
        $('.siteNavContent').css('zIndex', 1);
        $(this).css('backgroundColor', 'white');
    })
    //鼠标移出隐藏内容
    $('.navlist:last-child >li:last-child').on('mouseout', function () {
        $('.siteNavContent').css('zIndex', -1);
        $(this).css('backgroundColor', '#EEEEEE');
    })
    $('.siteNavContent').on('mouseout', function () {
        $('.siteNavContent').css('zIndex', -1);
        $('.navlist:last-child>li:last-child').css('backgroundColor', '#EEEEEE');
    })
    //移入消息导航栏切换公告和促销
    $('.message:first-child').on('mouseover', function () {
        $('.message').css('color', 'black');
        $(this).css('color', 'red');
        $('.noticeList').hide();
        $('.noticeList:first-child').fadeIn();
    })
    $('.message:last-child').on('mouseover', function () {
        $('.message').css('color', 'black');
        $(this).css('color', 'red');
        $('.noticeList').hide();
        $('.noticeList:last-child').fadeIn()
    })
    var $ul = $('<ul class="dot"><li class="active"></li><li></li><li></li></ul>');
    $ul.appendTo($('.banner'));
    $ul.css({
        'width': '60px',
        'height': '15px',
        'borderRadius': '10px',
        'listStyle': 'none',
        'float': 'left',
        'position': 'absolute',
        'backgroundColor': 'rgba(204,204,204,.3)',
        'textAlign': 'center',
        'left': '35%',
        'top': '90%',


    });
    var timer;
    var n = 1;

    function autoPlay() {
        timer = setInterval(function () {
            if (n >= $('#bannerBox li').length) {
                n = 0
            }
            $('#bannerBox li').css('display', 'none');
            $('#bannerBox li').eq(n).fadeIn(600);
            $('.dot li').attr('class', '');
            $('.dot li').eq(n).attr('class', 'active');
            n++;
        }, 2000);
    }

    //自动播放
    autoPlay();
    $('.dot').on('mouseover', function () {
        clearInterval(timer);
    });
    $('.dot li').on('click', function () {
        $('#bannerBox li').css('display', 'none');
        $('#bannerBox li').eq($(this).index()).fadeIn(500);
        $('.dot li').attr('class', '');
        $('.dot li').eq(n = $(this).index()).attr('class', 'active');
        n = $(this).index() + 1;

    })
    $('.dot').on('mouseout', function (e) {
        autoPlay()
    });
    //鼠标移入物品导航栏显示对应的物品
    $('.goods').eq(0).on('mouseenter', function () {
        $('.detial').css('display', 'inline-block');
        $('<p class="detialTitle"><span>品牌日</span><span>家电城</span><span>智能生活馆</span><span>京东净化馆</span><span>京东帮服务店</span><span>值得买精选</span></p> ').appendTo($('.detial'));
        var $ul = $('<ul class="detialText"></ul>');
        $('<li><div>大家电</div><ul><li>平板电视</li><li>空调</li><li>洗衣机</li><li>家庭影院</li><li>DVD</li><li>迷你音响</li><li>热水器</li><li>冷吧、冰柜</li></ul></li>').appendTo($ul);
        $('<li><div>生活电器</div><ul><li>电风扇</li><li>冷风扇</li><li>净化器</li><li>加湿器</li><li>扫地机器人</li><li>吸尘器</li><li>插座</li><li>电话机</li><li>饮水机</li><li>取暖电器</li><li>净水设备</li><li>干衣机</li><li>收音机/录音机</li><li>电器开关</li></ul></li>').appendTo($ul);
        $('<li><div>厨房电器</div><ul><li>电饭煲</li><li>电压力锅</li><li>豆浆机</li><li>面包机</li><li>咖啡机</li><li>微波炉</li><li>料理/榨汁机</li><li>电烤箱</li><li>电磁炉</li><li>电饼铛</li><li>煮蛋器</li><li>酸奶机</li><li>电水壶/热水瓶</li><li>电饭盒</li><li>其他厨房电器</li></ul></li>').appendTo($ul);
        $('<li><div>个护健康</div><ul><li>按摩椅</li><li>剃须刀</li><li>脱毛器</li><li>口腔护理</li><li>电吹风</li><li>美容器</li><li>理发器</li><li>按摩椅</li><li>足浴盆</li><li>血压计</li><li>健康秤/厨房秤</li><li>血糖计</li><li>计步器</li><li>其他健康电器</li></ul></li>').appendTo($ul);
        $('<li><div>五金家装</div><ul><li>电动工具</li><li>手动工具</li><li>仪器</li><li>仪表</li><li>浴霸/排气管</li><li>灯具</li><li>LED灯</li><li>洁身器</li><li>水槽</li><li>龙头</li><li>沐浴花洒</li><li>厨卫五金</li><li>计步器</li><li>家具五金</li><li>门铃</li><li>监控安防</li></ul></li>').appendTo($ul);
        $ul.appendTo($('.detial'));
        var $tableImg = $('<table class="detialImg"></table>');
        $('<tr><td><img src="../images/goods01-img01.jpg" alt=""></td><td><img src="../images/goods01-img02.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img03.jpg" alt=""></td><td><img src="../images/goods01-img04.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img05.jpg" alt=""></td><td><img src="../images/goods01-img06.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img07.jpg" alt=""></td><td><img src="../images/goods01-img08.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img09.jpg" alt=""></td><td><img src="../images/goods01-img10.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img11.jpg" alt=""></td><td><img src="../images/goods01-img12.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img13.jpg" alt=""></td><td><img src="../images/goods01-img14.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img15.jpg" alt=""></td><td><img src="../images/goods01-img16.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img17.jpg" alt=""></td><td><img src="../images/goods01-img18.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img19.jpg" alt=""></td><td><img src="../images/goods01-img20.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td colspan="2"><img src="../images/goods01-img-m01.jpg" alt=""></td></tr>').appendTo($tableImg);
        $tableImg.appendTo($('.detial'));
        $('.detial').appendTo($(this));
    })
    $('.goods').eq(0).on('mouseleave', function () {
        $('.detial').css('display', 'none');
        $('.detial').empty();
    })

    $('.goods').eq(1).on('mouseenter', function () {
        $('.detial').css({'display': 'inline-block'});
        $('<p class="detialTitle"><span>图书频道</span><span>音像</span><span>电子书</span><span>图书榜</span><span>音乐榜</span><span>影视榜</span></p> ').appendTo($('.detial'));
        var $ul = $('<ul class="detialText"></ul>');
        $('<li><div>电子书</div><ul><li>免费</li><li>小说</li><li>励志与成功</li><li>婚恋/两性</li><li>文学</li><li>经营</li><li>畅读VIP</li></ul></li>').appendTo($ul);
        $('<li><div>数字音乐</div><ul><li>通俗流行</li><li>古典音乐</li><li>摇滚说唱</li><li>爵士蓝调</li><li>乡村民谣</li><li>有声读物</li></ul></li>').appendTo($ul);
        $('<li><div>音像</div><ul><li>音乐</li><li>教育音像</li><li>游戏</li><li>影视</li></ul></li>').appendTo($ul);
        $('<li><div>文艺</div><ul><li>小说</li><li>文学</li><li>传记</li><li>艺术</li><li>青春文学</li></ul></li>').appendTo($ul);
        $('<li><div>人文社科</div><ul><li>历史</li><li>心理学</li><li>政治/军事</li><li>国学/古籍</li><li>宗教/哲学</li><li>社会科学</li></ul></li>').appendTo($ul);
        $('<li><div>经管励志</div><ul><li>经济</li><li>金融与投资</li><li>管理</li><li>励志与成功</li></ul></li>').appendTo($ul);
        $('<li><div>生活</div><ul><li>家教与育儿</li><li>旅游/地图</li><li>烹饪/美食</li><li>时尚/美妆</li><li>家居</li><li>婚恋与两性</li><li>娱乐/休闲</li><li>健身与保健</li><li>动漫/幽默</li><li>体育/运动</li></ul></li>').appendTo($ul);
        $('<li><div>科技</div><ul><li>科普</li><li>IT</li><li>建筑</li><li>医学</li><li>工业技术</li><li>电子/通信</li><li>农林</li><li>科学与自然</li></ul></li>').appendTo($ul);
        $('<li><div>其他</div><ul><li>英文原版书</li><li>港台图书</li><li>工具书</li><li>套装书</li><li>杂志/期刊</li></ul></li>').appendTo($ul);
        $('<li><div>少儿</div><ul><li>少儿</li><li>0-2岁</li><li>3-6岁</li><li>7-10岁</li></ul></li>').appendTo($ul);
        $('<li><div>教育</div><ul><li>教材</li><li>中小学教辅</li><li>考试</li><li>外语学习</li></ul></li>').appendTo($ul);
        $ul.appendTo($('.detial'));
        $('.detial').appendTo($(this));

    })
    $('.goods').eq(1).on('mouseleave', function () {
        $('.detial').css('display', 'none');
        $('.detial').empty();
    })

    $('.goods').eq(2).on('mouseenter', function () {
        $('.detial').css('display', 'inline-block');
        $('<p class="detialTitle"><span>手机频道</span><span>网上营业厅</span><span>配件城</span><span>影像Club</span><span>手机社区</span><span>以旧换新</span></p> ').appendTo($('.detial'));
        var $ul = $('<ul class="detialText"></ul>');
        $('<li><div>摄影摄像</div><ul><li>数码相机</li><li>单电/微电相机</li><li>单反相机</li><li>拍立得</li><li>运动相机</li><li>摄像头</li><li>镜头</li><li>户外素材</li><li>摄影器材</li></ul></li>').appendTo($ul);
        $('<li><div>手机通讯</div><ul><li>手机</li><li>对讲机</li></ul></li>').appendTo($ul);
        $('<li><div>京东通信</div><ul><li>选号中心</li><li>自助服务</li></ul></li>').appendTo($ul);
        $('<li><div>运营商</div><ul><li>购机送费</li><li>0元购机</li><li>选号入网</li></ul></li>').appendTo($ul);
        $('<li><div>手机配件</div><ul><li>电池</li><li>蓝牙耳机</li><li>充电器/数据线</li><li>手机耳机</li><li>贴膜</li><li>存储卡</li><li>保护套</li><li>车载</li><li>iPhone配件</li><li>创意配件</li><li>便携/无线音箱</li><li>手机饰品</li></ul></li>').appendTo($ul);
        $('<li><div>数码配件</div><ul><li>存储卡</li><li>读卡器</li><li>滤镜</li><li>闪光灯/手柄</li><li>相机包</li><li>三脚架/云台</li><li>相机清洁</li><li>相机贴膜</li><li>机身附件</li><li>镜头附件</li><li>电池/充电器</li><li>移动电源</li></ul></li>').appendTo($ul);
        $('<li><div>时尚影音</div><ul><li>耳机/耳麦</li><li>音响/音箱</li><li>麦克风</li><li>MP3/MP4</li><li>数码相框</li><li>专业音频</li><li>苹果周边</li></ul></li>').appendTo($ul);
        $('<li><div>智能设备</div><ul><li>智能手环</li><li>智能手表</li><li>智能眼镜</li><li>运动跟踪器</li><li>健康监测</li><li>智能配饰</li><li>智能家居</li><li>体感车</li><li>其他配件</li></ul></li>').appendTo($ul);
        $ul.appendTo($('.detial'));
        var $tableImg = $('<table class="detialImg"></table>');
        $('<tr><td><img src="../images/goods03-img01.jpg" alt=""></td><td><img src="../images/goods03-img02.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods03-img03.jpg" alt=""></td><td><img src="../images/goods03-img04.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods03-img05.jpg" alt=""></td><td><img src="../images/goods03-img06.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods03-img07.jpg" alt=""></td><td><img src="../images/goods03-img08.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods03-img09.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td colspan="2"><img src="../images/goods03-img-m01.jpg" alt=""></td></tr>').appendTo($tableImg);
        $tableImg.appendTo($('.detial'));
        $('.detial').appendTo($(this));
    })
    $('.goods').eq(2).on('mouseleave', function () {
        $('.detial').css('display', 'none');
        $('.detial').empty();
    })
    $('.goods').eq(3).on('mouseenter', function () {
        $('.detial').css('display', 'inline-block');
        $('<p class="detialTitle"><span>本周热卖</span><span>游戏部落</span><span>智能社区</span><span>GAME+</span><span>装机大师</span><span>办公生活馆</span></p> ').appendTo($('.detial'));
        var $ul = $('<ul class="detialText"></ul>');
        $('<li><div>服务产品</div><ul><li>上门服务</li><li>远程服务</li><li>电脑软件</li></ul></li>').appendTo($ul);
        $('<li><div>电脑整机</div><ul><li>笔记本</li><li>超极本</li><li>游戏本</li><li>平板电脑</li><li>平板电脑配件</li><li>台式机</li><li>笔记本配件</li><li>服务器/工作站</li></ul></li>').appendTo($ul);
        $('<li><div>电脑配件</div><ul><li>CPU</li><li>主板</li><li>显卡</li><li>硬盘</li><li>SSD固态硬盘</li><li>内存</li><li>机箱</li><li>电源</li><li>显示器</li><li>刻录机/光驱</li><li>声卡、扩展卡</li><li>散热器</li><li>装机配件</li><li>组装电脑</li></ul></li>').appendTo($ul);
        $('<li><div>外设产品</div><ul><li>鼠标</li><li>键盘</li><li>游戏设备</li><li>U盘</li><li>移动硬盘</li><li>鼠标垫</li><li>摄像头</li><li>线缆</li><li>电玩</li><li>手写板</li><li>外置盒</li><li>电脑工具</li><li>电脑清洁</li><li>UPS</li><li>插座</li></ul></li>').appendTo($ul);
        $('<li><div>网络产品</div><ul><li>路由器</li><li>网卡</li><li>交换机</li><li>网络存储</li><li>4G/3G上网</li><li>网络盒子</li><li>网络配件</li></ul></li>').appendTo($ul);
        $('<li><div>办公打印</div><ul><li>打印机</li><li>一体机</li><li>投影配件</li><li>传真机</li><li>复合机</li><li>碎纸机</li><li>扫描仪</li><li>墨盒</li><li>硒鼓</li><li>墨粉</li><li>色带</li></ul></li>').appendTo($ul);
        $('<li><div>办公文仪</div><ul><li>办公文具</li><li>文件管理</li><li>笔类</li><li>本册/便签</li><li>学生文具</li><li>财务用品</li><li>计算器</li><li>激光笔</li><li>白板/封装</li><li>考勤机</li><li>刻录碟片/附件</li><li>点钞机</li><li>支付设备/POS机</li><li>安防监控</li><li>呼叫/会议设备</li><li>保险柜</li><li>办公家具</li></ul></li>').appendTo($ul);
        $ul.appendTo($('.detial'));
        var $tableImg = $('<table class="detialImg"></table>');
        $('<tr><td><img src="../images/goods04-img01.jpg" alt=""></td><td><img src="../images/goods04-img02.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods04-img03.jpg" alt=""></td><td><img src="../images/goods04-img04.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods04-img05.jpg" alt=""></td><td><img src="../images/goods04-img06.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods04-img07.jpg" alt=""></td><td><img src="../images/goods04-img08.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods04-img09.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td colspan="2"><img src="../images/goods04-img-m01.jpg" alt=""></td></tr>').appendTo($tableImg);
        $tableImg.appendTo($('.detial'));
        $('.detial').appendTo($(this));
    })
    $('.goods').eq(3).on('mouseleave', function () {
        $('.detial').css('display', 'none');
        $('.detial').empty();
    })

    $('.goods').eq(4).on('mouseenter', function () {
        $('.detial').css('display', 'inline-block');
        $('<p class="detialTitle"><span>家装城</span><span>居家日用</span><span>精品家具</span><span>家装建材</span><span>厨房达人</span><span>猫猫狗狗</span></p> ').appendTo($('.detial'));
        var $ul = $('<ul class="detialText"></ul>');
        $('<li><div>家具</div><ul><li>卧室家具</li><li>客厅家具</li><li>书房家具</li><li>储物家具</li><li>阳台/户外</li><li>商业办公</li><li>床</li><li>床垫</li><li>沙发</li><li>电脑椅</li><li>衣柜</li><li>茶几</li><li>电视柜</li><li>餐桌</li><li>电脑桌</li><li>鞋架/衣架帽</li></ul></li>').appendTo($ul);
        $('<li><div>厨具</div><ul><li>烹饪锅具</li><li>刀剪菜板</li><li>厨房配件</li><li>水具酒具</li><li>餐具</li><li>茶具/咖啡具</li></ul></li>').appendTo($ul);
        $('<li><div>家装建材</div><ul><li>灯饰照明</li><li>厨房卫浴</li><li>五金工具</li><li>电工电料</li><li>墙地面材料</li><li>装饰材料</li><li>装修服务</li><li>吸顶灯</li><li>淋浴花洒</li><li>开关插座</li><li>油漆涂料</li><li>龙头</li></ul></li>').appendTo($ul);
        $('<li><div>家纺</div><ul><li>床品套件</li><li>被子</li><li>蚊帐</li><li>凉席</li><li>床单被罩</li><li>枕芯</li><li>毛巾浴巾</li><li>布艺软饰</li><li>毯子</li><li>抱枕靠垫</li><li>床垫/床褥</li><li>窗帘/窗纱</li><li>电热毯</li></ul></li>').appendTo($ul);
        $('<li><div>灯具</div><ul><li>台灯</li><li>吸顶灯</li><li>筒灯射灯</li><li>LED灯</li><li>节能灯</li><li>落地灯</li><li>五金电器</li><li>应急灯/手电</li><li>装饰灯</li><li>吊灯</li><li>氛围照明</li></ul></li>').appendTo($ul);
        $('<li><div>生活日用</div><ul><li>收纳用品</li><li>伞具雨具</li><li>浴室用品</li><li>缝纫/针织用品</li><li>洗晒/熨烫</li><li>净化除味</li></ul></li>').appendTo($ul);
        $('<li><div>家装软饰</div><ul><li>桌布/罩件</li><li>地毯地垫</li><li>沙发垫套</li><li>帘艺隔断</li><li>相框/照片墙</li><li>装饰字画</li><li>墙贴</li><li>节庆饰品</li><li>手工/十字绣</li><li>钟饰</li><li>装饰摆件</li><li>花瓶花艺</li><li>创意家居</li><li>保暖防护</li><li>香薰蜡烛</li></ul></li>').appendTo($ul);
        $('<li><div>清洁用品</div><ul><li>纸巾湿巾</li><li>衣物清洁</li><li>清洁工具</li><li>一次性用品</li><li>驱虫用品</li><li>皮具护理</li></ul></li>').appendTo($ul);
        $('<li><div>宠物生活</div><ul><li>宠物主粮</li><li>宠物零食</li><li>洗护美容</li><li>家居日用</li><li>医疗保健</li><li>出行装备</li><li>宠物玩具</li><li>水族用品</li><li>猫砂/尿布</li><li>宠物牵引</li><li>宠物驱虫</li></ul></li>').appendTo($ul);
        $ul.appendTo($('.detial'));
        var $tableImg = $('<table class="detialImg"></table>');
        $('<tr><td><img src="../images/goods05-img01.jpg" alt=""></td><td><img src="../images/goods05-img02.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods05-img03.jpg" alt=""></td><td><img src="../images/goods05-img04.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods05-img05.jpg" alt=""></td><td><img src="../images/goods05-img06.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods05-img07.jpg" alt=""></td><td><img src="../images/goods05-img08.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods05-img09.jpg" alt=""></td><td><img src="../images/goods05-img10.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td colspan="2"><img src="../images/goods05-img-m01.jpg" alt=""></td></tr>').appendTo($tableImg);
        $tableImg.appendTo($('.detial'));
        $('.detial').appendTo($(this));
    })
    $('.goods').eq(4).on('mouseleave', function () {
        $('.detial').css('display', 'none');
        $('.detial').empty();
    })

    $('.goods').eq(5).on('mouseenter', function () {
        $('.detial').css('display', 'inline-block');
        $('<p class="detialTitle"><span>男装</span><span>女装</span><span>内衣</span><span>国际品牌</span></p> ').appendTo($('.detial'));
        var $ul = $('<ul class="detialText"></ul>');
        $('<li><div>女装</div><ul><li>连衣裙</li><li>蕾丝/雪纺衫</li><li>衬衫</li><li>T恤</li><li>半身裙</li><li>休闲裤</li><li>短裤</li><li>牛仔裤</li><li>针织衫</li><li>吊带/背心</li><li>打底衫</li><li>打底裤</li><li>正装裤</li><li>小西服</li><li>马甲</li><li>风衣</li><li>羊毛衫</li><li>短外套</li><li>棉服</li><li>毛呢大衣</li><li>加绒裤</li><li>羽绒服</li><li>皮草</li><li>真皮皮衣</li><li>仿皮皮衣</li><li>旗袍/唐装</li><li>礼服</li><li>婚纱</li><li>中老年女装</li><li>大码女装</li></ul></li>').appendTo($ul);
        $('<li><div>男装</div><ul><li>Polo衫</li><li>夹克</li><li>衬衫</li><li>T恤</li><li>针织衫</li><li>休闲裤</li><li>短裤</li><li>牛仔裤</li><li>西裤</li><li>西服套装</li><li>休闲裤</li><li>裤子</li><li>正装裤</li><li>小西服</li><li>马甲</li><li>风衣</li><li>羊毛衫</li><li>短外套</li><li>棉服</li><li>毛呢大衣</li><li>加绒裤</li><li>羽绒服</li><li>工装</li><li>真皮皮衣</li><li>仿皮皮衣</li><li>中山装/唐装</li><li>中老年男装</li><li>大码男装</li></ul></li>').appendTo($ul);
        $('<li><div>服饰配件</div><ul><li>配件</li><li>光学镜架/镜片</li><li>防辐射眼镜</li><li>女士丝巾/围巾/披肩</li><li>棒球帽</li><li>遮阳伞/雨伞</li><li>遮阳帽</li><li>领带/领结</li><li>男士腰带</li><li>防晒手套</li><li>老花镜</li><li>袖扣</li><li>鸭舌帽</li><li>女士腰带</li></ul></li>').appendTo($ul);
        $('<li><div>内衣</div><ul><li>内衣配件</li><li>文胸</li><li>睡衣/家居服</li><li>情侣套装</li><li>文胸套装</li><li>少女文胸</li><li>女士内裤</li><li>男士内裤</li><li>商务男袜</li><li>休闲棉袜</li><li>吊带/背心</li><li>抹胸</li><li>连裤袜/丝袜</li><li>美腿袜</li><li>打底裤袜</li><li>塑身美体</li></ul></li>').appendTo($ul);
        $('<li><div>运动户外</div><ul><li>跑步运动</li><li>室内健身</li><li>自行车运动</li><li>轮滑运动</li><li>羽毛球/网球</li><li>足球/篮球</li><li>运动休闲</li><li>钓鱼用品</li><li>野营烧烤</li><li>游泳运动</li><li>舞蹈健身</li><li>瑜伽运动</li><li>防狼运动</li></ul></li>').appendTo($ul);
        $ul.appendTo($('.detial'));
        var $tableImg = $('<table class="detialImg"></table>');
        $('<tr><td><img src="../images/goods06-img01.jpg" alt=""></td><td><img src="../images/goods06-img02.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods06-img03.jpg" alt=""></td><td><img src="../images/goods06-img04.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods06-img05.jpg" alt=""></td><td><img src="../images/goods06-img06.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods06-img07.jpg" alt=""></td><td><img src="../images/goods06-img08.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods06-img09.jpg" alt=""></td><td><img src="../images/goods06-img10.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td colspan="2"><img src="../images/goods06-img-m01.jpg" alt=""></td></tr>').appendTo($tableImg);
        $tableImg.appendTo($('.detial'));
        $('.detial').appendTo($(this));
    })
    $('.goods').eq(5).on('mouseleave', function () {
        $('.detial').empty();
        $('.detial').css('display', 'none');
    })


    $('.goods').eq(6).on('mouseenter', function () {
        $('.detial').css('display', 'inline-block');

        $('<p class="detialTitle"><span>男鞋</span><span>女鞋</span><span>箱包</span><span>钟表</span><span>奢侈品</span><span>女包</span></p> ').appendTo($('.detial'));
        var $ul = $('<ul class="detialText"></ul>');
        $('<li><div>奢侈品</div><ul><li>鞋靴</li><li>箱包</li><li>钱包</li><li>服饰</li><li>腰带</li><li>太阳镜/眼镜框</li><li>视品</li><li>配件</li></ul></li>').appendTo($ul);
        $('<li><div>功能箱包</div><ul><li>拉杆箱/拉杆包</li><li>旅行包</li><li>电脑包</li><li>休闲运动包</li><li>相机包</li><li>腰包/胸包</li><li>登山包</li><li>旅行配件</li><li>书包</li><li>妈咪包</li></ul></li>').appendTo($ul);
        $('<li><div>流行男鞋</div><ul><li>休闲鞋</li><li>凉鞋/沙滩鞋</li><li>帆布鞋</li><li>拖鞋</li><li>商务休闲鞋</li><li>正装鞋</li><li>增高鞋</li><li>工装鞋</li><li>男鞋</li><li>传统布鞋</li><li>功能鞋</li><li>鞋配件</li><li>定制鞋</li></ul></li>').appendTo($ul);
        $('<li><div>时尚女鞋</div><ul><li>凉鞋</li><li>单鞋</li><li>高跟鞋</li><li>坡跟鞋</li><li>松糕鞋</li><li>鱼嘴鞋</li><li>休闲鞋</li><li>帆布鞋</li><li>拖鞋</li><li>妈妈鞋</li><li>雨靴</li><li>内增高</li><li>布鞋/绣花鞋</li><li>女靴</li><li>雪地靴</li><li>裸靴</li><li>马丁靴</li><li>鞋配件</li></ul></li>').appendTo($ul);
        $('<li><div>潮流女包</div><ul><li>单肩包</li><li>手提包</li><li>斜挎包</li><li>钱包</li><li>手拿包/晚宴包</li><li>卡包/零钱包</li><li>钥匙包</li></ul></li>').appendTo($ul);
        $('<li><div>精品男包</div><ul><li>商务公文包</li><li>单肩包</li><li>男生手包</li><li>双肩包</li><li>卡包/零钱包</li><li>钥匙包</li></ul></li>').appendTo($ul);
        $('<li><div>钟表</div><ul><li>男表</li><li>女表</li><li>儿童表</li><li>座钟挂钟</li></ul></li>').appendTo($ul);
        $('<li><div>礼品</div><ul><li>火机烟具</li><li>军刀军具</li><li>美妆礼品</li><li>礼盒礼券</li><li>礼品文具</li><li>收藏品</li><li>古董把玩</li><li>地方礼品</li><li>创意礼品</li><li>婚庆用品</li><li>鲜花绿植</li><li>京东卡</li></ul></li>').appendTo($ul);
        $ul.appendTo($('.detial'));
        var $tableImg = $('<table class="detialImg"></table>');
        $('<tr><td><img src="../images/goods01-img01.jpg" alt=""></td><td><img src="../images/goods01-img02.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img03.jpg" alt=""></td><td><img src="../images/goods01-img04.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img05.jpg" alt=""></td><td><img src="../images/goods01-img06.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img07.jpg" alt=""></td><td><img src="../images/goods01-img08.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img09.jpg" alt=""></td><td><img src="../images/goods01-img10.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img11.jpg" alt=""></td><td><img src="../images/goods01-img12.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img13.jpg" alt=""></td><td><img src="../images/goods01-img14.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img15.jpg" alt=""></td><td><img src="../images/goods01-img16.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td colspan="2"><img src="../images/goods07-img-m01.jpg" alt=""></td></tr>').appendTo($tableImg);
        $tableImg.appendTo($('.detial'));
        $('.detial').appendTo($(this));
    })
    $('.goods').eq(6).on('mouseleave', function () {
        $('.detial').css('display', 'none');
        $('.detial').empty();

    })

    //让顶部导航栏超过头部导航栏时显示
    $(document).on('scroll',function () {
        if($(this).scrollTop()>=$('.nav').offset().top){
            $('#top-nav').css('display','block')
        }
        else {
            $('#top-nav').css('display','none')
        }
    })
    //
    $('.goodsList-top li:first-child').on('mouseover',function () {

        $('.goodsList-top .goods-top').css('display','block');
    })
    //
    $('.goodsList-top').on('mouseleave',function () {
        $('.goodsList-top .goods-top').css('display','none');
    })
    $('.goods-top').eq(0).on('mouseenter', function () {
        $('.detial-top').css('display', 'inline-block');
        $('<p class="detialTitle"><span>品牌日</span><span>家电城</span><span>智能生活馆</span><span>京东净化馆</span><span>京东帮服务店</span><span>值得买精选</span></p> ').appendTo($('.detial-top'));
        var $ul = $('<ul class="detialText"></ul>');
        $('<li><div>大家电</div><ul><li>平板电视</li><li>空调</li><li>洗衣机</li><li>家庭影院</li><li>DVD</li><li>迷你音响</li><li>热水器</li><li>冷吧、冰柜</li></ul></li>').appendTo($ul);
        $('<li><div>生活电器</div><ul><li>电风扇</li><li>冷风扇</li><li>净化器</li><li>加湿器</li><li>扫地机器人</li><li>吸尘器</li><li>插座</li><li>电话机</li><li>饮水机</li><li>取暖电器</li><li>净水设备</li><li>干衣机</li><li>收音机/录音机</li><li>电器开关</li></ul></li>').appendTo($ul);
        $('<li><div>厨房电器</div><ul><li>电饭煲</li><li>电压力锅</li><li>豆浆机</li><li>面包机</li><li>咖啡机</li><li>微波炉</li><li>料理/榨汁机</li><li>电烤箱</li><li>电磁炉</li><li>电饼铛</li><li>煮蛋器</li><li>酸奶机</li><li>电水壶/热水瓶</li><li>电饭盒</li><li>其他厨房电器</li></ul></li>').appendTo($ul);
        $('<li><div>个护健康</div><ul><li>按摩椅</li><li>剃须刀</li><li>脱毛器</li><li>口腔护理</li><li>电吹风</li><li>美容器</li><li>理发器</li><li>按摩椅</li><li>足浴盆</li><li>血压计</li><li>健康秤/厨房秤</li><li>血糖计</li><li>计步器</li><li>其他健康电器</li></ul></li>').appendTo($ul);
        $('<li><div>五金家装</div><ul><li>电动工具</li><li>手动工具</li><li>仪器</li><li>仪表</li><li>浴霸/排气管</li><li>灯具</li><li>LED灯</li><li>洁身器</li><li>水槽</li><li>龙头</li><li>沐浴花洒</li><li>厨卫五金</li><li>计步器</li><li>家具五金</li><li>门铃</li><li>监控安防</li></ul></li>').appendTo($ul);
        $ul.appendTo($('.detial-top'));
        var $tableImg = $('<table class="detialImg"></table>');
        $('<tr><td><img src="../images/goods01-img01.jpg" alt=""></td><td><img src="../images/goods01-img02.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img03.jpg" alt=""></td><td><img src="../images/goods01-img04.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img05.jpg" alt=""></td><td><img src="../images/goods01-img06.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img07.jpg" alt=""></td><td><img src="../images/goods01-img08.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img09.jpg" alt=""></td><td><img src="../images/goods01-img10.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img11.jpg" alt=""></td><td><img src="../images/goods01-img12.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img13.jpg" alt=""></td><td><img src="../images/goods01-img14.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img15.jpg" alt=""></td><td><img src="../images/goods01-img16.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img17.jpg" alt=""></td><td><img src="../images/goods01-img18.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img19.jpg" alt=""></td><td><img src="../images/goods01-img20.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td colspan="2"><img src="../images/goods01-img-m01.jpg" alt=""></td></tr>').appendTo($tableImg);
        $tableImg.appendTo($('.detial-top'));
        $('.detial-top').appendTo($(this));
    })
    $('.goods-top').eq(0).on('mouseleave', function () {
        $('.detial-top').css('display', 'none');
        $('.detial-top').empty();
    })

    $('.goods-top').eq(1).on('mouseenter', function () {
        $('.detial-top').css('display', 'inline-block');
        $('.detial-top').empty();
        $('<p class="detialTitle"><span>图书频道</span><span>音像</span><span>电子书</span><span>图书榜</span><span>音乐榜</span><span>影视榜</span></p> ').appendTo($('.detial-top'));
        var $ul = $('<ul class="detialText"></ul>');
        $('<li><div>电子书</div><ul><li>免费</li><li>小说</li><li>励志与成功</li><li>婚恋/两性</li><li>文学</li><li>经营</li><li>畅读VIP</li></ul></li>').appendTo($ul);
        $('<li><div>数字音乐</div><ul><li>通俗流行</li><li>古典音乐</li><li>摇滚说唱</li><li>爵士蓝调</li><li>乡村民谣</li><li>有声读物</li></ul></li>').appendTo($ul);
        $('<li><div>音像</div><ul><li>音乐</li><li>教育音像</li><li>游戏</li><li>影视</li></ul></li>').appendTo($ul);
        $('<li><div>文艺</div><ul><li>小说</li><li>文学</li><li>传记</li><li>艺术</li><li>青春文学</li></ul></li>').appendTo($ul);
        $('<li><div>人文社科</div><ul><li>历史</li><li>心理学</li><li>政治/军事</li><li>国学/古籍</li><li>宗教/哲学</li><li>社会科学</li></ul></li>').appendTo($ul);
        $('<li><div>经管励志</div><ul><li>经济</li><li>金融与投资</li><li>管理</li><li>励志与成功</li></ul></li>').appendTo($ul);
        $('<li><div>生活</div><ul><li>家教与育儿</li><li>旅游/地图</li><li>烹饪/美食</li><li>时尚/美妆</li><li>家居</li><li>婚恋与两性</li><li>娱乐/休闲</li><li>健身与保健</li><li>动漫/幽默</li><li>体育/运动</li></ul></li>').appendTo($ul);
        $('<li><div>科技</div><ul><li>科普</li><li>IT</li><li>建筑</li><li>医学</li><li>工业技术</li><li>电子/通信</li><li>农林</li><li>科学与自然</li></ul></li>').appendTo($ul);
        $('<li><div>其他</div><ul><li>英文原版书</li><li>港台图书</li><li>工具书</li><li>套装书</li><li>杂志/期刊</li></ul></li>').appendTo($ul);
        $('<li><div>少儿</div><ul><li>少儿</li><li>0-2岁</li><li>3-6岁</li><li>7-10岁</li></ul></li>').appendTo($ul);
        $('<li><div>教育</div><ul><li>教材</li><li>中小学教辅</li><li>考试</li><li>外语学习</li></ul></li>').appendTo($ul);
        $ul.appendTo($('.detial-top'));
        $('.detial-top').appendTo($(this));

    })
    $('.goods-top').eq(1).on('mouseleave', function () {
        $('.detial-top').css('display', 'none');
        $('.detial-top').empty();

    })

    $('.goods-top').eq(2).on('mouseenter', function () {
        $('.detial-top').css('display', 'inline-block');
        $('<p class="detialTitle"><span>手机频道</span><span>网上营业厅</span><span>配件城</span><span>影像Club</span><span>手机社区</span><span>以旧换新</span></p> ').appendTo($('.detial-top'));
        var $ul = $('<ul class="detialText"></ul>');
        $('<li><div>摄影摄像</div><ul><li>数码相机</li><li>单电/微电相机</li><li>单反相机</li><li>拍立得</li><li>运动相机</li><li>摄像头</li><li>镜头</li><li>户外素材</li><li>摄影器材</li></ul></li>').appendTo($ul);
        $('<li><div>手机通讯</div><ul><li>手机</li><li>对讲机</li></ul></li>').appendTo($ul);
        $('<li><div>京东通信</div><ul><li>选号中心</li><li>自助服务</li></ul></li>').appendTo($ul);
        $('<li><div>运营商</div><ul><li>购机送费</li><li>0元购机</li><li>选号入网</li></ul></li>').appendTo($ul);
        $('<li><div>手机配件</div><ul><li>电池</li><li>蓝牙耳机</li><li>充电器/数据线</li><li>手机耳机</li><li>贴膜</li><li>存储卡</li><li>保护套</li><li>车载</li><li>iPhone配件</li><li>创意配件</li><li>便携/无线音箱</li><li>手机饰品</li></ul></li>').appendTo($ul);
        $('<li><div>数码配件</div><ul><li>存储卡</li><li>读卡器</li><li>滤镜</li><li>闪光灯/手柄</li><li>相机包</li><li>三脚架/云台</li><li>相机清洁</li><li>相机贴膜</li><li>机身附件</li><li>镜头附件</li><li>电池/充电器</li><li>移动电源</li></ul></li>').appendTo($ul);
        $('<li><div>时尚影音</div><ul><li>耳机/耳麦</li><li>音响/音箱</li><li>麦克风</li><li>MP3/MP4</li><li>数码相框</li><li>专业音频</li><li>苹果周边</li></ul></li>').appendTo($ul);
        $('<li><div>智能设备</div><ul><li>智能手环</li><li>智能手表</li><li>智能眼镜</li><li>运动跟踪器</li><li>健康监测</li><li>智能配饰</li><li>智能家居</li><li>体感车</li><li>其他配件</li></ul></li>').appendTo($ul);
        $ul.appendTo($('.detial-top'));
        var $tableImg = $('<table class="detialImg"></table>');
        $('<tr><td><img src="../images/goods03-img01.jpg" alt=""></td><td><img src="../images/goods03-img02.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods03-img03.jpg" alt=""></td><td><img src="../images/goods03-img04.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods03-img05.jpg" alt=""></td><td><img src="../images/goods03-img06.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods03-img07.jpg" alt=""></td><td><img src="../images/goods03-img08.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods03-img09.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td colspan="2"><img src="../images/goods03-img-m01.jpg" alt=""></td></tr>').appendTo($tableImg);
        $tableImg.appendTo($('.detial-top'));
        $('.detial-top').appendTo($(this));
    })
    $('.goods-top').eq(2).on('mouseleave', function () {
        $('.detial-top').css('display', 'none');
        $('.detial-top').empty();
    })
    $('.goods-top').eq(3).on('mouseenter', function () {
        $('.detial-top').css('display', 'inline-block');
        $('<p class="detialTitle"><span>本周热卖</span><span>游戏部落</span><span>智能社区</span><span>GAME+</span><span>装机大师</span><span>办公生活馆</span></p> ').appendTo($('.detial-top'));
        var $ul = $('<ul class="detialText"></ul>');
        $('<li><div>服务产品</div><ul><li>上门服务</li><li>远程服务</li><li>电脑软件</li></ul></li>').appendTo($ul);
        $('<li><div>电脑整机</div><ul><li>笔记本</li><li>超极本</li><li>游戏本</li><li>平板电脑</li><li>平板电脑配件</li><li>台式机</li><li>笔记本配件</li><li>服务器/工作站</li></ul></li>').appendTo($ul);
        $('<li><div>电脑配件</div><ul><li>CPU</li><li>主板</li><li>显卡</li><li>硬盘</li><li>SSD固态硬盘</li><li>内存</li><li>机箱</li><li>电源</li><li>显示器</li><li>刻录机/光驱</li><li>声卡、扩展卡</li><li>散热器</li><li>装机配件</li><li>组装电脑</li></ul></li>').appendTo($ul);
        $('<li><div>外设产品</div><ul><li>鼠标</li><li>键盘</li><li>游戏设备</li><li>U盘</li><li>移动硬盘</li><li>鼠标垫</li><li>摄像头</li><li>线缆</li><li>电玩</li><li>手写板</li><li>外置盒</li><li>电脑工具</li><li>电脑清洁</li><li>UPS</li><li>插座</li></ul></li>').appendTo($ul);
        $('<li><div>网络产品</div><ul><li>路由器</li><li>网卡</li><li>交换机</li><li>网络存储</li><li>4G/3G上网</li><li>网络盒子</li><li>网络配件</li></ul></li>').appendTo($ul);
        $('<li><div>办公打印</div><ul><li>打印机</li><li>一体机</li><li>投影配件</li><li>传真机</li><li>复合机</li><li>碎纸机</li><li>扫描仪</li><li>墨盒</li><li>硒鼓</li><li>墨粉</li><li>色带</li></ul></li>').appendTo($ul);
        $('<li><div>办公文仪</div><ul><li>办公文具</li><li>文件管理</li><li>笔类</li><li>本册/便签</li><li>学生文具</li><li>财务用品</li><li>计算器</li><li>激光笔</li><li>白板/封装</li><li>考勤机</li><li>刻录碟片/附件</li><li>点钞机</li><li>支付设备/POS机</li><li>安防监控</li><li>呼叫/会议设备</li><li>保险柜</li><li>办公家具</li></ul></li>').appendTo($ul);
        $ul.appendTo($('.detial-top'));
        var $tableImg = $('<table class="detialImg"></table>');
        $('<tr><td><img src="../images/goods04-img01.jpg" alt=""></td><td><img src="../images/goods04-img02.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods04-img03.jpg" alt=""></td><td><img src="../images/goods04-img04.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods04-img05.jpg" alt=""></td><td><img src="../images/goods04-img06.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods04-img07.jpg" alt=""></td><td><img src="../images/goods04-img08.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods04-img09.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td colspan="2"><img src="../images/goods04-img-m01.jpg" alt=""></td></tr>').appendTo($tableImg);
        $tableImg.appendTo($('.detial-top'));
        $('.detial-top').appendTo($(this));
    })
    $('.goods-top').eq(3).on('mouseleave', function () {
        $('.detial-top').css('display', 'none');
        $('.detial-top').empty();
    })

    $('.goods-top').eq(4).on('mouseenter', function () {
        $('.detial-top').css('display', 'inline-block');
        $('<p class="detialTitle"><span>家装城</span><span>居家日用</span><span>精品家具</span><span>家装建材</span><span>厨房达人</span><span>猫猫狗狗</span></p> ').appendTo($('.detial-top'));
        var $ul = $('<ul class="detialText"></ul>');
        $('<li><div>家具</div><ul><li>卧室家具</li><li>客厅家具</li><li>书房家具</li><li>储物家具</li><li>阳台/户外</li><li>商业办公</li><li>床</li><li>床垫</li><li>沙发</li><li>电脑椅</li><li>衣柜</li><li>茶几</li><li>电视柜</li><li>餐桌</li><li>电脑桌</li><li>鞋架/衣架帽</li></ul></li>').appendTo($ul);
        $('<li><div>厨具</div><ul><li>烹饪锅具</li><li>刀剪菜板</li><li>厨房配件</li><li>水具酒具</li><li>餐具</li><li>茶具/咖啡具</li></ul></li>').appendTo($ul);
        $('<li><div>家装建材</div><ul><li>灯饰照明</li><li>厨房卫浴</li><li>五金工具</li><li>电工电料</li><li>墙地面材料</li><li>装饰材料</li><li>装修服务</li><li>吸顶灯</li><li>淋浴花洒</li><li>开关插座</li><li>油漆涂料</li><li>龙头</li></ul></li>').appendTo($ul);
        $('<li><div>家纺</div><ul><li>床品套件</li><li>被子</li><li>蚊帐</li><li>凉席</li><li>床单被罩</li><li>枕芯</li><li>毛巾浴巾</li><li>布艺软饰</li><li>毯子</li><li>抱枕靠垫</li><li>床垫/床褥</li><li>窗帘/窗纱</li><li>电热毯</li></ul></li>').appendTo($ul);
        $('<li><div>灯具</div><ul><li>台灯</li><li>吸顶灯</li><li>筒灯射灯</li><li>LED灯</li><li>节能灯</li><li>落地灯</li><li>五金电器</li><li>应急灯/手电</li><li>装饰灯</li><li>吊灯</li><li>氛围照明</li></ul></li>').appendTo($ul);
        $('<li><div>生活日用</div><ul><li>收纳用品</li><li>伞具雨具</li><li>浴室用品</li><li>缝纫/针织用品</li><li>洗晒/熨烫</li><li>净化除味</li></ul></li>').appendTo($ul);
        $('<li><div>家装软饰</div><ul><li>桌布/罩件</li><li>地毯地垫</li><li>沙发垫套</li><li>帘艺隔断</li><li>相框/照片墙</li><li>装饰字画</li><li>墙贴</li><li>节庆饰品</li><li>手工/十字绣</li><li>钟饰</li><li>装饰摆件</li><li>花瓶花艺</li><li>创意家居</li><li>保暖防护</li><li>香薰蜡烛</li></ul></li>').appendTo($ul);
        $('<li><div>清洁用品</div><ul><li>纸巾湿巾</li><li>衣物清洁</li><li>清洁工具</li><li>一次性用品</li><li>驱虫用品</li><li>皮具护理</li></ul></li>').appendTo($ul);
        $('<li><div>宠物生活</div><ul><li>宠物主粮</li><li>宠物零食</li><li>洗护美容</li><li>家居日用</li><li>医疗保健</li><li>出行装备</li><li>宠物玩具</li><li>水族用品</li><li>猫砂/尿布</li><li>宠物牵引</li><li>宠物驱虫</li></ul></li>').appendTo($ul);
        $ul.appendTo($('.detial-top'));
        var $tableImg = $('<table class="detialImg"></table>');
        $('<tr><td><img src="../images/goods05-img01.jpg" alt=""></td><td><img src="../images/goods05-img02.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods05-img03.jpg" alt=""></td><td><img src="../images/goods05-img04.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods05-img05.jpg" alt=""></td><td><img src="../images/goods05-img06.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods05-img07.jpg" alt=""></td><td><img src="../images/goods05-img08.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods05-img09.jpg" alt=""></td><td><img src="../images/goods05-img10.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td colspan="2"><img src="../images/goods05-img-m01.jpg" alt=""></td></tr>').appendTo($tableImg);
        $tableImg.appendTo($('.detial-top'));
        $('.detial-top').appendTo($(this));
    })
    $('.goods-top').eq(4).on('mouseleave', function () {
        $('.detial-top').css('display', 'none');
        $('.detial-top').empty();
    })

    $('.goods-top').eq(5).on('mouseenter', function () {
        $('.detial-top').css('display', 'inline-block');
        $('<p class="detialTitle"><span>男装</span><span>女装</span><span>内衣</span><span>国际品牌</span></p> ').appendTo($('.detial-top'));
        var $ul = $('<ul class="detialText"></ul>');
        $('<li><div>女装</div><ul><li>连衣裙</li><li>蕾丝/雪纺衫</li><li>衬衫</li><li>T恤</li><li>半身裙</li><li>休闲裤</li><li>短裤</li><li>牛仔裤</li><li>针织衫</li><li>吊带/背心</li><li>打底衫</li><li>打底裤</li><li>正装裤</li><li>小西服</li><li>马甲</li><li>风衣</li><li>羊毛衫</li><li>短外套</li><li>棉服</li><li>毛呢大衣</li><li>加绒裤</li><li>羽绒服</li><li>皮草</li><li>真皮皮衣</li><li>仿皮皮衣</li><li>旗袍/唐装</li><li>礼服</li><li>婚纱</li><li>中老年女装</li><li>大码女装</li></ul></li>').appendTo($ul);
        $('<li><div>男装</div><ul><li>Polo衫</li><li>夹克</li><li>衬衫</li><li>T恤</li><li>针织衫</li><li>休闲裤</li><li>短裤</li><li>牛仔裤</li><li>西裤</li><li>西服套装</li><li>休闲裤</li><li>裤子</li><li>正装裤</li><li>小西服</li><li>马甲</li><li>风衣</li><li>羊毛衫</li><li>短外套</li><li>棉服</li><li>毛呢大衣</li><li>加绒裤</li><li>羽绒服</li><li>工装</li><li>真皮皮衣</li><li>仿皮皮衣</li><li>中山装/唐装</li><li>中老年男装</li><li>大码男装</li></ul></li>').appendTo($ul);
        $('<li><div>服饰配件</div><ul><li>配件</li><li>光学镜架/镜片</li><li>防辐射眼镜</li><li>女士丝巾/围巾/披肩</li><li>棒球帽</li><li>遮阳伞/雨伞</li><li>遮阳帽</li><li>领带/领结</li><li>男士腰带</li><li>防晒手套</li><li>老花镜</li><li>袖扣</li><li>鸭舌帽</li><li>女士腰带</li></ul></li>').appendTo($ul);
        $('<li><div>内衣</div><ul><li>内衣配件</li><li>文胸</li><li>睡衣/家居服</li><li>情侣套装</li><li>文胸套装</li><li>少女文胸</li><li>女士内裤</li><li>男士内裤</li><li>商务男袜</li><li>休闲棉袜</li><li>吊带/背心</li><li>抹胸</li><li>连裤袜/丝袜</li><li>美腿袜</li><li>打底裤袜</li><li>塑身美体</li></ul></li>').appendTo($ul);
        $('<li><div>运动户外</div><ul><li>跑步运动</li><li>室内健身</li><li>自行车运动</li><li>轮滑运动</li><li>羽毛球/网球</li><li>足球/篮球</li><li>运动休闲</li><li>钓鱼用品</li><li>野营烧烤</li><li>游泳运动</li><li>舞蹈健身</li><li>瑜伽运动</li><li>防狼运动</li></ul></li>').appendTo($ul);
        $ul.appendTo($('.detial-top'));
        var $tableImg = $('<table class="detialImg"></table>');
        $('<tr><td><img src="../images/goods06-img01.jpg" alt=""></td><td><img src="../images/goods06-img02.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods06-img03.jpg" alt=""></td><td><img src="../images/goods06-img04.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods06-img05.jpg" alt=""></td><td><img src="../images/goods06-img06.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods06-img07.jpg" alt=""></td><td><img src="../images/goods06-img08.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods06-img09.jpg" alt=""></td><td><img src="../images/goods06-img10.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td colspan="2"><img src="../images/goods06-img-m01.jpg" alt=""></td></tr>').appendTo($tableImg);
        $tableImg.appendTo($('.detial-top'));
        $('.detial-top').appendTo($(this));
    })
    $('.goods-top').eq(5).on('mouseleave', function () {
        $('.detial-top').css('display', 'none');
        $('.detial-top').empty();
    })


    $('.goods-top').eq(6).on('mouseenter', function () {
        $('.detial-top').css('display', 'inline-block');
        $('<p class="detialTitle"><span>男鞋</span><span>女鞋</span><span>箱包</span><span>钟表</span><span>奢侈品</span><span>女包</span></p> ').appendTo($('.detial-top'));
        var $ul = $('<ul class="detialText"></ul>');
        $('<li><div>奢侈品</div><ul><li>鞋靴</li><li>箱包</li><li>钱包</li><li>服饰</li><li>腰带</li><li>太阳镜/眼镜框</li><li>视品</li><li>配件</li></ul></li>').appendTo($ul);
        $('<li><div>功能箱包</div><ul><li>拉杆箱/拉杆包</li><li>旅行包</li><li>电脑包</li><li>休闲运动包</li><li>相机包</li><li>腰包/胸包</li><li>登山包</li><li>旅行配件</li><li>书包</li><li>妈咪包</li></ul></li>').appendTo($ul);
        $('<li><div>流行男鞋</div><ul><li>休闲鞋</li><li>凉鞋/沙滩鞋</li><li>帆布鞋</li><li>拖鞋</li><li>商务休闲鞋</li><li>正装鞋</li><li>增高鞋</li><li>工装鞋</li><li>男鞋</li><li>传统布鞋</li><li>功能鞋</li><li>鞋配件</li><li>定制鞋</li></ul></li>').appendTo($ul);
        $('<li><div>时尚女鞋</div><ul><li>凉鞋</li><li>单鞋</li><li>高跟鞋</li><li>坡跟鞋</li><li>松糕鞋</li><li>鱼嘴鞋</li><li>休闲鞋</li><li>帆布鞋</li><li>拖鞋</li><li>妈妈鞋</li><li>雨靴</li><li>内增高</li><li>布鞋/绣花鞋</li><li>女靴</li><li>雪地靴</li><li>裸靴</li><li>马丁靴</li><li>鞋配件</li></ul></li>').appendTo($ul);
        $('<li><div>潮流女包</div><ul><li>单肩包</li><li>手提包</li><li>斜挎包</li><li>钱包</li><li>手拿包/晚宴包</li><li>卡包/零钱包</li><li>钥匙包</li></ul></li>').appendTo($ul);
        $('<li><div>精品男包</div><ul><li>商务公文包</li><li>单肩包</li><li>男生手包</li><li>双肩包</li><li>卡包/零钱包</li><li>钥匙包</li></ul></li>').appendTo($ul);
        $('<li><div>钟表</div><ul><li>男表</li><li>女表</li><li>儿童表</li><li>座钟挂钟</li></ul></li>').appendTo($ul);
        $('<li><div>礼品</div><ul><li>火机烟具</li><li>军刀军具</li><li>美妆礼品</li><li>礼盒礼券</li><li>礼品文具</li><li>收藏品</li><li>古董把玩</li><li>地方礼品</li><li>创意礼品</li><li>婚庆用品</li><li>鲜花绿植</li><li>京东卡</li></ul></li>').appendTo($ul);
        $ul.appendTo($('.detial-top'));
        var $tableImg = $('<table class="detialImg"></table>');
        $('<tr><td><img src="../images/goods01-img01.jpg" alt=""></td><td><img src="../images/goods01-img02.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img03.jpg" alt=""></td><td><img src="../images/goods01-img04.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img05.jpg" alt=""></td><td><img src="../images/goods01-img06.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img07.jpg" alt=""></td><td><img src="../images/goods01-img08.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img09.jpg" alt=""></td><td><img src="../images/goods01-img10.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img11.jpg" alt=""></td><td><img src="../images/goods01-img12.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img13.jpg" alt=""></td><td><img src="../images/goods01-img14.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td><img src="../images/goods01-img15.jpg" alt=""></td><td><img src="../images/goods01-img16.jpg" alt=""></td></tr>').appendTo($tableImg);
        $('<tr><td colspan="2"><img src="../images/goods07-img-m01.jpg" alt=""></td></tr>').appendTo($tableImg);
        $tableImg.appendTo($('.detial-top'));
        $('.detial-top').appendTo($(this));
    })
    $('.goods-top').eq(6).on('mouseleave', function () {
        $('.detial-top').css('display', 'none');
        $('.detial-top').empty();
    })


})