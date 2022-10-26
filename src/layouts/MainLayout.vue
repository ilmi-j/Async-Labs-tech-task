<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <toolbar />
      <router-view />
      <footer-container />
    </q-page-container>
  </q-layout>
</template>

<script>


import Toolbar from "components/Toolbar";
import FooterContainer from "components/FooterContainer";
export default {
  name: 'MainLayout',
  components: {
    FooterContainer,
    Toolbar
  },
  data () {
    return {
      leftDrawerOpen: false,
    }
  }
}
</script>
