<template>
    <div ref="galleryPanel" class="galleryPanel">

        <!-- In case no place is selected / in route, display hint -->
        <hint v-if="!this.place"></hint>

        <!-- Display normal gallery if place is selected / in route -->
        <div v-if="this.place">

            <!-- InfoBox - Title and Description  -->
            <InfoBox v-bind:place="this.currentPlaceData"></InfoBox>

            <!-- Gallery  -->
            <Gallery v-bind:placeData="currentPlaceData" ></Gallery>

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
    import Gallery from '@/components/Gallery'
    import Carousel from '@/components/Carousel'

    export default {
        name: 'GalleryPanel',
        props: ['place'],
        components: {Hint, InfoBox, Gallery, Carousel},
        created: function () {
            EventBus.$on('map-button-show-gallery', () => {
                this.$refs.galleryPanel.classList.add('soloMargin')
            })

            EventBus.$on('map-button-show-map', () => {
                this.$refs.galleryPanel.classList.remove('soloMargin')
            })

            EventBus.$on('gallery-photo-clicked', (direction) => {
                this.handleGalleryPhotoClick(direction)
            })

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
                showCarousel: false
            }
        },
        methods: {
            handleGalleryPhotoClick: function (photo) {
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
                    const photoObject = this.currentPlaceData.photos[this.$route.params.photoIndex]
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

    .galleryPanel {
        height: calc(100vh - 54px - 4em);
        overflow-y: scroll;

        margin-right: 2em;
        margin-left: 0.5em;

        margin-top: 2em;
        margin-bottom: 2em;
    }

    .soloMargin {
        margin-left: 1.5em;
    }

</style>
