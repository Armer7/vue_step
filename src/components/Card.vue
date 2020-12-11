<template>
  <mdb-card class="card">
    <mdb-view hover>
      <a @click='showModal'>
        <mdb-card-image
          :src="`${url}`"
          alt="Card image cap"
        ></mdb-card-image>
        <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
      </a>
    </mdb-view>
    <mdb-card-body class="cardBody">
      <div class="cardTitle">Жидкий шелк</div>
      <div class="cardText"
      >CHI infra silk infusion</div>
      <div class="cardPrice"
      >1 911р.</div>
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
    url:"",
  },
  data(){
    return{
      relatedIn: false,

    }
  },
  methods:{
    showModal() {
      this.$emit( 'ModalSale', {
        relatedIn: true
      })
    }
  }
};
</script>
<style scoped lang="scss">
  .card{
    box-shadow: none;
    border: none;
  }
  .cardBody{
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding-top: 20px;
  }


  .cardTitle{
    font-weight: 500;
    font-size: 24px;
    line-height: 130%;
    letter-spacing: 0.05em;
    text-align: center;
    margin-bottom: 10px;

  }


  .cardText{
    font-weight: 300;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.05em;
    text-align: center;
    margin-bottom: 15px;
  }
  .cardPrice{
    font-weight: bold;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.05em;
    text-align: center;
    margin-bottom: 18px;
  }
  .cardButton{
    background-color: $brown-darken-1a !important;
    font-weight: bold;
    font-size: 20px;
    line-height: 130%;
    letter-spacing: 0.05em;
    color: $btnTextColor;
    width: 220px;
    height: 50px;
    text-align: center;
    margin: 0 auto 30px auto;
    text-transform: none;
  }

  @media (max-width: 768px) {
    .cardButton {
      width: 180px;
    }
  }

</style>
