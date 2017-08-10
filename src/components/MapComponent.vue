<template>
    <div>
        <h1>HERE BE MAPS</h1>
        <el-row>
            <el-button type="primary" v-on:click="selectedPlace = 'Cairns'">Cairns</el-button>
        </el-row>
        <el-row>
            <el-button type="primary" v-on:click="selectedPlace = 'Brisbane'">Brisbane</el-button>
        </el-row>
        <el-row>
            <el-button type="primary" v-on:click="selectedPlace = 'Sydney'">Sydney</el-button>
        </el-row>
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

<style>
    .el-row {
        margin-top: 10px;
    }
</style>
