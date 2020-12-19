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
import {mapActions, mapGetters} from 'vuex';
export default {
  name: "MainLayout", //Наименование текущего компонента
  components: {
    NavBar,
    FooterPage,
    mdbContainer,
  },
  data(){
    return{
      StorageSaleCard:[]
    }
  },
  computed: {
...mapGetters([
    'saleCard'
  ]),
},
  created() {
    if (localStorage.getItem('StorageSaleCard')) {
      try {
        this.StorageSaleCard = JSON.parse(localStorage.getItem('StorageSaleCard'));
        this.getStorageSaleCard(this.StorageSaleCard);
      } catch(e) {
        localStorage.removeItem('StorageSaleCard');
      }
    }
  },
  methods:{
    ...mapActions(['getStorageSaleCard']),
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

