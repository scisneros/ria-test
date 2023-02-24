<script>
import dayjs from 'dayjs'

export default {
  props: {
    forecastData: Array
  },
  methods: {
    formatTime(dt) {
      return dayjs.unix(dt).format('ddd, MMM D')
    }
  }
}
</script>

<template>
  <v-card class="forecast-card">
    <v-card-title class="forecast-card-title">Next 5 days</v-card-title>
    <div class="daily-container">
      <template v-for="item in forecastData">
        <div class="daily-item">
          <img
            class="daily-icon"
            :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`"
          />
          <div class="daily-info">
            <p class="daily-date">{{ formatTime(item.dt) }}</p>
            <p class="daily-desc">{{ item.weather[0].description }}</p>
          </div>
          <div class="daily-temp">
            <span class="daily-max">{{ Math.round(item.temp.max - 273.15) }}°</span>
            <span class="daily-min">{{ Math.round(item.temp.min - 273.15) }}°</span>
          </div>
        </div>
      </template>
    </div>
  </v-card>
</template>

<style scoped>
.daily-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}

.daily-item {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #eee;
}

.daily-info {
  text-align: center;
}

.daily-info .daily-date {
  font-weight: bold;
}

.daily-info .daily-desc {
  color: #757575;
}

.daily-info .daily-desc:first-letter {
  text-transform: uppercase;
}

.daily-temp {
  font-weight: bold;
  padding-right: 8px;
}

.daily-temp .daily-max {
  margin-right: 8px;
}

.daily-icon {
  width: 5rem;
  height: 5rem;
  margin: -4px;
}
</style>
