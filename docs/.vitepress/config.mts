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
        text: "Profile",
        items: [{ text: "About Me", link: "/profile/about" }],
      },
      {
        text: "Projects",
        items: [
          {
            text: "Doo Client Platform",
            link: "/projects/doo-client-platform",
          },
          {
            text: "Doo Trading View 交易平台",
            link: "/projects/doo-trading-view",
          },
        ],
      },
    ],

    sidebar: [
      {
        text: "Profile",
        collapsed: false,
        items: [{ text: "About Me", link: "/profile/about" }],
      },
      {
        text: "Projects",
        collapsed: false,
        items: [
          {
            text: "Doo Client Platform",
            link: "/projects/doo-client-platform",
          },
          {
            text: "Doo Trading View 交易平台",
            link: "/projects/doo-trading-view",
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
