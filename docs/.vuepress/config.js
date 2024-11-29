import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: "ru-RU",
  base: "ss-clients-docs",
  title: "Эврика",
  description: 'Руководство пользователя',

  theme: defaultTheme({
    navbar: ['/', '/get-started'],
    sidebar: [
      "/guide/workshop.md",
    ]
  }),

  bundler: viteBundler(),
})
