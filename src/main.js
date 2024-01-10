import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/style-general.css'

// BOOTSTRAP VUE
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// VISUAL AUDIO
import AVPlugin from 'vue-audio-visual'
import WaveSurfer from 'vue-wave-surfer'

Vue.use(AVPlugin)
Vue.use(WaveSurfer)


// FONTAWESOME 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEyeSlash, faTrashCan, faFileAlt, faEye } from '@fortawesome/free-regular-svg-icons'
import { faFileDownload, faPen, faSquareRootVariable, faBold, faItalic, faUnderline, faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify, faTrash, faImage, faUpload, faA, faEyeDropper, faLinkSlash, faExpand, faCompress, faPlay, faPause, faChevronLeft, faChevronRight, faChevronUp, faChevronDown, faPlus, faWandMagicSparkles, faCheck, faGear, faBackwardStep, faForwardStep, faBars, faInfo, faQuestion, faMagnifyingGlass, faEllipsisVertical, faCirclePlay, faCirclePause, faCircle, faStop, faVolumeHigh, faUserPlus, faCircleMinus, faXmark, faSpinner, faArrowDown, faArrowRight, faEllipsis, faEyedropper, faMinus, faMagnifyingGlassPlus, faMagnifyingGlassMinus, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faEyeSlash, faTrashCan, faFileAlt, faEye, faFileDownload, faPen, faSquareRootVariable, faBold, faItalic, faUnderline, faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify, faTrash, faImage, faUpload, faA, faEyeDropper, faLinkSlash, faExpand, faCompress, faPlay, faPause, faChevronLeft, faChevronRight, faChevronUp, faChevronDown, faPlus, faWandMagicSparkles, faCheck, faGear, faBackwardStep, faForwardStep, faBars, faInfo, faQuestion, faMagnifyingGlass, faEllipsisVertical, faCirclePlay, faCirclePause, faCircle, faStop, faVolumeHigh, faUserPlus, faCircleMinus ,faXmark, faSpinner, faArrowDown, faArrowRight, faEllipsis, faEyedropper, faMinus, faMagnifyingGlassPlus, faMagnifyingGlassMinus, faSignOut)

window.axios = require('axios')


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
