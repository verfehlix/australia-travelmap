<template>
    <div>
        <!-- <div class="navbar fixed-top">
            <span class="navbar-text">Australia Travelmap 2017</span>
        </div> -->
        <div class="titleText">
            Travelmap - Australia: East Coast 2017
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
    }
    .splitPanel-left {
        margin-left: 2em;

        margin-top: 2em;
        margin-bottom: 2em;

        border: 1px solid red;
    }
    .splitPanel-right {
        height: calc(100vh - 54px - 4em);
        overflow-y: auto;

        margin-right: 2em;

        margin-top: 2em;
        margin-bottom: 2em;


        border: 1px solid blue;
    }
</style>
