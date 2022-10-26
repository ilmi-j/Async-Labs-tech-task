<template>
  <div class="toolbar">
    <async-icon />
    <div class="menu-icon">
      <div class="line top collapsed"></div>
      <div class="line bottom collapsed"></div>
    </div>
  </div>
</template>

<script>
import AsyncIcon from "components/AsyncIcon";
export default {
  name: "Toolbar",
  components: { AsyncIcon },
};
</script>

<style scoped lang="scss" src="./Toolbar.scss"></style>
