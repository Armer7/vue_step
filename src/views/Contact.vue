<template>
  <div class = "w-100 contact">
    <div class = "contactBG">
      <h1>контакты</h1>
    </div>
    <div class = "breadCrumb">
      <div>
        <p>
          <router-link
            tag = "a"
            to = "/">Главная
          </router-link>/Контакты
        </p>

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
                    aria-hidden = "false" tabindex = "0">
            </iframe>
          </div>
      
        </mdb-col>
      </mdb-row>

    </main>

    <section class = "main send">

      <mdb-row class = "justify-content-lg-between">
        <mdb-col lg = "6">
        </mdb-col>

<!--  START form for questions submit    -->
        <mdb-col lg = "6">
          <div class = "sendText">
            <h4>“</h4>
            <p>Связаться с нами вы всегда можете по телефонам указанным на сайте, либо написать на почту или в любой удобный мессенджер.
               Также вы можете оставить свой запрос/жалобу/предложение с помощью формы обратной связи.</p>
          </div>

          <form class="form" @submit.prevent="submitHandler">
            <div class="formItem">
              <label
                v-if="$v.name.$dirty && !$v.name.required"
                class="arrow arrow-bottom"
                for="nameForm"
              >
                Введите имя.<br/>
                мин. 3 символа
              </label>
              <label
                v-else-if="$v.name.$dirty && !$v.name.minLength"
                class="arrow arrow-bottom"
                for="nameForm"
              >
                Имя должно быть не меньше {{$v.name.$params.minLength.min}} символов
              </label>
               <label
                v-else-if="$v.name.$dirty && !$v.name.alphabet"
                class="arrow arrow-bottom"
                for="nameForm"
              >
                В имени должны быть только буквы
              </label>

              <input
                class="formCheck"
                type = "text"
                name="name"
                id="nameForm"
                placeholder = "Как к вам обращатся?"
                v-model.trim="name"
                :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)
                || ($v.name.$dirty && !$v.name.alphabet)}"
              />
            </div>

            <div class="formSelect">
              <div class = "formItem selected">
              <label
                v-if="$v.typeQuestion.$dirty && !$v.typeQuestion.required"
                class="arrow arrow-bottom"
                for="typeQuestion"
              >
                Выберите тип вопроса
              </label>
                <select
                  class="select formCheck"
                  :class="{invalid: ($v.typeQuestion.$dirty && !$v.typeQuestion.required)}"
                  id="typeQuestion"
                  name="typeQuestion"
                  v-model="typeQuestion"
                >
                  <option selected disabled = "disabled">Тема обращения</option>
                  <option value="Доставка">Доставка</option>
                  <option value="Стоимость товара">Стоимость товара</option>
                  <option value="Наличие товара">Наличие товара</option>
                  <option value="Прочее">Прочее</option>
                </select>
              </div>
            </div>

            <div class="formItem">
              <label
                v-if="$v.message.$dirty && !$v.message.required"
                class="arrow arrow-bottom"
                for="message"
              >
                Напишите свой вопрос
              </label>
              <textarea
                class="formCheck"
                :class="{invalid: ($v.message.$dirty && !$v.message.required)}"
                id="message"
                name="message"
                v-model.trim="message"
                placeholder = "Сообщение"
              ></textarea>
            </div>

            <div class="formItem">
              <label
                v-if="$v.tel.$dirty && !$v.tel.required"
                class="arrow arrow-bottom"
                for="tel"
              >
                Введите номер телефона
              </label>
              <label
                v-else-if="$v.tel.$dirty && !$v.tel.telephone"
                class="arrow arrow-bottom"
                for="tel"

              >
                Вы ввели что угодно, только не номер телефона
              </label>
              <input
                class="formCheck"
                :class="{invalid: ($v.tel.$dirty && !$v.tel.required) || ($v.tel.$dirty && !$v.tel.telephone)}"
                type = "tel"
                id="tel"
                name="tel"
                v-model.trim="tel"
                placeholder = "+7(___)__-___-__"
              />
            </div>

            <mdb-btn class = "formButton" type="submit">Отправить</mdb-btn>
          </form>

        </mdb-col>
