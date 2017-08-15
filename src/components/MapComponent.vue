<template>
    <div class="mapComponent">
        <h1>HERE BE MAPS</h1>

        <div class="buttons">
            <div class="row justify-content-center">
                <button class="btn btn-primary temp-btn-margin" v-on:click="handlePlaceButtonClick('cairns')">Cairns</button>
            </div>
            <div class="row justify-content-center">
                <button class="btn btn-primary temp-btn-margin" v-on:click="handlePlaceButtonClick('brisbane')">Brisbane</button>
            </div>
            <div class="row justify-content-center">
                <button class="btn btn-primary temp-btn-margin" v-on:click="handlePlaceButtonClick('sydney')">Sydney</button>
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
        margin-top: 10px;
    }
</style>
