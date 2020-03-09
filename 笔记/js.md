## 1如何快速复制一份数组数据（考虑性能问题）
- by slice
```
var arr = [1, 2, 3], copyArr;
copyArr = arr.slice();
```
- by concat
```
var arr = [1, 2, 3], copyArr;
copyArr = arr.concat();

```
- by loop
```
var arr = [1, 2, 3], copyArr = [];
    for(var i=0;i<=arr.length;i++){
	    copyArr.push(arr[i])
}
```
#### 对于webkit, 使用concat; 其他浏览器, 使用slice
---

## 2.	如何快速合并两个数组
- by concat
```
var a = [1,2,3];var b = [4,5,6];
var c = a.concat(b); //c=[1,2,3,4,5,6];
```
#### 这里有一个问题，concat方法连接a、b两个数组后，a、b两个数组的数据不变，同时会返回一个新的数组。这样当我们需要进行多次的数组合并时，会造成很大的内存浪费，如果是数据量比较小的时候，还可以勉强用，如果数据量大的时候，这个就不妥了，所以这个方法肯定不是最好的。
- by loop
```
for( var i in b){
  a.push(b[i]);
}
```
#### 可以解决第一种方案中对内存的浪费，但不够优雅
- by apply
```
    a.push.apply(a,[4,5,6]);
```
#### 1）以上3种合并方法并没有考虑过a、b两个数组谁的长度更小。所以好的做法是预先判断a、b两个数组哪个更大，然后使用大数组合并小数组，这样就减少了数组元素操作的次数！2）有时候我们不希望原数组（a、b）改变，这时就只能使用concat了。
---
## 3.如何快速删除数组的第二个元素
`arr.splice(1,1)`
---
## 4.如何连接数组转化字符串
`arr.join()`
---
## 5.正则表达式是否会写？屏蔽关键字用到什么方法？
```
// 进行屏蔽的文字
var str = '小丽、小明和小红是校长的学生；在这个小家庭里面，校长就是我们的老师！';
// 关键字组，这个可以在前端进行定义，也可以来自后台
var arr = ['小丽','小明','小红','家庭','校长'];
var res = str.replace(new RegExp(arr.join('|'),'img'),'*');
//此处使用构造函数创建正则表达式，正则表达式模式修正符（i-->不区分大小写,m-->多行匹配,g-->全局匹配）
console.log(res);
// *、*和*是*的学生；在这个小*里面，*就是我们的老师！
```
---
## 6.说说你对原型作用链的理解
#### 原型链是由一些用来继承和共享属性的对象组成的（有限的）对象链。
#### 每个对象都有自己的__poto__属性，每一个函数都有自己的prototype原型，而原型对象也是一个对象，他也有自己的原型对象，这样就形成了一个由原型对象组成的链，被称为原型对象链。
- [相关知识点链接1](https://www.jianshu.com/p/17b2d4dd6867)
- [相关知识点链接2](https://blog.csdn.net/cc18868876837/article/details/81211729)
---
## 7.说说对面向对象的理解
#### Everything is object.
- 对象是单个事物的抽象
- 对象是一个容器，封装了属性(property)和方法(method)
#### 面向对象编程 —— Object Oriented Programming，简称 OOP ，是一种编程开发思想。它将真实世界各种复杂的关系，抽象为一个个对象，然后由对象之间的分工与合作，完成对真实世界的模拟。在面向对象程序开发思想中，每一个对象都是功能中心，具有明确分工，可以完成接受信息、处理数据、发出信息等任务。因此，面向对象编程具有灵活、代码可复用、高度模块化等特点，容易维护和开发。
[相关知识点链接](https://segmentfault.com/a/1190000015753259)
---
## 8.怎么判断一个原型是否是这个对象的原型
#### 使用: Object.prototype.isPrototypeOf()进行比较
```
var obj1 = {name: "Lilei"};
var obj2 = Object.create(obj1);
obj1.isPrototypeOf(obj2); // true
```
---
## 9.Typeof  null 结果是？
#### object --->这是一个历史遗留下来的(bug?)
----

## 10.this的指向
- 普通函数调用 指向全局对象Window
- 对象函数调用 哪个函数调用，this指向哪里
- 构造函数调用 指向new出来的实例
- apply和call调用 apply和call会改变传入函数的this 
[相关知识点链接](https://blog.csdn.net/liuyingv8/article/details/80582478)
- ES6箭头函数中的this： 箭头函数的this是在定义函数时绑定的，不是在执行过程中绑定的。简单的说，函数在定义时，this就继承了定义函数的对象
#### [相关知识点链接](https://www.jianshu.com/p/c1ee12a328d2)
----
## 11.实现一个功能，每次调用函数，让一个私有变量加1
```
var fn = (function () {
    var i = 0;
    return function () {
        return i++;
    };
})();
console.log(fn());
console.log(fn());
```
---
## 12.Ajax请求get和post方法区别
- GET在浏览器回退时是无害的，而POST会再次提交请求。
- GET产生的URL地址可以被Bookmark，而POST不可以。
- GET请求会被浏览器主动cache，而POST不会，除非手动设置。
- GET请求只能进行url编码，而POST支持多种编码方式。
- GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
- GET请求在URL中传送的参数是有长度限制的，而POST么有。
- 对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
- GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
- GET参数通过URL传递，POST放在Request body中。
- [相关知识链接](https://www.cnblogs.com/logsharing/p/8448446.html)
---
## 13.jquery中的$.when()方法
#### $.when() 函数提供一种方法来执行一个或多个对象的回调函数。如果向 jQuery.when 传入一个延迟对象，那么会返回它的 Promise 对象(延迟方法的一个子集)。 可以继续绑定 Promise 对象的其它方法，例如， defered.then 。当延迟对象已经被受理（resolved） 或被拒绝(rejected）（通常是由创建延迟对象的最初代码执行的），那么就会调用相应的回调函数。
---
## 14.怎么阻止事件冒泡，阻止默认事件
- `event.stopPopagation()`
- `event.preventDefault()`
---
## 15.描述一下new Data转化为固定格式（xx年xx月xx日xx时xx分xx秒,简单描述思路
```
  var da = new Date();
  var year = da.getFullYear()+'年';
  var month = da.getMonth()+1+'月';
  var date = da.getDate()+'日';
  console.log([year,month,date].join('-'));
```
---
## 16.对插入map地图的是否了解
#### 百度地图api
---
## 17.JavaScript的typeof返回哪些数据类型
- String
- Number
- Boolean
- Object
- Function
- undefined
- Symbol [相关知识链接](https://www.jianshu.com/p/f40a77bbd74e)
- ps:typeof(null)-->object

---
## 18.列举3种强制类型转换和两种隐式类型转换
- 强制类型转换
  - toString （注意：null和undefined两个值没有toString()方法）
  - Number()
    - parseInt()
    - parseFloat()
    - 如果对非string使用parseInt()或parseFloat()它会先将其转换为string，然后再操作
  - Boolean() 
  - 除了0、NaN、空串、null、undefined其余都是true。对象也会转换为true
- 隐式类型转换
  - 算术运算符（+、-、*、/、++、–、%…）
    - '+'作为一个双目运算符： 若+两边存在一个字符串，将另一个也转为字符串进行字符串拼接。其他情况下，不管双目还是单目，都转为数值类型
  - 关系运算符（>、<、==、!=…）
    - ===、!==：同时对比类型和值，两个都为真才返回真
    - ==、!=: 若两边均为对象，对比它们的引用是否相同
    - 逻辑非(!): 将其后变量或表达式转为布尔值
    - 对比字符串：从头至尾扫描逐个比较每个字符的unicode码，直到分出大小
    - 其他情况下，两边均转为数值类型
- [相关面试题目填坑](https://blog.csdn.net/itcast_cn/article/details/82887895)
---
## 19.Split join区别
- split()用于分割字符串，返回一个数组
- join()用于连接多个字符或字符串，返回值为一个字符串
---
## 20.数组操作方法
- concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，仅会返回被连接数组的一个副本
- join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的，默认使用','号分割，不改变原数组
- push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。末尾添加，返回的是长度，会改变原数组
- pop() 方法用于删除并返回数组的最后一个元素。返回最后一个元素，会改变原数组
- shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。返回第一个元素，改变原数组。
- unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。返回新长度，改变原数组。
- slice()返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。返回选定的元素，该方法不会修改原数组。
- splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。splice() 方法会直接对数组进行修改。
- sort() 按照 Unicode code 位置排序，默认升序,可传入排序函数（函数返回-1.1.0决定排序规则）
- reverse() 方法用于颠倒数组中元素的顺序。返回的是颠倒后的数组，会改变原数组。
- map() 对数组的每一项都运行给定的函数，返回每次函数调用的结果组成一个新数组
- find() 传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它，并且终止搜索
- findIndex() 传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它的下标，终止搜索。
- includes() 判断数组中是否存在该元素，参数：查找的值、起始位置，可以替换 ES5 时代的 indexOf 判断方式。indexOf 判断元素是否为 NaN，会判断错误。
---
## 21.	事件绑定和普通事件有什么区别
- 普通事件中的onclick是DOM0级事件只支持单个事件，会被其他onclick事件覆盖，而事件绑定中的addEventListener是DOM2级事件可以添加多个事件而不用担心被覆盖
---
## 22.闭包是什么？有什么特性？应用场景是什么
- 闭包是指在 JavaScript 中，内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使在其外部函数被返回了之后。
- 需要注意的一点时，内部函数访问的是被创建的内部变量本身，而不是它的拷贝。
- 闭包的特性
  - 封闭性：外界无法访问闭包内部的数据，如果在闭包内声明变量，外界是无法访问的，除非闭包主动向外 界提供访问接口；

  - 持久性：一般的函数，调用完毕之后，系统自动注销函数，而对于闭包来说，在外部函数被调 用之后，闭包结构依然保存在；
- 闭包的作用
  - 模拟块级作用域（匿名自执行函数）
  - 对结果进行缓存
  - [相关实例链接](https://www.jianshu.com/p/2fb8a9f26589)
  ---
  ## 23.DOM操作中最常见的方法
  - 创建节点
    - 创建元素节点：`document.createElement("div")`
    - 创建文本节点：`document.createNode("Hello world")`
  - 插入节点
    - 在父元素中插入节点：`parentNode.appendChild(newNode)`
    - 将节点插入到父元素之前:`parentNode.insertBefore(newNode，positionNode)`
  - 获取节点
    - 获取单个节点
      - `document.getElementById();`
      -  `document.querySelector()`;匹配指定css选择器元素的第一个子元素
    - 获取多个元素
      - `document.getElementsByTagName()`//返回一个对象数组（准确的说是HTMLCollection集合）
      - `document.getElementsByName()` //返回一个有相同name的数组
      -  `document.getElementsByClassName()`; 返回文档中所有指定类名的元素集合，作为 NodeList 对象
      ` `document.querySelectorAll()`;//匹配指定css选择器元素的所有子元素 
    - 获取父元素  `ele.parentNode`
    - 获取子元素 `ele.children`
    - 获取兄弟节点
      - `ele.previousElementSibling`;//上一个兄弟元素 
      - `ele.nextElementSibling`//下一个兄弟元素
    - 节点移除   `parentNode.removeChild(childNode)`
    - 替换子元素  `parentNode.replaceChild(newNode,oldNode)`
    - .复制元素  `ele.cloneNode(boolean)`//boolean为true,同时复制子节点。
  - 属性操作
    - `ele.setAttribute(name，value)`//设置属性 
    - `ele.getAttribute(name)`//获取元素的属性 
    - `ele.removeAttribute(name)`//移除属性
---
## 24. 数组去重
- 利用for嵌套for，然后splice去重（ES5中最常用）
```
function unique(arr){            
        for(var i=0; i<arr.length; i++){
            for(var j=i+1; j<arr.length; j++){
                if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
                    arr.splice(j,1);
                    j--;
                }
            }
        }
return arr;
}
```
- 利用indexOf去重
```
function unique(arr) {
    if (!isArray(arr)) {
        console.log('type error!')
        return
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array .indexOf(arr[i]) === -1) {
            array .push(arr[i])
        }
    }
    return array;
}
```
- 利用递归去重
```
function unique(arr) {
        var array= arr;
        var len = array.length;

    array.sort(function(a,b){   //排序后更加方便去重
        return a - b;
    })

    function loop(index){
        if(index >= 1){
            if(array[index] === array[index-1]){
                array.splice(index,1);
            }
            loop(index - 1);    //递归loop，然后数组去重
        }
    }
    loop(len-1);
    return array;
}
```
- 利用includes去重
```
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array =[];
    for(var i = 0; i < arr.length; i++) {
            if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
                    array.push(arr[i]);
              }
    }
    return array
}
```
- 利用ES6 Set去重（ES6中最常用）
```
function unique (arr) {
  return Array.from(new Set(arr))
}
```
---
## 25.Ajax的原理阐述
#### ajax 的全称是Asynchronous JavaScript and XML，其中，Asynchronous 是异步的意思，它有别于传统web开发中采用的同步的方式。
#### Ajax的原理简单来说通过XmlHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用javascript来操作DOM而更新页面[详细知识点分析](https://www.cnblogs.com/mingmingruyuedlut/archive/2011/10/18/2216553.html)
---
## 26.冒泡排序
```
function bSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len-1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
         // 相邻元素两两对比，元素交换，大的元素交换到后面
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
  }
  return arr;
}
```
---
## 27.选择排序
```
function swap (k,y,arr) {
     var aux = arr[k];
     arr[k] = arr[y];
     arr[y]=aux;
 };
 //数值交换函数
 function selectSort(list) {
     for (var i=0;i<list.length-1;i++){
        var selected = i;
         for (var j=i;j<list.length;j++){
             if(list[j]<list[selected]){
                 selected =j;
             }
             
         }
//循环出数值最小的元素与第一个元素交换位置
         if(list[i]>list[selected]){
             swap(i,selected,list);
        }    
     }
 return list;
}
```
---
## 28.写一个构造函数封装一个Person类，并实例化出一个对象，打印他的相关属性
```
function Person(name, age) {
            this.name = name;
            this.age = age;
            this.sayHello = function () {
                return (''+this.name + 'sayHello') 
            }
        }
        var lilei = new Person('lilei', 18)
        console.dir(lilei)
```
---

## 29
```
function Foo() {
            getName = function () {
                alert(1);
            };
            return this;
        }
        Foo.getName = function () {
            alert(2);
        };
        Foo.prototype.getName = function () {
            alert(3);
        };
        var getName = function () {
            alert(4);
        };

        function getName() {
            alert(5);
        }
         Foo.getName(); //2
        console.log(Foo.prototype) //4
```
---
## 30.介绍JavaScript的基本数据类型
- String，Number，Boolean，Null，undefined
- Symbol(es6新增，上文有知识点链接)
---
## 31.说说写JavaScript的基本规范
[知识点链接](https://www.cnblogs.com/faith3/p/6188261.html)
---
## 32.JavaScript有几种类型的值？（堆：原始数据类型和 栈：引用数据类型），你能画一下他们的内存图吗？
- 声明变量时不同的内存分配：
  - 原始值：存储在栈（stack）中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。
　　　　这是因为这些原始类型占据的空间是固定的，所以可将他们存储在较小的内存区域 – 栈中。这样存储便于迅速查寻变量的值。

  - 引用值：存储在堆（heap）中的对象，也就是说，存储在变量处的值是一个指针（point），指向存储对象的内存地址。这是因为：引用值的大小会改变，所以不能把它放在栈中，否则会降低变量查寻的速度。相反，放在变量的栈空间中的值是该对象存储在堆中的地址。地址的大小是固定的，所以把它存储在栈中对变量性能无任何负面影响。

- 不同的内存分配机制也带来了不同的访问机制　　

  - 在javascript中是不允许直接访问保存在堆内存中的对象的，所以在访问一个对象时，首先得到的是这个对象在堆内存中的地址，然后再按照这个地址去获得这个对象中的值，这就是传说中的按引用访问。
  - 而原始类型的值则是可以直接访问到的。　　

- 复制变量时的不同　　
  - 原始值：在将一个保存着原始值的变量复制给另一个变量时，会将原始值的副本赋值给新变量，此后这两个变量是完全独立的，他们只是拥有相同的value而已。
  - 引用值：在将一个保存着对象内存地址的变量复制给另一个变量时，会把这个内存地址赋值给新变量，也就是说这两个变量都指向了堆内存中的同一个对象，他们中任何一个作出的改变都会反映在另一个身上。（这里要理解的一点就是，复制对象时并不会在堆内存中新生成一个一模一样的对象，只是多了一个保存指向这个对象指针的变量罢了）。多了一个指针　
- 参数传递的不同（把实参复制给形参的过程）。首先我们应该明确一点：ECMAScript中所有函数的参数都是按值来传递的。但是为什么涉及到原始类型与引用类型的值时仍然有区别呢？还不就是因为内存分配时的差别。 　
  - 原始值：只是把变量里的值传递给参数，之后参数和这个变量互不影响。
  - 引用值：对象变量它里面的值是这个对象在堆内存中的内存地址，这一点你要时刻铭记在心！因此它传递的值也就是这个内存地址，这也就是为什么函数内部对这个参数的修改会体现在外部的原因了，因为它们都指向同一个对象。
- [相关知识链接](https://blog.csdn.net/jiangjuanjaun/article/details/80327342)
---
## 33.Javascript如何实现继承
- 类式继承

简介：将父类对象的实例赋值给子类的原型，则子类的原型可以访问父类原型上的属性和方法，以及父类构造函数中复制的属性和方法
```
  //1.类式继承
//声明父类
function SuperClass() {
  this.superValue = true;
}
//为父类添加公有方法
SuperClass.prototype.getSuperValue = function () {
  return this.superValue;
};
//声明子类
function SubClass() {
  this.subValue = false;
}
//继承父类
SubClass.prototype = new  SuperClass();//将父类对象赋值给子类原型，子类原型可访问父类原型上的属性和方法--类式继承原理
//子类添加公有方法
SubClass.prototype.getSubValue = function() {
  return this.subValue;
};
 
//测试
var instance = new SubClass();
console.log(instance.getSuperValue());//t
console.log(instance.getSubValue());//f
//
console.log(instance instanceof SuperClass);//t
console.log(instance instanceof SubClass);//t
console.log(SubClass instanceof SuperClass);//f
console.log(SubClass.prototype instanceof SuperClass);//t
```
- 通过instanceof来检测某个对象是否是某个类的实例，或者某个对象是否继承了某个类，这样可以判断对象和类之间的继承关系。instanceof通过判断对象的prototype链来确定这个对象是否是某个类的实例。需要注意的是，inatanceof是判断前面的对象是否是后面类（对象）的实例，并不表示两者的继承。所以console.log(SubCass instanceof SuperClass)会打印出false，而console.log(SubClass.prototype instanceof SuperClass)才会打印出true。
类式继承有两个缺点：
  - 1.子类通过其原型prototype对父类实例化，继承了父类。但当父类中的共有属性是引用类型时，会在子类中被所有的实例共用，如此在一个子类实例中更改从父类中继承过来的公有属性时，会影响到其他子类。
  - 2.由于子类是通过原型prototype实例化父类实现继承的，所以在创建父类的时候，无法向父类传递参数，因而在实例化父类的时候无法对父类构造函数内的属性初始化。

- 构造函数式继承

简介：通过在子类的构造函数中执行一次父类的构造函数实现。
```
//2.构造函数式继承
//声明父类
function SuperClass(id) {
  this.book = ['javascript','html','css'];//引用类型共有属性
  this.id = id;//值类型公有属性
}
//父类声明原型方法
SuperClass.prototype.showBooks = function() {
  console.log(this.books);
}
//声明子类
function SubClass(id) {
  //继承父类
  SuperClass.call(this,id);
}
//测试
var ins1 = new SubClass(1);
var ins2 = new SubClass(2);
ins1.book.push("Node");
console.log(ins1.id);//1
console.log(ins1.book);//['javascript', 'html', 'css', 'Node']
console.log(ins2.id);//2
console.log(ins2.book);//['javascript', 'html', 'css']
 
ins1.showBooks();//TypeError: ins1.showBooks is not a function
```
- SuperClass.call(this,id)是构造函数式继承的中心。call方法可以改变函数的作用环境，在子类中调用这个方法就是将子类中的变量在父类中执行，父类中给this绑定属性，因而子类继承了父类的共有属性。
缺点：
  - 这种类型的继承没有涉及原型prototype，所以父类的原型方法不会被子类继承。如想被子类继承就必须放在构造函数中，这样创造的每个实例都会单独拥有一份而不能共用，违背了代码复用原则。
- 组合式继承

简介：综合以上两种模式的优点，在子类原型上实例化父类，在子类构造函数中执行一遍父类的构造函数。这样融合了类式继承和构造式继承的优点，过滤了缺点。
```
//3.组合式继承
function SuperClass(name) {
  this.name = name;
  this.book = ['javascript','html','css'];
}
SuperClass.prototype.getName = function () {
  console.log(this.name);
};
function SubClass(name,time) {
  //构造函数式继承，继承父类name属性
  SuperClass.call(this,name);
  this.time = time;
}
//类式继承，子类原型继承
SubClass.prototype = new SuperClass();
//子类原型方法
SubClass.prototype.getTime = function () {
  console.log(this.time);
};
//测试
var ins1 = new SubClass('Node',2016);
ins1.book.push("Node");
console.log(ins1.book);
ins1.getName();
ins1.getTime();
 
var ins2 = new SubClass('React',2015);
console.log(ins2.book);
ins2.getName();
ins2.getTime();
```
- 缺点：
父类的构造函数执行了两遍：一次在子类的构造函数中call方法执行一遍，一次在子类原型实例化父类的时候执行一遍。

- 四.原型式继承

简介：对类式继承的封装，过渡对象相当于子类
```
//4.原型式继承
function inheritObject(o) {
  //声明过渡函数对象
  function F() {}
  //过渡对象的原型继承父类
  F.prototype = o;
  return new F();
}
//测试
var book = {
  name : "javascript",
  book : ['js','css']
};
var newbook = inheritObject(book);
newbook.name = "ajax";
newbook.book.push("Node");
var otherbook = inheritObject(book);
otherbook.name = "xml";
otherbook.book.push("React");
console.log(newbook.name);//ajax
console.log(newbook.book);//[ 'js', 'css', 'Node', 'React' ]
console.log(otherbook.name);//xml
console.log(otherbook.book);//[ 'js', 'css', 'Node', 'React' ]
console.log(book.name);//javascript
console.log(book.book);//[ 'js', 'css', 'Node', 'React' ]
```
- 缺点：
和类式继承一样，父类对象的引用类型值被共用。

- 五.寄生式继承

简介：寄生式继承其实是对原型继承的第二次封装，并且在第二次封装的过程中对继承的对象进行了拓展。
```
//5.寄生式继承
function inheritObject(o) {
  //声明过渡函数对象
  function F() {}
  //过渡对象的原型继承父类
  F.prototype = o;
  return new F();
}
//声明基对象
var book = {
  name : "javascript",
  book : ['js','css']
};
function createBook(obj) {
  //通过原型继承方式创建新对象
  var o = new inheritObject(obj);
  //拓展新对象
  o.getName = function() {
    console.log(name);
  }
  //返回拓展后的新对象
  return o;
}
 
var newbook = createBook(book);
newbook.name = "ajax";
newbook.book.push("Node");
var otherbook = createBook(book);
otherbook.name = "xml";
otherbook.book.push("React");
console.log(newbook.name);//ajax
console.log(newbook.book);//[ 'js', 'css', 'Node', 'React' ]
console.log(otherbook.name);//xml
console.log(otherbook.book);//[ 'js', 'css', 'Node', 'React' ]
console.log(book.name);//javascript
console.log(book.book);//[ 'js', 'css', 'Node', 'React' ]
```
- 六.寄生组合式继承

简介：寄生式继承和构造函数式继承结合使用。
```
//寄生组合式继承
function inheritObject(o) {
  //声明过渡函数对象
  function F() {}
  //过渡对象的原型继承父类
  F.prototype = o;
  return new F();
}
//寄生式继承 继承原型
function inheritPrototype(subClass,superClass) {
  //复制一份父类的原型副本保存在变量中
  var p = inheritObject(superClass.prototype);
  //修正因为重写子类原型导致子类的constructor属性被修改
  p.constructor = subClass;
  //设置子类的原型
  subClass.prototype = p;
}
function SuperClass(name) {
  this.name = name;
  this.colors = ["red","blue","green"];
}
//定义父类原型方法
SuperClass.prototype.getName = function() {
  console.log(this.name);
}
function SubClass(name,time) {
  SuperClass.call(this,name);
  this.time = time;
}
//寄生式继承父类原型
inheritPrototype(SubClass,SuperClass);
//子类新增原型方法
SubClass.prototype.getTime = function() {
  console.log(this.time);
}
//测试
var ins1 = new SubClass("js",2014);
var ins2 = new SubClass("css",2015);
ins1.colors.push("black");
console.log(ins1.colors);
console.log(ins2.colors);
ins2.getName();
ins2.getTime();
```
---
## 34.Javascript创建对象的几种方式
- 一、工厂模式

通过函数来封装以特定接口创建对象的细节。
```

function createPerson(name,age,job){
    var o = new Object();
        o.name = name;
        o.age = age;
        o.job = job;
        o.sayName = function(){
            console.log(this.name);
        }
    return o;
}
 
var p1 = new createPerson("xiaoLe",23,"Engineer");
var p2 = new createPerson("xiaoDing",31,"Doctor")
```

这种方式的好处在于可以快速创建相似的对象，问题在于无法区分对象类型[如p1和p2都是Object类型]。于是出现了构造函数模式。

- 二、构造函数模式
```

function Person(name,age,job){  
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    }
}
var p1 = new Person("xiaoLe",23,"Engineer");
var p2 = new Person("xiaoDing",31,"Doctor");
 
//构造函数模式产生的问题
console.log(p1.sayName() == p2.sayName());//false
```

  构造函数模式与工厂模式的区别是，没有显式地创建对象、属性和方法直接赋给this对象、没有return语句；在使用构造函数创建对象时，必须使用new操作符。通过构造函数模式创建的实例，可以通过instanceof操作符来判断其类型。但不足是，若构造函数中有方法，那么每个方法都会在实例上重新创建一遍，而这是没有必要的。但如果将构造函数中的方法挪到构造函数外，那这个方法又变成全局函数。为了解决这个问题，从而出现了原型模式。

- 三、原型模式
```

function Person(){
}
 
Person.prototype = {
    constructor:Person,
    name:"xiaoMi",
    age : 30,
    job : "Engineer",
    sayName = function(){
        console.log(this.name);
    }
};
 
var p1 = new Person();
p1.sayName();//"xiaoMi"
var p2 = new Person();
p2.sayName();//"xiaoMi"
console.log(p1.sayName() == p2.sayName());//true
 
//原型模式的问题
Person.prototype.friends = ["huawei","vivo"]
var p3 = new Person();
var p4 = new Person();
 
p3.friends.push("oppo");
console.log(p3.friends);//"huawei","vivo","oppo"
console.log(p3.friends === p4.friends);//true  
```

原型模式实现了属性和方法被实例共享，实例可以通过重新属性实现属性值个性化，但是这只有在属性类型为基本类型时才有效，如果属性类型为引用类型，就会出现上面friends属性的问题。为了解决这个问题，出现了构造函数和原型组合模式。

- 构造函数和原型组合模式
```

function Person(name,age,job){   
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["huawei","vivo"];
}
 
Person.prototype = {
    constructor:Person,
    sayName:function(){
        console.log(this.name);
    }
}
var p1 = new Person("xiaoMi",23,"Engineer");
var p2 = new Person("xiaoLe",23,"Engineer");
 
p1.friends.push("oppo");
console.log(p1.friends);//"huawei","vivo","oppo"
console.log(p2.friends);//"huawei","vivo"
```

这种模式顾名思义就是组合使用构造函数模式和原型模式，其中，构造函数模式用于定义实例属性，原型模式用于定义方法和共享的属性。这也是目前创建自定义类型的最常见方式.

- 五、动态原型模式
```

function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    if( typeof this.sayName != "function"){
        Person.prototype.sayName = function(){
                console.log(this.name);
        }
    }
}
 
