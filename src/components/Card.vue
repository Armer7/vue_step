<template>
  <mdb-card class="card">
    <mdb-view hover>
      <a @click='showModal'>
        <mdb-card-image class="imgList"
          :src="`${productData.editions[0].img}`"
          alt="Card image cap"
        ></mdb-card-image>
        <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
      </a>
    </mdb-view>
    <mdb-card-body class="cardBody">
      <div class="cardTitle">{{productData.title}}</div>
      <div class="cardText"
      >{{productData.descr}}</div>
      <div class="cardPrice"
      >{{(+productData.price).toFixed(0)}}р.</div>
      <mdb-btn class = "cardButton" @click='showModal'>Подробнее</mdb-btn>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import {
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn,
  mdbMask,
  mdbView
} from "mdbvue";
export default {
  name: "Card",
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbMask,
    mdbView
  },
  props:{
    productData:"",
  },
  data(){
    return{
      relatedIn: false,
      productDataId: 0,

    }
  },
  methods:{
    showModal() {
      this.$emit( 'ModalSale', {
        relatedIn: true,
        productDataId: this.productData.uid
      })
    }
  }
};
</script>
<style lang="scss">

</style>
