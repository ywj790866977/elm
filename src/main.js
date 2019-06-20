import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
// mui
import './mui/css/mui.min.css';
import './mui/css/icons-extra.css';



// mint ui
import { Swipe, SwipeItem,Button  } from 'mint-ui';
import 'mint-ui/lib/style.css' //轮播需要用的样式,直接引入就行

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

//配置ajax访问路径

axios.defaults.baseURL = 'http://129.28.178.213:8001/';

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
