<template>
    <div class='mapComponent'>
        <div class='buttons'>
            <div class='row justify-content-center'>
                <div class='col align-middle'>
                    <gmap-map class='gmap' ref='gmap'
                    :center='{lat:-33.865143, lng:151.209900}'
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
        name: 'map',
        data () {
            return {
                travelData,
                directionRendererArray: [],
                mapOptions: {
                    // draggable: false,
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
                    this.$parent.mapButtonClicked()
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
        },
        mounted: function () {
            VueGoogleMaps.loaded.then(() => {
                setTimeout(() => {
                    this.drawAllRoutes()
                }, 100)
            })
        }
    }
</script>

<style scoped>
    .mapComponent {
        margin-left: 2em;
        margin-right: 0.5em;

        margin-top: 2em;
        margin-bottom: 2em;
    }
    .gmap {
        height: calc(100vh - 56px - 4em);
    }
</style>
