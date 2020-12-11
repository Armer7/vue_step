<template>
  <mdb-container class="px-0">
    <!-- Внедрение компонента -->
    <NavBar />

    <router-view />

    <FooterPage />
  </mdb-container>
</template>

<script>
import { mdbContainer } from "mdbvue";

import NavBar from "@/components/NavBar";
import FooterPage from "@/components/FooterPage";
export default {
  name: "MainLayout", //Наименование текущего компонента
  components: {
    NavBar,
    FooterPage,
    mdbContainer,
  },
};
</script>

<style scoped lang="scss">
  .container {
    min-width: 320px;
    max-width: 1600px;
    position: relative;
  }


</style>

