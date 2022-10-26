<template>
  <q-page class="main-page flex flex-center column">
    <div class="main-container">
      <div class="header-container">
        <span class="text-weight-bold" style="font-size: 70px"
          >Latest news</span
        >
        <q-tabs
          inline-label
          outside-arrows
          mobile-arrows
          v-model="tab"
          indicator-color="teal-6"
          active-color="teal-6"
          :breakpoint="0"
          align="justify"
        >
          <q-tab name="mails" label="All" />
          <q-tab name="alarms" label="Company" />
          <q-tab name="design" label="Design" />
          <q-tab name="lifestyle" label="Lifestyle" />
          <q-tab name="business" label="Business" />
        </q-tabs>
      </div>
      <div class="cards-container">
        <div style="width: 300px; margin: auto" class="flex justify-center" v-for="blog in blogs" :key="blog.id">
          <BlogCardItem
            :img="blog.img"
            :date="blog.date"
            :type="blog.type"
            :title="blog.title"
            :paragraph="blog.paragraph"
            @click="blogView(blog)"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import BlogCardItem from "pages/blog/BlogCardItem";
import { blogs } from "pages/blog/BlogItems";
export default {
  name: "Blog",
  components: { BlogCardItem },
  data() {
    return {
      blogs,
      tab: "mails",
    };
  },
  methods: {
    blogView(blog) {
      this.$router.push({name: 'BlogPost', params: { blog }})
    }
  }
};
</script>

<style scoped lang="scss" src="./Blog.scss"></style>
