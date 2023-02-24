<script>
import cities from '../data/cities.js'
import exampleResponseDaily from '../data/exampleResponseDaily.js'

import NextHoursForecast from '../components/NextHoursForecast.vue'
import NextDaysForecast from '../components/NextDaysForecast.vue'

export default {
  components: {
    NextHoursForecast,
    NextDaysForecast
  },
  data() {
    return {
      hourlyData: [],
      exampleResponseDaily: exampleResponseDaily
    }
  },
  watch: {
    '$route.params.nameId'(newCity) {
      this.fetchData(newCity)
    }
  },
  mounted() {
    this.fetchData(this.$route.params.nameId)
  },
  methods: {
    async fetchData(cityId) {
      this.hourlyData = null
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${cities[cityId].lat}&lon=${
          cities[cityId].lon
        }&appid=${'78a07164952e030a671b9350f648cd70'}&units=metric`
      )
      let resJson = await res.json()
      this.hourlyData = resJson.list
    }
  }
}
</script>

<template>
  <div class="forecast-container">
    <NextHoursForecast :forecastData="hourlyData" />
    <NextDaysForecast :forecastData="exampleResponseDaily.list" />
  </div>
</template>

<style>
.forecast-card {
  margin-bottom: 16px;
}

.forecast-card-title {
  border-bottom: 1px solid #eee;
}
</style>
