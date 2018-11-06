import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
/*import VueQuillEditor from './vue-quill-ed/itor';
*/

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
