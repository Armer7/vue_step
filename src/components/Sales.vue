<template>
  <main class = "main mainSales">
    <mdb-row class = "justify-content-center pb-5 subMenu">
      <mdb-col col = "auto" class = "active">Все</mdb-col>
      <mdb-col col = "auto">Для лица</mdb-col>
      <mdb-col col = "auto">Для тела</mdb-col>
      <mdb-col col = "auto">Для ног</mdb-col>
      <mdb-col col = "auto">Для волос</mdb-col>
    </mdb-row>
    <div class = "bodyFilter">
      <div class = "filter d-flex justify-content-lg-between flex-column flex-lg-row">
        <div class="toggleFilter"><i class = "fas fa-filter" @click="viewToggleFilter"></i></div>
        <div class = "navFilter" id="toggleMenuFilter">
          <div class="itemFilter">
            <div class = "selected">
              <select class="select">
                <option selected disabled="disabled">Назначение</option>
                <option value="Восстановление">Восстановление</option>
                <option value="Защита" >Защита</option>
                <option value="Массаж" >Массаж</option>
                <option value="Омоложение" >Омоложение</option>
                <option value="Очищение" >Очищение</option>
                <option value="Питание" >Питание</option>
                <option value="Противовоспалительное" >Противовоспалительное</option>
                <option value="Согревание" >Согревание</option>
                <option value="Увлажнение" >Увлажнение</option>
              </select>
            </div>
          </div>
          <div class="itemFilter">
            <div class = "selected">
              <select class="select">
                <option selected disabled="disabled">Группа товаров</option>
                <option value="Бальзам" >Бальзам</option>
                <option value="Воск" >Воск</option>
                <option value="Гель" >Гель</option>
                <option value="Гель-пена" >Гель-пена</option>
                <option value="Гель-пенка" >Гель-пенка</option>
                <option value="Гидроактиватор" >Гидроактиватор</option>
                <option value="Глина" >Глина</option>
                <option value="Кондиционер" >Кондиционер</option>
                <option value="Кондиционер сухой" >Кондиционер сухой</option>
                <option value="Кондиционер тонирующий" >Кондиционер тонирующий</option>
                <option value="Концентрант" >Концентрант</option>
              </select>

            </div>
          </div>
          <div class="itemFilter">
            <div class = "selected">
              <select class="select">
                <option selected disabled="disabled">Бренд</option>
                <option value="CHI" >CHI</option>
                <option value="kosmoteros" >KOSMOTEROS</option>
                <option value="lingot" >LINGOT</option>
              </select>
            </div>
          </div>
        </div>
        <div class="sorted">
          <div class="itemSorted">
            <div class="search">
              <input type="search" class="select"
                     placeholder="Поиск" pattern="[A-Za-zА-Яа-я0-9]{}"
                     title="Используйте только буквы и цифры"
                     autocomplete="on"/>
              <a><img src="../assets/image/img/search.png" alt="search"></a>
            </div>

          </div>
          <div class="itemSorted">
            <div class="selected">
              <select class="select">
                <option value="" selected>Порядок: по умолчанию</option>
                <option value="price:asc">Цена: по возрастанию</option>
                <option value="price:desc">Цена: по убыванию</option>
                <option value="title:asc">Название: А — Я</option>
                <option value="title:desc">Название: Я — А</option>
                <option value="created:desc">Порядок: сперва новые</option>
                <option value="created:asc">Порядок: сперва старые</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="valueSearch">Найдено {{products.length}}</div>
      </div>
    </div>
    <mdb-row>
      <mdb-col xl="4" sm="6" class="mb-3 mb-md-5"
               v-for="(product) in products"
               :key="product.uid"
      >
       <Card :productData="product"
             @ModalSale="onModalSale"
       />
      </mdb-col>
    </mdb-row>
    <ModalMoreInfo v-if="modalData.relatedIn"
                   :modalData="modalData"
                   @hideModal="offModalSale"
    />
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
    mdbRow,
  } from 'mdbvue';
  import {mapActions, mapGetters} from 'vuex';
  export default {
    name: "Sales",
    components: {
      mdbCol,
      mdbRow,
      Card,
      ModalMoreInfo
    },
    data() {
      return {
        modalData: {
          relatedIn: false,
          productDataId: 0,
        }
      }
    },
    computed:{
      ...mapGetters([
        'products'
      ])
    },

    mounted()  {

      // Create a condition that targets viewports at least 513px wide
      const filterMenu = window.matchMedia("(min-width: 513px)");
      function filterMenuHandleTabletChange(e) {
        // Check if the media query is true
        if (e.matches) {
          let toggleMenu = document.getElementById('toggleMenuFilter');
          if (toggleMenu.classList.contains('activeFilter')) {
            toggleMenu.classList.remove('activeFilter');
          }
        }
      }
      // Register event listener
      filterMenu.addListener(filterMenuHandleTabletChange);
      // Initial check
      filterMenuHandleTabletChange(filterMenu);
    },
    methods: {
      ...mapActions(['selectProductCard']),
      onModalSale (data){
        this.modalData = data;
        this.selectProductCard(data.productDataId);
        //this.productDataId = data.productDataId;
        //this.relatedIn = data.relatedIn
      },
      offModalSale (data){
        this.modalData = data;
      },
      viewToggleFilter() {
        toggleMenuFilter.classList.toggle('activeFilter');
      },
    },
  }
