<template>
<div class = "w-100 contact">
  <div class = "contactBG">
  <h1>контакты</h1>
</div>
  <div class = "breadCrumb">
    <div>
        <p><router-link
                tag = "a"
                to = "/">Главная
        </router-link>/Контакты</p>

    </div>
  </div>
  <main class = "main mainContact">
  <mdb-row>
    <mdb-col lg = "6" class = "mb-3">
      <div class = "textContact">
      <p>
        +7 (912) 615-93-58
      </p>
      <p>
        Свердловская обл., г. Екатеринбург, ул. Шевченко 18, офис 314
      </p>
              <div class = "bodySocial">
          <div class = "social mr-auto">
          <a><i class = "fab fa-instagram"> </i></a>
        <a><i class = "fab fa-whatsapp"> </i></a>
        <a><i class = "fab fa-telegram-plane"> </i></a>
        </div>
        </div>
    </div>
      <div class = "img">
        <img src = "../assets/image/img/rectangle210.jpg" alt = "officeCompany">
      </div>
    </mdb-col>
    <mdb-col lg = "6" class = "mb-3">
      <div class = "embed-responsive embed-responsive-16by9 z-depth-1-half">
      <iframe src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2181.842606452497!2d60.61808831597328!3d56.84864358086064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e7ef620835f%3A0x97e7b5818854bbf6!2z0YPQuy4g0KjQtdCy0YfQtdC90LrQviwgMTgsINCV0LrQsNGC0LXRgNC40L3QsdGD0YDQsywg0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQuy4sINCg0L7RgdGB0LjRjywgNjIwMDc1!5e0!3m2!1sru!2sde!4v1607678473015!5m2!1sru!2sde"
              style = "border:0;" class = "embed-responsive-item" allowfullscreen = ""
              aria-hidden = "false" tabindex = "0"></iframe>
    </div>
      
    </mdb-col>
  </mdb-row>

</main>

  <section class = "main send">

    <mdb-row class = "justify-content-lg-between">
      <mdb-col lg = "6">

      </mdb-col>

      <mdb-col lg = "6">
        <div class = "sendText">
          <h4>“</h4>
          <p>Связаться с нами вы всегда можете по телефонам указанным на сайте, либо написать на почту или в любой удобный мессенджер.
Также вы можете оставить свой запрос/жалобу/предложение с помощью формы обратной связи.</p>
        </div>
        <form class="form" @submit.prevent="submitHandler">

          <div class="formItem"><input type = "text" placeholder = "Как к вам обращатся?"/></div>
          <div class="formSelect">
            <div class = "formItem selected">
            <select class="select">
            <option selected disabled = "disabled">Тема орбращения</option>
            <option>Доставка</option>
            <option>Стоимость товара</option>
            <option>Наличие товара</option>
            <option>Прочее</option>
          </select>
          </div>
          </div>

          <div class="formItem"><textarea placeholder = "Сообщение"></textarea></div>
          <div class="formItem"><input type = "tel" placeholder = "+7(___)__-___-__"/></div>
          <mdb-btn class = "formButton" type="submit">Отправить</mdb-btn>
        </form>
      </mdb-col>
    </mdb-row>
    </section>
</div>
</template>

<script>
    import {mdbBtn, mdbCol, mdbRow, mdbWaves,} from 'mdbvue';

    export default {
      name: "Contact",
      components: {
        mdbCol,
        mdbRow,
        mdbBtn,
      },
      directives: {
        mdbWaves
      }
    }
</script>

<style lang = "scss">
    .contact{
      background-color: $contactBG;
    }


  .contactBG {
    height: 285px;
    background: url("../assets/image/img/group57.jpg") no-repeat top;
    background-size: cover;
    color: $textColorHeader;

    h1 {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 72px;
      line-height: 130%;
      text-align: center;
      letter-spacing: 0.05em;
      color: $textColorHeader;
      padding-top: 105px;
    }
  }

  .mainContact {
    background: $navAndFuterBgColor;
    padding-top: 0;

    .textContact {
      background: $textContactBG;
      padding: 20px 8px;
      color: $textContact;
      margin-bottom: 20px;

      > p {
        margin-left: 12px;

        &:nth-of-type(1) {
          margin-bottom: 20px;
          font-weight: bold;
          font-size: 18px;
          line-height: 23px;
        }

        &:nth-of-type(2) {
          margin-bottom: 25px;
          font-weight: 300;
          font-size: 14px;
          line-height: 130%;
        }


      }
    }

    .embed-responsive {
      height: 100%;
    }

    .img {
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .send {
    background: $sendBG url("../assets/image/img/sendmail.png") no-repeat;
    background-size: inherit;
    background-position: 54px 63px;
    line-height: 130%;
    letter-spacing: 0.05em;

    .sendText {
      background: $sendTextBG;
      padding: 44px 45px 23px 32px;
      margin-bottom: 35px;
      position: relative;

      > h4 {
        font-weight: 300;
        font-size: 72px;
        color: $sendTextHead;
        line-height: 0.7;
        letter-spacing: 0;
        margin: 0;
        position: absolute;
        top: 23px;
        left: 13px;
      }

      > p {
        font-weight: 300;
        font-size: 14px;
        color: $sendText;
      }
    }

    .form {
      .formItem{
        width: 100%;
        margin-bottom: 10px;

        select, input, textarea {
          color: $formText;
          font-weight: 500;
          font-size: 16px;
          line-height: 120%;
          letter-spacing: 0.05em;
          width: 100%;
          background: $sendBG;
          border: 1px solid #000;
          padding-left: 22px;

        }
        input, select{
          height: 60px;
        }
        textarea{
          height: 87px;
          padding-top: 11px;
        }

      }

      .formSelect{
        .selected {
          position: relative;
          display: table;
          text-align: left;
          width: 100%;

          .select {
            box-sizing: border-box;
            cursor: pointer;
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
            border-width: 8px 5px 0 5px;
            border-color: #000 transparent transparent transparent;
            //transform: rotate(45deg);
            position: absolute;
            top: 0;
            bottom: 0;
            right: 24px;
            margin: auto;
            pointer-events: none;
          }
        }
      }


      .formButton {
        background-color: $brown-darken-1a !important;
        font-weight: bold;
        font-size: 20px;
        line-height: 130%;
        letter-spacing: 0.05em;
        color: $btnTextColor;
        width: 100%;
        height: 50px;
        text-align: center;
        //margin: 0 auto 0 auto;
        text-transform: none;
        padding: 5px 0 !important;
        margin: 0 !important;
        margin-top: 20px;
      }
    }
  }
  @media (max-width: 1280px) {
    .send {
      background-size: 40%;
    }
  }

  @media (max-width: 991px) {

    .send {background-image: none;}
  }

  @media (max-width: 768px) {
    .contactBG {
      height: 137px;

      h1 {
        padding-top: 52px;
        font-size: 30px;
        line-height: 120%;
      }

    }
  }
</style>
