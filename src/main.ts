import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/main.css'
// import '@unocss/reset/tailwind.css'
import 'uno.css'

import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
// import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn'
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index'
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index'
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css'
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index'
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css'
import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn'
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css'

// Prism
import Prism from 'prismjs'
import router from './router'
import App from './App.vue'
import 'prismjs/components/prism-json'

VMdPreview.use(vuepressTheme, {
  Prism,
})
// markdown支持流程图
// VMdPreview.use(createMermaidPlugin())
// markdown支持显示代码行数
VMdPreview.use(createLineNumbertPlugin())
// markdown支持代码快速复制
VMdPreview.use(createCopyCodePlugin())
// markdown支持emoji
VMdPreview.use(createEmojiPlugin())
VMdPreview.use(createMermaidPlugin())
const app = createApp(App)

app.use(createPinia())
app.use(VMdPreview)
app.use(router)
app.mount('#app')
