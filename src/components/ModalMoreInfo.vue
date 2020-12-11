<template>
 <div>
    <mdb-modal :show = "relatedIn" class = "product-modal" @close = "hideModal" size="fluid">
            <mdb-modal-header>
        <mdb-modal-title class="text-left modal-title" >
          <a @click='hideModal'>&larr; Назад</a></mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <mdb-row>
          <mdb-col xl = "6" md="5">


<vueper-slides
        ref="vueperslides1"
        :touchable="false"
        fade
        :autoplay="false"
        :bullets="false"
        @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
        fixed-height="true">
  <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image">
  </vueper-slide>
            </vueper-slides>

            <vueper-slides
                    class="no-shadow thumbnails"
                    ref="vueperslides2"
                    @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
                    :visible-slides="slides.length"
                    fixed-height="98px"
                    :bullets="false"
                    :touchable="false"
                    :gap="2.5"
                    :arrows="false">
  <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
          @click.native="$refs.vueperslides2.goToSlide(i)">
  </vueper-slide>
</vueper-slides>
<!--            <mdb-carousel :items = "carousel" controlls indicators thumbnails :thumbnailWidth = "98"/>-->
          </mdb-col>
          <mdb-col xl = "6" md="7">

            <h2 class = "h2-responsive modalH1">
              Кондиционер с маслом арганы и моринга
            </h2>
            <h2 class = "h4-responsive modalH2">
                Kosmoteros
            </h2>
            <p class="modalPrice">1 911 р.</p>
            <!--  -->

            <mdb-card-body>
              <mdb-row>
                <mdb-col>
                  <label for="valueArticle" class="modalValueLabel">Объем</label>
                  <div class="modalSelect">
                  <div class="selected">
                  <select class = "modalValue" id="valueArticle">
    <option v-for = "(size, i) in sizes" :key = "i" :value = "size.value">{{size.text}}</option>
                    </select>
                    </div>
                  </div>
              <div class = "text-left">
                <mdb-btn class="btnModalSale"
                >В корзину</mdb-btn>
              </div>

                  <h5 class="h5-responsive modalH3">
                    Описание:
                  </h5>
                  <p class="modalText">
                    Кондиционер омолаживает сухие и поврежденные волосы, насыщая их влагой, витаминами и питательными маслами, предотвращая их спутывание и восстанавливая блеск. Волосы становятся гладкими и мягкими. Кондиционер повышает прочность и эластичность волос,помогая защитить от повреждения при термоукладке и от негативного воздействия УФ-лучей.
                  </p>
                  <h5 class="h5-responsive modalH3">
                    Способ применения:
                  </h5>
                  <p class="modalText">
                    Высыпав в ладонь небольшое количество скраба, нанесите средство на предварительно распаренную кожу. Массажными движениями в течение 3-5 минут распределите его по телу, пока частички сахара не растают. Уделите больше времени самым сухим участкам, таким как локти и колени. Когда закончите отшелушивание, тщательно смойте водой остатки скраба. После процедуры уходовые масла останутся на коже тонким невесомым слоем.
                  </p>
                  <h5 class="h5-responsive modalH3">
                    Подробные характеристики:
                  </h5>
                  <p class="modalText">
                    тип продукта: бальзамы и кондиционеры <br/>
тип волос: для сухих и поврежденных волос <br/>
для кого: унисекс <br/>
страна бренда: США
                  </p>
                  <h5 class="h5-responsive modalH3">
                    Дополнительно:
                  </h5>
                  <p class="modalText">
                    Держать флакон закрытым, избегать попадания влаги внутрь. Размешать перед использованием.<br/>
Не использовать для кожи лица, при повреждениях кожного покрова, после загара, при индивидуальной непереносимости компонентов.<br/>
Температура хранения +5 — +24 °С. Хранить в защищенном от прямых солнечных лучей месте.
                  </p>
                </mdb-col>
              </mdb-row>

            </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </mdb-modal-body>
    </mdb-modal>
  </div>
</template>

<script>
  import {
    mdbAccordion,
    mdbBtn,
    mdbCardBody,
    mdbCarousel,
    mdbCol,
    mdbContainer,
    mdbIcon,
    mdbModal,
    mdbModalBody,
    mdbRow,
    mdbSelect,
    mdbModalHeader,
    mdbModalTitle,
  } from 'mdbvue';
  import { VueperSlides, VueperSlide } from 'vueperslides'
  import 'vueperslides/dist/vueperslides.css'
  export default {
    name: "ModalMoreInfo",
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbBtn,
      mdbIcon,
      mdbModal,
      mdbModalBody,
      mdbAccordion,
      mdbCardBody,
      mdbSelect,
      mdbCarousel,
      mdbModalHeader,
      mdbModalTitle,
      VueperSlides,
      VueperSlide
    },
    props: {
      relatedIn: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        sizes: [
          {value: '120ml', text: '120ml'},
          {value: '130ml', text: '130ml'},
          {value: '200ml', text: '200ml'}
        ],
        slides: [
          {image:
              "https://firebasestorage.googleapis.com/v0/b/cosmeticarmer.appspot.com/o/00-Rectangle.png?alt=media&token=f4037442-9f42-4447-90c8-107b02d51146"          },
          {image:
              "https://firebasestorage.googleapis.com/v0/b/cosmeticarmer.appspot.com/o/01-Rectangle.png?alt=media&token=e717d5b7-1df3-4161-aa23-6348111f0090"},
          {image:
              "https://firebasestorage.googleapis.com/v0/b/cosmeticarmer.appspot.com/o/02-Rectangle.png?alt=media&token=56c6e27d-e6eb-44fc-9c14-17ed2ec3eba0"}
        ]
      }
    },
    methods:{
      hideModal() {
        this.$emit( 'hideModal', {
          relatedIn: false
        })
      }
    },
  }
