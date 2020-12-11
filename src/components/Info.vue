<template>
<DIV class="info">
  <mdb-row class="infoBody align-items-center">
    <mdb-col  col="xl" md="6" class="d-flex align-items-center pr-1"><span>Доставка по всей России</span></mdb-col>
    <mdb-col  col="xl" md="6" class="d-flex align-items-center pr-1"><span>100% оригинальная продукция</span></mdb-col>
    <mdb-col  col="xl" md="6" class="d-flex align-items-center pr-1"><span>Доставка от 1 дня</span></mdb-col>
    <mdb-col  col="xl" md="6" class="d-flex align-items-center pr-1"><span>Оплата онлайн на сайте</span></mdb-col>
  </mdb-row>
</DIV>
</template>

<script>
  import {
    mdbRow,
    mdbCol,
  } from "mdbvue";
export default {
  name: "Info",
  components:{
    mdbRow,
    mdbCol,
  }
}
</script>

<style scoped lang="scss">
.info{
  background-color: $infoBgColor;
  min-height: 531px;
  padding-top: 72px;
  padding-left: 178px;
  padding-right: 204px;
  padding-bottom: 25px;

  .infoBody{
    min-height: 334px;
    max-width: 1218px;
    margin: 0;

    font-weight: 300;
    font-size: 24px;
    line-height: 130%;
    letter-spacing: 0.05em;

	div {
	-webkit-background-size: 152px;
      background-size: 152px;
    height: 152px;
    padding-left: 132px;
    margin-top: 35px;
    margin-bottom: 35px;

      position: relative;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    &:nth-of-type(1){
      background: url('../assets/image/img/delivery.png') no-repeat;
    }
    &:nth-of-type(2){
      background: url('../assets/image/img/origin.png') no-repeat;
    }
    &:nth-of-type(3){
      background: url('../assets/image/img/delivery1.png') no-repeat;
    }
    &:nth-of-type(4){
      background: url('../assets/image/img/online-banking.png') no-repeat;
    }
    &:nth-of-type(odd){
      &::before{
        content: '';
        position: absolute;
        height: 178px;
        width: 192px;
        background: url('../assets/image/img/layer4.png') no-repeat;
        -webkit-background-size: 152px;
        background-size: 152px;
        left: 100px;
        top: -74px;
      }
    }
    &:nth-of-type(even){
      &::before{
        content: '';
        position: absolute;
        height: 178px;
        width: 192px;
        background: url('../assets/image/img/layer5.png') no-repeat;
        -webkit-background-size: 152px;
        background-size: 152px;
        left: 100px;
        bottom: -124px;
      }
    }
	}




  }

}
@media (min-width: 768px) and (max-width: 1280px) {
  .info {

    padding-left: 100px;
    padding-right: 100px;

    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

  }
}

@media (max-width: 960px) {
  .info {
    padding-left: 80px;
    padding-right: 80px;
  }

}
@media (max-width: 767px) {
  .info {
    padding-left: 50px;
    padding-right: 50px;
    .infoBody {

      div {
        &:nth-of-type(odd) {
          margin-bottom: 10px;
          margin-top: 0;

          &::before {
            background: none;
          }
        }

        &:nth-of-type(even) {
          margin-bottom: 10px;
          margin-top: 0;

          &::before {
            background: none;
          }
        }
      }
    }
  }
}
  @media (max-width: 575px) {
    .info {
      .infoBody {
        font-size: 18px;
        div {
          -webkit-background-size: 100px !important;
          background-size: 100px !important;
          height: 100px;
          padding-left: 80px;
          &:nth-of-type(odd) {
            margin-bottom: 10px;
            margin-top: 0;

            &::before {
              width: 0;
              height: 0;
            }
          }

          &:nth-of-type(even) {
            margin-bottom: 10px;
            margin-top: 0;

            &::before {
              width: 0;
              height: 0;
            }
          }
        }
      }
    }
  }
</style>