<template>
    <div class='mapComponent'>
        <h1>HERE BE MAPS</h1>

        <div class='buttons'>
            <div class='row justify-content-center'>
                <button class='btn btn-primary temp-btn-margin' v-on:click="handlePlaceButtonClick('cairns')">Cairns</button>
                <button class='btn btn-primary temp-btn-margin' v-on:click="handlePlaceButtonClick('brisbane')">Brisbane</button>
                <button class='btn btn-primary temp-btn-margin' v-on:click="handlePlaceButtonClick('sydney')">Sydney</button>
            </div>
            <div class='row justify-content-center'>
                <div class='col align-middle'>
                    <gmap-map class='gmap' ref='gmap'
                    :center='{lat:-33.865143, lng:151.209900}'
                    :zoom='8'
                    :options='mapOptions'
                    map-type-id='terrain'>

                        <!-- Sydney -->
                        <gmap-marker :position='{lat:-33.865143, lng:151.209900}' v-on:click="handlePlaceButtonClick('cairns')">
                        </gmap-marker>

                        <!-- NewCastle -->
                        <gmap-marker :position='{lat:-32.926696, lng:151.778892}' v-on:click="handlePlaceButtonClick('cairns')">
                        </gmap-marker>


                    </gmap-map>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'map',
        data () {
            return {
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
                this.$refs.gmap.panTo({lat: -32.926696, lng: 151.778892})

                this.$router.push({
                    name: 'Initial-With-Place',
                    params: {
                        place: place
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .temp-btn-margin {
        margin: 10px;
    }

    .gmap {
        height: calc(100vh - 165px);
    }
</style>