</script>

<style lang="scss">
    .modal .modal-fluid {
      min-width: 320px;
      max-width: 1600px;
      background-color: $ModalBG;

    }

.modal-header {
  border-bottom: none;
  .close{
    font-weight: 300;
    font-size: 80px;
    line-height: 55px;
  }
}
.modal-title{
  font-weight: 300;
  font-size: 18px;
  line-height: 55px;
  color: $ModalBackArrowTxt;

}
  .modal-body{
    padding: 0 200px 100px 200px;

    .modalH1 {
      font-weight: 500;
      font-size: 24px;
      line-height: 120%;
      letter-spacing: 0.05em;
      color: $ModalH1Text;
      margin-bottom: 10px;
    }

    .modalH2 {
      font-weight: 500;
      font-size: 24px;
      line-height: 120%;
      letter-spacing: 0.05em;
      color: $ModalH2Text;
      margin-bottom: 20px;
    }
    .modalPrice {
      font-weight: bold;
      font-size: 24px;
      line-height: 130%;
      letter-spacing: 0.05em;
      color: $ModalPriceText;
      margin-bottom: 20px;
    }

  }
    .card-body {
      padding: 0;
      .btnModalSale {
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        line-height: 130%;
        letter-spacing: 0.05em;
        width: 220px;
        height: 50px;
        text-transform: none;
        background-color: $brown-darken-1a !important;
        padding: 0;
        margin: 0;
        margin-bottom: 30px;
      }

      .modalValueLabel {
        font-weight: 500;
        font-size: 16px;
        line-height: 120%;
        letter-spacing: 0.05em;
        color: $ModalValueLabel;
        margin-bottom: 10px;
      }
///////////////////////////////////////////////////////////////////////
      .modalSelect{
        .selected {
          position: relative;
          display: table;

          text-align: left;
          width: 190px;
          margin-bottom: 20px;

          .modalValue {
            box-sizing: border-box;
            cursor: pointer;
            -webkit-appearance: none;
            appearance: none;
            -moz-appearance: none;
            outline: 0;
            background-color: $ModalSelectBG;
            border: none;
            font-weight: 300;
            font-size: 14px;
            line-height: 130%;
            letter-spacing: 0.05em;
            color: $ModalValue;
            width: 100%;
            height: 32px;

          }

          &::after {
            content: '';
            width: 7px;
            height: 7px;
            border-style: solid;
            border-width: 8px 5px 0 5px;
            border-color: #000 transparent transparent transparent;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 10px;
            margin: auto;
            pointer-events: none;
          }
        }
      }







      .modalH3{
        font-weight: bold;
        font-size: 14px;
        line-height: 130%;
        letter-spacing: 0.05em;
        color: $ModalH3Text;
      }
      .modalText {
        font-weight: 300;
        font-size: 14px;
        line-height: 130%;
        letter-spacing: 0.05em;
        color: $ModalText;
      }
    }
    .thumbnails {
      margin-right: auto;
      margin-top: 5px;
      max-width: 300px;

    }

    .thumbnails .vueperslide {
      box-sizing: border-box;
      border: 1px solid #fff;
      transition: 0.3s ease-in-out;
      opacity: 0.7;
      cursor: pointer;
    }

    .thumbnails .vueperslide--active {
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
      opacity: 1;
      border-color: #000;
    }
    .vueperslides--fixed-height {
      height: 590px;
    }





 //Медиа

  @media (max-width: 1635px){
    .modal-body{
      padding-left: 100px;
      padding-right: 100px;
    }

  }
    @media (max-width: 1380px){
      .modal-body{
        padding-left: 50px;
        padding-right: 50px;
      }
      .vueperslides--fixed-height {
        height: 490px;
      }
    }

    @media (max-width: 1200px){

      .vueperslides--fixed-height {
        height: 400px;
      }
    }
    @media (max-width: 1024px){
      .modal-body{
        padding-left: 35px;
        padding-right: 35px;
      }
      .vueperslides--fixed-height {
        height: 300px;
      }
    }
     @media (max-width: 767px){
      .vueperslides--fixed-height {
        height: 400px;
      }
    }

</style>