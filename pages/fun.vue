<template>
  <div>
    <h2>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Ipsum.
    </h2>
    <img src="~/assets/Burger.jpeg" />
    <br><br><br>
    <a href="tel: +7 (982) 536-50-77">+7 (982) 536-50-77</a>
    <div>{{ content }}</div>
    <button @click="refresh">Refresh</button>
    <hr />
    <button type="button" class="btn btn-primary">
  Notifications <span class="badge badge-light">4</span>
</button>
    <Lazynuxt-mountains v-if="show" />
    <button v-if="!show" @click="show = true">Show List</button>
    <hr />
    <NuxtLink to="/user/" class="nuxt-link-active">user page</NuxtLink>
    <h1>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal purpose (injected humour
      and the like).
    </h1>
    <hr />
    <client-only placeholder="Loading...">
      <!-- this component will only be rendered on client-side -->
      <!-- <comments /> -->
    </client-only>
  </div>
</template>

<script>
export default {
  name: "fun",
  layout: "blog",
  data() {
    return {
      show: false,
    };
  },
  asyncData() {
    return { content: "Created at: " + new Date() };
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.start();
  //     setTimeout(() => this.$nuxt.$loading.finish(), 500);
  //   });
  // },
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
.nuxt-link-active {
  color: green;
}
</style>
