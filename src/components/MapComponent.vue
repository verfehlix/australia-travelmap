<template>
    <div class="mapComponent">
        <h1>HERE BE MAPS</h1>

        <div class="buttons">
            <div class="row justify-content-center">
                <button class="btn btn-primary temp-btn-margin" v-on:click="handlePlaceButtonClick('cairns')">Cairns</button>
                <button class="btn btn-primary temp-btn-margin" v-on:click="handlePlaceButtonClick('brisbane')">Brisbane</button>
                <button class="btn btn-primary temp-btn-margin" v-on:click="handlePlaceButtonClick('sydney')">Sydney</button>
            </div>
            <div class="row justify-content-center">
                <div class="col align-middle">
                    <gmap-map class="gmap"
                        :center="{lat:-33.865143, lng:151.209900}"
                        :zoom="7"
                        map-type-id="terrain"
                    ></gmap-map>
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
                selectedPlace: 'Sydney'
            }
        },
        methods: {
            handlePlaceButtonClick: function (place) {
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
