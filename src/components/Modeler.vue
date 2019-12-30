<template>
    <div class="modeler">
        <div class="canvas"
            ref="_canvas"></div>
        <div class="properties-panel-parent"
            ref="_properties"></div>
    </div>
</template>

<script>
import BpmnModeler from 'bpmn-js/lib/Modeler'
import propertiesPanelModule from 'bpmn-js-properties-panel'
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/bpmn'
import Translate from '../i18n/Translate'

export default {
    props: [
        'bpmnXML',
        'locale'
    ],
    data() {
        return {
            modeler: undefined
        }
    },
    beforeCreate() {
    },
    mounted() {
        let canvas = this.$refs._canvas
        let properties = this.$refs._properties
        let customTranslate = {
            // translate: ['value', require('../i18n/Translate').default]
            translate: ['value', Translate]
        }
        this.modeler = new BpmnModeler({
            additionalModules: [
                propertiesPanelModule,
                propertiesProviderModule,
                customTranslate,
            ],
            container: canvas,
            propertiesPanel: {
                parent: properties
            }
        })
        this.reload()
    },
    methods: {
        reload() {
            if (this.bpmnXML) {
                this.modeler.importXML(this.bpmnXML, function (err) {
                    if (err) {
                        console.error(err)
                    }
                    // else {
                    // }
                })
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~bpmn-js/dist/assets/diagram-js.css';
@import '~bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
@import '~bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
@import '~bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
@import '~bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';

.modeler {
    width: 100%;
    height: 100%;

    .canvas {
        width: 100%;
        height: 100%;
    }

    .bjs-powered-by {
        display: none;
    }

    .properties-panel-parent {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 260px;
        z-index: 10;
        border-left: 1px solid #ccc;
        overflow: auto;

        &:empty {
            display: none;
        }

        /deep/ .bpp-properties-panel {
            background-color: #fdfdfd;
        }
    }
}
</style>