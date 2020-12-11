<template>
  <!-- Footer -->
  <mdb-footer class = "footer d-flex">

    <div
      class = "d-flex justify-content-md-between text-center flex-md-row flex-column flex-md-wrap flex-nowrap my-auto w-100">


      <div class = "pr-xl-2 text-center text-md-left"> <!--d-none d-xl-block-->
      <router-link
        tag = "a"
        to = "/">
      <img src = "@/assets/image/logo/divin.svg" alt = "DIVIN">
      </router-link>
      </div>
      <div class = "link"><router-link
        tag = "a"
        to = "/Catalog"
        class = "black-text px-lg-2">
          каталог&nbsp;товаров
        </router-link></div>
              <div class = "link"><router-link
                tag = "a"
                to = "/Delivery"
                class = "black-text px-lg-2">
          доставка&nbsp;и&nbsp;оплата
        </router-link></div>
        <div class = "link"><router-link
          tag = "a"
          to = "/Warranty"
          class = "black-text px-lg-2">
          гарантии
        </router-link></div>
        <div class = "link"><router-link
          tag = "a"
          to = "/Contact"
          class = "black-text px-lg-2">
          контакты
        </router-link></div>

        <div class = "teal-text telephone px-lg-2">
          +7343999999
        </div>


        <div class = "bodySocial">
          <div class = "social mx-auto">
          <a><i class = "fab fa-instagram"> </i></a>
        <a><i class = "fab fa-vk"> </i></a>
        <a><i class = "fab fa-facebook-f"> </i></a>
        </div>
        </div>

        <div class = "bodyCopy">
          <div class = "copy black-text mx-auto">
          Разработка&nbsp;сайта:&nbsp;Armer
        </div>
        </div>


  </div>
  </mdb-footer>
  <!-- Footer -->
</template>
<script>
  import {mdbCol, mdbContainer, mdbFooter, mdbNavItem, mdbRow} from 'mdbvue';

  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbNavItem,
    },
  }
</script>

<style lang = "scss">
  footer.footer {
    margin-top: 0 !important;

  }

  .footer {
    min-height: 206px;
    box-shadow: none;
    padding-left: 200px !important;
    padding-right: 200px !important;
    font-weight: normal;
    font-size: 14px;
    line-height: 27px;
    letter-spacing: 0.05em;
    background: $navAndFuterBgColor;
    transition: 1s;


    .telephone {
      text-align: center;
      font-weight: 600;
      /*padding-left: 24px;
      padding-right: 43px;*/
    }

    a {
      text-decoration: none;
    }


    .copy {
      width: 161px;
    }

    .link {
      transition: 0.35s;

      a {
        text-decoration: none;
      }

      &:hover {
        background-color: $navLinkHoverColor;
      }
    }


  }

  @media (max-width: 1365px) {
    .bodyCopy {
      width: 100%;
    }
  }

  @media (max-width: 1280px) {
    .footer {
      padding-left: 100px !important;
      padding-right: 100px !important;

    }
  }

  @media (max-width: 1000px) {
    .bodySocial {
      width: 100%;
    }
  }

  @media (max-width: 991px) {
    .footer {
      padding-left: 25px !important;
      padding-right: 25px !important;
    }
  }

  @media (max-width: 768px) {
    .footer {
      padding-bottom: 20px !important;
      padding-top: 20px !important;
    }
  }


</style>
