<template>
    <div class="infoBox">
        <h1 class="placeName">{{ place.name }}</h1>
        <div class="placeDescription">{{ place.description }}</div>
    </div>
</template>

<script>
    export default {
        name: 'InfoBox',
        props: ['place'],
        data () {
            return {}
        }
    }
</script>

<style scoped>
    .infoBox {
        padding-top: 1em;
        padding-bottom: 1em;

        /*to match margins of the photo grid*/
        margin-right: 0.5em;
        margin-left: 0.5em;
        margin-bottom: 0.25em;

        background: #EEEEEE;
        /* background-image: url("../assets/wavegrid/wavegrid_@2X.png");
        background-repeat:repeat; */

        /* border: 1px solid green; */
    }

    .placeName {
        font-family: 'Just Another Hand', cursive;
        font-size: 4em;
        color: #1E824C;
        text-align: center;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
    }

    .placeDescription {
        padding-left: 5em;
        padding-right: 5em;
        font-family: 'Lato', sans-serif;
        padding-bottom: 0.5em;
    }
</style>
