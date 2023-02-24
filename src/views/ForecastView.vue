<script>
import cities from '../data/cities.js'
import exampleResponse from '../data/exampleResponse.js'

import NextHoursForecast from '../components/NextHoursForecast.vue'

export default {
    components: {
        NextHoursForecast
    },
    data() {
        return {
            cities: cities,
            exampleResponse: exampleResponse
        }
    }
}
</script>

<template>
    <div class="forecast-container">
        <NextHoursForecast :forecastData="exampleResponse.list" />
    </div>
</template>

<style scoped>
.forecast-container {
    padding: 16px;
    background: rgb(218, 206, 194);
    background: linear-gradient(0deg, #dacec2 19%, #06a9c4 20%, #005c8d 100%);
}
</style>

<style>
.forecast-card-title {
    border-bottom: 1px solid #EEE;
}
</style>