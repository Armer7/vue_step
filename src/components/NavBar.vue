<template>
    <mdb-navbar
            light
            class = "navHeight sticky-top scrolling-navbar"
    >
    <mdb-navbar-brand>
      <router-link
              tag = "a"
              to = "/">
      <img src = "@/assets/image/logo/divin.svg" alt = "DIVIN"></router-link> </mdb-navbar-brand>
    <mdb-navbar-toggler class="toggles">
      <mdb-navbar-nav right>
        <router-link
                v-for = "link in links"
                :key = "link.url"
                tag = "mdb-nav-item"
                active-class = "active"
                :to = "link.url"
                :exact = "link.exact"
                class="pNavTxt"

        >{{ link.name }}
        </router-link>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
} from "mdbvue";
export default {
  name: "NavBar",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
  },
  data: () => ({
    links: [
      { name: "каталог товаров", url: "/Catalog", exact: true },
      { name: "доставка и оплата", url: "/Delivery" },
      { name: "гарантии", url: "/Warranty" },
      { name: "контакты", url: "/Contact" }
    ],
  }),
};
</script>

<style lang = "scss">
.toggles{
  background: $navTogglerBgColor;
}
  .navbar.navHeight {
    height: 104px;
    box-shadow: none;
    padding:0 200px !important;
    max-width: 1600px;
    margin: 0 auto;
    background: $navAndFuterBgColor;
  }
  .pNavTxt{
    padding-left: 30px;
  }
  .navbar-nav{
    a{
      &:hover{
        background-color: $navLinkHoverColor;
      }
    }
  }

@media (max-width: 1280px) {
  .navbar.navHeight {
    padding: 0 100px !important;
  }
}

  @media (max-width: 991px) {
    .navbar.navHeight {
      padding: 33px 25px !important;
    }
    .pNavTxt{

      &:hover{
        background-color: $navLinkHoverColor;
      }
    }
  }

</style>