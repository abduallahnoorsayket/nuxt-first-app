<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
  </div>
</template>

<script>
export default {
  // watchQuery: ['page'],
  async asyncData({ params, $axios }) {
    const post = await $axios.$get(`https://api.nuxtjs.dev/posts/${params.id}`);
    return { post };
  },
};
</script>
