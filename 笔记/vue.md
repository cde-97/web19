# Vue

## 基本指令

- v-text	将标签内的文本用name中的内容替换

  ```html
  <p v-text="name">你好啊</p>
  ```

- v-html      将字符串解析称html

- v-show     根据表达式之真假值，切换元素的 `display` CSS 属性

- v-if ，v-else，v-else-if          根据表达式之真假值，将元素从DOM结构中删除或添加

- v-for      循环数据

  ```html
  <ul v-for='(val,key) in items'>
  	<li>{{key}}:{{val}}</li>
  </ul>
  <ul v-for='item in items'>
      <li>{{item}}<li>
  </ul>
  ```

- v-bind   绑定属性 简写为:

  v-bind:title=''与title=''的区别: v-bind可以绑定一个表达式

  一个属性有多个值时用数据传递

  通过对象可一次传入多个属性

- v-on     监听事件  简写为@

  常用的修饰符有.prevent , .stop , .self , .capture

  绑定多个事件时用对象的形式传入 v-on={}

  可以用布尔值或三目运算符来表示是否否添加该类名 

  ```html
  <p id="456" :class="['weight',{'red':true}]">多个类名</p>
  <h1 :class=["red","fs50",flag?"un":""]>好好学习天天向上</h1>
  ```

- v-pre    跳过这个元素和它的子元素的编译过程，可以用来显示原始 Mustache 标签

- v-cloak     能够解决插值表达式的闪烁问题

## 自定义指令

### 自定义全局指令

```js
Vue.directive('focus', {
            inserted: function (params) {
                params.focus()
            }
        })
```

### 自定义局部指令

```js
 directives: {
          focus: {
              nserted: function (params，binding) {
                    params.focus();
                    console.log(params);
                   }
               }
           }
```

### 钩子函数

bind和inserted的区别:

	共同点： dom插入都会调用，bind在inserted之前
	
	不同点：
	
		bind 时父节点为 null
	
		inserted 时父节点存在。
	
		bind是在dom树绘制前调用，inserted在dom树绘制后调用

## 自定义过滤器

![](C:\Users\ADMINI~1\AppData\Local\Temp\1583038640684.png)

## 特殊特性

ref 		给dom元素绑定，通过this.$refs获取一个包含这个属性的集合

## watch

一个对象，键是需要观察的表达式，值是对应回调函数

![1583053089395](C:\Users\ADMINI~1\AppData\Local\Temp\1583053089395.png)

## computed

只有数据改变时才会执行

计算属性，必须有返回值 return，使用时直接使用属性

![1583054376104](C:\Users\ADMINI~1\AppData\Local\Temp\1583054376104.png)

## 注册组件component

## 生命周期函数

beforeCreate：function（）{}

这个生命周期内不能操作dom和数据

 created: function () {}

这个生命周期内元素还没有挂载dom，数据已经初始化了，可以修改数据了

beforeMount: function () {}

模板编译之前

mounted: function () {}

模板编译完成

beforeUpdate: function () {}

没有更新数据这个生命周期里面的内容不会执行

updated: function () {}

数据更新完毕

beforeDestroy: function () {}

销毁之前

destroyed: function () {}

销毁之后

销毁实例  实例.$destroy()

## sql查询语句

SELECT * FROM product WHERE product_name LIKE '%电%'			模糊查询

INSERT INTO `user` (user_name,login_password) VALUES ("zhangasna",'1234')  插入数据

## 信息传递

### 父子组件

用过props属性

为引入的子组件通过props定义的关键字绑定父组件的信息，然后子组件可以获取父组件的信息

用ref可以是父组件获取子组件的信息

### 兄弟组件

通过第三方(vue实例)来传递

## 状态管理

### store

![](C:\Users\ADMINI~1\AppData\Local\Temp\1583555731862.png)

![1583555704186](C:\Users\ADMINI~1\AppData\Local\Temp\1583555704186.png)