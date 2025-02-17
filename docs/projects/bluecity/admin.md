# 蓝城后台系统

**Frontend:**
[<Badge type="tip" text="React" />](https://react.dev)
[<Badge type="tip" text="Redux" />](https://redux.js.org)
[<Badge type="tip" text="Immutable" />](https://immutable-js.com)
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

公司内部的后台管理系统，包括业务运营、增值广告、数据分析、内容审核等功能，服务于公司各个部门的日常工作。

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

### 优化

- 重构升级老后台的技术架构，打包速度提升了 80% 以上，同时接入了 TS 保证代码质量
- 开发的灰度版本升级工具，避免了人工发版约70分钟的延时，同时避免了人为误操作
- 优化了部分耗时接口的平均响应速度，耗时减少80%以上
- 搭建和维护私有的 NPM 仓库，业务开发过程中，沉淀提取了多个 API-SDK 包，供其他小组使用，减少代码冗余
- 构建并优化 CI/CD 流程，接入测试覆盖率检测、飞书通知等功能
- 沉淀了后台专属的 UI 组件库和开发脚手架，提升了研发速度约50%以上
- 搭建了完整的前端监控链路，降低了维护成本，线上事故率降低了50%以上

## 项目截图

![BlueCity Admin](/projects/bluecity/admin.png)
<br />
<br />
![BlueCity Live Admin](/projects/bluecity/live-admin.png)
<br />
<br />
![BlueCity OP Admin](/projects/bluecity/op-admin.png)
