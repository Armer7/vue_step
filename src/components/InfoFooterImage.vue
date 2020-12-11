<template>
<aside class = "infoFooterImage">
  <p class = "mainHeader">Уходовая косметика</p>
<mdb-row class = "infoFooterImageRow justify-content-center">
<mdb-col xl = "3" sm = "6">
  <mdb-card class = "cardInfo">
    <mdb-view hover>
      <router-link
              tag = "a"
              to = "/Catalog">
        <mdb-card-image class = "cardImage"
                        :src = "require(`../assets/image/img/rectangle41.jpg`)"
                        alt = "Card image cap"
        >
        </mdb-card-image>
        <mdb-mask flex-center waves overlay = "white-slight"></mdb-mask>
      </router-link>
    </mdb-view>
    <mdb-card-body class = "cardBody">
      <router-link
              tag = "a"
              to = "/Catalog">
      <div class = "cardTitle">Face</div>
      <div class = "cardText"
      >Для лица &rarr;</div>
      </router-link>
    </mdb-card-body>
  </mdb-card>
</mdb-col>
<mdb-col xl = "3" sm = "6">
  <mdb-card class = "cardInfo">
    <mdb-view hover>
      <router-link
              tag = "a"
              to = "/Catalog">
        <mdb-card-image class = "cardImage"
                        :src = "require(`../assets/image/img/rectangle42.jpg`)"
                        alt = "Card image cap"
        >
        </mdb-card-image>
        <mdb-mask flex-center waves overlay = "white-slight"></mdb-mask>
      </router-link>
    </mdb-view>
    <mdb-card-body class = "cardBody">
      <router-link
              tag = "a"
              to = "/Catalog">
      <div class = "cardTitle">Hair</div>
      <div class = "cardText"
      >Для волос &rarr;</div>
      </router-link>
    </mdb-card-body>
  </mdb-card>
</mdb-col>
<mdb-col xl = "3" sm = "6">
  <mdb-card class = "cardInfo">
    <mdb-view hover>

      <router-link
              tag = "a"
              to = "/Catalog"
      >
        <mdb-card-image class = "cardImage"
                        :src = "require(`../assets/image/img/rectangle43.jpg`)"
                        alt = "Card image cap"
        >
        </mdb-card-image>
        <mdb-mask flex-center waves overlay = "white-slight"></mdb-mask>
      </router-link>
    </mdb-view>
    <mdb-card-body class = "cardBody">
            <router-link
                    tag = "a"
                    to = "/Catalog"
            >
      <div class = "cardTitle">Legs</div>
      <div class = "cardText"
      >Для ног &rarr;</div>
      </router-link>
    </mdb-card-body>
  </mdb-card>
</mdb-col>
<mdb-col xl = "3" sm = "6">
  <mdb-card class = "cardInfo">
    <mdb-view hover>
      <router-link
              tag = "a"
              to = "/Catalog">
        <mdb-card-image class = "cardImage"
                        :src = "require(`../assets/image/img/rectangle44.jpg`)"
                        alt = "Card image cap"
        >
        </mdb-card-image>
        <mdb-mask flex-center waves overlay = "white-slight"></mdb-mask>
      </router-link>
    </mdb-view>
    <mdb-card-body class = "cardBody">
      <router-link
              tag = "a"
              to = "/Catalog">
      <div class = "cardTitle">Body</div>
      <div class = "cardText"
      >Для тела &rarr;</div>
      </router-link>
    </mdb-card-body>
  </mdb-card>
</mdb-col>

</mdb-row>
</aside>
</template>

<script>
    import {
      mdbCard,
      mdbCardBody,
      mdbCardImage,
      mdbCardText,
      mdbCardTitle,
      mdbCol,
      mdbMask,
      mdbRow,
      mdbView
    } from "mdbvue";

    export default {
      name: "InfoFooterImage",
      components: {
        mdbRow,
        mdbCol,
        mdbCard,
        mdbCardImage,
        mdbCardBody,
        mdbCardTitle,
        mdbCardText,
        mdbMask,
        mdbView
      }
    }
</script>

<style scoped lang = "scss">
.infoFooterImage {
  padding: 160px 200px;
  background: $InfoFooterImageColor;
}

.infoFooterImageRow{
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 532px;
    height: 461px;
    background: url('../assets/image/img/layer2.png') no-repeat center;
    -webkit-background-size: cover;
    background-size: cover;
    right: -185px;
    z-index: 0;
  }

  &::before {
    content: '';
    position: absolute;
    width: 504px;
    height: 461px;
    background: url('../assets/image/img/layer3.png') no-repeat center;
    -webkit-background-size: cover;
    background-size: cover;
    left: -185px;
    z-index: 0;

  }
}

.mainHeader {
  font-weight: 500;
  font-size: 36px;
  line-height: 140%;
  letter-spacing: 0.05em;
}

.cardInfo {
  box-shadow: none;
  border: none;
  z-index: 1;
}


.cardBody {
  display: flex;
  flex-flow: column;
  justify-content: left;
  padding: 40px 0 15px 20px;
  position: relative;

  &::before {
    content: '';
    border: 1px solid $InfoFooterImageDash;
    position: absolute;
    width: 1px;
    height: 64px;
    top: -26px;
  }
  >a{
    text-decoration: none;
  }
}

.cardTitle {
  font-weight: bold;
  font-size: 64px;
  line-height: 130%;
  letter-spacing: 0.05em;
  text-align: left;
  //margin-top: 40px;
  margin-bottom: 10px;
  color: $InfoFooterImageTextTitle;
  opacity: 0.2;
}

.cardText {
  font-weight: normal;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: 0.05em;
  text-align: left;
  //margin-bottom: 15px;
  color: $InfoFooterImageText;
}

@media (max-width: 1280px) {
  .infoFooterImage {
    padding: 160px 100px;
  }
  .infoFooterImageRow{
    &::after {
      background: none;
      width: 0;
      height: 0;
    }

    &::before {
      background: none;
      width: 0;
      height: 0;
    }
  }
}


@media (max-width: 1200px) {
  .infoFooterImage {
    padding: 100px 150px;
  }
}

@media (max-width: 768px) {
  .infoFooterImage {
    padding: 50px 50px;
  }
}

@media (max-width: 575px) {
  .infoFooterImage {
    padding: 25px 25px;
  }
}
</style>