var p1 = new Person("xiaoLe",23,"Engineer")
```

使用构造函数和原型组合模式时，往往是将构造函数和原型分开写，容易让人产生困惑，于是出现了这种模式，将所有信息都封装在构造函数中，通过在构造函数中初始化原型。

- 六、寄生构造函数模式
```
function SpecialArray(){
    var values = new Array();
    values.push.apply(values,arguments);
    //添加方法---特别处
    values.toPipedString = function(){
        return this.join("|");
    }
    return values;
 }
var colors = new SpecialArray("red","blue","green");
console.log(colors.toPipedString());//"red|blue|green"
```

这种模式可以在特殊情况下[比如对一些引用类型增加额外方法，同时又不想修改该引用类型的原型]用来为对象创建构造函数。

- 七、稳妥构造函数模式
```
function Person(name,age,job){
    var o = new Object();
    o.sayName = function(){
        console.log(name);
    }
    return o;
}
 
var p1 = Person("xiaoLe",23,"Engineer");
p1.sayName();//xiaoLe
```

该模式适合在某些安全执行环境。

---
## 35.eval是做什么的
把字符串参数解析成JS代码并运行，并返回执行的结果；
例如：

  1、eval("2+3");//执行加运算，并返回运算值。

  2、eval("varage=10");//声明一个age变量

---
## 36.什么是window对象? 什么是document对象
- Window -- 代表浏览器中一个打开的窗口
- document对象 -- 代表整个HTML 文档,可用来访问页面中的所有元素
- [相关知识点链接](https://blog.csdn.net/jcx5083761/article/details/41243697)

---
## 37.null，undefined的区别
- Undefined类型只有一个值，即undefined。当声明的变量还未被初始化时，变量的默认值为undefined。
- Null类型也只有一个值，即null。null用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象。
- null是javascript的关键字，可以认为是对象类型，它是一个空对象指针，和其他语言一样都代表“空值”，不过undefined却是javascript才有的。undefined是在ECMAScript第三版引入的，为了区分指针对象和未初始化的变量，它是一个预定义的全局变量。没有返回值的函数返回为undefined，没有实参的形参也是undefined。
- javascript权威指南：null 和 undefined 都表示 “值的空缺”，你可以认为 undefined 是表示系统级的、出乎意料的或类似错误的值的空缺，而null是表示程序级的、正常的或在意料之中的值的空缺。
- javascript高级程序设计：在使用var声明变量但未对其加以初始化时，这个变量的值就是undefined。unll值则是表示空对象指针。
---
## 38.写一个通用的事件侦听器函数
```
var EventUtil = {
    //根据情况分别使用dom2 || IE || dom0方式 来添加事件
    addHandler: function(element,type,handler) {
        if(element.addEventListener) {
            element.addEventListener(type,handler,false);
        } else if(element.attachEvent) {
            element.attachEvent("on" + type,handler);
        } else {
            element["on" + type] = handler;
        }
    },

    //根据情况分别获取DOM或者IE中的事件对象，事件目标，阻止事件的默认行为
    getEvent: function(event) {
        return event ? event: window.event;
    },
    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    preventDefault: function(event) {
        if(event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }

    //根据情况分别使用dom2 || IE || dom0方式 来删除事件
    removeHandler: function(element,type,handler){
        if(element.removeHandler) {
            element.removeEventListener(type,handler,false);
        } else if(element.detachEvent) {
            element.detachEvent("on" + type,handler);
        } else {
            element["on" + type] = null;
        }
    }

    //根据情况分别取消DOM或者IE中事件冒泡
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
}

var btn = document.getElementById("myBtn"),
    handler = function () {
        alert("Clicked");
    };

EventUtil.addHandler(btn,"click",handler);
EventUtil.removeHandler(btn,"click",handler);
```
---
## 38.[“1”, “2”, “3”].map(parseInt)
#### 1 NaN NaN [相关解析](https://blog.csdn.net/willard_cui/article/details/81504782)
---
## 39. 关于事件，IE与火狐的事件机制有什么区别？ 如何阻止冒泡？
- IE的事件流是冒泡流，火狐支持冒泡流和捕获流。
- 阻止事件冒泡：IE---e.cancelBubble = true;    火狐---e.stopPropagation()
---
## 40.javascript 代码中的”use strict”;是什么意思 ? 使用它区别是什么？

- use strict是一种ECMAscript 5 添加的（严格）运行模式,这种模式使得 Javascript 在更严格的条件下运行,
使JS编码更加规范化的模式,消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为。
默认支持的糟糕特性都会被禁用，比如不能用with，也不能在意外的情况下给全局变量赋值;
全局变量的显示声明,函数必须声明在顶层，不允许在非函数代码块内声明函数,arguments.callee也不允许使用；
消除代码运行的一些不安全之处，保证代码运行的安全,限制函数中的arguments修改，严格模式下的eval函数的行为和非严格模式的也不相同;
提高编译器效率，增加运行速度；
为未来新版本的Javascript标准化做铺垫。
---
## 41.Javascript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？

- hasOwnProperty
javaScript中hasOwnProperty函数方法是返回一个布尔值，指出一个对象是否具有指定名称的属性。此方法无法检查该对象的原型链中是否具有该属性；该属性必须是对象本身的一个成员。
使用方法：
object.hasOwnProperty(proName)
其中参数object是必选项。一个对象的实例。
proName是必选项。一个属性名称的字符串值。
如果 object 具有指定名称的属性，那么JavaScript中hasOwnProperty函数方法返回 true，反之则返回 false。
---
## 42.如何判断一个对象是否属于某个类
- javascript中检测对象的类型的运算符有：typeof、constructor、instanceof

typeof：typeof是一个一元运算符，返回结果是一个说明运算数类型的字符串。如："number"，"string"，"boolean"，"object"，"function"，"undefined"（可用于判断变量是否存在）。 但 typeof 的能力有限，其对于Date、RegExp、Array类型返回的都是"object"。所以它只在区别对象和原始类型的时候才有用。要区一种对象类型和另一种对象类型，必须使用其他的方法。



instanceof 运算符：instanceof 运算符要求其左边的运算数是一个对象，右边的运算数是对象类的名字或构造函数。如果 object 是 class 或构造函数的实例，则 instanceof 运算符返回 true。如果 object 不是指定类或函数的实例，或者 object 为 null，则返回 false。instanceof方法可以判断变量是否是数组类型，但是只限同一全局环境之内，在一个页面有多个iframe的情况下，instanceof失效。



constructor 属性: JavaScript中，每个对象都有一个constructor属性，它引用了初始化该对象的构造函数，常用于判断未知对象的类型。如给定一个求知的值 通过typeof运算符来判断它是原始的值还是对象。如果是对象，就可以使用constructor属性来判断其类型。



Object.prototype.toString.call()：该方法是目前为止发现的判断一个对象类型的最好的办法

---
## 43. 对JSON的了解
- JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。
它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小
- JSON与XML比较
  - 数据体积方面
JSON相对于XML来讲，数据的体积小，传递的速度更快些。
数据交互方面

  - JSON与JavaScript的交互更加方便，更容易解析处理，更好的数据交互
数据描述方面

  - JSON对数据的描述性比XML较差
传输速度方面

  - JSON的速度要远远快于XML
---
## 44.那些操作会造成内存泄漏？
内存泄漏指任何对象在您不再拥有或需要它之后仍然存在
setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏
闭包使用不当

---
## 45.说说你对promise的了解
- 主要用于异步计算
- 可以将异步操作队列化，按照期望的顺序执行，返回符合预期的结果
- 可以在对象之间传递和操作promise，帮助我们处理队列

## 46.请解释什么是事件代理
事件代理（Event Delegation），又称之为事件委托。是 JavaScript 中常用绑定事件的常用技巧。顾名思义，“事件代理”即是把原本需要绑定的事件委托给父元素，让父元素担当事件监听的职务。事件代理的原理是DOM元素的事件冒泡。使用事件代理的好处是可以提高性能
可以大量节省内存占用，减少事件注册，比如在table上代理所有td的click事件就非常棒
可以实现当新增子对象时无需再次对其绑定

---
## 47.js延迟加载的方式有哪些
- JS延迟加载，也就是等页面加载完成之后再加载 JavaScript 文件。
JS延迟加载有助于提高页面加载速度。

一般有以下几种方式：

  - defer 属性
  - async 属性
  - 动态创建DOM方式
  - 使用jQuery的getScript方法
  - 使用setTimeout延迟方法
  - 让JS最后加载

#### defer 属性
HTML 4.01 为 script标签定义了 defer属性。
用途：表明脚本在执行时不会影响页面的构造。也就是说，脚本会被延迟到整个页面都解析完毕之后再执行。
在script元素中设置 defer 属性，等于告诉浏览器立即下载，但延迟执行。
```
<!DOCTYPE html>
<html>
<head>
    <script src="test1.js" defer="defer"></script>
    <script src="test2.js" defer="defer"></script>
</head>
<body>
<!-- 这里放内容 -->
</body>
</html> 
```
说明：虽然script元素放在了head元素中，但包含的脚本将延迟浏览器遇到/html标签后再执行。

HTML5规范要求脚本按照它们出现的先后顺序执行。在现实当中，延迟脚本并不一定会按照顺序执行。

defer属性只适用于外部脚本文件。支持 HTML5 的实现会忽略嵌入脚本设置的 defer属性。
#### async 属性
HTML5 为 script标签定义了 async属性。与defer属性类似，都用于改变处理脚本的行为。同样，只适用于外部脚本文件。
目的：不让页面等待脚本下载和执行，从而异步加载页面其他内容。

异步脚本一定会在页面 load 事件前执行。
不能保证脚本会按顺序执行。
```
<!DOCTYPE html>
<html>
<head>
    <script src="test1.js" async></script>
    <script src="test2.js" async></script>
</head>
<body>
<!-- 这里放内容 -->
</body>
</html>  
```
async和defer一样，都不会阻塞其他资源下载，所以不会影响页面的加载。
缺点：不能控制加载的顺序
#### 动态创建DOM方式
```
//这些代码应被放置在</body>标签前(接近HTML文件底部)
<script type="text/javascript">  
   function downloadJSAtOnload() {  
       varelement = document.createElement("script");  
       element.src = "defer.js";  
       document.body.appendChild(element);  
   }  
   if (window.addEventListener)  
      window.addEventListener("load",downloadJSAtOnload, false);  
   else if (window.attachEvent)  
      window.attachEvent("onload",downloadJSAtOnload);  
   else 
      window.onload =downloadJSAtOnload;  
</script>  
```
#### 使用jQuery的getScript()方法
```
$.getScript("outer.js",function(){//回调函数，成功获取文件后执行的函数  
      console.log("脚本加载完成")  
});
```
#### 让JS最后加载
把js外部引入的文件放到页面底部，来让js最后引入，从而加快页面加载速度

----
## 42.同步和异步的区别
- 同步，可以理解为在执行完一个函数或方法之后，一直等待系统返回值或消息，这时程序是出于阻塞的，只有接收到返回的值或消息后才往下执行其他的命令。  
- 异步，执行完函数或方法后，不必阻塞性地等待返回值或消息，只需要向系统委托一个异步过程，那么当系统接收到返回值或消息时，系统会自动触发委托的异步过程，从而完成一个完整的流程。
---

## 43.如何解决跨域问题
- 通过jsonp跨域
- document.domain + iframe跨域
- location.hash + iframe
- window.name + iframe跨域
- postMessage跨域
- 跨域资源共享（CORS）
- nginx代理跨域
- nodejs中间件代理跨域
- WebSocket协议跨域
- [详细代码](https://segmentfault.com/a/1190000011145364?utm_source=tag-newest)
---
## 44.页面编码和被请求的资源编码如果不一致如何处理
a.html 的编码是gbk或gb2312的。 而引入的js编码为utf-8的 ，那就需要在引入的时候
```
<script src="http://www.xxx.com/test.js" charset="utf-8"></script>
```
同理，如果你的页面是utf-8的，引入的js是gbk的，那么就需要加上charset="gbk".
---
## 45.关于模块化
- AMD-异步模块定义
AMD是RequireJS在推广过程中对模块定义的规范化产出，它是一个概念，RequireJS是对这个概念的实现，就好比JavaScript语言是对ECMAScript规范的实现。AMD是一个组织，RequireJS是在这个组织下自定义的一套脚本语言
RequireJS：是一个AMD框架，可以异步加载JS文件，按照模块加载方法，通过define()函数定义，第一个参数是一个数组，里面定义一些需要依赖的包，第二个参数是一个回调函数，通过变量来引用模块里面的方法，最后通过return来输出。
是一个依赖前置、异步定义的AMD框架（在参数里面引入js文件），在定义的同时如果需要用到别的模块，在最前面定义好即在参数数组里面进行引入，在回调里面加载
- CMD---是SeaJS在推广过程中对模块定义的规范化产出，是一个同步模块定义，是SeaJS的一个标准，SeaJS是CMD概念的一个实现，SeaJS是淘宝团队提供的一个模块开发的js框架.通过define()定义，没有依赖前置，通过require加载jQuery插件，CMD是依赖就近，在什么地方使用到插件就在什么地方require该插件，即用即返，这是一个同步的概念
- CommonJS规范---是通过module.exports定义的，在前端浏览器里面并不支持module.exports,通过node.js后端使用的。Nodejs端是使用CommonJS规范的，前端浏览器一般使用AMD、CMD、ES6等定义模块化开发的
- ES6特性，模块化---export/import对模块进行导出导入的
---
## 46.ES6--Class
- 在es5中我们是使用构造函数实例化出来一个对象，那么构造函数与普通的函数有什么区别呢？其实没有区别，无非就是函数名称用首字母大写来加以区分，这个不用对说对es5有了解的朋友都应该知道。
但是es5的这种方式给人的感觉还是不够严谨，于是在es6中就换成了class，就是把es5中的function换成了class，有这个单词就代表是个构造函数，然后呢对象还是new出来的，这一点并没有变化。

  - 类的使用
```
  class Coder{
    name(val){
        console.log(val);
    }
  }

  let shuang= new Coder;
  shuang.name('shuang');
```
  - 类的传参 在es6中的对象的属性都是写在constructor里面，方法都是在原型身上。在这里面的代码用constructor约定了两个参数，然后用add（）方法把参数相加，这个地方跟以前不太一样，所以需要多注意一下
```
class Coder{
    name(val){
        console.log(val);
        return val;
    }

    constructor(a,b){
        this.a=a;
        this.b=b;
    }
 
    add(){
        return this.a+this.b;
    }
}
 
let shuang=new Coder(1,2);
console.log(shuang.add());
```
  - class的继承
```
class shuang extends Coder{
 
}
 
let shuang=new shuang;
shuang.name('Angel');
```
- [详细知识点解析](https://www.jianshu.com/p/0743e31cd911)
----

## 47.documen.write和 innerHTML的区别
- document.write是直接将内容写入页面的内容流，会导致页面全部重绘
- innerHTML将内容写入某个DOM节点，不会导致页面全部重绘
----
## 48.对象的方法
- Object.assign()

Object.assign()方法用于合并对象，只会合并可枚举的属性
```
const obj1= {a: 1}
const obj2 = Object.assign({}, obj1) // 将一个空对象和obj1合并在一起，相当于你复制对象
obj1.a = 2
console.log(obj2.a) // 1  两个对象是独立的。
复制代码
const obj3 = {a: {b: 1}}
const obj4 = Object.assign({}, obj3) // 将obj3和一个空对象合并在一起
obj3.a.b = 2
console.log(obj.4.a.b) // 2  两个对象又不是独立的了，，合并的对象属性里面如果还是对象，那么合并后就会存在这种情况。
const a = {a: 1} const b = {b: 2}
const c = Object.assgin(a, b, {c: 3})
console.log(c) // {a: 1, b: 2, c: 3}
```
如果合并的对象 都有某一个相同的属性名，则后面的覆盖掉前面的对象。

 

- Object.create()

Object.create() 方法使指定的原型对象和属性去创建一个新对象
```
const aa = Object.create(null)  
console.log(aa) // {}   以null为原型创建了一个对象，这个对象非常的干净，不继承任何东西
const bb = Object.create(Array.prototype)
bb 这个对象 将会拥有数组有的所有方法，因为是以数组的prototype为原型创建的对象。
 ```

- Object.defineProperties()

Object.defineProperties()方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象

```
const obj = {a: 1, b: 2}
Object.defineProperties(obj, {
    a: {value: ''hello, writable: false}, 
    c: {value: true, writable: true},
    d: {value: 'hello', writable: false}
})
// 上面value 是属性的值，writable属性是 是否可以修改属性值
console.log(obj) // {a: 'hello', b: 2, c: true, d: 'hello'}
obj.c = 3
console.log(c) // 3
obj.a = 4
console.log(a) // 'hello'
```
 

- Object.defineProperty()

Object.defineProperty() 方法会直接在对象上定义一个新属性，或修改现有的属性，并返回这个对象
```
const obj = {a: 1}
Object.defineProperty(obj, 'a', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'hello wrod'
})
console.log(obj) // {a: 'hello wrod'}
```
enumerbale是否在对象的枚举属性中 默认false

configurable 是否可修改或删除属性特性(属性特性就是这一堆值为false或则会true的东西)，默认false

wrtable 是否可以修改属性的值 默认为false

如果你在对象中未使用 Object.defineProperty(), Object.defineProperties()或Objecr.create()函数的情况下添加对象属性，则enumerbale，configurable，wrtable 默认都是true

 

- Object.entries()

Object.entries()方法你可以简单的理解为把对象可枚举的属性和值变成数组，
```
const obj = {foo: 'bar', too: 22}
console.log(Object.entries(obj)) // [['foo', 'bar'], ['too', 22]]
```

- Object.getOwnpropertyDescriptor()

Object.getOwnpropertyDescriptor()返回一个对象上的一个属性的 描述符，就是是否可枚举是否可修改等等，
```
const obj = {a: 2}
const b = Object.getOwnpropertyDescriptor(obj, 'a')
console.log(b) //{value: 2, writable: true, enumerable: true, configurable: true}
```

- Object.getOwnPropertyDescriptors()

Object.getOwnPropertyDescriptors()返回对象所有属性的描述符
```
const obj = {a: 1, b: 2}
const o = Object.getOwnPropertyDescriptors(obj)
console.log(o) 
// {{value: 1, writable: true, enumerable: true, configurable: true},
{value: 2, writable: true, enumerable: true, configurable: true}}
```

- Object.getOwnpropertyNames()

Object.getOwnpropertyNames()返回对象自身所有的属性名组成的对象
```
const obj = {a: 1, b: 2, c: 3, d: 4}
const o = Object.getOwnpropertyNames(obj)
console.log(o) // ['a', 'b', 'c', 'b']
Object.getPrototypeOf()返回指定对象的原型

