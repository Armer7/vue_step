<template>
  <mdb-carousel
    :interval="8000"
    slide
    multi
    :items= "items.length"
    :controllIcons="controllIcons"
    controlls
    indicators
  >
    <template #[i+1] v-for="(pic, i) in items">
      <mdb-card
        :key="i"
        class="card-image cardSlice"
        :style="'background: url(' + pic.src +
                ') no-repeat center;' +
                '  background-size: cover;'"
      >
        <div class="text-white text-left d-flex align-items-center my-auto">
          <div class="bodyCardSlice">
            <mdb-card-title tag="p" class="pt-2 headerSlice">
              {{ pic.title.toUpperCase() }}
            </mdb-card-title>
            <p class="textSlice">{{ pic.text }}</p>
            <router-link
              tag = "mdb-btn"
              to = "/Catalog"
              class = "text-white btnSlice">
              Перейти к покупкам
            </router-link>

          </div>
        </div>
      </mdb-card>
    </template>
  </mdb-carousel>
</template>

<script>
  import {
    mdbCarousel,
    mdbBtn,
    mdbCard,
    mdbCardImage,
    mdbCardText,
    mdbCardBody,
    mdbCardTitle
  } from "mdbvue";
  export default {
    name: "Carousel",
    components: {
      mdbCarousel,
      mdbBtn,
      mdbCard,
      mdbCardImage,
      mdbCardText,
      mdbCardBody,
      mdbCardTitle
    },
    data() {
      return {
        controllIcons: ['fas fa-chevron-circle-left fa-2x text-black', 'fas fa-chevron-circle-right fa-2x text-black'],
        items: [
          {
            title: "lingot",
            text: "Профессиональная швейцарская косметика для ухода за ногами",
            src:
              require(`../assets/image/img/slice1.jpg`),

          },
          {
            title: "акция",
            text: "Профессиональная швейцарская косметика",
            src:
              require(`../assets/image/img/slice2.jpg`)
          },
          {
            title: "скидки",
            text: "Новая линия косметики",
            src:
              require(`../assets/image/img/slice3.jpg`)
          },
          {
            title: "lingot",
            text: "Косметика для ухода за ногами",
            src:
              require(`../assets/image/img/slice4.jpg`)
          },
          {
            title: "lingot",
            text: "Профессиональная швейцарская косметика для ухода за ногами",
            src:
              require(`../assets/image/img/slice5.jpg`)
          }
        ],
      };
    },
  }

  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  })

</script>

<style scoped lang="scss">
.cardSlice{
  height: calc(100vh - 104px);
}
.bodyCardSlice{
  max-width: 523px;
  margin-left: 200px;
}
.btnSlice{
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.05em;
  width: 280px;
  height: 60px;
  text-transform: none;
  background-color: $brown-darken-1a !important;
  padding: 5px 0 !important;
  margin: 0 !important;
}
.headerSlice{
  font-weight: 500;
  font-size: 72px;
  line-height: 94px;
  letter-spacing: 0.05em;
}
.textSlice{
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  letter-spacing: 0.05em;
  margin: 20px 0 30px 0;
}

@media (max-width: 991px) {
  .cardSlice{
    height: calc(var(--vh, 1vh) * 100 - 60px);
    //height: calc(100vh - 60px);
  }
}

@media (max-width: 900px) {
  .bodyCardSlice {

    margin-left: auto;
    margin-right: auto;
    max-width: 260px;
  }
  .headerSlice{
    font-size: 36px;
    line-height: 38px;
  }
  .textSlice{
    font-size: 16px;
    line-height: 18px;
    margin: 10px 0 15px 0;
  }
  .btnSlice{
    font-size: 16px;
    width: 260px;
    height: 36px;
  }
}

@media (max-width: 512px) {

  .bodyCardSlice {
    max-width: 220px;
  }

  .btnSlice{
    width: 220px;
  }

}
</style>
