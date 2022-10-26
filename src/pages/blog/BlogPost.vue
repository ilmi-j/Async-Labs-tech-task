<template>
  <q-page class="main-page">
    <div class="main-container">
      <div class="image q-mb-lg">
        <img v-if="blog" :src="blog.img" height="300" alt="">
      </div>
      <div>
        <div class="main-title q-mb-lg">
          <span class="text-h3 text-weight-bold">{{ blog.title }}</span>
          <div class="blog-subtitle">
            {{ blog.date }} / {{ blog.type }}
          </div>
        </div>
        <div class="blog-content q-mb-lg">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, <strong>but also the
              leap into electronic typesetting</strong>, remaining essentially unchanged. It was popularised in the
            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing</p>
          <div class="ads">
            “It is a long established fact that a reader will be distracted by the readable content.”
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
          <div class="image">
            <img src="./images/postImg.png" alt="">
          </div>
          <span class="text-h4 text-weight-bold">There are many variations of passages of Lorem</span>
          <div class="blog-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          </div>
          <div class="sec-ads text-h6 q-pa-xl">Contrary to popular belief, Lorem Ipsum is not simply random text. It has
            roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock
          </div>
          <div>
            <img
              class="full-width"
              src="https://images.unsplash.com/photo-1653564142033-ab3532091515?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80"
              alt="">
          </div>
          <div class="imgs full-width">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="">
            <img
              src="https://images.unsplash.com/photo-1656071830624-06aa347f99a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="">
          </div>
          <div class="tags-share">
            <div class="tags flex">
              <span class="text-weight-bold q-mr-sm">Tags:</span>
              <div class="tag-container">
                <span class="tag q-mr-sm">Creative</span>
                <span class="tag q-mr-sm">Business</span>
                <span class="tag q-mr-sm">Marketing</span>
              </div>
            </div>
            <div class="share flex">
              <span class="text-weight-bold">Share:</span>
              <div class="flex justify-between">
                <svg-icons icon="facebook" />
                <svg-icons icon="twitter" />
                <svg-icons icon="pinterest" />
                <svg-icons icon="google" />
              </div>
            </div>
          </div>

          <div class="person-card">
            <div class="img">
              <img
                height="200"
                class="rounded-borders"
                src="https://images.unsplash.com/photo-1649191629437-2dc474bc11ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
                alt="" />
            </div>
            <div>
              <div class="card-text text-h6 text-weight-bold q-mt-sm q-mb-xs">Name Surname</div>
              <p style="font-size: 16px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

  </q-page>
</template>

<script>
import SvgIcons from "components/svg-icons";

export default {
  name: "BlogPost",
  components: { SvgIcons },
  data() {
    return {
      blog: {}
    };
  },
  mounted() {
    this.blog = this.$route.params.blog;
  }
};
</script>

<style scoped lang="scss" src="./BlogPost.scss"></style>

