<template>
  <div>
    <!-- <Tutorial /> -->
    <test-one />
    <!-- <NuxtLink to="/fun">Nuxt mountains </NuxtLink> -->
    <hr />
    <nuxt-mountains />
    <hr />
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
};
</script>
