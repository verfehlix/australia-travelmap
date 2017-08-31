<template>
    <div class="photoContainer">
        <div v-on:click="photoClick(photo)" class="photo" :style="{ 'background-image': 'url(' + require('@/assets/' + place.id + '/thumbs/' + photo.fileName) + ')' }"></div>
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

    .photoContainer {
        /* Needed for Thumbnail Ratios, see http://www.mademyday.de/css-height-equals-width-with-pure-css.html */
        width: 100%;
        position: relative;

        /* Margins same as gutter size for top / bottom of the thumbnails*/
        margin-top: 0.25em;
        margin-bottom: 0.25em;

        /*Hides overflow when hover-zooming*/
        overflow: hidden;

        cursor: pointer;
    }

    .photoContainer:before{
        /* Needed for Thumbnail Ratios, see http://www.mademyday.de/css-height-equals-width-with-pure-css.html */
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

    .photo {
        /* Needed forThumbnail Ratios, see http://www.mademyday.de/css-height-equals-width-with-pure-css.html */
        position:  absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        /*Div with background image instead of <img> so we can easily center the thumbnail*/
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;

        /*Transition back after hover-zoom*/
        -moz-transition: all 0.2s;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        -moz-transform: scale(1);
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    .photo:hover {
        /*Hover-zoom Transition*/
        -moz-transition: all 0.2s;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

</style>
