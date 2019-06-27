import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 通用scss
import "./common/css/index.scss";
// css重置
import "./static/css/reset.css";

// axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// mui
import "./mui/css/mui.min.css";
import "./mui/css/icons-extra.css";

// ant design;
import { Icon, Anchor } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.component(Icon.name, Icon);
Vue.component(Anchor.name, Anchor);

// mint ui
import {
  Swipe,
  SwipeItem,
  Button,
  Navbar,
  TabItem,
  TabContainer,
  TabContainerItem,
  Header,
  Cell
} from "mint-ui";
import "mint-ui/lib/style.css"; //轮播需要用的样式,直接引入就行

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Header.name, Header);
Vue.component(Cell.name, Cell);

//配置ajax访问路径

axios.defaults.baseURL = "http://129.28.178.213:8001/";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
