import { URL, fileURLToPath } from 'node:url'

import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Component from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'
import { presetTypography } from '@unocss/preset-typography'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  plugins: [
    vue({ reactivityTransform: true }),
    vueJsx(),
    Component({
      dirs: ['src/components', 'src/**/components'],
      dts: path.resolve(pathSrc, 'typings/component.d.ts'),
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dirs: [path.resolve(pathSrc, 'composable')],
      dts: path.resolve(pathSrc, 'typings/component.d.ts'),
    }),
    Unocss({
      presets: [
        presetUno({
          dark: 'media',
        }),
        presetAttributify(),
        presetIcons(),
        presetTypography({
          cssExtend: {
            a: {
              'text-decoration': 'none',
            },
          },
        }),
      ],
      transformers: [transformerDirective()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
