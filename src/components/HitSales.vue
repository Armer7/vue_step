<template>
  <main class="main mainHitSales">
    <p class="mainHeader">Хиты продаж</p>
    <mdb-row>
      <mdb-col xl="4" sm="6" class="mb-5">
       <Card :url="url" @ModalSale="onModalSale" />
      </mdb-col>
            <mdb-col xl="4" sm="6" class="mb-5">
       <Card :url="url"  @ModalSale="onModalSale"/>
      </mdb-col>
            <mdb-col xl="4" sm="6" class="mb-5">
       <Card :url="url"  @ModalSale="onModalSale"/>
      </mdb-col>
            <mdb-col xl="4" sm="6" class="mb-5">
       <Card :url="url"  @ModalSale="onModalSale"/>
      </mdb-col>
            <mdb-col xl="4" sm="6" class="mb-5">
       <Card :url="url" @ModalSale="onModalSale"/>
      </mdb-col>
            <mdb-col xl="4" sm="6" class="mb-5">
       <Card :url="url"  @ModalSale="onModalSale"/>
      </mdb-col>
    </mdb-row>
    <ModalMoreInfo :relatedIn="relatedIn" @hideModal="offModalSale" />
  </main>
</template>

<script>
  import firebase from 'firebase';
  import 'firebase/auth';
  import 'firebase/database';
  import 'firebase/storage';
  import Card from '@/components/Card'
  import ModalMoreInfo from '@/components/ModalMoreInfo';
  import {
    mdbCol,
    mdbRow
  } from 'mdbvue';
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
        url: "",
        relatedIn: false,
      }
    },
    mounted: function () {
      let storage = firebase.storage();
      let pathReference = storage.ref('00-Rectangle.png');
      pathReference.getDownloadURL().then(url => {
        console.log(url);
        this.url= url;
      });
    },
    methods: {
      onModalSale (data){
        this.relatedIn = data.relatedIn
      },
      offModalSale (data){
        this.relatedIn = data.relatedIn
      }
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
