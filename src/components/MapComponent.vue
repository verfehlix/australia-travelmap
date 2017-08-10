<template>
    <div>
        <h1>HERE BE MAPS</h1>
        <el-row>
            <el-button type="primary">Cairns</el-button>
        </el-row>
        <el-row>
            <el-button type="primary">Brisbane</el-button>
        </el-row>
        <el-row>
            <el-button type="primary">Sydney</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'map',
        data () {
            return {
                msg: 'Welcome to the MAPS'
            }
        }
    }
</script>

<style>
    .el-row {
        margin-top: 10px;
    }
</style>
