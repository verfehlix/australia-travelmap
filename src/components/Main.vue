<template>
    <el-row>
        <el-col :span="10" id="mapColumn">
            <div class="grid-content bg-purple">
                <MapComponent></MapComponent>
            </div>
        </el-col>

        <el-col :span="14" id="photoColumn">
            <div class="grid-content bg-purple-light">
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
<style scoped>
    .el-col {
        border-radius: 4px;
    }
    .grid-content {
        border-radius: 4px;
        height: calc(100vh - 52px);
        overflow-y: scroll;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }

    .CarouselComponent {
        display: none;
    }

    @media only screen and (max-width: 768px) {
        #mapColumn {
            display: none;
        }
         #photoColumn {
            width: 100vw;
        }
    }

</style>
