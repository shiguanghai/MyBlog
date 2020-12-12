#!/bin/bash

# 安装依赖
# npm install
# 打包 
npm run build
# 删除 ngnix 指向的文件夹下得文件
rm -rf /usr/share/nginx/html/*

# 将打包好的文件复制过去
mv /tmp/MyBlog/dist/*  /usr/share/nginx/html
# 删除 clone 的代码
rm -rf /tmp/MyBlog
