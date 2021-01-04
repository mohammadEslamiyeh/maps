import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps';
import LoadScript from 'vue-plugin-load-script';
import VueMeta from 'vue-meta'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './registerServiceWorker'
import router from './router'
import store from './store'


delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I",
        libraries: "places" // necessary for places input
    }
});
Vue.use(LoadScript);
Vue.use(VueMeta)
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')