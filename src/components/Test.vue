<template>
    <div>
        <h1>{{ msg }}</h1>
        <el-switch
            v-model="value1"
            on-text=""
            off-text="">
        </el-switch>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'THIS IS A TEST YO',
                value1: true
            }
        }
    }
</script>

<style>
</style>
