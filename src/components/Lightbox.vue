<template>
    <div>
        <link href="https://unpkg.com/animate.css@3.5.1/animate.min.css" rel="stylesheet" type="text/css">

         <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeInLeft"
            leave-active-class="animated fadeOutRight"
        >
            <img class="currentImage" v-bind:src="require('@/assets/sydney/' + currentImage)" v-bind:key="require('@/assets/sydney/' + currentImage)" v-on:click="nextButtonClick()"/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'map',
        components: {},
        data () {
            return {
                currentImage: 'DSC03096.jpg',
                photos: ['DSC03096.jpg', 'DSC00012.jpg', 'DSC_2616.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg']
            }
        },
        methods: {
            nextButtonClick: function () {
                let index = this.photos.indexOf(this.currentImage)
                if (index === this.photos.length) {
                    this.currentImage = this.photos[0]
                } else {
                    this.currentImage = this.photos[++index]
                }
            }
        }
    }
</script>

<style scoped>
    .currentImage  {
        max-height:600px;
    }
</style>
