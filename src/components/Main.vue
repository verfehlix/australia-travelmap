<template>
    <div>
        <!-- Header (Text) -->
        <HeaderBox></HeaderBox>

        <!-- Container that holds both columns -->
        <div class="row no-gutters panelContainer">

            <!-- Left Column (33% width), holds Map -->
            <div ref="mapPanel" class="col-4 hidden-md-down">
                <MapPanel v-bind:place="$route.params.place"></MapPanel>
            </div>

            <!-- Right Column (67% width), holds Gallery -->
            <div ref="galleryPanel" class="col">
                <GalleryPanel v-bind:place="$route.params.place"></GalleryPanel>
            </div>
        </div>

        <!-- Floating Button to switch between Map / Gallery (on small devices) -->
        <FloatingMapButton></FloatingMapButton>
    </div>
</template>

<script>
    import {EventBus} from '@/eventbus.js'

    import HeaderBox from '@/components/HeaderBox'
    import MapPanel from '@/components/MapPanel'
    import GalleryPanel from '@/components/GalleryPanel'
    import FloatingMapButton from '@/components/FloatingMapButton'

    export default {

        name: 'main',
        components: {HeaderBox, MapPanel, GalleryPanel, FloatingMapButton},
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
                this.$refs.mapPanel.classList.remove('hidden-md-down')
                this.$refs.mapPanel.classList.remove('col-4')
                this.$refs.mapPanel.classList.add('col')

                this.$refs.galleryPanel.classList.add('hidden-md-down')

                this.$gmapDefaultResizeBus.$emit('resize')
            },
            displayGalleryOnSmallDevices: function () {
                this.$refs.mapPanel.classList.add('hidden-md-down')
                this.$refs.mapPanel.classList.add('col-4')
                this.$refs.mapPanel.classList.remove('col')

                this.$refs.galleryPanel.classList.remove('hidden-md-down')

                this.$gmapDefaultResizeBus.$emit('resize')
            }

        }
    }
</script>

<style scoped>

    .panelContainer {
        /* Prevent Navbar from lying over content */
        margin-top: 54px;
        max-height: calc(100vh - 54px);
        overflow: hidden;
    }

</style>
