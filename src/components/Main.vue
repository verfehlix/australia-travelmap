<template>
    <div>
        <!-- <div class="navbar fixed-top">
            <span class="navbar-text">Australia Travelmap 2017</span>
        </div> -->
        <div class="titleText">
            Travelmap - Australia: East Coast 2017
        </div>

        <div class="splitContainer row no-gutters">
            <div ref="mapPanelLeft" class="col-4 hidden-md-down">
                <MapComponent v-bind:place="$route.params.place"></MapComponent>
            </div>

            <div ref="photoPanelRight" class="col">
                <PhotoComponent v-bind:place="$route.params.place"></PhotoComponent>
            </div>
        </div>

        <div ref="mapButton" class="fa fa-3x fa-map fa-inverse hidden-lg-up mapButton" v-on:click="mapButtonClicked()"></div>

    </div>
</template>

<script>
    import MapComponent from '@/components/MapComponent'
    import PhotoComponent from '@/components/PhotoComponent'

    export default {
        name: 'main',
        components: {MapComponent, PhotoComponent},
        showMapOnSmallScreens: false,
        data () {
            return {}
        },
        methods: {
            mapButtonClicked: function () {
                if (!this.showMapOnSmallScreens) {
                    this.$refs.mapPanelLeft.classList.remove('hidden-md-down')
                    this.$refs.mapPanelLeft.classList.remove('col-4')
                    this.$refs.mapPanelLeft.classList.add('col')

                    this.$refs.photoPanelRight.classList.add('hidden-md-down')

                    this.$gmapDefaultResizeBus.$emit('resize')

                    this.$refs.mapButton.classList.add('fa-picture-o')
                    this.$refs.mapButton.classList.remove('fa-map')

                    this.showMapOnSmallScreens = true
                } else {
                    this.$refs.mapPanelLeft.classList.add('hidden-md-down')
                    this.$refs.mapPanelLeft.classList.add('col-4')
                    this.$refs.mapPanelLeft.classList.remove('col')

                    this.$refs.photoPanelRight.classList.remove('hidden-md-down')

                    this.$gmapDefaultResizeBus.$emit('resize')

                    this.$refs.mapButton.classList.remove('fa-picture-o')
                    this.$refs.mapButton.classList.add('fa-map')

                    this.showMapOnSmallScreens = false
                }
            }
        }
    }
</script>

<style scoped>
    .titleText {
        font-family: 'Just Another Hand', cursive;
        font-size: 3em;
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        min-width: 100%;
        text-align: center;
        padding: 0.25em;
    }

    .splitContainer {
        /* Prevent Navbar from lying over content */
        margin-top: 54px;
        max-height: calc(100vh - 54px);
        overflow: hidden;
    }

    .mapButton {
        padding: 15px;
        position: absolute;
        background: rgba(0, 0, 0, 0.75);
        bottom: 0;
        right:0;
        margin: 75px;
    }
</style>
