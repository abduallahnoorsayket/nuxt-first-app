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
