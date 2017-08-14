<template>
    <div class="mapComponent">
        <h1>HERE BE MAPS</h1>

        <div class="buttons">
            <div class="row justify-content-center">
                <button class="btn btn-primary temp-btn-margin" v-on:click="selectedPlace = 'Cairns'">Cairns</button>
            </div>
            <div class="row justify-content-center">
                <button class="btn btn-primary temp-btn-margin" v-on:click="selectedPlace = 'Brisbane'">Brisbane</button>
            </div>
            <div class="row justify-content-center">
                <button class="btn btn-primary temp-btn-margin" v-on:click="selectedPlace = 'Sydney'">Sydney</button>
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
        }
    }
</script>

<style scoped>
    .mapComponent {
    }
    .temp-btn-margin {
        margin-top: 10px;
    }
</style>
