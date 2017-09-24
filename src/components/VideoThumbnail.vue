<template>
    <div class="videoContainer">
        <div class="videoContent">
            <div class="fa fa-play-circle-o fa-inverse playButton"></div>
            <video class="video">
                <source v-bind:src="require('@/assets/' + place.id + '/' + photo.fileName)" type="video/mp4">
            </video>
        </div>
    </div>
</template>

<script>
    import {EventBus} from '@/eventbus.js'

    export default {
        name: 'Photo',
        props: ['photo', 'place'],
        methods: {
            photoClick: function (photo) {
                EventBus.$emit('gallery-photo-clicked', photo)
            }
        }
    }
</script>

<style scoped>

    .videoContainer {
        /* Margins same as gutter size for top / bottom of the thumbnails*/
        margin-top: 0.25em;
        margin-bottom: 0.25em;

        cursor: pointer;
        overflow: hidden;

        position: relative;
	    width: 100%;
    }

    .videoContent {
        position:  absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .videoContainer:before{
        content: "";
        display: block;

        /*Ratio 1:1*/
        padding-top: 100%;

        /*Ratio 2:1*/
        /* padding-top: 50%; */

        /*Ratio 1:2*/
        /* padding-top: 200%; */

        /*Ratio 4:3*/
         /* padding-top: 75%; */

        /*Ratio 16:9*/
         /* padding-top: 56.25%; */
    }

    .video {
        width: 100%;
    }

    .playButton {
        /*Absolute Horizontal & Vertical Centering*/
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

        z-index: 9999;

        font-size: 10em;

        opacity: 0.75;

        /*Transition back after hover-zoom*/
        -moz-transition: all 0.2s;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        -moz-transform: translate(-50%,-50%) scale(1);
        -webkit-transform: translate(-50%,-50%) scale(1);
        transform: translate(-50%,-50%) scale(1);
    }

    .playButton:hover {
        opacity: 0.9;

        /* Hover-zoom Transition */
        -moz-transition: all 0.2s;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        -moz-transform: translate(-50%,-50%) scale(1.1);
        -webkit-transform: translate(-50%,-50%) scale(1.1);
        transform: translate(-50%,-50%) scale(1.1);
    }

</style>
