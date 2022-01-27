import {
  createApp
} from 'vue'
import App from '~/App.vue'
import router from '~/routes'
import store from '~/store'
import fetch from './plugins/fetch'
import search from './plugins/search'
import lazyLoad from './plugins/lazyLoad'

// vue 플러그인 적용
const app = createApp(App)
app.use(router)
app.use(store)
app.use(fetch)
app.use(search)
app.use(lazyLoad)
app.mount('#app')
