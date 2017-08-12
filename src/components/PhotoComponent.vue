<template>
    <div>

        <h1>Sydney</h1>
        <span>Sydney [ˈsɪdni] ist die Hauptstadt des australischen Bundesstaates New South Wales und mit 5 Millionen Einwohnern[1] die größte Stadt in Australien.[2] Sydney wurde am 26. Januar 1788 gegründet und ist heute das Industrie-, Handels- und Finanzzentrum Australiens und ein wichtiger Tourismusort. Auch zahlreiche Universitäten, Museen und Galerien befinden sich hier. Sydney ist römisch-katholischer und anglikanischer Erzbischofssitz.</span>

        <div class="row">
            <div class="col-xs-6 col-sm-4 col-md-4 col-lg-3" v-for="fileName in photos" :key="fileName">
                <div class="photoContainer">
                    <div v-on:click="photoClick(fileName)" class="photo" :style="{ 'background-image': 'url(' + require('@/assets/sydney/' + fileName) + ')' }"></div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'Photo',
        data () {
            return {
                showCarousel: false,
                photos: ['DSC03096.jpg', 'DSC00012.jpg', 'DSC_2616.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg', 'DSC00012.jpg', 'DSC00067.jpg', 'DSC00120.jpg', 'DSC09891.jpg', 'DSC09906.jpg', 'DSC09946.jpg']
            }
        },
        methods: {
            photoClick: function (photoName) {
                alert(photoName)
                this.showCarousel = !this.showCarousel
            }
        }
    }
</script>

<style scoped>
    .row {
        margin-left: 2em;
        margin-right: 2em;
    }

    .photoContainer {
        /*Copied from http://www.mademyday.de/css-height-equals-width-with-pure-css.html for Thumbnail Ratios*/
        width: 100%;
        position: relative;

        /* border-radius: 3px; */

        margin-bottom: 2em;


         -webkit-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);
        box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);

        cursor: pointer;
    }

    /*Copied from http://www.mademyday.de/css-height-equals-width-with-pure-css.html for Thumbnail Ratios*/
    .photoContainer:before{

        content: "";
        display: block;

        /*Ratio 1:1*/
         padding-top: 100%;

        /*Ratio 2:1*/
        /* padding-top: 50%; */

        /*Ratio 1:2*/
        /* padding-top: 200%; */

        /*Ratio 4:3*/
        /* padding-top: 75%; */

        /*Ratio 16:9*/
        /* padding-top: 56.25%; */
    }

    .photo {
        /*Copied from http://www.mademyday.de/css-height-equals-width-with-pure-css.html for Thumbnail Ratios*/
        position:  absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

         /* border-radius: 3px; */

         background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;

          /* image-rendering: -webkit-optimize-contrast; */


    }
</style>
