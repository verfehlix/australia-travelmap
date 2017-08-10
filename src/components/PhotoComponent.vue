<template>
    <div class="photoComponent">
        <h1>HERE BE PHOTOS</h1>

        <el-row>
            <el-col :xs="12" :sm="8" :md="8" :lg="6" v-for="fileName in photos" :key="fileName">
                <div class="photoContainer">
                    <div class="testDiv" :style="{ 'background-image': 'url(' + require('@/assets/sydney/' + fileName) + ')' }"></div>
                </div>
            </el-col>
        </el-row>

        <!-- <el-carousel trigger="click" indicator-position="outside" :autoplay="false" height="400px">
            <el-carousel-item v-for="fileName in photos" :key="fileName">
                    <img v-bind:src="require('@/assets/sydney/' + fileName)" v-bind:alt="fileName" />
            </el-carousel-item>
        </el-carousel> -->
    </div>
</template>

<script>
    export default {
        name: 'Photo',
        data () {
            return {
                msg: 'Welcome to the PHOTOS',
                photos: ['DSC03096.jpg', 'DSC00012.jpg', 'DSC_2616.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg'],
                currentDate: new Date()
            }
        }
    }
</script>

<style scoped>
    .photoContainer {
        border-radius: 3px;
        margin: 10px;

        width: 200px;
        height: 150px;

        -webkit-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);
        box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);
    }
    .testDiv {
        border-radius: 3px;

        width: 200px;
        height: 150px;

        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }
</style>
