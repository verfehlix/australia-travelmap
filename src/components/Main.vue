<template>
    <div>
        <div class="navbar fixed-top">
            <span class="navbar-text">Australia Travelmap 2017</span>
        </div>

        <div class="splitContainer row no-gutters">
            <div class="col-4 hidden-md-down splitPanel-left">
                <MapComponent v-bind:place="$route.params.place"></MapComponent>
            </div>

            <div class="col splitPanel-right">
                <PhotoComponent v-bind:place="$route.params.place"></PhotoComponent>
            </div>
        </div>

    </div>
</template>

<script>
    import MapComponent from '@/components/MapComponent'
    import PhotoComponent from '@/components/PhotoComponent'

    export default {
        name: 'main',
        components: {MapComponent, PhotoComponent},
        data () {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .splitContainer {
        /* Prevent Navbar from lying over content */
        margin-top: 54px;
        max-height: calc(100vh - 54px);
    }
    .splitPanel-left {
        background: #d3dce6;
    }
    .splitPanel-right {
        background: #BBBBBB;
        height: calc(100vh - 54px);
        overflow-y: auto;
    }
</style>
