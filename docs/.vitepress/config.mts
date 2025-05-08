import { defineConfig } from "vitepress";

const PROJECTS = {
  text: "Projects",
  items: [
    {
      text: "AI",
      items: [
        {
          text: "AI Chatbot",
          link: "/projects/ai/chatbot",
        },
      ],
    },
    {
      text: "Web3",
      items: [
        {
          text: "Web3 E-Commerce",
          link: "/projects/web3/ecommerce",
        },
        {
          text: "Faucet",
          link: "/projects/web3/faucet",
        },
      ],
    },
    {
      text: "Others",
      items: [
        {
          text: "Next.js with Prisma ORM",
          link: "/projects/others/prisma-next",
        },
        {
          text: "Stock Monthly Revenue",
          link: "/projects/others/stock-monthly-revenue",
        },
      ],
    },
    {
      text: "Doo Prime",
      items: [
        {
          text: "Doo Client/IB Platform",
          link: "/projects/doo-prime/client-platform",
        },
        {
          text: "Doo Trading View 交易平台",
          link: "/projects/doo-prime/trading-view",
        },
      ],
    },
    {
      text: "Bitiful",
      items: [
        {
          text: "缤纷云控制台",
          link: "/projects/bitiful/console",
        },
      ],
    },
    {
      text: "蓝城兄弟",
      items: [
        {
          text: "蓝城兄弟后台系统",
          link: "/projects/bluecity/admin",
        },
        {
          text: "蓝城运营管理后台",
          link: "/projects/bluecity/op-admin",
        },
        {
          text: "蓝城直播活动页",
          link: "/projects/bluecity/live",
        },
        {
          text: "蓝城公益 H5 应用",
          link: "/projects/bluecity/weal",
        },
        {
          text: "蓝城定时脚本",
          link: "/projects/bluecity/schedule",
        },
      ],
    },
    {
      text: "EICO",
      items: [
        {
          text: "EICO 品牌官网",
          link: "/projects/eico/homepage",
        },
        {
          text: "Weico 的服务端接口",
          link: "/projects/eico/weico-api",
        },
        {
          text: "Weico 的后台管理系统",
          link: "/projects/eico/weico-admin",
        },
      ],
    },
  ],
};

const [{ link: firstProjectLink }] = PROJECTS.items[0].items;
// Update link without last path
PROJECTS.items[0].items[0].link = firstProjectLink.replace(/([^/]*)$/, "");

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lastUpdated: true,
  title: "Mark",
  titleTemplate: ":title | Mark",
  description: "Mark's Profile",
  head: [
    /**
     * 设置 Favicon
     */
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: "favicon.ico" },
    ],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "About Me",
        link: "/about",
      },
      PROJECTS,
    ],
    sidebar: [
      {
        text: "About Me",
        link: "/about",
      },
      {
        ...PROJECTS,
        collapsed: false,
      },
    ],
    outline: {
      /**
       * outline 中要显示的标题级别。
       * 单个数字表示只显示该级别的标题。
       * 如果传递的是一个元组，第一个数字是最小级别，第二个数字是最大级别。
       * `'deep'` 与 `[2, 6]` 相同，将显示从 `<h2>` 到 `<h6>` 的所有标题。
       *
       * @default 2
       */
      level: "deep",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/mark-lauq" }],
    footer: {
      copyright: `&#169; ${new Date().getUTCFullYear()} Mark`,
    },
    search: {
      provider: "local",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
  },
  rewrites: {
    // Trim start slash
    [`${firstProjectLink.replace("/", "")}.md`]: "projects/ai/index.md",
  },
});
