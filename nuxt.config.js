export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - teddek.com",
    title: "teddek.com",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src:
          process.env.NODE_ENV !== "production"
            ? process.env.BASE_URL_DEV
            : process.env.BASE_URL_PRODUCTION + "js/qrcode.min.js"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["plugins/InfiniteLoading.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/dotenv"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "nuxt-material-design-icons-iconfont",
    "@nuxtjs/auth-next"
  ],

  auth: {
    redirect: {
      login: "/login",
      logout: "/",
      home: "/"
    },
    strategies: {
      local: {
        token: {
          property: "token",
          global: true,
          type: "Bearer"
        },
        refreshToken: {
          property: "refresh_token",
          data: "refresh_token",
          maxAge: 60 * 60 * 24 * 365
        },
        user: {
          property: "user"
        },
        endpoints: {
          login: {
            url:
              process.env.NODE_ENV !== "production"
                ? process.env.BASE_URL_DEV
                : process.env.BASE_URL_PRODUCTION + "api/v1/login",
            method: "post",
            propertyName: "token"
          },
          logout: {
            url:
              process.env.NODE_ENV !== "production"
                ? process.env.BASE_URL_DEV
                : process.env.BASE_URL_PRODUCTION + "api/v1/logout",
            method: "delete"
          },
          user: {
            url:
              process.env.NODE_ENV !== "production"
                ? process.env.BASE_URL_DEV
                : process.env.BASE_URL_PRODUCTION + "api/v1/user/me",
            method: "get",
            propertyName: "user"
          }
        }
      }
    }
  },

  dev: process.env.NODE_ENV !== "production",

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:
      process.env.NODE_ENV !== "production"
        ? process.env.BASE_URL_DEV
        : process.env.BASE_URL_PRODUCTION
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    // customVariables: ["~/assets/variables.scss"],
    customVariables: ["~/assets/main.css"],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#5E4FAD",
          secondary: "#b0bec5",
          accent: "#8c9eff",
          error: "#E63946",
          success: "#3FDC75"
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
