<template>
  <div>
    <mdb-modal :show = "modalData.relatedIn" class = "product-modal" @close = "hideModal" size="fluid">
      <div>
        <mdb-modal-header>
        <mdb-modal-title class = "text-left modal-title">
          <a @click = 'hideModal'>&larr; Назад</a></mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <mdb-row>
          <mdb-col xl = "6" md = "5">
            <vueper-slides ref = "vueperslides1"
                           :touchable = "false"
                           fade
                           :autoplay = "false"
                           :bullets = "false"
                           :arrows = "true"
                           @slide = "$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
                           fixed-height = "true">
              <vueper-slide v-for = "(slide, i) in slides"
                            :key = "i"
                            :image = "slide.img">
              </vueper-slide>
            </vueper-slides>
            <vueper-slides class = "no-shadow thumbnails"
                           ref = "vueperslides2"
                           @slide = "$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
                           :visible-slides = "slides.length"
                           fixed-height = "98px"
                           :bullets = "false"
                           :touchable = "false"
                           :gap = "2.5"
                           :arrows = "false">
              <vueper-slide v-for = "(slide, i) in slides"
                            :key = "i"
                            :image = "slide.img"
                            @click.native = "$refs.vueperslides2.goToSlide(i)"
              >
              </vueper-slide>
            </vueper-slides>

          </mdb-col>
          <mdb-col xl = "6" md = "7">

            <h2 class = "h2-responsive modalH1">
              {{productCard.title}}
            </h2>
            <h2 class = "h4-responsive modalH2">
              {{productCard.brand}}
            </h2>
            <p class = "modalPrice">{{(+productCard.price).toFixed(0)}}р.</p>
            <!--  -->

            <mdb-card-body>
              <mdb-row>
                <mdb-col>
                  <label for = "valueArticle" class = "modalValueLabel">{{productCard.prod_option}}</label>
                  <div class = "modalSelect">
                    <div class = "selected">
                      <select class = "modalValue" id = "valueArticle">
                        <option v-for = "(size, i) in sizes" :key = "i" :value = "size.value">{{size.text}}</option>
                      </select>
                    </div>
                  </div>
                  <div class = "text-left">
                    <mdb-btn class = "btnModalSale"
                             @click = "addToSaleCardSelect"
                    >
                      В корзину
                    </mdb-btn>
                  </div>
                  <span v-html = "textInfo">
                  </span>
                </mdb-col>
              </mdb-row>

            </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </mdb-modal-body>
     </div>
    </mdb-modal>
  </div>
</template>

<script>
  import {
    mdbBtn,
    mdbCardBody,
    mdbCol,
    mdbModal,
    mdbModalBody,
    mdbRow,
    mdbModalHeader,
    mdbModalTitle,
  } from 'mdbvue';
  import { VueperSlides, VueperSlide } from 'vueperslides'
  import 'vueperslides/dist/vueperslides.css'
  import {mapActions, mapGetters} from 'vuex';
  export default {
    name: "ModalMoreInfo",
    components: {
      mdbRow,
      mdbCol,
      mdbBtn,
      mdbModal,
      mdbModalBody,
      mdbCardBody,
      mdbModalHeader,
      mdbModalTitle,
      VueperSlides,
      VueperSlide
    },
    props: {
      modalData:{
        type: Object,
        default: {
          productDataId: 0,
          relatedIn: false,
        }
      },

    },

    computed: {
      ...mapGetters([
        'productCard'
      ]),
      slides() {
        let value = [];
        for (let i=0; i<3; i++){
          value.push({img: this.productCard.editions[0].img})
        }
        return value
      },
      sizes() {
        let val = [];
        val.push({value: this.productCard.prod_variants, text: this.productCard.prod_variants});
        return val
      },
      textInfo() {
        return this.productCard.text.replace( /\\/g, "" )
      },
    },
    mounted(){
      this.$set(this.productCard, 'quantity', 1)
    },
    methods:{
      ...mapActions(['addToSaleCard']),

      hideModal() {
        this.$emit( 'hideModal', {
          relatedIn: false,
        })
      },
      addToSaleCardSelect(){
        //console.log(this.productCard.uid);
        this.addToSaleCard(this.productCard.uid);
        this.hideModal();
      },
    },
  }
</script>

<style lang="scss">

</style>
