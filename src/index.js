import { version } from '../package.json';

import { default as Modeler } from './components/Modeler.vue'

const components = [
    Modeler
]

export {
    Modeler
}

const install = function (Vue) {
    components.forEach(c => {
        Vue.component(c.name, c)
    })
}

export default {
    version,
    install
}