const proto = {}
const obj = Object.create(proto)
console.log(Object.getPrototypeOf(obj) === proto) // true
```
- Object.is()

Object.is()方法传递两个参数，判断两个参数是否相等。  

Object.is()和 === 的区别是Object.is() 会让NaN和NaN相等+0和-0不相等。

===是+0和-0相等，NaN 和NaN 不想等。
```
console.log(Object.is(+0, -0)) // false
+0 === -0
```
 

- Object.preventExtensions()

Object.preventExtensions()让一个对象不可扩展(就是不让添加新属性)，并返回原对象，永远不能添加新属性，但可以删除已有的属性
```
const o ={}
Object.preventExtensions(o)
```

- Object.isExtensble()

Object.isExtensble()方便判断一个对象是否可扩展
```
const obj = {}
Object.isExtensble(obj) // true  可以添加新属性
```

- Object.freeze()

Object.freeze()方法 用于冻结对象，被冻结的对象，不可以添加新属性，不可以删除原有属性，也不可以修改原有属性，该对象永远不变。
```
const obj = {a: 2}
Object.freeze(obj)
obj.a = 3
console.log(a) // 2 不可以修改
```

- Object.isFrozen()

Object.isFrozen() 判断一个对象是否被冻结
```
const obj = {}
Object.isFrozen(obj) // false  未冻结
```

- Object.seal()

Object.seal()方法用于密封一个对象，密封只是不可以添加和删除对象的属性，不可以修改属性的可枚举可写可读配置，但是可以修改对象的已有属性的值

- Object.isSealed()

Object.isSealed()放啊判断一个对象是否被密封，是的话返回true  否 返回false

 

- Object.keys()

Object.keys()方法由对象的键 组成的一个数组，如果传入的值不是对象，则会转化为对象。
```
Object.keys('abc') // ['0', '1', '2']  'abc'是一个字符串，转化为对象以后 他的键就是他的索引咯 所以 输出了['0', '1', '2'] 
Object.keys([1, 2, 3]) // ['0', '1', '2']   数组的元素的键就是数组元素的索引
Object.keys({a: 'aa', b: 'bb'}) // ['a', 'b']
```

- Object.prototype.hasOwnProperty()

hasOwnProperty()方法用于判断对象里面是否有某属性，只判断自带的属性。
```
const  o = {a: 1}  
o.hasOwnProperty('a') // true   
o.hasOwnProperty('toString') //false
```

- Object.prototype.isPrototypeOf()

isPrototypeOf()方法用于判断一个对象是否在另一个对象的原型上。
```
const a = {amz: 1}      
const b = Object.create(a)     
a.isPrototypeOf(b) //true
```

- Object.prototype.propertyIsEnumerable()

propertyIsEnumerable()方法判断一个对象的自身属性在当前对象是否可枚举
```
const o = {a: 1}
o.propertyIsEnumerable('a') //true
Object.defineProperties(o, {b:{value:2,enumerbale:false}})
o.propertyIsEnumerbale('b') //false
```

- Object.prototype.toString()

toString()方法返回一个对象的字符串表示

`const  o = {a: 1}  o.toString()   //"[object Object]"`
 

