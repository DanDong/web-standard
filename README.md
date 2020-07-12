## Node + Koa  轻量级的前端规范平台(无需数据库)

### 安装
`npm install`

### 启动
`npm run serve`

### 目录结构
- 默认端口号: 8088，可以在 `/config.js` 中配置;
- `/public` 目录下是所有的静态资源
  * `./css` `./fonts` `./js` `./config.js` `./favicon.ico` `/index.html` 为前端打包后的文件
  * `pro01` 为项目编码，在 `/config.js` 中配置
    + `./iconfont` 存放从iconfont下载的字体文件，其中`lib`文件不要修改，新建一个文件存放下载的字体文件，在 `/public/config.js`中配置字体文件的路径，如果是内网开发，要修改下载的字体文件`demo_index.html`和`demo.css`中的外链为 `lib` 中的路径
    + `./iconfont/svg`存放所有的本地svg图标文件
    + `./md`中文件夹名称不要修改，对应页面中的几个菜单，子文件夹内的文件可以任意修改，命名规则： `序号.文件名.md`, 例：`01.test.md`
  * `./img` 存放所有本地图片，访问方式： `服务器地址 + 端口号 + 图片名`，例`http://127.0.0.1:8088/img/001.jpg`
- web端代码参见 `web-stadard-vue` 仓库
