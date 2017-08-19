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
            <div ref="photoPanelRight" class="col">
                <PhotoComponent v-bind:place="$route.params.place"></PhotoComponent>
            </div>
        </div>

        <!-- Floating Button to switch between Map / Gallery (on small devices) -->
        <FloatingMapButton></FloatingMapButton>
    </div>
</template>

<script>
    import HeaderBox from '@/components/HeaderBox'
    import MapComponent from '@/components/MapComponent'
    import PhotoComponent from '@/components/PhotoComponent'
    import FloatingMapButton from '@/components/FloatingMapButton'

    export default {
        name: 'main',
        components: {HeaderBox, MapComponent, PhotoComponent, FloatingMapButton},
        data () {
            return {}
        },
        methods: {
            test: function () {
                alert('aasdf')
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
