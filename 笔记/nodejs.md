

# 				nodejs

## fs模块

### 读文件

	`fs.readFie(path,编码格式，callback(err,data))`

```js
fs.readFile('./test.txt','utf-8',function (err,data) {  
	if (err){ 
        console.log('读取错误');   
    }else {        
        console.log('读取成功')       
        console.log(data)    }
    })
```

### 写文件

	`fs.writeFie(url，callback(er))`
	
	`appendFile`

### 写入流

	createReadStream(path,参数) 比如编码格式 多个参数使用对象的形式传入

1. 事件

   读取	data

   读取完成		end

   读取失败		error

### 写出流

	createWriteStream(path,参数)

1. 事件

   打开	open

   完成 	finish

   失败 	error

2. 方法

   写入 	ws.write(data)

   关闭 	ws.end()

3. rs.pipe(ws) 管道流

### 文件夹操作

	检测文件属于文件夹还是文件
	
		fs.stat(path,callback(err,stats))  stats是一个对象有isFile()和isDir()方法

```js
fs.stat('./writeStream.txt',function (err,stat) {
    console.log(stat.isFile())
})
```

## http模块

## express

### 中间件

- ```js
  //内置中间件-配置静态资源目录
  app.use(express.static("public"));
  //设置之后可以访问目录内部的资源
  ```

- ```js
  //错误处理中间件，匹配不到路由，就走这一个
  app.use(function(req,res){
     res.status(404).send("出错了")
  })
  ```

- ```js
  app.get("/news",(req,res,next)=>{
     console.log("我是路由中间件")
     next()
  })
  ```

- ```js
  //使用应用级中间件
     //应用：权限判断，判断有没有登录
     //匹配路由之前和匹配路由之后做的一系列的操作
  app.use(function(req,res,next){
     console.log(new Date())
     next()
  })
  ```

### 方法

	**res.sendFile(path)**直接对外输出html

## 模板字符串

### 配置步骤

```js
let express = require('express')
let app = new express()
let ejs = require('ejs')
//配置模板引擎
app.set('view engine','ejs')
//设置ejs模板所在位置
app.set('views',__dirname+'/ver')
```

### 使用格式

- <% js代码%>
- <%= 用于转义的输出%>
- <%- include ("路径") %> 引入其他页面。

## cookie-parser

1. 使用

   ```js
   let express=require('express')
   let cookiesP=require('cookie-parser')
   let app=new express();
   
   //使用
   app.use(cookiesP('弄好的就是你的'));
   ```

2. 设置cookies

   ```js
   res.cookie('username','llr-123',{
       maxAge:60*60*1000,	//设置过期时间
       domain:'abc.cn',//指定访问的域名
       path:'/info',  //指定设置cookie的路径
       signed:true	//是否设置加密
   })
   ```

3. 获取cookies

   	未加密 	req.cookies

   	加密	req.signedCookies

### form表单的三种编码格式

	1、application/x-www-form-urlencoded。默认的编码方式。但是在用文本的	传输和MP3等大型文件的时候，使用这种编码就显得 效率低下。 

	2、multipart/form-data 。 指定传输数据为二进制类型，比如图片、mp3、文件。 

	3、text/plain。纯文体的传输。空格转换为 “+” 加号，但不对特殊字符编码。	