import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/Index.vue';
import Second from './components/second.vue';
import Third from './components/third.vue';
// import Oladele from './components/oladele.vue' 

const app = createApp(App);
app.component('Index', Index);
app.component('second', Second);
app.component('third', Third)
// app.component('oladele', Oladele);
app.mount('#app')
