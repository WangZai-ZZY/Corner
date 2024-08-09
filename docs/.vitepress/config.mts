import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/corner/',
  title: "隐秘角落",
  description: "A Hidden Corner For Diary",
  head: [['link', { rel: 'icon', href: '/corner/milk.ico' }]],
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/milk.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '序章', link: '/preface' }
    ],

    sidebar: [
      {
        text: '序章',
        items: [
          { text: '让痛苦被言说', link: '/preface' }
        ]
      },
      {
        text: '2024年',
        collapsed: false,
        items: [
          {
            text: '4月',
            collapsed: true,
            items: [
              { text: '3日：非理性与乌托邦情结', link: '/2024/4/3：非理性与乌托邦情结' },
              { text: '28日：再放送', link: '/2024/4/28：再放送' }
            ]
          },
          {
            text: '7月',
            collapsed: true,
            items: [
              { text: '6日：树中梦', link: '/2024/7/6：树中梦' },
              { text: '26日：王子殿下', link: '/2024/7/26：王子殿下' }
            ]
          }
        ]
      },
      {
        text: '2023年',
        collapsed: true,
        items: [
          {
            text: '5月',
            collapsed: true,
            items: [
              { text: '6日：如果这一切从未发生', link: '/2023/5/6：如果这一切从未发生' },
              { text: '10日：愿原力与你同在', link: '/2023/5/10：愿原力与你同在'},
              { text: '17日：如果人生也能有一个大标题就好了', link: '/2023/5/17：如果人生也能有一个大标题就好了'},
              { text: '22日：一杯柠檬水就好', link: '/2023/5/22：一杯柠檬水就好'},
              { text: '23日：赤脚凉拖', link: '/2023/5/23：赤脚凉拖'},
              { text: '28日：Life is Strange', link: '/2023/5/28：Life is Strange'}
            ]
          },
          {
            text: '7月',
            collapsed: true,
            items: [
              { text: '6日：井底的此端与彼岸的旷野', link: '/2023/7/6：井底的此端与彼岸的旷野' }
            ]
          },
          {
            text: '8月',
            collapsed: true,
            items: [
              { text: '9日：境界线', link: '/2023/8/9：境界线' },
              { text: '11日：通讯录的小心思', link: '/2023/8/11：通讯录的小心思' },
              { text: '19日：“简单”也是一种生活哲学', link: '/2023/8/19：“简单”也是一种生活哲学'}
            ]
          },
          {
            text: '10月',
            collapsed: true,
            items: [
              { text: '24日：迷局', link: '/2023/10/24：迷局' },
              { text: '26日：情思悠悠，往事难断', link: '/2023/10/26：情思悠悠，往事难断' }
            ]
          },
          {
            text: '11月',
            collapsed: true,
            items: [
              { text: '26日：何处容身的自我', link: '/2023/11/26：何处容身的自我' }
            ]
          },
          {
            text: '12月',
            collapsed: true,
            items: [
              { text: '10日：欢迎来到荷兰', link: '/2023/12/10：欢迎来到荷兰' },
              { text: '14日：大象与骑象人', link: '/2023/12/14：大象与骑象人' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/Shino_Tak_' }
    ],

    search: {
      provider: 'local'
    }
  }
})