<!--  END form for questions submit    -->
      </mdb-row>
    </section>
    <notificationGroup group="top">
      <div class="position-fixed d-flex px-4 py-6 align-items-start justify-content-end"
      style="	top: 105px; right: 0; bottom: 0; left: 0; pointer-events: none; z-index: 10"
      >
        <div class="w-100"
        style="max-width: 24rem;">
          <notification v-slot="{notifications}">
            <div
              class="animated bounceInRight faster d-flex w-100 mx-auto white rounded-lg overflow-hidden mt-4"
              style="max-width: 24rem;"
              v-for="notification in notifications"
              :key="notification.id"
            >
              <div class="d-flex justify-content-center align-items-center green lighten-2" style="width: 3rem;">
                <svg
                  class="white-text"
                  style="fill: currentColor; width: 1.5rem; height: 1.5rem;"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
                  ></path>
                </svg>
              </div>

              <div class="mx-3 py-2 px-4">
                <div class="mx-3">
                  <span class="green-text h5">{{notification.title}}</span>
                  <p class="gray-text h6">{{notification.text}}</p>
                </div>
              </div>
            </div>
          </notification>
        </div>
      </div>
    </notificationGroup>
  </div>
</template>

<script>
  import {mdbBtn, mdbCol, mdbRow, mdbWaves,} from 'mdbvue';
  import {
    required,
    minLength,
    helpers,
    alpha,
    numeric
  } from 'vuelidate/lib/validators';

  const telephone = (value) => (value.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/) || []).length > 0;
  const alphabet = (value) => (value.match(/^[a-zA-Zа-яА-Я]*$/) || []).length > 0;
  export default {
    name: "Contact",
    components: {
      mdbCol,
      mdbRow,
      mdbBtn,
    },
    data: () => ({
      name: '',
      typeQuestion: '',
      message: '',
      tel: '',
    }),

    validations: {
      name: {
        required,
        minLength: minLength(3),
        alphabet
      },

      typeQuestion: {required},

      message: {required},

      tel: {
        required,
        telephone,

      }
    },
    directives: {
      mdbWaves
    },

    methods:{
      submitHandler() {
        if(this.$v.$invalid) {
          this.$v.$touch();
          return
        }
        const formData = {
          name: this.name,
          typeQuestion: this.typeQuestion,
          message: this.message,
          tel: this.tel
        };
        console.info(formData);
        this.name = '';
        this.typeQuestion = '';
        this.message = '';
        this.tel = '';
        this.$v.$reset();
        this.$notify(
          {
            group: "top",
            title: "Отправка:",
            text: "Ваше сообщение отправлено!"
          },
          5000
        );
      },
    },
    //end Methods
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
        position: relative;
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
        .invalid {
          border: 1px solid red;
        }

      }

      .formSelect{
        position: relative;
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

      // `START help arrows error validate
      .arrow {
        background: scale_color($sendBG, $lightness: -50%);
        font-weight: 500;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: 0.05em;

        text-align: center;
        color: #fff;
        display: block;
        opacity: 0;
        position: absolute;
        z-index: -10;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        cursor: default;
        max-width: 250px;
        min-width: 120px;
        padding: 5px;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.29);
      }

      .arrow-top,
      .arrow-bottom{
        z-index: 100;
      }
      .arrow-top{
        top: calc(100% + 30px);
      }

      .arrow-bottom{
        bottom: calc(100% + 30px);
      }


      .formItem:hover .arrow-top{
        /*display: block;*/
        animation: tooltip-top 0.4s ease forwards;
      }

      @-moz-keyframes tooltip-top {
        100% {
          opacity: 1;
          top: calc(100% + 10px);
        }
      }
      @-webkit-keyframes tooltip-top {
        100% {
          opacity: 1;
          top: calc(100% + 10px);
        }
      }

      @keyframes tooltip-top {
        100% {
          opacity: 1;
          top: calc(100% + 10px);
        }
      }

      .formItem:hover .arrow-bottom{
        animation: tooltip-bottom 0.4s ease forwards;
      }

      @-moz-keyframes tooltip-bottom {
        100% {
          opacity: 1;
          bottom: calc(100% + 5px);
        }
      }
      @-webkit-keyframes tooltip-bottom {
        100% {
          opacity: 1;
          bottom: calc(100% + 5px);
        }
      }

      @keyframes tooltip-bottom {
        100% {
          opacity: 1;
          bottom: calc(100% + 5px);
        }
      }

      .arrow-top::after,
      .arrow-bottom::after{
        content: '';
        width: 0;
        height: 0;
        display: block;
        position: absolute;
        z-index: 10;
        border: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        margin-left: -10px;
        left: 50%;

      }
      .arrow-top::after {
        border-bottom: 10px solid scale_color($sendBG, $lightness: -50%);
        top: -10px;
      }
      .arrow-bottom::after {
        border-top: 10px solid scale_color($sendBG, $lightness: -50%);
        bottom: -10px;
      }
      // END  help arrows error validate

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
