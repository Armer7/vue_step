<template>
  <main class="main mainHitSales">
    <p class="mainHeader">Хиты продаж</p>
    <mdb-row>
      <mdb-col xl="4" sm="6" class="mb-5"
      v-for="product in productsFirstPage"
               :key="product.uid"
      >
       <Card :productData="product" @ModalSale="onModalSale" />
      </mdb-col>
    </mdb-row>
    <ModalMoreInfo v-if="modalData.relatedIn" :modalData="modalData" @hideModal="offModalSale" />
  </main>
</template>

<script>
  //import firebase from 'firebase';
  //import 'firebase/auth';
  //import 'firebase/database';
  //import 'firebase/storage';
  import Card from '@/components/Card'
  import ModalMoreInfo from '@/components/ModalMoreInfo';
  import {
    mdbCol,
    mdbRow
  } from 'mdbvue';
  import {mapActions, mapGetters} from 'vuex';
  export default {
    name: "HitSales",
    components: {
      Card,
      mdbCol,
      mdbRow,
      ModalMoreInfo,
    },
    data() {
      return {
        modalData: {
          relatedIn: false,
          productDataId: 0,
        }
      }
    },
    computed: {
      ...mapGetters([
        'productsFirstPage'
      ])
    },

    mounted() {
      /*let storage = firebase.storage();
      let pathReference = storage.ref('00-Rectangle.png');
      pathReference.getDownloadURL().then(url => {
        this.url= url;
      });*/
      this.selectProductsFirstPage()
    },
    methods: {
      ...mapActions(['selectProductCard' , 'selectProductsFirstPage']),
      onModalSale (data){
        this.modalData = data;
        this.selectProductCard(data.productDataId);
        //this.productDataId = data.productDataId;
        //this.relatedIn = data.relatedIn
      },
      offModalSale (data){
        this.modalData = data;
      },
      //...mapActions(['getProductFromApi']),
    }

  }
</script>

<style lang="scss">

.mainHitSales{
  background: $mainBgColor;
}
.mainHeader{
  font-weight: 500;
  font-size: 36px;
  line-height: 140%;
  letter-spacing: 0.05em;
}

</style>
