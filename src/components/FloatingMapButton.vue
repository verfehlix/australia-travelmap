<template>
    <div ref="mapButton" class="fa fa-3x fa-map fa hidden-lg-up mapButton" v-on:click="mapButtonClicked()"></div>
</template>

<script>
    import {EventBus} from '@/eventbus.js'

    export default {
        name: 'FloatingMapButton',
        data () {
            return {
                showMapOnSmallScreens: false
            }
        },
        created: function () {
            EventBus.$on('place-button-was-clicked', () => {
                this.mapButtonClicked()
            })
        },
        methods: {
            mapButtonClicked: function () {
                if (!this.showMapOnSmallScreens) {
                    EventBus.$emit('map-button-show-map')

                    this.$refs.mapButton.classList.add('fa-picture-o')
                    this.$refs.mapButton.classList.remove('fa-map')

                    this.showMapOnSmallScreens = true
                } else {
                    EventBus.$emit('map-button-show-gallery')

                    this.$refs.mapButton.classList.remove('fa-picture-o')
                    this.$refs.mapButton.classList.add('fa-map')

                    this.showMapOnSmallScreens = false
                }
            }
        }
    }
</script>

<style scoped>
    .mapButton {
        padding: 15px;
        position: absolute;
        background: rgba(255, 255, 255, 0.75);
        bottom: 0;
        right:0;
        margin: 75px;
    }
</style>
