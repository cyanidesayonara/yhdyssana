<template>
  <v-card class="mb-5">
    <v-card-title class="grey lighten-3">
      <h2>{{ formHeader }}</h2>
    </v-card-title>
    <v-card-text>
      <v-form model="q">
        <v-text-field
          v-model="q"
          :rules="inputRules"
          label="Kirjoita yhdyssana"
          required
        ></v-text-field>
        <v-btn @click="submit">Hae</v-btn>
      </v-form>
      <p>{{ q }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      q: '',
      inputRules: [v => v.length >= 3 || 'Minimum length is 3 characters']
    }
  },
  name: 'WordForm',
  computed: {
    ...mapState(['formHeader'])
  },
  methods: {
    submit() {
      return null
    }
  }
}
</script>

<style></style>