</script>

<style lang = "scss">
  .mainSales {
    background: $salesMain;

    .subMenu {
      font-weight: 500;
      font-size: 18px;
      line-height: 130%;
      letter-spacing: 0.05em;
      color: $subMenuAndSelect;

      .active {
        color: scale_color($subMenuAndSelect, $lightness: -80%);
      }

      > div {
        cursor: pointer;
        transition: 0.4s;

        &:hover {
          color: scale_color($subMenuAndSelect, $lightness: 30%);

        }
      }
    }
    .select, .valueSearch{
      color: $filter;
      font-weight: 300;
      line-height: 130%;
      letter-spacing: 0.05em;
      text-align: left;
    }

    .bodyFilter {
      margin-bottom: 40px;

      .valueSearch{
        font-size: 18px;
      }

      .filter {
        margin-bottom: 30px;

        .toggleFilter{
          display: none;
          color: $filter;
          margin-bottom: 10px;

          >i {
            font-size: 18px;
            opacity: 0.5;
            transition: 0.3s;
            cursor: pointer;
            &:hover {
              opacity: 1
            }
            &:active {
              text-shadow: 2px 2px 4px $filter;
            }
          }
        }

        .navFilter {
          display: flex;
          flex-direction: row;
          justify-content: left;
          .itemFilter {
            margin-right: 20px;
            text-align: left;
            font-size: 18px;

            &:nth-of-type(1){
              width: 125px;
            }
            &:nth-of-type(2){
              width: 152px;
            }
            &:nth-of-type(3){
              width: 100px;
            }

          }

        }

        .sorted {
          display: flex;
          flex-direction: row;
          justify-content: right;
          .itemSorted {
            margin-left: 20px;
            font-size: 14px;
            line-height: 32px;
            background: $sortedBG;
            padding-left: 10px;
            &:nth-of-type(1){
              width: 152px;
              height: 32px;
            }
            &:nth-of-type(2){
              width: 190px;
              height: 32px;
            }

          }
        }

        .selected {
          position: relative;
          display: table;
          text-align: left;
          width: 100%;

          .select {
            width: 100%;
            box-sizing: border-box;
            cursor: pointer;
            border: none;
            background: none;
            -webkit-appearance: none;
            appearance: none;
            -moz-appearance: none;
            outline: 0;
            padding:0 25px 0 0 !important;
            -webkit-padding-end: 25px !important;

          }

          &::after {
            content: '';
            width: 7px;
            height: 7px;
            border-style: solid;
            border-width: 0 1px 1px 0;
            border-color: transparent $filter $filter transparent;
            transform: rotate(45deg);
            position: absolute;
            top: 0;
            bottom: 0;
            right: 10px;
            margin: auto;
            pointer-events: none;
          }
        }
        .search {
          position: relative;
          display: table;
          text-align: left;
          a{
            padding-left: 7px;
            width: 32px;

          }
          .select {
            width: 113px;
            height: 32px;
            box-sizing: border-box;
            border: none;
            background: none;
            padding-right: 5px;
            border-right: 1px solid $searchSalesLine;
          }
        }



      }
    }
  }

  @media (max-width: 1200px) {
    .navFilter{
      margin-bottom: 10px;
      .itemFilter{
        &:nth-of-type(3) {
          margin-right: 0 !important;
        }
      }
    }
    .sorted {
      justify-content: left !important;
      .itemSorted {
        &:nth-of-type(1) {
          margin-left: 0 !important;
        }
      }
    }
  }

  @media (max-width: 512px) {
    .mainSales {
      .bodyFilter {
        .filter {
          position: relative;
          .toggleFilter{
            display: block;
          }
          .navFilter {
            position: absolute;
            top: 0;
            left: 20px;
            background-color: $filterToggleBG;
            display: none;
            z-index: 1000;
            flex-direction: column !important;
            justify-content: center !important;
            .itemFilter {
              margin-bottom: 10px;
              width: 100% !important;
            }
          }
          .navFilter.activeFilter{
            display: flex;
          }
        }
      }
      .sorted {
        flex-direction: column !important;
        justify-content: center !important;

        .itemSorted {
          margin-bottom: 10px;
          margin-left: 0 !important;
          width: 100% !important;
          .search {
            width: 100%;
            display: flex;
            .select {
              width: 100%;
            }
          }

        }
      }
    }
  }

</style>
