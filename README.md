## Node + Koa  轻量级的前端规范平台

### 安装
`npm i`

### 启动
`npm run serve`

### 目录结构
- 默认暴露的端口号是 8088，可以在 `/config.js` 中修改;
- `/public` 目录下是所有的静态资源
  * `./data/color.js` 配置预定义的颜色变量
  * `./iconfont` 存放从iconfont下载的字体文件，其中`lib`文件不要修改，新建一个文件存放下载的字体文件，在 `/public/config.js`中配置字体文件的路径，如果是内网开发，要删掉 下载的字体文件`demo_index.html`和`demo.css`中的外链，并链接为 `lib` 中的文件
  * `./iconfont/svg`存放所有的本地svg单文件图标
  * `./img` 存放所有本地图片，访问方式： `服务器地址 + 端口号 + 图片名`，例`http://127.0.0.1:8088/img/001.jpg`
  * `./md`中文件夹结构不要修改，对应页面中的几个菜单，文件夹内的文件可以任意修改，命名规则： `序号.文件名.md`, 例：`01.test.md`
- web端代码参见 `web-stadard-vue` 仓库




