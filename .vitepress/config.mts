import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "University Wiki",
  description: "帮助学生在入学前了解学校在官网没有的信息",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "algolia",
      options: {
        appId: "B6W1O26PC5",
        apiKey: "56aae5604eaeca1c12d877a98df63f88",
        indexName: "University Wiki",
      },
    },
    nav: [
      { text: "主页", link: "/" },
      { text: "高校列表", link: "/all-university" },
      { text: "分享你的学校", link: "/README" },
      { text: "关于", link: "/about" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Riceneeder/university-wiki" },
    ],
    footer: {
      message:
        "本站内容来源于网络，由于数据的准确性无法保证，请您仅将本站内容作为参考，并结合其他来源的资料进行分析。本站列出的学校不一定均是全国高等学校名单中的高校，可能含有国外高校和野鸡大学，请您自行分辨该校是否具备招生资质。如您因本站数据有误而错误择校，本站不承担相应责任",
    },
    outline: {
      label: "目录",
      level: "deep",
    },
    logo: "/icon.svg",
    externalLinkIcon: true,
    editLink: {
      pattern: 'https://github.com/Riceneeder/university-wiki/edit/main/:path',
      text: '在GitHub上编辑此页',
    },
    lastUpdated: {
      text: '更新时间',
    },
  },
  head:[
    ['link', { rel: 'icon', href: '/icon.svg' }]
  ],
  lastUpdated: true,
  vite: {
    ssr: {
      noExternal: ['naive-ui', 'date-fns', 'vueuc']
    }
  },
});
