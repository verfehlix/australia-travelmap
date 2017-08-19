<template>
    <div class="gallery">
        <div class="row galleryRow">
            <div class="galleryColumn col-xs-6 col-sm-3 col-md-3 col-lg-3" v-for="photo in placeData.photos" :key="photo.fileName">
                <Photo v-bind:photo="photo" ></Photo>
            </div>
        </div>
    </div>
</template>

<script>
    import Photo from '@/components/Photo'

    export default {
        name: 'Gallery',
        props: ['placeData'],
        components: {Photo}
    }
</script>

<style scoped>

    .galleryRow {
        /* Margins same as gutter size for the outer edges of the grid*/
        margin-right: 0.25em;
        margin-left: 0.25em;

        /* border: 1px solid #ff05e5; */
    }

    .galleryColumn, .col-xs-6, .col-sm-4, .col-md-4, .col-lg-3 {
        /*To reduce gutter size*/
        position: relative;
        min-height: 1px;
        padding-left: 0.25em;
        padding-right: 0.25em;
    }

</style>
