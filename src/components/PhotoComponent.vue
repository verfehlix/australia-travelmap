<template>
    <div class="photoComponent">

        <h1>Sydney</h1>
        <span>Sydney [ˈsɪdni] ist die Hauptstadt des australischen Bundesstaates New South Wales und mit 5 Millionen Einwohnern[1] die größte Stadt in Australien.[2] Sydney wurde am 26. Januar 1788 gegründet und ist heute das Industrie-, Handels- und Finanzzentrum Australiens und ein wichtiger Tourismusort. Auch zahlreiche Universitäten, Museen und Galerien befinden sich hier. Sydney ist römisch-katholischer und anglikanischer Erzbischofssitz.</span>

        <div class="carouselContainer" v-if="showCarousel">
            <button type="button" class="btn btn-secondary closeButton" v-on:click="photoClick(currentImage)">X</button>

            <button type="button" class="btn btn-secondary previousButton" v-on:click="previousButtonClick()"><</button>
            <button type="button" class="btn btn-secondary nextButton" v-on:click="nextButtonClick()">></button>

             <div class="carouselPhotoRow row align-items-center">
                <div class="col">
                    <transition
                        name="custom-classes-transition"
                        mode="out-in"
                        v-bind:enter-active-class="currentAnimation.enterActive"
                        v-bind:leave-active-class="currentAnimation.leaveActive"
                    >
                        <img class="carouselPhoto" v-bind:src="require('@/assets/sydney/' + currentImage)" v-bind:key="require('@/assets/sydney/' + currentImage)"/>
                    </transition>
                </div>
            </div>
        </div>

        <div class="row galleryRow">
            <div class="gallery col-xs-6 col-sm-3 col-md-3 col-lg-3" v-for="fileName in photos" :key="fileName">
                <div class="photoContainer">
                    <div v-on:click="photoClick(fileName)" class="photo" :style="{ 'background-image': 'url(' + require('@/assets/sydney/' + fileName) + ')' }"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'photo',
        data () {
            return {
                showCarousel: false,
                currentImage: '',
                photos: ['DSC03096.jpg', 'DSC00012.jpg', 'DSC_2616.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg'],
                currentAnimation: {},
                animations: {
                    nextImage: {
                        enterActive: 'animated fadeInRight',
                        leaveActive: 'animated fadeOutLeft'
                    },
                    prevImage: {
                        enterActive: 'animated fadeInLeft',
                        leaveActive: 'animated fadeOutRight'
                    }
                }
            }
        },
        methods: {
            photoClick: function (photoName) {
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
                this.currentAnimation = this.animations.nextImage
            },
            previousButtonClick: function () {
                let index = this.photos.indexOf(this.currentImage)
                if (index === 0) {
                    this.currentImage = this.photos[this.photos.length - 1]
                } else {
                    this.currentImage = this.photos[--index]
                }
                this.currentAnimation = this.animations.prevImage
            }
        }
    }
</script>

<style scoped>

/* CAROUSEL */
/*----------*/
    .carouselContainer {
        /*Fullscreen black translucent overlay*/
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.75);
        z-index:9998;
    }

    .carouselPhotoRow {
        height: 100vh; /*Needed for photo centering on smaller devices*/
    }

    .carouselPhoto {
        padding: 2.4em; /*for buttons & top/bot */
        max-height: 100vh;
        max-width: 100%;
    }

/* CAROUSEL ANIMATIONS */
/*---------------------*/
    .fadeInRight {
        -webkit-animation-name: fadeInRight;
        animation-name: fadeInRight;
        -webkit-animation-duration: .5s;
        animation-duration: .5s;
    }
    .fadeOutLeft {
        -webkit-animation-name: fadeOutLeft;
        animation-name: fadeOutLeft;
        -webkit-animation-duration: .5s;
        animation-duration: .5s;
    }

    .fadeOutRight {
        -webkit-animation-name: fadeOutRight;
        animation-name: fadeOutRight;
        -webkit-animation-duration: .5s;
        animation-duration: .5s;
    }
    .fadeInLeft {
        -webkit-animation-name: fadeInLeft;
        animation-name: fadeInLeft;
        -webkit-animation-duration: .5s;
        animation-duration: .5s;
    }

/* CAROUSEL BUTTONS */
/*------------------*/
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

/* PHOTO GALLERY */
/*---------------*/
    .galleryRow {
        /* Margins same as gutter size for the outer edges of the grid*/
        margin-left: 0.25em;
        margin-right: 0.25em;
    }

    .gallery, .col-xs-6, .col-sm-4, .col-md-4, .col-lg-3 {
        /*To reduce gutter size*/
        position: relative;
        min-height: 1px;
        padding-left: 0.25em;
        padding-right: 0.25em;
    }

/* PHOTO CONTAINER */
/*-----------------*/
    .photoContainer {
        /* Needed for Thumbnail Ratios */
        /* http://www.mademyday.de/css-height-equals-width-with-pure-css.html*/
        width: 100%;
        position: relative;

        /* Margins same as gutter size for top / bottom of the thumbnails*/
        margin-top: 0.25em;
        margin-bottom: 0.25em;

        overflow: hidden; /*Hides overflow when hover-zooming*/

        cursor: pointer;
    }

    .photoContainer:before{
        /* Needed for Thumbnail Ratios */
        /* http://www.mademyday.de/css-height-equals-width-with-pure-css.html*/

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

/* PHOTO */
/*-------*/
    .photo {
        /* Needed forThumbnail Ratios */
        /* http://www.mademyday.de/css-height-equals-width-with-pure-css.html*/
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
