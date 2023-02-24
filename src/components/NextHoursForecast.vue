<script>
export default {
    props: {
        forecastData: Array
    }
}
</script>

<template>
    <v-card>
        <v-card-title class="forecast-card-title">Next hours</v-card-title>
        <div class="hourly-container">
            <template v-for="item in forecastData">
                <div class="hourly-item">
                    <p class="hourly-temp">{{ Math.round(item.main.temp) }}°</p>
                    <p class="hourly-humid">{{ item.main.humidity }}%</p>
                    <img class="hourly-icon" :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`" />
                    <p class="hourly-time">{{ item.dt }}</p>
                </div>
                <div class="hourly-divider"></div>
            </template>
        </div>
    </v-card>
</template>

<style scoped>
.hourly-container {
    display: flex;
    align-items: center;
    overflow: auto;
}

.hourly-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
}

.hourly-divider {
    width: 1px;
    height: 6rem;
    background-color: #EEE;
    flex-shrink: 0;
    flex-grow: 0;
}

.hourly-temp {
    font-weight: bold;
}

.hourly-humid {
    color: #03A9F4;
}

.hourly-icon {
    width: 5rem;
    margin: -4px;
}

.hourly-time {
    color: #757575;
}
</style>