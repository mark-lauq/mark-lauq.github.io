# 蓝城定时脚本

**Backend:**
[<Badge type="tip" text="TypeScript" />](https://www.typescriptlang.org)
[<Badge type="tip" text="Node" />](https://nodejs.org)
[<Badge type="tip" text="Redis" />](https://redis.io)
[<Badge type="tip" text="MySQL" />](https://www.mysql.com)
[<Badge type="tip" text="Kafka" />](https://kafka.apache.org)
[<Badge type="tip" text="Elastic Search" />](https://www.elastic.co)
[<Badge type="tip" text="PM2" />](https://pm2.keymetrics.io)
[<Badge type="tip" text="Sentry" />](https://sentry.io)
[<Badge type="tip" text="Grafana" />](https://grafana.com)

## 项目介绍

开发维护部分定时脚本，包括 Node.js 和 Shell 脚本，涉及运营、直播、广告等业务。

- 使用 TypeScript 语言、Node.js 12+、ES6+
- 使用 Node-Schedule 管理定时调度
- 使用 MySQL、Redis 进行数据交互、使用 Kafka 上报数据、Elasticsearch 引擎搜索数据
- 使用 QConf(Zookeeper) 管理配置、Shell + Crontab 编写简单定时脚本
- 使用 GItLab CI/CD 部署、集成 ESLint 和 单元测试、PM2 管理进程、PM2 Log Rotate 处理日志
- 接入自建的 Sentry 平台进行错误监控、接入 Grafana(Prometheus) 平台进行性能监控、接入飞书 API 实时告警
