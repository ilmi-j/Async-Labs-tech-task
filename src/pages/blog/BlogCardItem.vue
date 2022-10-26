<template>
  <div
    class="blog-card"
    @click="$emit('click')"
  >
    <img height="200" width="300" :src="img" alt="image" />

    <div>
      <span>{{ date }} / {{ type }}</span>
      <div class="text-h6">{{ title }}</div>
    </div>

    <div class="q-pt-none">{{ paragraph }}</div>
  </div>
</template>

<script>
export default {
  name: "BlogCardItem",
  props: {
    img: { String, default: "./images/img1.png" },
    date: { String },
    type: { String },
    title: { String },
    paragraph: { String },
  },
};
</script>

<style scoped>
.blog-card {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding: 15px;
}
</style>
