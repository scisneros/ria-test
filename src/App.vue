<script>
import { RouterLink, RouterView } from 'vue-router'
import cities from './data/cities.js'

export default {
  components: {
    RouterView,
    RouterLink
  },
  data() {
    return {
      selectedTab: null,
      cities: cities
    }
  }
}
</script>

<template>
  <header>

    <div class="wrapper">
      <v-layout>
        <v-app-bar title="Simple Weather" color="primary" :elevation="2">
          <template v-slot:append>
            <v-btn icon="mdi-magnify"></v-btn>
          </template>
        </v-app-bar>
        <v-main>
          <v-tabs v-model="selectedTab">
            <v-tab v-for="city in Object.keys(cities)" :key="city" :value="city" :to="`/city/${city}`">
              {{ cities[city].name }}
            </v-tab>
          </v-tabs>
        </v-main>
      </v-layout>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
