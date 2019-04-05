<template>
  <v-card class="mb-5">
    <v-card-title class="grey lighten-3">
      <h2>{{ formHeader }}</h2>
    </v-card-title>
    <v-card-text>
      <v-form model="q">
        <v-text-field
          v-model="q"
          label="Kirjoita yhdyssana"
          required
          outline
        ></v-text-field>
        <v-btn @click="submit">Hae</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'WordForm',
  computed: {
    ...mapState(['formHeader'])
  }
}
</script>

<style></style>
