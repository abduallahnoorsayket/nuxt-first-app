<template>
  <div>
    <input v-model="query" type="search" autocomplete="off" />
     <!-- <h1>{{ articles.title }}</h1>
    <h5>{{ articles.description }}</h5> -->
    <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.slug">
        <span>{{ article.title }}</span>
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">{{
          article.title
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: "",
      articles: [],
    };
  },
  watch: {
    async query(query) {
      if (!query) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content("articles")
        // .only(["title", "slug"])
        // .sortBy("createdAt", "asc")
        // .limit(12)
        // .search(query)
        .fetch();
    },
  },
};
</script>
