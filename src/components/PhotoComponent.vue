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
    .photoContainer {
        border-radius: 3px;
        margin: 10px;

        width: 200px;
        height: 150px;

        -webkit-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);
        box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);

        cursor: pointer;
    }
    .photo {
        border-radius: 3px;

        width: 200px;
        height: 150px;

        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }

    .carouselBackground {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 2;
    }

    .carousel {
        position: absolute;
        display: block;
        width: auto;
        top: 10%;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
    }

    .carouselPhoto{
        height: 100%;
        width: auto;
    }
</style>
