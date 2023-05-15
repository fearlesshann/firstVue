import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import httpClient from './utils/http';
import router from './router';
import 'element-plus/theme-chalk/dark/css-vars.css'
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

// Prism
import Prism from 'prismjs';
// highlight code
import 'prismjs/components/prism-json';

VMdEditor.use(vuepressTheme, {
  Prism,
  extend(md) {
  },
});


const app = createApp(App)
app.config.globalProperties.$axios = axios
//开发环境地址
// axios.defaults.baseURL = 'https://localhost:7123';
// axios.defaults.baseURL = 'http://localhost:5058';
//生产环境地址
// axios.defaults.baseURL = 'https://47.101.173.44:8880';
axios.defaults.baseURL = 'http://47.101.173.44:8880';
app.config.globalProperties.httpClient = httpClient
app.use(router)
app.use(VMdEditor)

app.mount('#app')
