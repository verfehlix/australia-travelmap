<template>
    <div class="carousel">

        <div class="fa fa-lg fa-times fa-inverse carouselButton closeButton" v-on:click="closeButtonClick()"></div>

        <div class="fa fa-lg fa-chevron-left fa-inverse carouselButton previousButton" v-on:click="carouselNavButtonClick('prev')"></div>

        <div class="fa fa-lg fa-chevron-right fa-inverse carouselButton nextButton" v-on:click="carouselNavButtonClick('next')"></div>

        <div class="carouselPhotoRow row align-items-center">
            <div class="col">
                <transition
                    name="custom-classes-transition"
                    mode="out-in"
                    v-bind:enter-active-class="currentAnimation.enterActive"
                    v-bind:leave-active-class="currentAnimation.leaveActive"
                >
                    <img class="carouselPhoto" v-bind:src="require('@/assets/' + placeData.id + '/' + currentImage.fileName)" v-bind:key="currentImage.fileName" />
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import {EventBus} from '@/eventbus.js'

    export default {
        name: 'Carousel',
        props: ['currentImage', 'placeData'],
        data () {
            return {
                animations: {
                    nextImage: {
                        enterActive: 'animated fadeInRight', // animation for the new image
                        leaveActive: 'animated fadeOutLeft'  // animation for the old image
                    },
                    prevImage: {
                        enterActive: 'animated fadeInLeft',  // animation for the new image
                        leaveActive: 'animated fadeOutRight' // animation for the old image
                    }
                },
                currentAnimation: {}
            }
        },
        methods: {
            closeButtonClick: function () {
                EventBus.$emit('carousel-button-close')
            },
            carouselNavButtonClick: function (direction) {
                if (direction === 'next') {
                    this.currentAnimation = this.animations.nextImage
                } if (direction === 'prev') {
                    this.currentAnimation = this.animations.prevImage
                }

                EventBus.$emit('carousel-button-nav', direction)
            }
        }
    }
</script>

<style scoped>

    .carousel {
        /*Fullscreen black translucent overlay*/
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index:9998;
        text-align: center;
    }

    .carouselPhotoRow {
        height: 100vh; /*Needed for photo centering on smaller devices*/
    }

    .carouselPhoto {
        padding: 2.4em; /*for buttons & top/bot */
        max-height: 100vh;
        max-width: 100%;
    }

/* CAROUSEL ANIMATIONS */
/*---------------------*/
    .fadeInRight {
        -webkit-animation-name: fadeInRight;
        animation-name: fadeInRight;
        -webkit-animation-duration: .5s;
        animation-duration: .5s;
    }
    .fadeOutLeft {
        -webkit-animation-name: fadeOutLeft;
        animation-name: fadeOutLeft;
        -webkit-animation-duration: .5s;
        animation-duration: .5s;
    }

    .fadeOutRight {
        -webkit-animation-name: fadeOutRight;
        animation-name: fadeOutRight;
        -webkit-animation-duration: .5s;
        animation-duration: .5s;
    }
    .fadeInLeft {
        -webkit-animation-name: fadeInLeft;
        animation-name: fadeInLeft;
        -webkit-animation-duration: .5s;
        animation-duration: .5s;
    }

/* CAROUSEL BUTTONS */
/*------------------*/
    .carouselButton {
        /* border: 1px solid red; */
        padding: 15px;
        background: rgba(255, 255, 255, 0.3);
    }

    .closeButton {
        position: absolute;
        top: 0;
        right:0;
        margin: 10px;
        z-index:9999;
    }
    .previousButton {
        position: absolute;
        top: 50%;
        left:0;
        margin-left: 10px;
        z-index:9999;

        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 10px;
        padding-right: 12px;
    }
    .nextButton {
        position: absolute;
        top: 50%;
        right:0;
        margin-right: 10px;
        z-index:9999;

        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 12px;
        padding-right: 10px;
    }
</style>
