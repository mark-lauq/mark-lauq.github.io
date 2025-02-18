# 蓝城运营管理后台

**Frontend:**
[<Badge type="tip" text="React" />](https://react.dev)
[<Badge type="tip" text="Ant Design" />](https://ant.design)
[<Badge type="tip" text="Video.JS" />](https://videojs.com)
[<Badge type="tip" text="Webpack" />](https://webpack.js.org)

**Backend:**
[<Badge type="tip" text="Node" />](https://nodejs.org)
[<Badge type="tip" text="Koa" />](https://koajs.com)
[<Badge type="tip" text="Redis" />](https://redis.io)
[<Badge type="tip" text="MySQL" />](https://www.mysql.com)
[<Badge type="tip" text="gRPC" />](https://grpc.io)
[<Badge type="tip" text="Kafka" />](https://kafka.apache.org)
[<Badge type="tip" text="Elastic Search" />](https://www.elastic.co)

## 项目介绍

包括用户、动态、话题等模块，支撑运营同学的日常工作。

- 基于 Koa 搭建的服务端项目
- 使用 MySQL、Redis 进行数据交互
- 通过 GRPC 服务监控接口速度、使用 Kafka 上报数据、部分查询使用 Elasticsearch 语句
- 接入 API Doc 自动生成接口文档
- 使用 Routing-Controller 装饰器实现 Restful API
- 接入 Websocket 实现前后端即时交互
- 接入七牛 Pili 库处理直播流
- 前端使用 React(Router、Redux、Immutable) 技术栈、Antd UI 库
- 使用浏览器原生 Fetch 发送请求、使用 VideoJS HLS 支持播放直播流、支持前端导出 Excel
- 使用 Webpack 构建前端项目、使用 ES6+ 语法、Babel 插件和预设、通过 ESLint 保证代码规范

## 项目截图

![BlueCity OP Admin](/projects/bluecity/op-admin.png)