- Object.prototype.toLocaleString()

toLocaleString()方法返回一个对象的字符串表示

`const  o = {a: 1}  o.toLocaleString()   //"[object Object]"`
toLocaleString() 方法在日期字符串对象数字数组都有，但是它们是有区别的。

---
## 49.作用域与变量提升
### 作用域
#### javascript中变量或函数产生作用、而不会对外产生影响的封闭空间。外部不可以访问内部变量或函数，但内部能够访问外部。

- ES5
  - 全局作用域：所有地方都可以访问

  - 函数作用域：只能在函数内部访问
- ES6
  -  JS增加了块级作用域（最近大括号的作用范围），但仅限于let声明的变量

### 变量提升
#### 因为变量申明是在任意代码执行前处理的，在代码区中任意地方申明变量和在最开始（最上面）的地方申明是一样的。也就是说，看起来一个变量可以在申明之前被使用！这种行为就是所谓的“hoisting”，也就是变量提升，看起来就像变量的申明被自动移动到了函数或全局代码的最顶上
  - 所有申明都会被提升到作用域的最顶上，变量声明提升仅仅是声明提升，定义并不提升；函数声明会连带 定义一起被提升

  - 同一个变量申明只进行一次，并且因此其他申明都会被忽略,变成赋值操作

        如：var i = 0 ; var i = 1     相当于 var i ;  i = 0 ; i = 1;  

  - 函数声明的优先级优于变量申明，且函数声明会连带定义一起被提升
