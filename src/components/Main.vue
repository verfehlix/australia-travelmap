<template>
    <div>
        <div class="row header">
            <div class="col">
                <span>Australia Travelmap 2017</span>
            </div>
        </div>

        <div class="row no-gutters splitContainer">
            <div class="col-4 hidden-md-down bg-left">
                <MapComponent></MapComponent>
            </div>

            <div class="col bg-right">
                    <PhotoComponent></PhotoComponent>
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
        background: #FFEEFF;
    }
    .bg-left {
        background: #d3dce6;
    }
    .bg-right {
        background: #e5e9f2;
    }
</style>
