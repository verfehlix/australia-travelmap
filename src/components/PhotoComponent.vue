<template>
    <div>
        <h1>HERE BE PHOTOS</h1>

        <el-row>
            <el-col :span="5" v-for="fileName in photos" :key="fileName" >
                  <el-card :body-style="{ padding: '5px'}">
                    <img v-bind:src="require('@/assets/sydney/' + fileName)" class="image">
                </el-card>

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
                photos: ['DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg'],
                currentDate: new Date()
            }
        }
    }
</script>

<style scoped>
    .el-col {
        padding: 5px;
    }
    .image {
        width: 100%;
        display: block;
    }
</style>
