<template>
    <div class="photoComponent">
        <!-- In case no place is selected / in route, display hint -->
        <div class="hint" v-if="!this.place">
            <span>Please select a place on the left to view photos. :-)</span>
        </div>

        <!-- Display normal gallery if place is selected / in route -->
        <div v-if="this.place">

            <!-- Info Stuff, Title and Description  -->
            <h1>{{ this.currentPlaceData.name }}</h1>
            <span>{{ this.currentPlaceData.description }}</span>

            <!-- Carousel  -->
            <div class="carouselContainer" v-if="showCarousel">
                <button type="button" class="btn btn-secondary closeButton" v-on:click="closeCarousel()">X</button>

                <button type="button" class="btn btn-secondary previousButton" v-on:click="carouselNavButtonClick('prev')"><</button>
                <button type="button" class="btn btn-secondary nextButton" v-on:click="carouselNavButtonClick('next')">></button>

                <div class="carouselPhotoRow row align-items-center">
                    <div class="col">
                        <transition
                            name="custom-classes-transition"
                            mode="out-in"
                            v-bind:enter-active-class="currentAnimation.enterActive"
                            v-bind:leave-active-class="currentAnimation.leaveActive"
                        >
                            <img class="carouselPhoto" v-bind:src="require('@/assets/sydney/' + currentImage.fileName)" v-bind:key="require('@/assets/sydney/' + currentImage.fileName)"/>
                        </transition>
                    </div>
                </div>
            </div>

            <!-- Gallery  -->
            <div class="row galleryRow">
                <div class="gallery col-xs-6 col-sm-3 col-md-3 col-lg-3" v-for="photo in currentPlaceData.photos" :key="photo.fileName">
                    <div class="photoContainer">
                        <div v-on:click="photoClick(photo)" class="photo" :style="{ 'background-image': 'url(' + require('@/assets/sydney/' + photo.fileName) + ')' }"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import travelData from '@/assets/travelData.json'

    export default {
        name: 'photo',
        props: ['place'],
        data () {
            return {
                travelData,
                currentPlaceData: {},
                currentImage: {},
                showCarousel: false,
                animations: {
                    nextImage: {
                        enterActive: 'animated fadeInRight', // animation for the new image
                        leaveActive: 'animated fadeOutLeft'  // animation for the old image
                    },
                    prevImage: {
                        enterActive: 'animated fadeInLeft',  // animation for the new image
                        leaveActive: 'animated fadeOutRight' // animation for the old image
                    }
                },
                currentAnimation: {}
            }
        },
        methods: {
            photoClick: function (photo) {
                this.currentImage = photo
                this.showCarousel = true
                this.$router.push({
                    name: 'Initial-With-Place-And-Photo-Index',
                    params: {
                        place: this.place,
                        photoIndex: this.getIndexOfPhotoObject(this.currentImage)
                    }
                })
            },
            closeCarousel: function () {
                this.showCarousel = false
                this.$router.push({
                    name: 'Initial-With-Place',
                    params: {
                        place: this.place
                    }
                })
            },
            carouselNavButtonClick: function (direction) {
                const index = this.getIndexOfPhotoObject(this.currentImage)
                let newIndex

                if (direction === 'next') {
                    this.currentAnimation = this.animations.nextImage

                    if (index < this.currentPlaceData.photos.length - 1) {
                        newIndex = index + 1
                    } else {
                        newIndex = 0
                    }
                } else if (direction === 'prev') {
                    this.currentAnimation = this.animations.prevImage

                    if (index > 0) {
                        newIndex = index - 1
                    } else {
                        newIndex = this.currentPlaceData.photos.length - 1
                    }
                }

                this.currentImage = this.currentPlaceData.photos[newIndex]
                this.$router.push({
                    name: 'Initial-With-Place-And-Photo-Index',
                    params: {
                        place: this.place,
                        photoIndex: newIndex
                    }
                })
            },
            setCurrentPlaceDataViaRoute: function () {
                const routePlace = this.place

                for (let i = 0; i < this.travelData.places.length; i++) {
                    const placeData = this.travelData.places[i]

                    if (placeData.id === routePlace) {
                        this.currentPlaceData = placeData
                    }
                }
            },
            getIndexOfPhotoObject: function (photoObject) {
                for (let i = 0; i < this.currentPlaceData.photos.length; i++) {
                    if (this.currentPlaceData.photos[i].fileName === photoObject.fileName) {
                        return i
                    }
                }

                return -1
            },
            getPhotoObjectByIndex: function (index) {
                return this.currentPlaceData.photos[index]
            }
        },
        mounted: function () {
            // if no photo ID is specified, just load place data and display gallery
            if (this.$route.name === 'Initial-With-Place') {
                this.setCurrentPlaceDataViaRoute()
            // if photo ID is specified, load place & gallery and then display photo in carousel
            } else if (this.$route.name === 'Initial-With-Place-And-Photo-Index') {
                this.setCurrentPlaceDataViaRoute()
                const photoObject = this.getPhotoObjectByIndex(this.$route.params.photoIndex)
                // if index cannot be found, re-route to standard place overview
                if (photoObject) {
                    this.currentImage = photoObject
                    this.showCarousel = true
                } else {
                    this.$router.push({
                        name: 'Initial-With-Place',
                        params: {
                            place: this.place
                        }
                    })
                }
            }
        },
        watch: {
            '$route' (to, from) {
                this.setCurrentPlaceDataViaRoute()
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

/* PHOTO */
/*-------*/
    .hint {
        padding-top: 50%;
        opacity: 0.75;
        font-size: 24pt;
    }
</style>
