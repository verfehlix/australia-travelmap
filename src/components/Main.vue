<template>
    <div>
        <!-- Header (Text) -->
        <HeaderBox></HeaderBox>

        <!-- Container that holds both columns -->
        <div class="row no-gutters splitContainer">

            <!-- Left Column (33% width), holds Map -->
            <div ref="mapPanelLeft" class="col-4 hidden-md-down">
                <MapComponent v-bind:place="$route.params.place"></MapComponent>
            </div>

            <!-- Right Column (67% width), holds Gallery -->
            <div ref="galleryPanelRight" class="col">
                <PhotoComponent v-bind:place="$route.params.place"></PhotoComponent>
            </div>
        </div>

        <!-- Floating Button to switch between Map / Gallery (on small devices) -->
        <FloatingMapButton></FloatingMapButton>
    </div>
</template>

<script>
    import {EventBus} from '@/eventbus.js'

    import HeaderBox from '@/components/HeaderBox'
    import MapComponent from '@/components/MapComponent'
    import PhotoComponent from '@/components/PhotoComponent'
    import FloatingMapButton from '@/components/FloatingMapButton'

    export default {

        name: 'main',
        components: {HeaderBox, MapComponent, PhotoComponent, FloatingMapButton},
        data () {
            return {

            }
        },
        created: function () {
            EventBus.$on('map-button-show-map', () => {
                this.displayMapOnSmallDevices()
            })
            EventBus.$on('map-button-show-gallery', () => {
                this.displayGalleryOnSmallDevices()
            })
        },
        methods: {
            displayMapOnSmallDevices: function () {
                this.$refs.mapPanelLeft.classList.remove('hidden-md-down')
                this.$refs.mapPanelLeft.classList.remove('col-4')
                this.$refs.mapPanelLeft.classList.add('col')

                this.$refs.galleryPanelRight.classList.add('hidden-md-down')

                this.$gmapDefaultResizeBus.$emit('resize')
            },
            displayGalleryOnSmallDevices: function () {
                this.$refs.mapPanelLeft.classList.add('hidden-md-down')
                this.$refs.mapPanelLeft.classList.add('col-4')
                this.$refs.mapPanelLeft.classList.remove('col')

                this.$refs.galleryPanelRight.classList.remove('hidden-md-down')

                this.$gmapDefaultResizeBus.$emit('resize')
            }

        }
    }
</script>

<style scoped>

    .splitContainer {
        /* Prevent Navbar from lying over content */
        margin-top: 54px;
        max-height: calc(100vh - 54px);
        overflow: hidden;
    }

</style>
