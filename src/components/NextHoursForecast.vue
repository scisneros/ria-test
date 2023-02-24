<script>
export default {
    props: {
        forecastData: Array
    }
}
</script>

<template>
    <v-card>
        <v-card-title>Next hours</v-card-title>
        <template v-for="item in forecastData">
            <div style="margin-bottom: 16px">
                <p>{{ item.main.temp }}</p>
                <p>{{ item.main.humidity }}</p>
                <p>{{ item.weather[0].main }}</p>
                <p>{{ item.dt }}</p>
            </div>
        </template>
    </v-card>
</template>