<template>
    <div class="modeler">
        <div class="canvas"
            ref="_canvas">
        </div>
        <div class="properties-panel-parent"
            ref="_properties">
        </div>
        <ul class="custom-toolbar">
            <li>
                <a target="_blank"
                    href=""
                    title="导入">
                    <span class="icon-download">导入</span>
                </a>
            </li>
            <li>
                <a target="_blank"
                    href=""
                    title="检查">
                    <span class="icon-download">检查</span>
                </a>
            </li>
            <li>
                <a target="_blank"
                    href=""
                    title="保存">
                    <span class="icon-picture">保存</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import BpmnModeler from 'bpmn-js/dist/bpmn-modeler.production.min'
import propertiesPanelModule from '../bpp-fork/lib'
import propertiesProviderModule from '../bpp-fork/lib/provider/flowable'
import flowableDefinitions from '../bpp-fork/flowable/flowable'
import Translate from '../bpmn-custom/i18n/Translate'
import paletteCutomProvider from '../bpmn-custom/palette'

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
                paletteCutomProvider
            ],
            container: canvas,
            propertiesPanel: {
                parent: properties
            },
            moddleExtensions: {
                flowable: flowableDefinitions
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

<style>
@import "~bpmn-js/dist/assets/diagram-js.css";
@import "~bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
</style>

<style lang="less">
@import "../bpp-fork/styles/properties.less";
</style>

<style lang="stylus" scoped>
.modeler {
    width: 100%;
    height: 100%;

    .custom-toolbar {
        position: absolute;
        list-style: none;
        top: 20px;
        right: 320px;
        padding: 0;
        margin: 0;
        background: #FFF;
        border: solid 1px #CCC;

        li {
            display: inline-block;

            a {
                margin: 0 5px;
                padding: 0;
                outline: none;
                cursor: pointer;
                font-size: 16px;
                line-height: 46px;
                color: #3860f4;
                background: none;
                border: none;
                text-decoration: none;
            }
        }
    }

    .canvas {
        width: 100%;
        height: 100%;
    }

    /deep/ .bjs-container {
        .djs-palette {
            background: none;
            width: auto;

            .djs-palette-entries {
                display: flex;

                .group:first-child {
                    border-right: 1px solid #cccccc;

                    hr {
                        display: none;
                    }
                }

                .group {
                    .bpmn-custom-palette-start, .bpmn-custom-palette-end, .bpmn-custom-palette-intermediate {
                        &:hover {
                            color: rgb(255, 116, 0);
                        }
                    }

                    .bpmn-custom-palette-start {
                        color: #00BF9C;

                        &:hover {
                            color: rgb(255, 116, 0);
                        }
                    }

                    .bpmn-custom-palette-end {
                        color: #ED4757;
                    }

                    .bpmn-custom-palette-intermediate {
                        color: #fabd2d;
                    }
                }
            }
        }
    }

    .bjs-powered-by {
        display: none;
    }

    .properties-panel-parent {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 300px;
        z-index: 10;
        border-left: 1px solid #ccc;
        overflow: auto;

        &:empty {
            display: none;
        }

        /deep/ .bpp-properties-panel {
            background-color: #fdfdfd;

            * {
                font-weight: normal !important;
                font-size: 12px;
                font-style: normal;
            }

            .bpp-properties-tabs-container {
                .bpp-properties-tab {
                    .bpp-properties-group {
                        .group-toggle {
                            width: 2px;
                        }

                        .group-label {
                            font-size: 14px;
                        }

                        .bpp-properties-entry {
                            label {
                                font-size: 12px;
                            }

                            .bpp-field-description {
                                font-size: 12px;
                            }

                            .bpp-error-message {
                                font-size: 12px;
                            }
                        }

                        .bpp-textfield input {
                            padding-right: 0px;
                        }
                    }
                }
            }
        }
    }
}
</style>