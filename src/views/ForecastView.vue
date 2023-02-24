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
    background: linear-gradient(0deg, #dacec2 19%, #06a9c4 20%, #005c8d 100%); /* Could be an image */
    height: calc(100vh - 64px - 48px); /* Hardcoded navbar and tab height */
}
</style>

<style>
.forecast-card-title {
    border-bottom: 1px solid #EEE;
}
</style>