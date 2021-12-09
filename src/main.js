import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import vueaxios from "vue-axios";
import axios from "axios";
import qs from "qs";

axios.interceptors.request.use((config) =>{
	config.data=qs.stringify(config.data);
	return config
}, function(error){
	return Promise.reject(error)
});

Vue.use(vueaxios,axios)

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
