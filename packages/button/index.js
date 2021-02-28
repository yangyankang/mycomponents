import YykButton from './src/button.vue'

YykButton.install = (Vue) => {
  Vue.component(YykButton.name, YykButton)
}

export default YykButton