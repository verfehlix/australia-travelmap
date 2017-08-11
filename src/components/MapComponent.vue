<template>
    <div class="mapComponent">
        <h1>HERE BE MAPS</h1>
        <div class="row">
            <button class="btn btn-default" v-on:click="selectedPlace = 'Cairns'">Cairns</button>
        </div>
        <div class="row">
            <button class="btn btn-default" v-on:click="selectedPlace = 'Brisbane'">Brisbane</button>
        </div>
        <div class="row">
            <button class="btn btn-default" v-on:click="selectedPlace = 'Sydney'">Sydney</button>
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
    .row {
        margin-top: 10px;
    }
</style>
