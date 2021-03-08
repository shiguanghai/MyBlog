(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{560:function(s,n,a){"use strict";a.r(n);var t=a(1),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"购买服务器-部署应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#购买服务器-部署应用"}},[s._v("#")]),s._v(" 购买服务器/部署应用")]),s._v(" "),a("ul",[a("li",[s._v("nllcoder.com")]),s._v(" "),a("li",[s._v("106.75.24.155")]),s._v(" "),a("li",[s._v("2013XinNian#*")]),s._v(" "),a("li",[s._v("123@xxxx")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/03/05/x293jyOarnf4UYu.png",alt:"image.png"}})]),s._v(" "),a("h2",{attrs:{id:"阿里云服务器-centos-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阿里云服务器-centos-8"}},[s._v("#")]),s._v(" 阿里云服务器 - CentOS 8")]),s._v(" "),a("h3",{attrs:{id:"购买服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#购买服务器"}},[s._v("#")]),s._v(" 购买服务器")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.aliyun.com/product/ecs?spm=5176.6660585.h2v3icoap.14.496e6bf8b6KqcF",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.aliyun.com/product/ecs?spm=5176.6660585.h2v3icoap.14.496e6bf8b6KqcF"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("购买香港节点（域名不需要备案）")]),s._v(" "),a("li",[s._v("系统选择的是 CentOS 8，或者其它系统")])]),s._v(" "),a("h3",{attrs:{id:"远程登录服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程登录服务器"}},[s._v("#")]),s._v(" 远程登录服务器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@nllcoder.com\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://www.youtube.com\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -D "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1080")]),s._v(" root@nllcoder.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"ssh-免密登陆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-免密登陆"}},[s._v("#")]),s._v(" SSH 免密登陆")]),s._v(" "),a("ul",[a("li",[s._v("http://www.ruanyifeng.com/blog/2011/12/ssh_remote_login.html")]),s._v(" "),a("li",[s._v("客户端操作\n"),a("ul",[a("li",[a("strong",[s._v("使用 scp 的时候路径中不能有中文 ！")])])])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成密钥对")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Administrator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".ssh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 客户端生成公钥和私钥的命令")]),s._v("\nssh-keygen\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把公钥拷贝到服务器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" nllcoder_com_rsa.pub root@nllcoder.com:/root/.ssh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("客户端操作---修改本机的 .ssh/config 文件\n"),a("ul",[a("li",[s._v("C:\\Users\\Administrator\\.ssh")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Host nllcoder.com\nHostName nllcoder.com\nUser root\nPreferredAuthentications publickey\nIdentityFile C:\\Users\\Administrator\\.ssh\\nllcoder_com_rsa\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("服务器")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.ssh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 找到 authorized_keys 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把 nllcoder_com_rsa.pub 文件内容追加到 authorized_keys 文件末尾")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" authorized_keys "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" nllcoder_com_rsa.pub\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"安装-node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-node-js"}},[s._v("#")]),s._v(" 安装  Node.js")]),s._v(" "),a("ul",[a("li",[s._v("使用 nvm 安装 Node.js")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/nvm-sh/nvm"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新连接 ssh")]),s._v("\nnvm --version\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 Node.js lts")]),s._v("\nnvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --lts\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ul",[a("li",[s._v("安装 pm2")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i pm2 -g\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("pm2 log xx 查看出错日志")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/03/05/9ntY14cHDoK5iJw.png",alt:"image.png"}})]),s._v(" "),a("h2",{attrs:{id:"部署-nuxt-js-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署-nuxt-js-项目"}},[s._v("#")]),s._v(" 部署 Nuxt.js 项目")]),s._v(" "),a("h3",{attrs:{id:"手工部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手工部署"}},[s._v("#")]),s._v(" 手工部署")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("baseURL: https://conduit.productionready.io")])]),s._v(" "),a("li",[a("p",[s._v(".nuxt")])]),s._v(" "),a("li",[a("p",[s._v("static")])]),s._v(" "),a("li",[a("p",[s._v("nuxt.config.js")])]),s._v(" "),a("li",[a("p",[s._v("package.json")])]),s._v(" "),a("li",[a("p",[s._v("package-lock.json")])]),s._v(" "),a("li",[a("p",[s._v("pm2.config.json")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务器 home 下创建 realworld 文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" realworld\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地运行， 注意 scp 命令使用的时候，路径中不能有中文！！！！！！！！！！！！！")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" ./release.zip root@47.242.35.65:/home/realworld\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" realworld\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 unzip")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务器上解压")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" release.zip\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看隐藏目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -a\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm run start")]),s._v("\npm2 start pm2.config.json\n\npm2 stop xxxx\n\npm2 log RealWorld\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("h3",{attrs:{id:"服务器开放端口-3000、80"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器开放端口-3000、80"}},[s._v("#")]),s._v(" 服务器开放端口 - 3000、80")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/03/05/6PcJbvrwhUA1mpi.png",alt:"image.png"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/03/05/h4sBPXdmKEcfeoI.png",alt:"image.png"}})]),s._v(" "),a("h3",{attrs:{id:"自动部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动部署"}},[s._v("#")]),s._v(" 自动部署")]),s._v(" "),a("h4",{attrs:{id:"github-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-actions"}},[s._v("#")]),s._v(" Github Actions")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("创建远程仓库")])]),s._v(" "),a("li",[a("p",[s._v("个人设置-Developer settings-Personal access tokens")]),s._v(" "),a("ul",[a("li",[a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("e0ff11544b8eb0e101e4defa470527b6d92d9c53  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])])]),s._v(" "),a("li",[a("p",[s._v("项目设置-Secrets")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag v0.1.0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin v0.1.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"购买域名-域名解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#购买域名-域名解析"}},[s._v("#")]),s._v(" 购买域名/域名解析")]),s._v(" "),a("ul",[a("li",[s._v("https://homenew.console.aliyun.com/")])]),s._v(" "),a("h2",{attrs:{id:"部署-vue-js-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署-vue-js-项目"}},[s._v("#")]),s._v(" 部署 Vue.js 项目")]),s._v(" "),a("ul",[a("li",[s._v("www.bt.cn")])]),s._v(" "),a("h3",{attrs:{id:"安装-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-nginx"}},[s._v("#")]),s._v(" 安装 Nginx")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" nginx\nnginx -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 Nginx")]),s._v("\nnginx\nnginx -s reload\nnginx -s stop\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查配置文件是否 ok")]),s._v("\nnginx -t\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"nginx-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置"}},[s._v("#")]),s._v(" Nginx 配置")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("备份配置文件")]),s._v(" "),a("ul",[a("li",[s._v("cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup")])])]),s._v(" "),a("li",[a("p",[s._v("修改配置文件路径")]),s._v(" "),a("ul",[a("li",[s._v("vim /etc/nginx/nginx.conf")])])]),s._v(" "),a("li",[a("p",[s._v("当配置文件修改之后，要重启 nginx ！！！！！！！！！！")])]),s._v(" "),a("li",[a("p",[s._v("查看错误日志")]),s._v(" "),a("ul",[a("li",[s._v("cat /var/log/nginx/error.log")])])])]),s._v(" "),a("h3",{attrs:{id:"部署-vue-js-项目-node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署-vue-js-项目-node-js"}},[s._v("#")]),s._v(" 部署 Vue.js 项目 - Node.js")]),s._v(" "),a("ul",[a("li",[s._v("查看运行 nginx 进程的账号")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ps aux | grep nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("更改 www 目录的所有者")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("chown nginx:nginx -R /home/www\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"github-actions-部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-actions-部署"}},[s._v("#")]),s._v(" Github actions 部署")]),s._v(" "),a("ul",[a("li",[s._v("安装 git")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("YML")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("name: Publish And Deploy Demo\non:\n  push:\n    branches:    \n      - master\n\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署到服务器")]),s._v("\n    - name: Deploy\n      uses: appleboy/ssh-action@master\n      with:\n        host: "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ secrets.HOST }")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        username: "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ secrets.USERNAME }")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        password: "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ secrets.PASSWORD }")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        port: "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ secrets.PORT }")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        debug: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n        script: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /tmp\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone http://github.com/goddlts/vue-deploy-demo.git\n          "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /tmp/vue-deploy-demo\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x ./deploy.sh\n          ./deploy.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("ul",[a("li",[s._v("deploy.sh")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 ngnix 指向的文件夹下得文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /home/www/*\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将打包好的文件复制过去")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /tmp/vue-deploy-demo/dist/*  /home/www\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 clone 的代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /tmp/vue-deploy-demo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ul",[a("li",[s._v("如果 nginx 启动失败，查看错误日志，权限问题，使用下面方式解决")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看错误日志")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/log/nginx/error.log\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/www\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更改 www 目录的所有者")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" nginx:nginx -R "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"nginx-配置浏览器缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置浏览器缓存"}},[s._v("#")]),s._v(" Nginx 配置"),a("strong",[s._v("浏览器缓存")])]),s._v(" "),a("ul",[a("li",[s._v("强缓存\n"),a("ul",[a("li",[s._v("<- cache-control: max-age=600      ---- no-store  不缓存   no-cache 不使用强缓存")]),s._v(" "),a("li",[s._v("<- expires: Mon, 14 Sep 2020 09:02:20 GMT")])])]),s._v(" "),a("li",[s._v("协商缓存\n"),a("ul",[a("li",[s._v("<- last-modified: Fri, 07 Aug 2020 02:35:59 GMT")]),s._v(" "),a("li",[s._v("-> if-modified-since: Fri, 07 Aug 2020 02:35:59 GMT")]),s._v(" "),a("li",[s._v('<- etag: W/“5f2cbe0f-2382"')]),s._v(" "),a("li",[s._v('-> if-none-match: W/"5f2cbe0f-2382"')])])])]),s._v(" "),a("h3",{attrs:{id:"nginx-配置-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置-2"}},[s._v("#")]),s._v(" Nginx 配置")]),s._v(" "),a("ul",[a("li",[s._v("gzip 和 etag")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[s._v("http "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启gzip")]),s._v("\n  gzip on;\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用gzip压缩的最小文件；小于设置值的文件将不会被压缩")]),s._v("\n  gzip_min_length 1k;\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gzip 压缩级别 1-9")]),s._v("\n  gzip_comp_level 5;\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进行压缩的文件类型。")]),s._v("\n  gzip_types text/plain application/javascript application/x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("javascript text/css application/xml text/javascript application/x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("httpd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("php image/jpeg image/gif image/png;\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否在http header中添加Vary: Accept-Encoding，建议开启")]),s._v("\n  gzip_vary on;\n  \n  etag on;\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("ul",[a("li",[s._v("强缓存配置")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {\n  location ~* \\.(html)$ {\n    access_log off;\n    add_header  Cache-Control  max-age=no-cache;\n  }\n\n  location ~* \\.(css|js|png|jpg|jpeg|gif|gz|svg|mp4|ogg|ogv|webm|htc|xml|woff)$ {\n    access_log off;\n    add_header    Cache-Control  max-age=360000;\n  }\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"https-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https-配置"}},[s._v("#")]),s._v(" HTTPS 配置")]),s._v(" "),a("ul",[a("li",[s._v("https://buy.cloud.tencent.com/ssl")]),s._v(" "),a("li",[a("strong",[s._v("HTTPS 域名还需要配置！！")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('ssl_certificate "/etc/pki/nginx/server.crt";\nssl_certificate_key "/etc/pki/nginx/private/server.key";\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("安全组规则里打开 443 端口")]),s._v(" "),a("li",[s._v("HTTP/2 演示\n"),a("ul",[a("li",[s._v("https://http2.akamai.com/demo")]),s._v(" "),a("li",[s._v("链路复用")]),s._v(" "),a("li",[s._v("压缩请求头")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("return 301 https://www.nllcoder.com$request_uri;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl http2 default_server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        listen       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("::"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":443 ssl http2 default_server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server_name  www.nllcoder.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        root         /usr/share/nginx/html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        ssl_certificate "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/pki/nginx/www.nllcoder.com_bundle.crt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl_certificate_key "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/pki/nginx/private/www.nllcoder.com.key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl_session_cache shared:SSL:1m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl_session_timeout  10m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl_ciphers "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROFILE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SYSTEM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl_prefer_server_ciphers on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Load configuration files for the default server block.")]),s._v("\n        include /etc/nginx/default.d/*.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        error_page "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v(" /404.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /40x.html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        error_page "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v(" /50x.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /50x.html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h3",{attrs:{id:"反向代理配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反向代理配置"}},[s._v("#")]),s._v(" 反向代理配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("location /api/ {\n\tproxy_pass http://realworld.api.fed.lagounews.com/api/;\n}\n\n# ^~ 以/开头的内容\nlocation ^~ / {\n\t# 注意这里末尾要有 /，会把请求的路径拼接过来\n\tproxy_pass http://127.0.0.1:3000/;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("location /api/ {\n  add_header Access-Control-Allow-Credentials true;\n  add_header Access-Control-Allow-Origin $http_origin;\n  add_header Access-Control-Allow-Methods 'GET, POST, PUT, PATCH, DELETE, OPTIONS';\n  add_header Access-Control-Allow-Headers 'Authorization, Content-Type, Accept, Origin, User-Agent, DNT, Cache-Control, X-Mx-ReqToken, X-Requested-With';\n  add_header Access-Control-Max-Age 86400;\n  proxy_pass http://realworld.api.fed.lagounews.com/api/;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);