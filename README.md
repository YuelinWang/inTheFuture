## 未来
一款 TODO APP

一直想做一款软件，正好从b站UP主[峰华前端工程师](https://space.bilibili.com/302954484)获取到了前端思路，按着他的架构编写了这款TODO，也感谢和我一起合作写出来的后端coder：`KJee26`和UI`AaronyfDesign`

使用的是前后端分离技术
- 前端技术栈：Vue
- 前端作者：[霜序廿](https://github.com/YuelinWang)
- 后端技术栈：java
- 后端作者：[KJee26](https://github.com/KJee26)
- UI：[AaronyfDesign](https://github.com/AaronyfDesign)

前端本地启动：
```
git clone https://github.com/YuelinWang/inTheFuture.git

cd 

yarn install

yarn serve
````
打包：
```
yarn build
```



### 版本
- v1.0 20年12月9日
    - 发现bug/问题：空格可以输入，输入全是数字会把结构撑开，删除按钮
    - 解决的bug/问题：
-  v1.1 20年12月10日
    - 发现bug/问题：全是数字，字母会把结构撑开无具体解决思路
    - 解决的bug/问题：空格现已不可以输入，新增删除按钮



### 需求

一个是可以加设置项，可以更换背景，然后中间部分是白色透明（我的解决思路：加两个div，图片为最底层，上面是中间白色四边是渐变透明的白板，第三层为数据）

加字体库进去

创建子用户账号，可以一个手机记录两个人的，扩充一个一起做的模块

添加项里可以详细设置内容，时间，地点