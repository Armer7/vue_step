<template>
<div class = "w-100">
  <div class = "catalogBG">
  <h1>каталог товаров</h1>
  <p>Позволь себе выглядеть на миллион без миллиона</p>
</div>
  <div class = "breadCrumb">
    <div>
        <p><router-link
          tag = "a"
          to = "/">Главная
        </router-link>/Каталог товаров</p>
      <div
        class = "btnSale">
        <a class = "btn-floating"
           v-mdb-waves = "{ background: 'rgba(153,216,208,0.5)', center: true }"
           @click="showModalShopping"
        >
          <i class = "fas fa-shopping-bag"></i>
        </a>
        <span v-if="saleCard.length" class = "counter">{{saleCard.length}}</span>
      </div>
    </div>
  </div>
  <Sales />
  <ModalShopping  :modalShopData="modalShopData" @hideModalShopping="hideModalShopping" />
</div>
</template>
<script>
    import {mdbWaves} from "mdbvue";
    import Sales from '@/components/Sales';
    import {mapGetters} from 'vuex';
    import ModalShopping from '@/components/ModalShopping'

    export default {
      name: "Catalog",
      components: {
        Sales,
        ModalShopping
      },
      data() {
        return{
          modalShopData: {relatedIn: false,}
        }
      },
      directives: {
        mdbWaves
      },
      computed:{
        ...mapGetters([
          'saleCard',
        ]),
      },
      methods: {
        showModalShopping (){
          this.modalShopData.relatedIn = !!this.saleCard.length;
        },
        hideModalShopping (data){
          this.modalShopData = data;
        },
      },
    }
</script>

<style lang = "scss">
.catalogBG {
  height: 285px;
  background: url("../assets/image/img/group58.jpg") no-repeat top;
  background-size: cover;
  color: $textColorHeader;

  h1 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 72px;
    line-height: 130%;
    text-align: center;
    letter-spacing: 0.05em;
    color: $textColorHeader;
    padding-top: 68px;
    margin-bottom: 10px;
  }

  p {
    font-weight: 300;
    font-size: 24px;
    line-height: 130%;
    text-align: center;
    letter-spacing: 0.05em;
    color: $textColorHeader;

  }
}



.btnSale {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 30px;
  height: 80px;
  .btn-floating {
    position: relative;
    z-index: 1;
    display: inline-block;
    padding: 0;
    margin: auto 0;
    overflow: hidden;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 50%;
    -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    width: 80px;
    height: 80px;
    background-color: $bagSaleBG;

    i {
      display: inline-block;
      width: inherit;
      color: $bagSaleText;
      text-align: center;
      font-size: 40px;
      line-height: 75px;
    }
  }

  .counter {
    position: absolute;
    display: inline-block;
    bottom: -5px;
    right: -5px;
    text-align: center;
    z-index: 2;
    width: 30px;
    height: 30px;
    margin-left: -23px;
    font-size: 15px;
    line-height: 30px;
    color: #fff;
    background-color: #fe1212;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }


}

@media (max-width: 768px) {
  .catalogBG {
    height: 137px;

    h1 {
      padding-top: 30px;
      font-size: 30px;
      line-height: 120%;
    }

    p {
      font-size: 16px;
      line-height: 120%;
    }
  }
  .btnSale {
    height: 50px;
    .btn-floating {
      width: 50px;
      height: 50px;
      i {
        font-size: 24px;
        line-height: 45px;
      }
    }
    .counter {
      bottom: -4px;
      right: -4px;
      width: 20px;
      height: 20px;
      margin-left: -3px;
      font-size: 14px;
      line-height: 20px;
    }


  }

}
</style>
