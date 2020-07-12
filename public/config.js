var config = {
  host: 'http://127.0.0.1:8088',
  title: '前端规范平台',
  iconfont: {
    // 项目名称 -> iconfont路径
    pro01: [
      {
        url: 'http://127.0.0.1:8088/pro01/iconfont/01/index.html',
        title: '项目一图标01',
        code: 'first'
      },
      {
        url: 'http://127.0.0.1:8088/pro01/iconfont/01/index.html',
        title: '项目一图标02',
        code: 'sencod'
      }
    ],
    pro02: [
      {
        url: 'http://127.0.0.1:8088/pro02/iconfont/01/index.html',
        title: '项目二图标01',
        code: 'first'
      }
    ]
  },
  projectList: [
    {
      name: '项目一',
      code: 'pro01'
    },
    {
      name: '项目二',
      code: 'pro02'
    },
    {
      name: '项目三',
      code: 'pro03'
    }
  ],
  color: {
    // 项目名称 -> 主题名称 -> 颜色
    pro01: {
      theme01: {
        '$paramy': '#333',
        '$danger': '#ff0000',
        '$white': '#fff'
      },
      theme02: {
        '$paramy': '#00ff00',
        '$danger': '#ff0000'
      }
    },
    pro02: {
      theme01: {
        '$paramy': '#333',
        '$danger': '#ff0000',
        '$white': '#fff'
      }
    }
  }
}
document.title = config.title
