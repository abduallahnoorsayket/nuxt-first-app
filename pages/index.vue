<template>
  <div>
    <!-- <Tutorial /> -->
    <test-one />
    <!-- <NuxtLink to="/fun">Nuxt mountains </NuxtLink> -->

    <div class="row">
      <div class="col-md-6">
        <div class="container">
          <hr />
          <nuxt-mountains />
          <hr />
        </div>
      </div>
    </div>
    <NuxtLink to="/fun/">FUN page</NuxtLink>
    <mountain-list />
    <hr />
    <div class="row">
      <div class="col-md-12">
        <div class="text-center">
          <span v-if="counter"> {{ counter }}</span>
          <button
            type="button"
            class="btn btn-success"
            @click="incrementCounter()"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
    <hr />
    <nuxt-content :document="articles" />
    <hr />
  </div>
</template>

<script>
import MountainList from "../components/MountainList.vue";
import NuxtMountains from "../components/NuxtMountains.vue";
import testOne from "../components/testOne.vue";
export default {
  components: { testOne, NuxtMountains, MountainList },
  name: "IndexPage",
  transition: "home",
  mode: "",
  computed: {
    counter() {
      return this.$store.getters.getCounter;
    },
  },
  methods: {
    incrementCounter() {
      this.$store.commit("increment");
    },
    async asyncData({ $content, params }) {
      const articles = await $content("articles", params.slug)
        .only(["title", "description"])
        .sortBy("createdAt", "asc")
        .fetch();

      return {
        articles,
      };
    },
  },
  // transition: {
  //   name: "fun",
  //   mode: "out-in",
  // },
  // loading: false,
  // mounted() {
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.start();
  //     setTimeout(() => this.$nuxt.$loading.finish(), 500);
  //   });
  // },
};
</script>
<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.8s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
