<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <h1>Hello this is Test <strong> DYNAMIC</strong> component pages.</h1>
      </div>
      <hr />
      <h1>{{ book }} / {{ slug }}</h1>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const book = params.testdir;
    const slug = params.testdynamic;
    return { book, slug };
  },
};
</script>

<style></style>
