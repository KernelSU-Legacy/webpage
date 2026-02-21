import { defineConfig} from 'vitepress'
import locales from './locales'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KernelSU Legacy",
  locales: locales.locales,
  base: '/webpage/'
})
