<template>
  <!-- <nuxt-content :document="doc" /> -->
  <article>
    <h1>{{ page.title }}</h1>
    <h5>{{ page.description }}</h5>
    <nuxt-content :document="{ body: page.excerpt }" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("home").search("hello").fetch();
    return {
      page,
    };
  },
};
</script>

<style>
.nuxt-content h1 {
  color: red;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
  color: green;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
