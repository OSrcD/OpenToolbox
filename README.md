# terminal

#### Build Setup

``` bash
# install dependencies
需要安装node.js和npm这两个自行百度怎么安装

我的node.js版本是v12.18.3

sudo npm install -g cnpm

sudo cnpm install -g yarn

sudo sh npm_install.sh

# serve with hot reload at localhost:9080
sudo yarn run dev

# build electron application for production
sudo yarn run build

sudo open build/Terminal-darwin-x64/Terminal.app/


```

---

中文乱码问题：
在vim ~/.bash_profile添加以下配置
export LANG="zh_CN.UTF-8"
LANGUAGE="zh_CN.UTF-8"
LC_CTYPE="zh_CN.UTF-8"
LC_NUMERIC="zh_CN.UTF-8"
LC_TIME="zh_CN.UTF-8"
LC_COLLATE="zh_CN.UTF-8"
LC_MONETARY="zh_CN.UTF-8"
LC_MESSAGES="zh_CN.UTF-8"
LC_PAPER="zh_CN.UTF-8"
LC_NAME="zh_CN.UTF-8"
LC_ADDRESS="zh_CN.UTF-8"
LC_TELEPHONE="zh_CN.UTF-8"
LC_MEASUREMENT="zh_CN.UTF-8"
LC_IDENTIFICATION="zh_CN.UTF-8"
LC_ALL=

vim打开文件无法显示内容问题：
改变窗口的宽度大小
1225px（像素）