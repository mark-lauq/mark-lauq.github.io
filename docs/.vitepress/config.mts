import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mark",
  titleTemplate: "Mark",
  description: "Mark's Profile",
  head: [
    /**
     * 设置 Favicon
     */
    ["link", { rel: "icon", href: "/mark-avatar.jpg" }],
  ],
  themeConfig: {
    logo: "/mark-avatar.jpg",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "About Me",
        link: "/about",
      },
      {
        text: "Projects",
        items: [
          {
            text: "Doo Prime",
            items: [
              {
                text: "Doo Client Platform",
                link: "/projects/doo-prime/client-platform",
              },
              {
                text: "Doo Trading View 交易平台",
                link: "/projects/doo-prime/trading-view",
              },
              {
                text: "Doo 理想家积分商城",
                link: "/projects/doo-prime/points-mall",
              },
              {
                text: "Doo 理想家积分后台",
                link: "/projects/doo-prime/points-admin",
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
            text: "Blue City",
            items: [
              {
                text: "蓝城后台系统",
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
        ],
      },
    ],

    sidebar: [
      {
        text: "About Me",
        link: "/about",
      },
      {
        text: "Projects",
        collapsed: false,
        items: [
          {
            text: "Doo Prime",
            items: [
              {
                text: "Doo Client Platform",
                link: "/projects/doo-prime/client-platform",
              },
              {
                text: "Doo Trading View 交易平台",
                link: "/projects/doo-prime/trading-view",
              },
              {
                text: "Doo 理想家积分商城",
                link: "/projects/doo-prime/points-mall",
              },
              {
                text: "Doo 理想家积分后台",
                link: "/projects/doo-prime/points-admin",
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
            text: "Blue City",
            items: [
              {
                text: "蓝城后台系统",
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
        ],
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
      copyright: `&copyright; ${new Date().getUTCFullYear()} Mark.`,
    },

    search: {
      provider: "local",
    },
  },
});
