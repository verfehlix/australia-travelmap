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
    import travelData from '@/assets/travelData.json'

    export default {
        name: 'map',
        data () {
            return {
                travelData,
                selectedPlace: 'Sydney',
                mapOptions: {
                    // draggable: false,
                    clickableIcons: false,
                    fullscreenControl: false,
                    keyboardShortcuts: false,
                    mapTypeControl: false,
                    panControl: false,
                    rotateControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    zoomControl: false,
                    // scrollwheel: false,
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

                // this.drawRouteFromAtoB('x', 'y')
            },
            drawRouteFromAtoB: function (placeA, placeB) {
                /* eslint-disable no-undef */
                this.directionsService = new google.maps.DirectionsService()

                const rendererOptions = {
                    suppressMarkers: true,
                    suppressInfoWindows: true,
                    preserveViewport: true
                }

                this.directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions)
                /* eslint-enable no-undef */

                this.directionsDisplay.setMap(this.$refs.gmap.$mapObject)

                const vm = this
                vm.directionsService.route({
                    origin: {lat: -33.865143, lng: 151.209900},
                    destination: {lat: -32.926696, lng: 151.778892},
                    travelMode: 'DRIVING'
                }, function (response, status) {
                    if (status === 'OK') {
                        vm.directionsDisplay.setDirections(response)
                    } else {
                        alert('Directions request failed due to ' + status)
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .gmap {
        height: calc(100vh - 54px);
    }
</style>
