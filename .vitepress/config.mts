import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
 title: "NOZF.com",
  description: "Non-Obliterable Zip Format",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "NOZF", // 👈 把默认名字改成你的战舰代号！
    nav: [
      { text: 'Home', link: '/' },
      { text: '技术白皮书/Whitepaper', link: '/whitepaper' }, 
      { text: '社区/Community', link: 'https://github.com/thuytienlequang367-eng/nozf-website/tree/main' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
