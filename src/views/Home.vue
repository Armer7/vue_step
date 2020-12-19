<template>
  <div class="home w-100">
    <Carousel class="carousel"/>
    <Info />
    <HitSales />
    <InfoFooterImage />
    <div class="footerInfo">
      <p class="headText">Интернет магазин профессиональной уходовой косметики Divin</p>
      <div>
        <p  class="bodyCard">Мы предлагаем своим клиентам широкий выбор уходовых продуктов: от кремов, масок и масел для ног и ступней, до различных уходовых линеек для волос. В нашем интернет магазине вы можете выбрать средства для демакияжа и косметику для ухода за кожей лица и тела для различных возрастных категорий. Продукты представленные на сайте подойдут под любой тип кожи и решат проблемы связанные с старением и увяданием кожи, а также помогут с жирным блеском и очищением.
Кроме того вы сможете создать атмосферу SPA-салона прямо в вашей ванной комнате, проявить заботу и любовь к своему телу.<br />А уходовые и стайлинговые средства для волос сделают вашу прическу идеальной. Также вы сможете подобрать витаминные и кератиновые комплексы, которые защитят волосы от повреждений.</p>
      </div>
    </div>
  </div>
</template>
<script>


import Carousel from '@/components/Carousel';
import Info from '@/components/Info';
import HitSales from '@/components/HitSales';
import InfoFooterImage from '@/components/InfoFooterImage';

export default {
  name: 'Home',
  components: {
    Carousel,
    Info,
    HitSales,
    InfoFooterImage
  },
}
</script>

<style scoped lang = "scss">

.footerInfo{
  min-height: 407px;
  padding: 60px 310px 60px 200px;
  background: $FooterInfoBG;

  .bodyCard{
    column-count: 2;
    column-gap: 70px;
    color: $FooterInfoHead;
    font-weight: 300;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.05em;
  }

  .headText{
    color: $FooterInfoHead;
    font-weight: 500;
    font-size: 36px;
    line-height: 130%;
    letter-spacing: 0.05em;
    max-width: 590px;
  }

}

@media (max-width: 1280px) {

  .footerInfo {
    padding: 60px 100px 60px 100px;
  }

}



@media (max-width: 768px) {
  .footerInfo {
    padding: 60px 50px;
  }
}

@media (max-width: 575px) {
  .footerInfo {
    padding: 25px 25px;

    .bodyCard {
      column-count: 1;
    }

    .headText{
      font-size: 28px;
    }

  }

}

</style>
