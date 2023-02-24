<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterView,
    RouterLink
  },
  data() {
    return {
      selectedTab: null,
      tabItems: [
        'Rio de Janeiro', 'Beijing', 'Los Angeles'
      ]
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
            <v-tab v-for="item in tabItems" :key="item" :value="item">
              {{ item }}
            </v-tab>
          </v-tabs>
        </v-main>
      </v-layout>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
