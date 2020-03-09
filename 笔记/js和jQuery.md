# 		js和jQuery的方法对比

## 选择器

```js
//js获取元素
document.getElementById(); //通过id属性来匹配，返回匹配的元素
document.getElementsByClassName(); //通过class属性来匹配，返回匹配的元素集合
document.getElementsByName(); //通过name属性来匹配，返回匹配的元素集合
document.getElementsByTagName(); //通过标签名来匹配，返回匹配的元素集合
document.querySelector(); //只返回匹配的第一个元素，如果没有匹配项，返回null
document.querySelectorAll(); //返回匹配的元素集合，如果没有匹配项，返回空的nodelist(节点数组)
```

```js
//jq获取元素
//后代选择器' '==find()
//子代选择器'>'==children()
//兄弟选择器'+'==next() 后一个兄弟元素
//兄弟选择器'~'==nextAll() 其后所有兄弟元素，可筛选类型
//prev() 同级上一个元素
//prevAll() 同级前面所有元素
//prevUntill(),nextUntill 选取同级元素，到指定元素位置(不包括指定元素)
//属性选择器
//$('tagname[attr]')        选取有指定属性名的元素
//$('tagname[attr=""]')     选取指定属性的元素
```

## 过滤器

```js
//:even,:odd
//:not(),:has()对应的方法not(),filter()
//:first,:last对应的方法first(),last()
//:lt(),:gt()
//:eq()对应的方法eq()
//:contains(value) 获取含有指定文本的元素
//:empty 获取空元素
//parent 获取非空元素
//nth-of-type(),first-of-type
//nth-child(),first-child
```

## 方法

```js
//改变html内容
//el.innerHTML=  ,el.value=         js方法
//el.html(str),el.val(str),el.text          jq方法
//改变css样式
//el.style.color='red'              js方法
//el.css(obj) obj不填获取所有属性     jq方法
//获取尺寸
//el.style.width,el.clientWidth-width+padding,el.offsetWidth-width+padding+border
//el.width(),el.innerpadding()-width+padding,el.outterWidth()-width+padding+border,el.outterWidth(true)
//获取位置
//el.offsetLeft,el.offsetParent-返回最近具有定位的父元素，el.scrollHeight，el.scrollTop-距离滚动条顶部的距离
//el.offset().left,el.position().left-相对具有定位的父元素的偏移量,el.scrollTop(),el.scrollTop(value)
//改变html属性值
//el.getAttribute(),el.setAttribute(属性名,属性值),el.removeAttribute() js方法
//el.attr(),el.removeAttr()          jq方法
//对类名操作
//el.addClass(),el.removeClass(),el.hasClass(),el.toggleClass()  jq方法
//插入节点
//parentElement.insertBefore(newElement, targetElement),parentElement.appendChild(newElement)
//new.insertbefore(target),target.append(new),target.after(new)
//删除节点
//parentElement.removeChild(childElement)；
//target.remove([selector])-不保留事件监听,target.empty(),target.detach([selector])-保留事件监听
//替换节点
//parentElement.replaceChild(newElement, targetElement)
//new.replaceAll(target)-替换所有的目标元素,target.replacewith(new)-用新元素替换target
//克隆节点
//currentElement.cloneNode(true/false);
//target.clone(true,false)-只复制目标元素的事件和数据，不复制子元素的
// 访问节点
//el.parentNode,el.children,el.previousSibling,el.firstChild
//el.partent(),el.children,el.prev(),el.first()
```

