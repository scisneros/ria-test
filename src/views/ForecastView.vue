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
