<template>
    <div class="photoComponent">

        <h1>Sydney</h1>
        <span>Sydney [ˈsɪdni] ist die Hauptstadt des australischen Bundesstaates New South Wales und mit 5 Millionen Einwohnern[1] die größte Stadt in Australien.[2] Sydney wurde am 26. Januar 1788 gegründet und ist heute das Industrie-, Handels- und Finanzzentrum Australiens und ein wichtiger Tourismusort. Auch zahlreiche Universitäten, Museen und Galerien befinden sich hier. Sydney ist römisch-katholischer und anglikanischer Erzbischofssitz.</span>

        <div class="row">
            <div class="gallery col-xs-6 col-sm-3 col-md-3 col-lg-3" v-for="fileName in photos" :key="fileName">
                <div class="photoContainer">
                    <div v-on:click="photoClick(fileName)" class="photo" :style="{ 'background-image': 'url(' + require('@/assets/sydney/' + fileName) + ')' }"></div>
                </div>
            </div>
        </div>

         <div class="overlayContainer" v-if="showCarousel">
            <button type="button" class="btn btn-secondary closeButton" v-on:click="photoClick(currentImage)">X</button>

            <button type="button" class="btn btn-secondary previousButton" v-on:click="previousButtonClick()"><</button>
            <button type="button" class="btn btn-secondary nextButton" v-on:click="nextButtonClick()">></button>

             <div class="pictureRow row align-items-center">
                <div class="col overlayImageColumn">
                    <img class="overlayImage" v-bind:src="require('@/assets/sydney/' + currentImage)"/>
                 </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'Photo',
        data () {
            return {
                showCarousel: false,
                currentImage: '',
                photos: ['DSC03096.jpg', 'DSC00012.jpg', 'DSC_2616.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg']
            }
        },
        methods: {
            photoClick: function (photoName) {
                // alert(photoName)
                this.currentImage = photoName
                this.showCarousel = !this.showCarousel
            },
            nextButtonClick: function () {
                let index = this.photos.indexOf(this.currentImage)
                if (index === this.photos.length) {
                    this.currentImage = this.photos[0]
                } else {
                    this.currentImage = this.photos[++index]
                }
            },
            previousButtonClick: function () {
                let index = this.photos.indexOf(this.currentImage)
                if (index === 0) {
                    this.currentImage = this.photos[this.photos.length - 1]
                } else {
                    this.currentImage = this.photos[--index]
                }
            }
        }
    }
</script>

<style scoped>
    .overlayImage {
        padding: 20px;
        max-height: 100vh;
        max-width: 100%;
    }

    .overlayImageColumn {
        padding: 2.4em;
    }

    .closeButton {
        position: absolute;
        top: 0;
        right:0;
        margin: 10px;
        z-index:9999;
    }
    .previousButton {
        position: absolute;
        top: 50%;
        left:0;
        margin-left: 10px;
        z-index:9999;
    }
    .nextButton {
        position: absolute;
        top: 50%;
        right:0;
        margin-right: 10px;
        z-index:9999;
    }

    .pictureRow {
        height: 100vh;
    }
    .overlayContainer {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.75);
        z-index:9998;
        /* overflow: scroll; */
    }

    .gallery, .col-xs-6, .col-sm-4, .col-md-4, .col-lg-3 {
        position: relative;
        min-height: 1px;
        padding-left: 0.25em;
        padding-right: 0.25em;
    }

     .row {
        margin-left: 0.25em;
        margin-right: 0.25em;
    }

    .photoContainer {
        /*Copied from http://www.mademyday.de/css-height-equals-width-with-pure-css.html for Thumbnail Ratios*/
        width: 100%;
        position: relative;

        /* border-radius: 3px; */
        margin-top: 0.25em;
        margin-bottom: 0.25em;

        overflow: hidden;

        /* -webkit-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);
        box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5); */

        cursor: pointer;
    }

    /*Copied from http://www.mademyday.de/css-height-equals-width-with-pure-css.html for Thumbnail Ratios*/
    .photoContainer:before{

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
        /*Copied from http://www.mademyday.de/css-height-equals-width-with-pure-css.html for Thumbnail Ratios*/
        position:  absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

         /* border-radius: 3px; */

        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;

        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;

        -moz-transform: scale(1);
        -webkit-transform: scale(1);
        transform: scale(1);

          /* image-rendering: -webkit-optimize-contrast; */
    }

    .photo:hover {
        -moz-transition: all 0.2s;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;

        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);

        /* image-rendering: -webkit-optimize-contrast; */

    }
</style>
