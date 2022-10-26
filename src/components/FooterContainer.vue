<template>
  <div class="footer">
    <div class="info-footer">
      <async-icon
        style="display: flex; justify-content: center; align-items: center"
        color="white"
      ></async-icon>
      <div class="footer-item">
        <span>About</span>
        <span>Projects</span>
        <span>Blog</span>
        <span>Contact</span>
      </div>
      <div class="footer-item">
        <span>Facebook</span>
        <span>Linkedin</span>
        <span>Twitter</span>
        <span>Instagram</span>
      </div>
      <div class="footer-item">
        <span>Async d.o.o.</span>
        <span>Lipovečka 1, </span>
        <span>10000 Zagreb,</span>
        <span>Croatia</span>
      </div>
      <div class="footer-item">
        <span>hello@asynclabs.co</span>
      </div>
    </div>
    <div class="rights-footer">
      <span>Async Labs. All rights reserved 2020.</span>
      <span>Privacy policy</span>
    </div>
  </div>
</template>

<script>
import AsyncIcon from "components/AsyncIcon";
export default {
  name: "FooterContainer",
  components: { AsyncIcon },
};
</script>

<style lang="scss" src="./FooterContainer.scss"></style>
