# vue-base

> base

## Build Setup

``` bash

npm install -g cnpm --registry=https://registry.npm.taobao.org

# install dependencies
cnpm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# 开发规范：

## 命名：

* 变量和方法命名：驼峰

* 组件命名：按照vue规范，使用"-"分隔

## 编码：

* 使用vue简写方式，比如可以用:style代替v-bind:style；用@click代替v-on:click

* 避免直接操作DOM

* 每行最后加";"

* 降低耦合，组件相互独立、可复用

* js工具类型的辅助函数写到独立js文件中

* css全局公共样式写到独立css文件中


# 技术结构：

## 开发环境：

* nodejs v6.9.5

* vue v2.1

## 代码：

* vue：核心库

* vue-router：路由

* vuex：状态管理

* axios：ajax交互

## 构建工具：

* webpack
