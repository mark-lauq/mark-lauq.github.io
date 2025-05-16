import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import GiscusComment from './components/GiscusComment.vue'
import NavAvatar from './components/NavAvatar.vue'
import VisitorsBadge from './components/VisitorsBadge.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title-before': () => h(NavAvatar),
      'nav-bar-title-after': () => h(VisitorsBadge),
      'doc-after': () => h(GiscusComment),
    })
  },
}
