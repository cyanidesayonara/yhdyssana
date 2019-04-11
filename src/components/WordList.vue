<template>
  <v-card class="mb-5">
    <v-card-title class="grey lighten-3">
      <h2>{{ wordListHeader }}</h2>
    </v-card-title>
    <v-card-text>
      <v-flex
        v-for="(word, index) in words"
        v-bind:key="index"
        xs12
        class="mt-3 py-2 px-2 grey lighten-3"
        >{{ word }}</v-flex
      >
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'WordForm',
  computed: {
    ...mapState(['wordListHeader', 'words'])
  }
}
</script>

<style></style>
