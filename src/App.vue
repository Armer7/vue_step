<template>
  <div id="app">
    <comment :is="layout">
      <router-view/>
    </comment>

  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout'
    },

  },
  components: {
    MainLayout,
  },

};
</script>

<style lang="scss">
  @import "~@/assets/styles/fonts.css";
  $image-path: '~mdbvue/lib/img';
  @import "~@/assets/styles/_custom.scss";
  @import '~mdbvue/lib/scss/mdb-free.scss'; // main mdb scss free file
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  @import "~@/assets/styles/aftemdb";

</style>
