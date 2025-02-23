import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import NavAvatar from "./components/NavAvatar.vue";
import VisitorsBadge from "./components/VisitorsBadge.vue";
import GiscusComment from "./components/GiscusComment.vue";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "nav-bar-title-before": () => h(NavAvatar),
      "nav-bar-title-after": () => h(VisitorsBadge),
      "doc-after": () => h(GiscusComment),
    });
  },
};
