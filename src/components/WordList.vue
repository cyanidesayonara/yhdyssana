<template>
  <v-card v-if="word" class="mb-5">
    <v-card-title class="grey lighten-3">
      <h2>{{ wordListHeader }}</h2>
    </v-card-title>
    <v-card-text>
      <p v-if="word">Haettu sana: {{ word }}</p>
      <p v-if="word && words.length">On yhdyssana!</p>
      <p v-if="word && !words.length">Ei ole yhdyssana!</p>
      <v-flex
        v-for="(word, index) in words"
        v-bind:key="index"
        xs12
        class="mt-3 py-2 px-2 grey lighten-3"
        >{{ word.text }}</v-flex
      >
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'WordForm',
  computed: {
    ...mapState(['wordListHeader', 'words', 'word'])
  }
}
</script>

<style></style>
