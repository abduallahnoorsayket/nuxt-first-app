export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "My nuxt-first-app",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "my website description",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js",
      },
      {
        src: "https://code.jquery.com/jquery-3.2.1.slim.min.js",
      },

      {
        src: "https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css",
      },
    ],
  },
  loading: {
    color: "green",
    height: "5px",
    throttle: 0,
  },
  // loading: "~/components/LoadingBar.vue",
  loadingIndicator: {
    name: "circle",
    color: "#3B8070",
    background: "white",
    // throttle: 0,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [],
  css: ["~/assets/main.css"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // My custom codes
  router: {
    trailingSlash: true,
    linkActiveClass: "nuxt-link-active",
  },
};
