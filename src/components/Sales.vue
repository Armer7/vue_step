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
    <div class = "navFilter">
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
    <div class="valueSearch">Найдено 6</div>
  </div>
</div>
    <mdb-row>
      <mdb-col xl = "4" sm = "6" class = "mb-5">
       <Card :url = "url" @ModalSale = "onModalSale"/>
      </mdb-col>
            <mdb-col xl = "4" sm = "6" class = "mb-5">
       <Card :url = "url" @ModalSale = "onModalSale"/>
      </mdb-col>
            <mdb-col xl = "4" sm = "6" class = "mb-5">
       <Card :url = "url" @ModalSale = "onModalSale"/>
      </mdb-col>
            <mdb-col xl = "4" sm = "6" class = "mb-5">
       <Card :url = "url" @ModalSale = "onModalSale"/>
      </mdb-col>
            <mdb-col xl = "4" sm = "6" class = "mb-5">
       <Card :url = "url" @ModalSale = "onModalSale"/>
      </mdb-col>
            <mdb-col xl = "4" sm = "6" class = "mb-5">
       <Card :url = "url" @ModalSale = "onModalSale"/>
      </mdb-col>
    </mdb-row>
    <ModalMoreInfo :relatedIn = "relatedIn" @hideModal = "offModalSale"/>
  </main>
</template>

<script>
  import firebase from 'firebase';
  import 'firebase/auth';
  import 'firebase/database';
  import 'firebase/storage';
  import Card from '@/components/Card'
  import ModalMoreInfo from '@/components/ModalMoreInfo';
  import {mdbCol, mdbNavbar, mdbNavbarBrand, mdbNavbarNav, mdbNavbarToggler, mdbNavItem, mdbRow} from 'mdbvue';

  export default {
    name: "Sales",
    components: {
      Card,
      mdbCol,
      mdbRow,
      ModalMoreInfo,
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem
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
        this.url = url;
      });
    },
    methods: {
      onModalSale(data) {
        this.relatedIn = data.relatedIn
      },
      offModalSale(data) {
        this.relatedIn = data.relatedIn
      }
    }

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
      transition: color 0.4s;

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
            width: 77px;
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
    .navFilter {
      flex-direction: column !important;
      justify-content: center !important;

      .itemFilter {
        margin-bottom: 10px;
        width: 100% !important;
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