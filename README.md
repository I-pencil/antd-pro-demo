# 基于` React `和 `Redux `的后台管理平台

## 项目说明

这是仿照[` Ant Design Pro `](https://pro.ant.design/index-cn)页面做出来的项目，目的是用来个人学习和提高。目前进行到项目框架的搭建，页面布局框架已经完成，还需完成具体页面的开发。

## 技术栈

- ## ` Webpack + React + React Router + Redux + Ant Design ` ##

` Ant Design Pro `中使用到了大量的图表，这些图表都是基于[` BizCharts `](https://bizcharts.net/products/bizCharts)，所以后期可能会引入` BizCharts `。

## 项目开发计划

1. 搭建项目框架 -- 已完成
  - 使用` Webpack `搭建开发和生产环境
  - 使用` React + React Router + Ant Design `开发页面布局框架
  - 使用` Redux `管理页面数据
2. 开发一个` Mock `服务，用来` Mock `项目的数据
3. 开发具体页面，用` Mock `产生数据
4. 优化项目
5. 加入登录和权限控制

## 拉取代码

``` bash
# 克隆项目到本地
$ git clone https://github.com/sakuraLili/antd-pro-demo.git
```

## 启动

``` bash
# 按照依赖
$ npm install .
# or
$ yarn

# 本地启动
$ npm run start
# or
$ yarn start
```
