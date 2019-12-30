<template>
    <div id="app">
        <modeler :bpmnXML='blankBpmn' />
    </div>
</template>

<script>
import Modeler from '../src/components/Modeler'

export default {
    name: 'app',
    data() {
        return {
            blankBpmn: '<?xml version="1.0" encoding="UTF-8"?> \
                        <bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_03dabax" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Modeler" exporterVersion="2.0.3"> \
                            <bpmn:process id="Process_x" isExecutable="true"> \
                            </bpmn:process> \
                            <bpmndi:BPMNDiagram id="BPMNDiagram_1"> \
                                <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1"> \
                                </bpmndi:BPMNPlane> \
                            </bpmndi:BPMNDiagram> \
                        </bpmn:definitions> \
                        '
        }
    },
    components: {
        'modeler': Modeler
    }
}
</script>

<style>
* {
    margin: 0;
}
html,
body {
    height: 100%;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
}
</style>
