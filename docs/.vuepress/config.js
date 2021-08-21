const path = require('path')

module.exports = {
  title: 'Ted2xmen',

  description: 'Vuepress theme of Ted2xmen\'s blog',

  locales: {
    '/': {
      lang: 'en-US',
    },
  },

  evergreen: true,

  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'G-9JGS9T9N24',
    }],
  ],

  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vssue)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all',
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all',
          },
        },
      })
    }
  },

  theme: path.resolve(__dirname, '../../lib'),

  themeConfig: {
    lang: 'tr-TR',

    personalInfo: {
      nickname: 'ted2xmen',
      description: 'Tuğrul Erdem',
      email: 'ted2xmen@gmail.com',
      location: 'TR',

      project: 'SearchON',
      avatar: 'https://pbs.twimg.com/profile_images/1392896862093459456/tcTntWXP_400x400.jpg',

      sns: {
        github: {
          account: 'ted2xmen',
          link: 'https://github.com/ted2xmen',
        },
        linkedin: {
          account: 'tugrulerdemdogru',
          link: 'http://www.linkedin.com/in/tugrulerdemdogru',
        },
        twitter: {
          account: 'ted2xmen',
          link: 'https://twitter.com/ted2xmen',
        },
        medium: {
          account: 'ted2xmen',
          link: 'https://medium.com/@ted2xmen',
        },
      },
    },

    header: {
      background: {
        url: 'https://images.unsplash.com/photo-1559761132-5952db82b3e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        useGeo: true,
      },
      showTitle: true,
    },

    footer: {
      poweredBy: true,
      poweredByTheme: true,
      custom: '',
    },

    infoCard: {
      headerBackground: {
        // url: '/assets/img/header-image-01.jpg',
        useGeo: true,
      },
    },

    lastUpdated: true,

    nav: [
      { text: 'Anasayfa', link: '/', exact: true },
      { text: 'Yazılar', link: '/posts/', exact: false },
      { text: 'Projelerim', link: '/proje/', exact: false },
      { text: 'Kullandığım Araçlar', link: '/araclar/', exact: false },
      { text: 'Patika', link: '/patika/', exact: false },
      { text: 'Github', link: 'https://github.com/ted2xmen' },
    ],

    // Enable smooth scrolling or not
    smoothScroll: false,

    // Configs for vuepress-plugin-zooming
    zooming: {
      // @see https://vuepress.github.io/en/plugins/zooming
    },

    // comments: {
    //   owner: 'meteorlxy',
    //   repo: 'vuepress-theme-meteorlxy',
    //   clientId: 'cbda894952ba70c00666',
    //   clientSecret: '1ade785ca693bf3092be5e5338720d5ee43672b7',
    //   autoCreateIssue: false,
    // },

    pagination: {
      perPage: 5,
    },
  },
}
