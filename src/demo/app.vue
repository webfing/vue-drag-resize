<template>
    <div id="app">
        <div class="list" id="list">
            <VueDragResize v-for="(rect, index) in rects"
                        :ref="`drag${index}`"
                           :key="index"
                           :w="rect.width"
                           :h="rect.height"
                           :x="rect.left"
                           :y="rect.top"
                           :parentW="listWidth"
                           :parentH="listHeight"
                           :axis="rect.axis"
                           :isActive="rect.active"
                           :minw="rect.minw"
                           :maxw="rect.maxw"
                           :minh="rect.minh"
                           :maxh="rect.maxh"
                           :stickStyle="rect.stickStyle"
                           :stickHoverStyle="rect.stickHoverStyle"
                           :zoomTransition="rect.zoomTransition"
                           :isDraggable="rect.draggable"
                           :isResizable="rect.resizable"
                           :stickSize="rect.stickSize"
                           :parentLimitation="rect.parentLim"
                           :snapToGrid="rect.snapToGrid"
                           :aspectRatio="rect.aspectRatio"
                           :z="rect.zIndex"
                           :contentClass="rect.class"
                           v-on:activated="activateEv(index)"
                           v-on:deactivated="deactivateEv(index)"
                           v-on:dragging="changePosition($event, index)"
                           v-on:resizing="changeSize($event, index)"
            >
                <div class="filler" :style="{backgroundColor:rect.color}">
                    <textarea>test</textarea>
                    <button @click="zoom(`drag${index}`)">展开</button>
                    <button @click="unzoom(`drag${index}`)">收起</button>
                </div>
            </VueDragResize>
        </div>

        <toolbar></toolbar>
    </div>
</template>

<style>
    body {
        height: 100vh;
        width: 100vw;
        background-color: #ECECEC;
    }

    #app {
        margin: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        position: relative;
        font-family: 'Lato', sans-serif;
    }

    .filler {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .list {
        position: absolute;
        top: 30px;
        bottom: 30px;
        left: 30px;
        right: 300px;
        box-shadow: 0 0 2px #AAA;
        background-color: white;
    }

    .box-shaddow {
        box-shadow:  10px 10px 15px 0px rgba(125,125,125,1);
    }
</style>

<script>
    import VueDragResize from '../components/vue-drag-resize.vue';
    import toolbar from './components/toolbar/toolbar.vue';
    import './icons';

    export default {
        name: 'app',

        components: {
            VueDragResize,
            toolbar
        },

        data(){
            return {
                listWidth: 0,
                listHeight: 0
            }
        },

        mounted() {
            let listEl = document.getElementById('list');
            this.listWidth = listEl.clientWidth;
            this.listHeight = listEl.clientHeight;

            window.addEventListener('resize', ()=>{
                this.listWidth = listEl.clientWidth;
                this.listHeight = listEl.clientHeight;
            })
        },

        computed: {
            rects() {
                return this.$store.state.rect.rects
            }
        },

        methods: {
            activateEv(index) {
                this.$store.dispatch('rect/setActive', {id: index});
            },

            zoom(target) {
                const drag = this.$refs[target][0];
                drag.zoom({
                    width: 700,
                    height: 300
                }, 'ml')
            },

            unzoom(target) {
                const drag = this.$refs[target][0];
                drag.zoom({
                    width: 330,
                    height: 300
                }, 'ml')
            },

            deactivateEv(index) {
                this.$store.dispatch('rect/unsetActive', {id: index});
            },

            changePosition(newRect, index) {

                this.$store.dispatch('rect/setTop', {id: index, top: newRect.top});
                this.$store.dispatch('rect/setLeft', {id: index, left: newRect.left});
                this.$store.dispatch('rect/setWidth', {id: index, width: newRect.width});
                this.$store.dispatch('rect/setHeight', {id: index, height: newRect.height});
            },

            changeSize(newRect, index) {
                this.$store.dispatch('rect/setTop', {id: index, top: newRect.top});
                this.$store.dispatch('rect/setLeft', {id: index, left: newRect.left});
                this.$store.dispatch('rect/setWidth', {id: index, width: newRect.width});
                this.$store.dispatch('rect/setHeight', {id: index, height: newRect.height});
            }
        }
    }
</script>