<template>
  <div>
    <h2>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Ipsum.
    </h2>
    <a href="tel: +7 (982) 536-50-77">+7 (982) 536-50-77</a>
    <div>{{ content }}</div>
    <button @click="refresh">Refresh</button>
    <h1>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal purpose (injected humour
      and the like).
    </h1>
  </div>
</template>

<script>
export default {
  name: "fun",
  layout: "blog",
  asyncData() {
    return { content: "Created at: " + new Date() };
  },
  methods: {
    refresh() {
      this.$nuxt.refresh();
    },
  },
  head: {
    title: "Fun page",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "FUN page description",
      },
    ],
  },
  head() {
    return {
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto&display=swap",
        },
      ],
    };
  },
};
</script>
<style scoped>
h1 {
  font-family: Roboto, sans-serif;
}
</style>