---
## 50.如何编写高性能的JavaScript
- 将js脚本放在页面底部，加快渲染页面;

- 将js脚本成组打包，减少请求;

- 使用非阻塞方式下载js脚本;

- 尽量使用局部变量来保存全局变量;

- 尽量减少使用闭包;

- 使用window对象属性方法时省略window;

- 尽量减少对象成员嵌套;

- 缓存DOM节点的访问;

- 通过避免使用eval和function()构造器;

- 给setTimeout()和setInterval()传递函数而不是字符作为参数;

- 尽量使用直接量创建对象和数组;

- 最小化重绘(repaint)和回流(reflow)
----
## 51.那些操作会造成内存泄露
- 1）意外的全局变量引起的内存泄露
```
function leak(){
  leak="xxx";//leak成为一个全局变量，不会被回收
}
```
- 2）闭包引起的内存泄露
```
function bindEvent(){
  var obj=document.createElement("XXX");
  obj.οnclick=function(){
    //Even if it's a empty function
  }
}
```
闭包可以维持函数内局部变量，使其得不到释放。 上例定义事件回调时，由于是函数内定义函数，并且内部函数--事件回调的引用外暴了，形成了闭包。
解决之道，将事件处理函数定义在外部，解除闭包,或者在定义事件处理函数的外部函数中，删除对dom的引用。
```
//将事件处理函数定义在外部
function onclickHandler(){
  //do something
}
function bindEvent(){
  var obj=document.createElement("XXX");
  obj.οnclick=onclickHandler;
}
```
```
//在定义事件处理函数的外部函数中，删除对dom的引用
function bindEvent(){
  var obj=document.createElement("XXX");
  obj.οnclick=function(){
    //Even if it's a empty function
  }
  obj=null;
}
```
- 3）没有清理的DOM元素引用
```
var elements={
    button: document.getElementById("button"),
    image: document.getElementById("image"),
    text: document.getElementById("text")
};
function doStuff(){
    image.src="http://some.url/image";
    button.click():
    console.log(text.innerHTML)
}
function removeButton(){
    document.body.removeChild(document.getElementById('button'))
}
```
- 4）被遗忘的定时器或者回调
```
var someResouce=getData();
setInterval(function(){
    var node=document.getElementById('Node');
    if(node){
        node.innerHTML=JSON.stringify(someResouce)
    }
},1000)
```
这样的代码很常见, 如果 id 为 Node 的元素从 DOM 中移除, 该定时器仍会存在, 同时, 因为回调函数中包含对 someResource 的引用, 定时器外面的 someResource 也不会被释放。

