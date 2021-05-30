import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import VueAxios from "vue-axios";
import "@/mixins/loaderAndpopup";
import vuetify from "./plugins/vuetify";
Vue.use(VueAxios, axios);

// Define Loader && Popup as a Global Components
import Loader from "@/components/Loader";
import Popup from "@/components/Popup";
Vue.component("Loader", Loader);
Vue.component("Popup", Popup);

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVlZTRkZWVmNGZmODNkNDJmNjAzMTk4NDJlMDFkOTdlYmRkODM5NDM3NmU4ZGY0ZGFlY2Q5OGJiZTEyZWE1YjBmYWNmZDU4NjMyYTJiN2IxIn0.eyJhdWQiOiI5MjdjNzAyNS1hOWJhLTQ4MjgtYTA3MS1lMGQ2NDMzM2EwMDQiLCJqdGkiOiI1ZWU0ZGVlZjRmZjgzZDQyZjYwMzE5ODQyZTAxZDk3ZWJkZDgzOTQzNzZlOGRmNGRhZWNkOThiYmUxMmVhNWIwZmFjZmQ1ODYzMmEyYjdiMSIsImlhdCI6MTYxNTIwMTI5NiwibmJmIjoxNjE1MjAxMjk2LCJleHAiOjE3NzI5Njc2OTYsInN1YiI6IiIsInNjb3BlcyI6W10sImJ1c2luZXNzIjoiOTI5ZTg4NDgtYjc3Mi00NDI5LWI1MGQtZmM1MGY3ZGI1OTJiIiwicmVmZXJlbmNlIjoiMTIzMDAxIn0.M13xMwdJSf_KGYGR6zuddH1eoCc_ktMKtz3Z6nrZgglfEDMElvOtBOeZpPcnf-QZubn1m_u8jo219s7jk9rhyG8ZQFZwJnhm4ivK_iBua3jWtU06YvVaup3TRDXJJD2rktsmwaln4OCXkd2ACPS9JhQOENCwYDDVK-DRbfikPg8b6UifV7-uo-NVKSrrDruBRN__SlsYlhT0b5ZYpDBjZnMUt2J88czBfEbVkefai41NqFV8OX7N6G-gY6oI3fa1uAHLRXVycfPJ-fCJG3ycnUJd6YELprOdq13K53iu8noSrMx2fX9QbyvN12ft6w7M_tNTvsxCEDkQOH7z1Ze8tT2MUZThPb7jK5pbQcarq33wftZqszWeRgCQ47b3XJXxPsaM6f6ggc5orRgg6RbkcOBjKwRnyyMrPqg425tpCjz3WjUFxxToLb7UqNnpH6v9z3vuKIq8wD2CT3Wx5KvE8lR1QPSgzUI6dFY94fG_Hm2Rd_UArOou770_o_y5vTWVSvN2heK-Mw26TovFHER-XChzQvkflHzAn5-kp6yxTJO4UWaXsuP8pEzQNiqUK1t4JdVq7cFg8SMcys39v5gUocAndMoaIYINmIfnHkiTnxZOyxqk7vsLxX314Q6oIN5u1ZvHUJExHo_7uXrN8zjdg9iwZ-LynlIkjbL-rNXIk9g";

// send these headers with every axios request
// axios.defaults.baseURL = "https://foodics-api.herokuapp.com/";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] = "Bearer " + token;

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
