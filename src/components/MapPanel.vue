<template>
    <div ref="mapPanel" class='mapPanel'>
        <div class='buttons'>
            <div class='row justify-content-center'>
                <div class='col align-middle'>
                    <gmap-map class='gmap' ref='gmap'
                    :center='{lat: currentPlace.coordinates.lat, lng: currentPlace.coordinates.lng}'
                    :zoom='10'
                    :options='mapOptions'
                    map-type-id='terrain'>

                        <gmap-marker
                            v-for="(place, index) in travelData.places"
                            :key="index"
                            :position="place.coordinates"
                            :clickable="true"
                            :draggable="true"
                            @click="handlePlaceButtonClick(place)"
                        ></gmap-marker>

                    </gmap-map>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import * as VueGoogleMaps from 'vue2-google-maps'
    import {EventBus} from '@/eventbus.js'

    Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyCYDsC1hsS1WuBBWceVWhba3OuatvZ79qI',
            libraries: 'places' // This is required if you use the Autocomplete plugin
            // OR: libraries: 'places,drawing'
            // OR: libraries: 'places,drawing,visualization'
            // (as you require)
        }
    })

    import travelData from '@/assets/travelData.json'

    export default {
        name: 'MapPanel',
        props: ['place'],
        created: function () {
            EventBus.$on('map-button-show-gallery', () => {
                this.$refs.mapPanel.classList.remove('soloMargin')
            })

            EventBus.$on('map-button-show-map', () => {
                this.$refs.mapPanel.classList.add('soloMargin')
            })

            this.setCurrentPlace()
        },
        mounted: function () {
            VueGoogleMaps.loaded.then(() => {
                setTimeout(() => {
                    this.drawAllRoutes()
                }, 100)
            })
        },
        watch: {
            '$route': function () {
                this.setCurrentPlace()
            }
        },
        data () {
            return {
                travelData,
                currentPlace: {
                    coordinates: {
                        lat: -33.865143,
                        lng: 151.209900
                    }
                },
                directionRendererArray: [],
                mapOptions: {
                    // draggable: true,
                    clickableIcons: false,
                    // fullscreenControl: false,
                    keyboardShortcuts: false,
                    mapTypeControl: false,
                    panControl: false,
                    rotateControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    zoomControl: false,
                    scrollwheel: false,
                    styles: [
                        // see here: https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapTypeStyle
                        // {
                        //     // großflächige landmasse
                        //     'featureType': 'landscape.natural',
                        //     'stylers': [
                        //     {'color': '#87D37C'}
                        //     ]
                        // },
                        // {
                        //     // großflächige landmasse
                        //     'featureType': 'landscape.natural.landcover',
                        //     'stylers': [
                        //     {'color': '#87D37C'}
                        //     ]
                        // },
                        // {
                        //     'featureType': 'poi.park',
                        //     'stylers': [
                        //         {'color': '#87D37C'}
                        //     ]
                        // },
                        // {
                        //     'featureType': 'water',
                        //     'stylers': [
                        //     {'color': '#2574A9'}
                        //     ]
                        // },
                        // {
                        //     'featureType': 'landscape.man_made',
                        //     'stylers': [
                        //     {'color': '#DADFE1'}
                        //     ]
                        // },
                        // {
                        //     'featureType': 'landscape',
                        //     'elementType': 'labels',
                        //     'stylers': [
                        //     {'visibility': 'off'}
                        //     ]
                        // },
                        {
                            'featureType': 'poi',
                            'elementType': 'labels',
                            'stylers': [
                            {'visibility': 'off'}
                            ]
                        },
                        {
                            'featureType': 'road.highway',
                            'elementType': 'labels',
                            'stylers': [
                                {'visibility': 'off'}
                            ]
                        }
                    ]
                }
            }
        },
        methods: {
            setCurrentPlace: function () {
                const routePlaceName = this.place

                for (let i = 0; i < this.travelData.places.length; i++) {
                    const placeData = this.travelData.places[i]

                    if (placeData.id === routePlaceName) {
                        this.currentPlace = placeData
                    }
                }
            },
            handlePlaceButtonClick: function (place) {
                // replace with own pan function (with easing) https://codepen.io/ErDmKo/pen/Jdpmzv
                this.$refs.gmap.panTo(place.coordinates)

                this.$router.push({
                    name: 'Initial-With-Place',
                    params: {
                        place: place.id
                    }
                })

                if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 992) {
                    // asdf
                    EventBus.$emit('place-button-was-clicked')
                }
            },
            drawRouteFromAtoB: function (placeA, placeB) {
                const rendererOptions = {
                    suppressMarkers: true,
                    suppressInfoWindows: true,
                    preserveViewport: true
                }

                /* eslint-disable no-undef */
                if (!this.directionsService) {
                    this.directionsService = new google.maps.DirectionsService()
                }
                const newIndex = this.directionRendererArray.push(new google.maps.DirectionsRenderer(rendererOptions)) - 1
                /* eslint-enable no-undef */

                const currentDirectionsDisplay = this.directionRendererArray[newIndex]

                currentDirectionsDisplay.setMap(this.$refs.gmap.$mapObject)

                this.directionsService.route({
                    origin: placeA.coordinates,
                    destination: placeB.coordinates,
                    travelMode: 'DRIVING'
                }, function (response, status) {
                    if (status === 'OK') {
                        currentDirectionsDisplay.setDirections(response)
                    } else {
                        alert('Directions request failed due to ' + status)
                    }
                })
            },
            drawAllRoutes: function () {
                for (let i = 0; i < this.travelData.places.length - 1; i++) {
                    const currentPlace = this.travelData.places[i]
                    const nextPlace = this.travelData.places[i + 1]

                    this.drawRouteFromAtoB(currentPlace, nextPlace)
                }
            }
        }
    }
</script>

<style scoped>
    .mapPanel {
        margin-left: 2em;
        margin-right: 0.5em;

        margin-top: 2em;
        margin-bottom: 2em;

        -webkit-box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.5);
        box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.5);
    }

    .soloMargin {
        margin-right: 2em;
    }

    .gmap {
        height: calc(100vh - 56px - 4em + 2px);
    }
</style>