- 6、怎样避免内存泄露

  - 1）减少不必要的全局变量，或者生命周期较长的对象，及时对无用的数据进行垃圾回收；

  - 2）注意程序逻辑，避免“死循环”之类的 ；

  - 3）避免创建过多的对象  原则：不用了的东西要及时归还。
---
## 52.JQuery的源码看过吗？能不能简单概况一下它的实现原理
- jQuery采用的是构造函数模式进行开发的,jQuery是一个类
- 常用的方法(CSS、属性、筛选、事件、动画、文档处理)都是定义在jQuery.prototype上的 ->只有jQuery的实例才能使用这些方法
- jquery封装了选择器以及很多的方法并做了兼容处理
- jquery源码封装在一个匿名函数的自执行环境中，有助于防止变量的全局污染，然后通过传入window对象参数，可以使window对象作为局部变量使用，好处是当jquery中访问window对象的时候，就不用将作用域链退回到顶层作用域了，从而可以更快的访问window对象。同样，传入undefined参数，可以缩短查找undefined时的作用域链
- [详细分析](https://www.jianshu.com/p/17a83794d031)
---
## 53.jQuery.fn的init方法返回的this指的是什么对象？
- 指向一个jquery类数组对象实例，这个实例可以调用jquery的方法和属性值
---
## 54. jquery中如何将数组转化为json字符串，然后再转化回来
```
 $.fn.stringifyArray = function(array) {
        return JSON.stringify(array)
    }
    $.fn.parseArray = function(array) {
        return JSON.parse(array)
    }
```
然后调用：
`$("").stringifyArray(array)`

---
## 55.jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝
语法：jQuery.extend( [deep ], target, object1 [, objectN ] )
jQuery.extend() 函数用于将一个或多个对象的内容合并到目标对象。
deep默认为false是浅拷贝，为true是深拷贝。深拷贝会在对象上进行递归合并。
- 浅拷贝（false 默认）：如果第二个参数对象有的属性第一个参数对象也有，那么不会进行相同参数内部的比较，直接将第一个对象的相同参数覆盖。

- 深拷贝（true）：如果第二个参数对象有的属性第一个参数对象也有，还要继续在这个相同的参数向下一层找，比较相同参数的对象中是否还有不一样的属性，如果有，将其继承到第一个对象，如果没有，则覆盖。
```
var object1 = {  
    apple: 0,  
    banana: {  
        weight: 52,  
        price: 100  
    },  
    cherry: 97  
};  
var object2 = {  
    banana: {  
        price: 200  
    },  
    durian: 100  
};  

//默认情况浅拷贝  
//object1--->{"apple":0,"banana":{"price":200},"cherry":97,"durian":100}  
//object2的banner覆盖了object1的banner，但是weight属性未被继承  
//$.extend(object1, object2);  
```
```
//深拷贝  
//object1--->{"apple":0,"banana":{"weight":52,"price":200},"cherry":97,"durian":100}  
//object2的banner覆盖了object1的banner，但是weight属性也被继承了呦 
$.extend(true,object1, object2);  
```
- [实现原理](https://www.jb51.net/article/61478.htm)
---
## 56.jQuery.extend(object)和jQuery.fn.extend(object)区别
- jQuery.extend(): Merge the contents of two or more objects together into the first object.(把两个或者更多的对象合并到第一个当中)；
- jQuery.fn.extend():Merge the contents of an object onto the jQuery prototype to provide new jQuery instance methods.(把对象挂载到jQuery的prototype属性，来扩展一个新的jQuery实例方法)
- [详解](https://blog.csdn.net/weixin_38587633/article/details/86549217)
---

## 57.jQuery 的队列是如何实现的？队列可以用在哪些地方
- 队列是什么？

队列是一种数据结构，跟生活中的排队是一样的,符合先进先出,后进后出的原则

即:对一个数组做一些限制：

1、只允许在后面插入数据,只允许在前面删除数据

2、不允许在后面删除数据,也不允许在前面插入数据,也不允许在中间随便插入和删除数据.
- 、jQuery的队列函数：queue();

jQuery的队列中存放的是函数。

`.clearQueue()`

从队列中删除所有未运行的项目。

`.dequeue()`

从队列最前端移除一个队列函数，并执行它。

`jQuery.dequeue()`

从队列最前端移除一个队列函数，并执行它。

`.queue()`

`显示或操作匹配元素所执行函数的队列。

`jQuery.queue()`

显示或操作匹配元素所执行函数的队列
- jQuery中的哪些函数使用了队列？

     在jQuery的animate，slideDown，slideUp，show，hide，fadeIn，fadeOut等动画函数中使用了队列
---
## 58.谈一下Jquery中的bind(),live(),delegate(),on()的区别
- bind()方法

bind()方法用于对匹配的元素进行特定事件的绑定。它直接绑定在现有的元素节点上，也很好的解决了浏览器在事件处理中的兼容问题。例如，它的调用格式如下：

bind(type, [data], fn) //事件类型(必选)，传递的参数(可选)，相关的函数$('a').bind('click',function(){alert('that tickles!')})

JQuery扫描文档找出所有的$(‘a’)元素，并把alert函数绑定到每个元素的click事件上
- live()方法

live()是事件委托的概念来执行，把节点的处理委托给了document，向当前或未来的匹配元素添加一个或多个事件处理器。

live(type, [data], fn) //事件类型(必选)，传递的参数(可选)，相关的函数

`$('a').live('click',function(){alert('That tickles!')})`

它是将函数绑定到$(document)元素上，并使用'click'和'a'作为参数。只要有事件冒泡到document节点上，它就查看该事件是否是一个click事件，以及该事件的目标元素与'a'这一CSS选择器是否匹配，如果都是的话，则执行函数。
- delegate()方法

delegate()方法的行为有点类似live()。但是不是把选择器和事件的信息附加到了document上，而是可以自行选择它要附加的DOM元素，这个技术可以让事件的委托正常工作。我们的选择又多了一些灵活性，不单可以利用事件委托，还可以选择委托的对象。它适用于当前或未来的元素（比如由脚本创建的新元素）。

delegate(selector,[type],[data],fn)//元素节点(字符串形式，一般是子级元素childselector)，事件类型，传递的参数(可选)，相关的函数
```
$('#container').delegate('a','click',function(){
   alert("That tickles!") 
   });
```

JQuery扫描文档查找$(‘#container’)，并使用click事件和’a’这一CSS选择器作为参数把alert函数绑定到$(‘#container’)上。任何时候只要有事件冒泡到$(‘#container’)上，它就查看该事件是否是click事件，以及该事件的目标元素是否与CCS选择器相匹配。如果两种检查的结果都为真的话，它就执行函数。

- on()方法

on()方法绑定事件处理程序到当前选定的jQuery对象中的元素。它是在1.7版本中被提出来的，提供绑定事件处理程序所需的所有功能。用于替换 bind()、delegate()和 live()。

on(events,[selector],[data],fn) // 事件类型，元素节点(可选)，传递的参数(可选)，相关的函数

- bind()的特点：直接绑定在已经存在的元素上，但是对在它执行完后动态添加的那些元素上不起作用。因为直接绑定在具体的元素上，响应事件及时，它是出现最早的一种绑定事件的方法。这种方法很浪费资源，引起性能问题，因为它要匹配选择器中的每一项并且挨个设置相同的事件处理程序。如果在页面加载前要处理添加事件的话，会影响加载效率的。在jquery1.7版本以前比较受推崇。在jquery1.7版本之后，官方推荐使用on()方法代替。在jquery3.0版本之后，已经删除该方法。

- live()的特点：与bind()的实现原理却不同。live()方法附加事件处理程序在document上通过冒泡来关联匹配到相应的元素和事件信息。对新添加的元素依然有效。不需要在每个元素上去绑定事件，而只在document上绑定一次就可以了。可以在document ready之前就可以绑定那些需要的事件。但是jquery1.9版本之后，已经被弃用了。

- delegate()方法的特点：更精确的小范围使用事件代理，性能优于live()。它可以自由选择附加的选择器和事件信息的位置，把事件绑定到具体元素的上一级较稳定（不会动态地添加或者删除、变化）的元素上，缩短了事件冒泡的路径。同样对新添加的元素依然有效。在jquery3.0版本之后，已经删除该方法。

- on()的特点：是以上三种方法的统一。可以使用一个方法，设置不同参数值来实现上述三种方法的功能。简化了jQuery代码库，并删除一个界别的重定向
---
## 59.是否知道自定义事件。jQuery里的fire函数是什么意思，什么时候用
- JS 原生支持自定义事件，示例：
```
  document.createEvent(type); // 创建事件
  event.initEvent(eventType, canBubble, prevent); // 初始化事件
  target.addEventListener('dataavailable', handler, false); // 监听事件
  target.dispatchEvent(e);  // 触发事件
```
- jQuery 里的 fire 函数用于调用 jQuery 自定义事件列表中的事件
---
## 60. jQuery 通过哪个方法和 Sizzle 选择器结合的？
- Sizzle 选择器采取 Right To Left 的匹配模式，先搜寻所有匹配标签，再判断它的父节点
- jQuery 通过 $(selecter).find(selecter); 和 Sizzle 选择器结合
---
## 61. 针对 jQuery 的优化方法
- 缓存频繁操作DOM对象
- 尽量使用id选择器代替class选择器
- 总是从#id选择器来继承
- 尽量使用链式操作
- 使用事件委托 on 绑定事件
- 采用jQuery的内部函数data()来存储数据
- 使用最新版本的 jQuery
---
## 62.jQuery 的 slideUp 动画，当鼠标快速连续触发, 动画会滞后反复执行，该如何处理
- 在触发元素上的事件设置为延迟处理：使用 JS 原生 setTimeout 方法
- 在触发元素的事件时预先停止所有的动画，再执行相应的动画事件：`$('.tab').stop().slideUp()`;
---
## 63.如何判断当前脚本运行在浏览器还是node环境中
- node环境：global对象undefined
- 浏览器环境：global对象不为window，则一定不是浏览器环境
---
## 64.移动端最小触控区域是多大
44px*44px

---
## 65.移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时
-  移动浏览器为什么会设置300毫秒的等待时间呢？这与双击缩放的方案有关。平时我们有可能已经注意到了，双击缩放，即用手指在屏幕上快速点击两次，可以看到内容或者图片放大，再次双击，浏览器会将网页缩放至原始比例。
浏览器捕获第一次单击后，会先等待一段时间，如果在这段时间区间里用户未进行下一次点击，则浏览器会做单击事件的处理。如果这段时间里用户进行了第二次单击操作，则浏览器会做双击事件处理。这段时间就是上面提到的300毫秒延迟
- 方法一：静止缩放
- 方法二：fastclick.js
---
## 66.Node的适用场景
- 1.I/O密集型
Node异步I/O的特点使得他可以轻松面对I/O密集型的业务场景，处理效率将比同步I/O高，虽然同步I/O可以采用多线程或者多进程的方式进行，但是相比Node自带异步I/O的特性来说，将增加对内存和CPU的开销。

- 2.高并发场景
针对高并发请求场景，Node的异步I/O以及事件回调特点可以高效的处理并发请求，举个简单的例子：有家快餐店，有一个收银员，有4个厨师，中午高峰期的时候回一下来很多人就餐，对于同步的场景，收银员收完钱后将订单给厨师，厨师开始做，做完之后把快餐交给顾客，然后再接受下一个顾客的订单，对于异步的场景，收银员收完钱后将订单给厨师同时给顾客一个号码牌，厨师开始做，这时候顾客可以去隔壁买个饮料，等到厨师做完叫好去取餐就行。对于同步的场景如果需要增加顾客的处理速度，需要多加几个收银员(多线程)，这意味着需要更多的人力成本，虽然对于系统的处理能力(厨师)来说是一样的。
---
## 67.MVC,MVP,MVVM
- MVC：Model-View-Controller
  - View（视图）：用户界面
  - Controller（控制器）：业务逻辑
  - Model（模型）：数据保存

- MVP
  - MVP中各部分的通信都是双向的，
  - View与Model之间不发生联系，通过Presenter传递
  - View非常薄，不部署任何业务逻辑；Presenter非常厚，所有的逻辑都部署在这里
- MVVM
  - MVVM是采用双向绑定的（data-binding），View的变动，自动反映在ViewModel，反之亦然
---
## 68.什么是“前端路由”?什么时候适合使用“前端路由”? “前端路由”有哪些优点和缺点?
- 所谓的前端路由，拥有这样一种能力：客户端浏览器可以不依赖服务端，根据不同的URL渲染不同的视图页面
- 前端路由更多用在单页应用上，也就是SPA，因为单页应用，基本上都是前后端分离的，后端自然也就不会给前端提供路由。在单页面应用中，大部分页面结果不变，只改变部分内容的使用。
- 优点

  - 用户体验好，不需要每次都从服务器全部获取，快速展现给用户。

- 缺点

  - （1）使用浏览器的前进，后退键的时候会重新发送请求，没有合理利用缓存。

  - （2）单页面无法记住之前滚动的位置，无法再前进，后退的时候记住滚动的位置。
---
## 69.从Unit Test到TDD再到BDD
[详解](https://www.jianshu.com/p/07f5ea4761ad)
-通过对BDD，TDD和单元测试的介绍，我们了解了如何做，什么时候做和具体测什么的问题，从一个小的单元测试到BDD的流程化的思维，让我们看到了好的工具和好的流程的强大作用，它们让跨部门沟通更高效，让软件开发和维护更容易，最终让用户体验更加满意。

---
## 70.mocha, sinon, jasmin, qUnit
都是JavaScript的单元测试框架

mocha是JavaScript的一种单元测试框架，既可以在浏览器环境下运行，也可以在Node.js环境下运行。

使用mocha，我们就只需要专注于编写单元测试本身，然后，让mocha去自动运行所有的测试，并给出测试结果。

mocha的特点主要有：

既可以测试简单的JavaScript函数，又可以测试异步代码，因为异步是JavaScript的特性之一；

可以自动运行所有测试，也可以只运行特定的测试；

可以支持before、after、beforeEach和afterEach来编写初始化代码

---
## 71.Templating Mustache, underscore, handlebars
- 这是一个模板引擎，简单来说就是构建一个模板，让其生成html的js代码。如果不用该js，手动来操作，我们可能需要繁杂的拼接html标签，还要做for循环
---
## 71.用js实现千位分隔符
- 正则表达式
```
<span style="font-size:14px;">function format (num) {
    var reg=/\d{1,3}(?=(\d{3})+$)/g; 
    return (num + '').replace(reg, '$&,');
}</span>
```
- 正常思维算法
```

function format(num){
 num=num+'';//数字转字符串
  var str="";//字符串累加
  for(var i=num.length- 1,j=1;i>=0;i--,j++){
      if(j%3==0 && i!=0){//每隔三位加逗号，过滤正好在第一个数字的情况
          str+=num[i]+",";//加千分位逗号
          continue;
      }
      str+=num[i];//倒着累加数字
  }
  return str.split('').reverse().join("");//字符串=>数组=>反转=>字符串
```
---
## 72.图片懒加载
先将img标签的src链接设为同一张图片（比如空白图片），然后给img标签设置自定义属性（比如 data-src）,然后将真正的图片地址存储在data-src中，当JS监听到该图片元素进入可视窗口时，将自定义属性中的地址存储到src属性中。达到懒加载的效果
这样做能防止页面一次性向服务器发送大量请求，导致服务器响应面，页面卡顿崩溃等
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://cdn.bootcss.com/jquery/2.1.0/jquery.min.js"></script>
    <style>
        .container{
            max-width: 800px;
            margin:0 auto;
        }
        .container:after{
            content:"";
            display: block;
            clear:both;
        }
        .container img{
            width:50%;
            height:260px;
            float:left;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="http://s4.sinaimg.cn/mw690/006uWPTUgy72CNFYNjB93&690" alt="1" data-src="http://img4.imgtn.bdimg.com/it/u=951914923,777131061&fm=26&gp=0.jpg">
        <img src="http://s4.sinaimg.cn/mw690/006uWPTUgy72CNFYNjB93&690" alt="1" data-src="http://img1.imgtn.bdimg.com/it/u=637435809,3242058940&fm=26&gp=0.jpg">
        <img src="http://s4.sinaimg.cn/mw690/006uWPTUgy72CNFYNjB93&690" alt="1" data-src="http://img1.imgtn.bdimg.com/it/u=3990342075,2367006974&fm=200&gp=0.jpg">
    </div>

        <script>

            // 一开始没有滚动的时候，出现在视窗中的图片也会加载
            start();

            // 当页面开始滚动的时候，遍历图片，如果图片出现在视窗中，就加载图片
            var clock; //函数节流
            $(window).on('scroll',function(){
                if(clock){
                    clearTimeout(clock);
                }
                clock = setTimeout(function(){
                    start()
                },200)
            })
            
            function start(){
                 $('.container img').not('[data-isLoading]').each(function () {
                    if (isShow($(this))) {
                        loadImg($(this));
                    }
                })
            }


            // 判断图片是否出现在视窗的函数
            function isShow($node){
                return $node.offset().top <= $(window).height()+$(window).scrollTop();
            }

            // 加载图片的函数，就是把自定义属性data-src 存储的真正的图片地址，赋值给src
            function loadImg($img){
                    $img.attr('src', $img.attr('data-src'));

                    // 已经加载的图片，我给它设置一个属性，值为1，作为标识
                    // 弄这个的初衷是因为，每次滚动的时候，所有的图片都会遍历一遍，这样有点浪费，所以做个标识，滚动的时候只遍历哪些还没有加载的图片
                    $img.attr('data-isLoading',1);
            }

        </script>
</body>
</html>
```
# [相关知识————防抖与节流](https://www.jianshu.com/p/c8b86b09daf0)

## 73.实现页面加载进度条
```
<style>
        body {
            margin: 0;
        }
        #progress {
            height: 2px;
            background: darkorange;
        }
        @-webkit-keyframes pulse {
            0% {
                width: 0;
            }
            100% {
                width: 100%;
            }
        }
        #progress {
            -webkit-animation: pulse 3s;
        }
        #progress.done {
            opacity: 0;
        }
</style>
```
```
<script>
    $({property:0}).animate({property: 100},{
        duration: 3000,
        step: function () {
            var percentage = Math.round(this.property);
            $('#progress').css('width', percentage + "%");
            if(percentage == 100){
                $("#progress").addClass("done");
            }
        }
    });
</script>
```
---
## 74.promise的实现原理，进一步会问async、await
async/await特点
- async/await更加语义化，async 是“异步”的简写，async function 用于申明一个 function 是异步的； await，可以认为是async wait的简写， 用于等待一个异步方法执行完成；

- async/await是一个用同步思维解决异步问题的方案（等结果出来之后，代码才会继续往下执行）

- 可以通过多层 async function 的同步写法代替传统的callback嵌套
- [详细知识点代码分析](https://www.jianshu.com/p/1e75bd387aa0)
---
## 75.node有哪些特征，与其他服务器端对比
- 单线程、事件驱动、非阻塞I/O

- node 无法直接渲染静态页面，提供静态服务

- node 没有根目录的概念

- node 必须通过路由程序指定文件才能渲染文件

- node 比其他服务端性能更好，速度更快
---
## 76.谈谈对node.js npm webpack的理解
webpack能够把.vue后缀名的文件打包成浏览器能够识别的js，而这个.vue文件装换需要打包器vue-loader；这个vue-loader打包器是可以从npm上面下载，npm下载文件之后；webpack打包文件的时需要node环境去运行

---
## 77使用npm有哪些好处
通过NPM，你可以安装和管理项目的依赖，并且能够指明依赖项的具体版本号，可以通过package.json文件来管理项目信息，配置脚本
---
## 78.简述同步和异步的区别，如何避免回调地狱
同步方法调用一旦开始，调用者必须等到方法调用返回后，才能继续后续的行为

异步方法调用一旦开始，方法调用就会立即返回，调用者就可以继续后续的操作。而异步方法通常会在另外一个线程中，整个过程，不会阻碍调用者的工作

避免回调地狱：
- Promise
- async/await
- generator
- 事件发布/监听模式
---
## 79.说一下事件循环eventloop 
- 所有同步任务都在主线程上执行，形成一个执行栈
- 当主线程中的执行栈为空时，检查事件队列是否为空，如果为空，则继续检查；如不为空，则执行3
- 取出任务队列的首部，加入执行栈
- 执行任务
- 检查执行栈，如果执行栈为空，则跳回第 2 步；如不为空，则继续检
---
## 80.node 和 前端项目怎么解决跨域的
通过在node服务器端设置
```
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
```
---
# [此站点相关知识点简单生动，推荐看看](https://www.liaoxuefeng.com/wiki/1022910821149312)






















