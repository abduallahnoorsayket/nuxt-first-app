<template>
  <div>
    <h1 class="text-center">user index page</h1>
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $http }) {
    const post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`);
    return { post };
  },
};
</script>

<style></style>
