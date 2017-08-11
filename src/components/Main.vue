<template>
    <div>
        <div class="header">
            <span>Australia Travelmap 2017</span>
        </div>

        <div class="row splitPanelContainer">

            <div class="col-md-5 no-float">
                <div class="grid-content bg-left hidden-sm">
                    <MapComponent></MapComponent>
                </div>
            </div>

            <div class="col-md-7 no-float">
                <div class="grid-content bg-right">
                    <PhotoComponent></PhotoComponent>
                </div>
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
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        background: #123456;
        height: 100px;
    }
    .row {
        height: 100%;
        display: table-row;
    }
    .splitPanelContainer {
        display:table;
        width: 100%;
        margin-top: 0px;
        padding: 0px 0 0 0;
        box-sizing: border-box;
    }

     /* .grid-content {
        border-radius: 4px;
        height: calc(100vh - 52px);
        overflow-y: scroll;
    } */
    .bg-left {
        background: #d3dce6;
    }
    .bg-right {
        background: #e5e9f2;
    }
</style>
