<template>
  <div>
    <mdb-modal :show = "modalShopData.relatedIn" class = "product-modal" @close = "hideModalShopping" size="fluid">
      <mdb-modal-header>
        <mdb-modal-title class="text-left modal-title" >
          <a @click='hideModalShopping'>&larr; Назад</a></mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <!-- ============================ COMPONENT CARD  ================================= -->

        <div class="card border  border-grey">
          <div class="row no-gutters">
            <aside class="col-md-9">

              <!-- card-group. -->
              <CardShopping v-if="saleCard.length"
                            v-for="(productData, index) in saleCard"
                            :key="productData.uid"
                            :productData="productData"
                            @deleteFromCart="deleteFromCart(index)"
                            @incrementItem="incrementItem(index)"
                            @decrementItem="decrementItem(index)"
              />
              <!-- card-group.// -->

            </aside> <!-- col. card-group. // -->
            <aside class="col-md-3 border-left">
              <div class="card-body p-3">
                <dl class="dlist-align">
                  <dt>Сумма:</dt>
                  <dd class="text-right">{{(cartSumCost).toFixed(2)}}р.</dd>
                </dl>
                <dl class="dlist-align">
                  <dt>Скидка:</dt>
                  <dd class="text-right text-danger">5%</dd>
                </dl>
                <dl class="dlist-align">
                  <dt>Итого:</dt>
                  <dd class="text-right text-dark b"><strong>{{(cartSumCost*0.95).toFixed(2)}}р.</strong></dd>
                </dl>
                <hr>
                <a class="btn btn-block btn-brown-darken1a" @click="getSaleProduct">Оформить покупку</a>
                <a class="btn btn-block black-text" @click = "hideModalShopping">Продолжить покупки</a>
              </div> <!-- card-body.// -->
            </aside> <!-- col.// -->
          </div> <!-- row.// -->
        </div> <!-- card.// -->

      </mdb-modal-body>
    </mdb-modal>
  </div>
</template>

<script>
  import {
    mdbModal,
    mdbModalBody,
    mdbModalHeader,
    mdbModalTitle,
  } from 'mdbvue';
  import CardShopping from '@/components/CardShopping'
  import {mapActions, mapGetters} from 'vuex';
  export default {
    name: "ModalShopping",
    components: {
      mdbModal,
      mdbModalBody,
      mdbModalHeader,
      mdbModalTitle,
      CardShopping,
    },
    props: {
      modalShopData:{
        type: Object,
        default: {
          relatedIn: false,
        }
      },

    },

    computed: {
      ...mapGetters([
        'saleCard'
      ]),
      cartSumCost(){
        return this.saleCard.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      },
    },

    methods:{
      ...mapActions([
        'deleteFromStorageSaleCard',
        'incrementCartItem',
        'decrementCartItem'
      ]),

      hideModalShopping() {
        this.$emit( 'hideModalShopping', {
          relatedIn: false,
        })
      },

      deleteFromCart(index){
        this.deleteFromStorageSaleCard(index)
      },

      incrementItem(index){
        this.incrementCartItem(index)
      },

      decrementItem(index){
        this.decrementCartItem(index)
      },

      getSaleProduct(){
        console.log(JSON.stringify(this.saleCard));
        this.hideModalShopping()
      }
    },
  }
</script>

<style lang="scss">

</style>
