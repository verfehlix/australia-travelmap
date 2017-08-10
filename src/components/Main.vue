<template>
    <el-row>
        <el-col :span="10">
            <div class="grid-content bg-purple">
                <h3>MAP</h3>
                <MapComponent></MapComponent>
            </div>
        </el-col>

        <el-col :span="14">
            <div class="grid-content bg-purple-light">
                <h3>PHOTOS</h3>
                <PhotoComponent></PhotoComponent>
            </div>
        </el-col>
    </el-row>
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
<style>
    .el-col {
        border-radius: 4px;
    }
    .grid-content {
        border-radius: 4px;
        height: calc(100vh - 52px);
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
</style>
