<template>
    <div class="photoComponent">

        <!-- In case no place is selected / in route, display hint -->
        <hint v-if="!this.place"></hint>

        <!-- Display normal gallery if place is selected / in route -->
        <div v-if="this.place">

            <!-- InfoBox - Title and Description  -->
            <InfoBox v-bind:place="this.currentPlaceData"></InfoBox>

            <!-- Gallery  -->
            <div class="row galleryRow">
                <div class="gallery col-xs-6 col-sm-3 col-md-3 col-lg-3" v-for="photo in currentPlaceData.photos" :key="photo.fileName">
                    <div class="photoContainer">
                        <div v-on:click="photoClick(photo)" class="photo" :style="{ 'background-image': 'url(' + require('@/assets/sydney/' + photo.fileName) + ')' }"></div>
                    </div>
                </div>
            </div>

            <!-- Carousel  -->
            <Carousel v-if="showCarousel" v-bind:currentImage="this.currentImage" ></Carousel>

        </div>
    </div>
</template>

<script>
    import {EventBus} from '@/eventbus.js'

    import travelData from '@/assets/travelData.json'

    import Hint from '@/components/Hint'
    import InfoBox from '@/components/InfoBox'
    import Carousel from '@/components/Carousel'

    export default {
        name: 'photo',
        props: ['place'],
        components: {Hint, InfoBox, Carousel},
        created: function () {
            EventBus.$on('carousel-button-close', () => {
                this.handleCarouselClose()
            })

            EventBus.$on('carousel-button-nav', (direction) => {
                this.handleCarouselNavigation(direction)
            })
        },
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
            handleCarouselClose: function () {
                this.showCarousel = false
                this.$router.push({
                    name: 'Initial-With-Place',
                    params: {
                        place: this.place
                    }
                })
            },
            handleCarouselNavigation: function (direction) {
                const index = this.getIndexOfPhotoObject(this.currentImage)
                let newIndex

                if (direction === 'next') {
                    if (index < this.currentPlaceData.photos.length - 1) {
                        newIndex = index + 1
                    } else {
                        newIndex = 0
                    }
                } else if (direction === 'prev') {
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
                        photoIndex: index
                    }
                })
            },
            setCurrentPlaceDataViaRoute: function () {
                const routePlace = this.place

                for (let i = 0; i < this.travelData.places.length; i++) {
                    const placeData = this.travelData.places[i]

                    if (placeData.id === routePlace) {
                        this.currentPlaceData = placeData

                        return true
                    }
                }

                return false
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
                const placeFound = this.setCurrentPlaceDataViaRoute()

                // error handling if no place was found
                if (!placeFound) {
                    this.$router.push({name: 'Initial'})
                }

            // if photo ID is specified, load place & gallery and then display photo in carousel
            } else if (this.$route.name === 'Initial-With-Place-And-Photo-Index') {
                const placeFound = this.setCurrentPlaceDataViaRoute()

                // error handling if no place was found
                if (!placeFound) {
                    this.$router.push({name: 'Initial'})
                } else {
                    const photoObject = this.getPhotoObjectByIndex(this.$route.params.photoIndex)
                    // error handling if no photo with id was was not found
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

.photoComponent {
    height: calc(100vh - 54px - 4em);
    overflow-y: scroll;

    /* background: rgba(0, 0, 0, 0.75); */

    margin-right: 2em;
    margin-left: 0.5em;

    margin-top: 2em;
    margin-bottom: 2em;
}

/* PHOTO GALLERY */
/*---------------*/
    .galleryRow {
        /* Margins same as gutter size for the outer edges of the grid*/
        margin-right: 0.25em;
        margin-left: 0.25em;

        /* border: 1px solid #ff05e5; */
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
