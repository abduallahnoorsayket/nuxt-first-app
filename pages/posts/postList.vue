<template>
  <div>
    <br /><br />
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <!-- <p v-if="$fetchState.pending">Loading....</p>
          <p v-else-if="$fetchState.error">Error while fetching mountains</p> -->
          <!-- v-else -->
          <ul>
            <li v-for="(post, index) in posts" :key="index">
              {{ post.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "blog",
  data() {
    return {
      posts: [],
    };
  },
  //   async fetch() {
  //     this.posts = await fetch("https://api.nuxtjs.dev/posts").then((res) =>
  //       res.json()
  //     );
  //   },
  //   with axios
  async asyncData({ $axios, params }) {
    const posts = await $axios.$get(`https://api.nuxtjs.dev/posts`);
    return { posts };
  },
};
</script>

<style></style>
