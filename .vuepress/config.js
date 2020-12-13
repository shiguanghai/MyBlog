const { mixins } = require("vue-class-component");

module.exports = {
  "title": "时光海小屋",
  "base": '/',
  "description": "",
  "dest": "./dist",
  "head": [
    [
      "link", //网站图标
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta", // 移动端优化
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco", // 主题配置
  "themeConfig": { // 博客配置
    "mode": 'auto', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    "modePicker": true, // 默认 true，false 不显示模式调节按钮，true 则显示
    "vssueConfig": { // 评论
      platform: 'gitee',
      owner: 'shiguanghaitop',
      repo: 'myBlog-comments',
      clientId: '05eae62eb485a1d298af7ce15ffa44f5491b61c8cb02145cc95909efc49f4d19',
      clientSecret: 'd5d02299c9ad653e06c59d85ade659efc7d181cab81901802d002242014e9efc',
      // showComment: false
    },
    // "valineConfig": { // 浏览量
    //   el:'#comment',
    //   appId: 'cdfpTeN71obVeTAvdlGgcD47-gzGzoHsz',
    //   appKey: 'KDxIzye4rxtvOggI4Dkgnhsa',
    //   visitor: true,
    // },
    "nav": [ //导航栏配置
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "留言板",
        "link": "/blogs/other/messageBoard",
        "icon": "reco-suggestion"
      },
      {
        "text": "工具",
        "icon": "reco-message",
        "items": [
          {
            "text": "壁纸网站",
            "link": "https://wallhaven.cc/"
          },
          {
            "text": "AI音乐推荐",
            "link": "https://www.gnoosic.com/faves.php"
          },
          {
            "text": "格式转换",
            "link": "https://www.alltoall.net/"
          },
          {
            "text": "Deepl翻译器",
            "link": "https://www.deepl.com/translator"
          },
          {
            "text": "伴奏提取",
            "link": "https://www.lalal.ai/"
          },
          {
            "text": "JS代码测试",
            "link": "https://jsbench.me/"
          },
          {
            "text": "电子书搜索",
            "link": "https://www.jiumodiary.com/"
          },
          {
            "text": "在线作图",
            "link": "https://www.processon.com/"
          }
        ]
      },
      {
        "text": "链接",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/shiguanghai",
            "icon": "reco-github"
          },
          {
            "text": "Bilibili",
            "link": "https://space.bilibili.com/8049046",
            "icon": "reco-bilibili"
          },
          {
            "text": "Twitter",
            "link": "https://twitter.com/wang8852165",
            "icon": "reco-twitter"
          }
        ]
      }
    ],
    // "sidebar": {  // 需要配合博文设置 增加链接到/docs/theme-reco/
    //   "/docs/theme-reco/": [
    //     "",
    //     "theme",
    //     "plugin",
    //     "api"
    //   ]
    // },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,     // 在导航栏菜单中所占的位置，默认2
        "text": "分类" // 默认文案 “分类”
      },
      "tag": {
        "location": 3,     // 在导航栏菜单中所占的位置，默认3
        "text": "标签"      // 默认文案 “标签”
      }
    },
    // 友链配置
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "吴李曾",
        "desc": "喜欢的风景要自己去看.",
        "logo": "https://cdn.jsdelivr.net/gh/unluckynike/blogimg/images/avatar.jpg",
        "link": "https://www.wulinzeng.vip/"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "logo": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true, // 当前项目是否开启搜索栏
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Shiguanghai",
    "authorAvatar": "/avatar.png",
    "record": "豫ICP备19026848号",
    "recordLink": "https://beian.miit.gov.cn/",
    "startYear": "2019"
  },
  "markdown": {
    // 代码行数是否显示
    "lineNumbers": true
  },
  plugins: [  // 插件
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["z16"],
        clean: false,
        messages: {
          welcome: '欢迎来到时光海小屋 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        }
      }
    ],
    [
      "ribbon",
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: -1    // z-index property of the background, default: -1
      }
    ],
    [
      "cursor-effects",
      {
        size: 2,                    // size of the particle, default: 2
        shape: 'star',  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)欢迎回来！",
        hideIcon: "/favicon.ico",
        hideText: "(๑•́ ₃ •̀๑)等你哟~",
        recoverTime: 2000
      }
    ],
    // ['go-top']
    //#region meting简约音乐播放器
    // [
    //   'meting', 
    //   {
    //     // metingApi,
    //     meting: {
    //       auto: "http://music.163.com/playlist?id=5257918023"
    //     },
    //     aplayer: {
    //       fixed: "false", //是否开启吸低模式
    //       mini: "true",   //是否开启迷你模式
    //       autoplay: "true",   //是否开启自动播放
    //       theme: "#000000",      //设置播放器默认主题颜色
    //     },
    //     // mobile // 用于控制全局吸底播放器在移动设备上的一些特殊选项
    //   }
    // ],
    //#endregion
    [
      '@vuepress-reco/vuepress-plugin-bgm-player', 
      {
        "audios":[
          {
            name: '源星球，远星球',
            artist: '别方',
            url: '/源星球，远星球.m4a',
            cover: 'https://p2.music.126.net/8PepgHt0XXmxcZe5TcVedw==/17702137207431786.jpg?param=130y130'
          },
          {
            name: '单向箭头',
            artist: '双笙',
            url: '/单向箭头.mp3',
            cover: 'https://p2.music.126.net/4Gw5vGfeZ_7OZDiMmpvV9Q==/109951163860099587.jpg?param=130y130'
          },
          {
            name: '愿你有故乡 - (Homeland)',
            artist: '房东的猫',
            url: '/愿你有故乡 - (Homeland).m4a',
            cover: 'https://p1.music.126.net/KYb3H33YZxDWO8pm4EcIFQ==/109951164915642694.jpg'
          },
          {
            name: '123木头人',
            artist: 'SING女团',
            url: '/123木头人.m4a',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004PDknO0kg9Qk_1.jpg'
          }  
        ],
        "autoShrink":true,
        "shrinkMode":"mini",


      }
    ],
    //#region 
    // [
    //   '@vuepress-reco/vuepress-plugin-comments',
    //   {
    //     solution: 'valine',
    //     options: {
    //       el:'#vcomments',
    //       appId: 'cdfpTeN71obVeTAvdlGgcD47-gzGzoHsz',// your appId
    //       appKey: 'KDxIzye4rxtvOggI4Dkgnhsa', // your appKey
    //       visitor: true // 阅读量统计
    //     }
    //   }
    // ]
    //#endregion
  ]
}
