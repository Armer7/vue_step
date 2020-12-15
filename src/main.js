import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Notifications from "vt-notifications";
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import "bootstrap-css-only/css/bootstrap.min.css";
import 'mdbvue/lib/mdbvue.css';
import "@fortawesome/fontawesome-free/css/all.css";

import * as mdbvue from "mdbvue";
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component]);
}

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(Notifications);

firebase.initializeApp({
  apiKey: "AIzaSyBHO8EE18G-FTwzRw-ZVGKAqCig1JbQI9I",
  authDomain: "cosmeticarmer.firebaseapp.com",
  databaseURL: "https://cosmeticarmer-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cosmeticarmer",
  storageBucket: "cosmeticarmer.appspot.com",
  messagingSenderId: "23755110222",
  appId: "1:23755110222:web:fc136785c28627baf3101f",
  measurementId: "G-FSEKL7F7SC"
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
