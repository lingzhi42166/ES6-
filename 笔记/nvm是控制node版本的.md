nvm是控制管理node.js版本的(当项目的Node版本不同时 就需要nvm切换node版本)

npm是用来管理第三方模块的工具,可以下载别人的工具,模块,轮子



首先全局安装babel:

​	npm install babel-cli -g 全局安装babel

​	npm uninstall babel-cli -g 因为是全局安装 所以就要在全局下卸载

全局安装的意思:可以在所有项目(任何目录)中使用。





# 第一步搭建工程:

​	1、先在需要es6的工程文件中 初始化nodejs工程  npm init

​	2、babel是将es6编译到es5 但是这只是babel的一部分功能  所以编译的时候需要一个指导书  （字典）

=>安装转换插件（此插件定义了 ES2015 转码规则，相当于是字典的功
能）：

npm install babel-preset-es2015 --save



# 第二步编译方式:

### 	1、通过webstorm的File Watchers工具

​	可用通过webstrom自带的工具 利用babel.cmd 去监控文件 实施编译

​	在settings>Tools>File Watchers 里面新建一个babel 里面参数是已经自动配置好的 

​	我们修改一下Arguments的设置为:

$FilePathRelativeToProjectRoot$ --out-dir dist --source-maps --presets es2015(-- presets es2015 => 编译成es2015)

原本点开默认配置的是:

​	 $FilePathRelativeToProjectRoot$ --out-dir dist --source-maps --presets env（env是约的意思就是要转换到的语法 我们修改为es2015）

​	记得webstrom转换Js的语法  Languages>javascript里面设置



$FilePathRelativeToProjectRoot$: ES6文件的路径  是webstrom的变量

out-dir dist 输出到的地方   因为是dir  所以是一个目录 也就是输出到目录dist

--source-maps  多输出的一个map文件 给浏览器看的 不管

--presets es2015  语法集





### ​	2、手动编译:

​		在项目有es6文件夹中babel es6.js --out-file es5.js（转换后的文件名） --presets es2015

​		babel es6.js --out-file  dist(这个是输出到的文件夹名 需要手动创建)/es5.js（转换后的文件名） --presets es2015

​		编译后的文件不能和源文件在一个路径里面 所以需要在放入一个文件夹内

​		

​		自动编译:  也就是 -w   监控的意思 一旦有修改 就自动编译
​			babel es6.js -w --out-file dist/es5.js --presets es2015

​			将src目录下的代码编译到lib目录

​			babel src --out-dir lib

​		在es6文件夹中 打开命令行 将监听-w(只要修改就自动编译)ECMAScript6 目录 将其代码编译到 dist/es6目录下 语法是es2015

​		babel ECMAScript6 -w --out-dir dist/es6 --presets es2015





### ​	3、使用 Browsersync 实时刷新页面和 Babel-Core 实时转换ES6 

​		

​		1、npm install -g browser-sync  下载Browsersync 全局安装  这个是Node的一个模块

​		浏览器自动刷新 热跟新

​		使用方式:

​			如果您想要监听整个项目的文件, 您需要使用*服务器模式*。 BrowserSync 将启动一个小型服务器，并提供一个URL来查看您的网站。

在当前项目目录下启动 Browsersync，开始监听

​		browser-sync start --server --files "**"   浏览器同步 开始 服务器 全部文件

这个项目必须需要有index.html   如	果没有 就会打开一个error 页面  显示 Connot Get

​		

​		2、babel-core（在不支持es6的浏览器中实时转换 ES6 到 ES5） **这个是项目依赖的模块 所以也是在项目中安装  方便我们在不能支持ES6的浏览器里也能测试**

​		不支持ES6的浏览器就会报语法错误 这个插件就让es6可以在浏览器中运行 实时转换 ES6 到 ES5

​		上面那些只是把ES6文件编译出一个es5文件  存在本地而已

​		下载babel-core

​		npm install babel-core@5 --save   这个是对单个工程生效的 所以每个工程需要单独安装

但是也可以全局安装 但是建议单个工程安装 这样别人下载下来 也可以用到这个模块

​		

​		3、HTML 页面引入 babel-core 实时转换 js 代码
​			/node_modules/babel-core/browser.min.js
​			/node_modules/babel-core/browser-polyfill.min.j	

​			并且引入的script标签也需要申明  type="text/babel"



​		4、在当前项目目录下启动 Browsersync，开始监听  可以看babel-core的文档

​			browser-sync start --server --files "**"

在手机中测试:

​	**127.0.0.1指定的是你当前这个设备的ip，你发送到手机上是不能直接打开的，需要将你本机的ip地址替换，才能在手机上打开,比如客户端中是127.0.0.1.3000   那么手机端就是你电脑的ip 地址 :3000**。

​		

**这里的 ES6 到 ES5 的转换是在浏览器端实现的,前面两种其实都是通过命令的方式在本地	转换到es5 而这一种方式就是浏览器引入babel-core  在浏览器端进行转换**



这个具体看动脑学院的ES6与环境配置的PDF